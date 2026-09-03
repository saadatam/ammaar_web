#!/usr/bin/env node
/**
 * Scans context/batch4/media, copies files to public/batch4,
 * and generates src/data/batch4Media.ts + src/data/batch4Links.ts
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const MEDIA_SRC = path.join(ROOT, 'src/context/batch4/media');
const MEDIA_DST = path.join(ROOT, 'public/batch4');
const OUT_MEDIA = path.join(ROOT, 'src/data/batch4Media.ts');
const OUT_LINKS = path.join(ROOT, 'src/data/batch4Links.ts');
const FILE_LINKS = path.join(MEDIA_SRC, 'file_links');

const CLASS_BOOKS = new Set([
  'Qasasun.Nabiyyeen_1-4.pdf',
  'Safwa-tul-Masaadir-Arabic-English.pdf',
  'SimpleFiqhTranslationOfAl-fiqhUlMuyassar.pdf',
  'The Money Handbook.pdf',
  'inner-dimensions-of-islamic-worship-muhtar-al-ghazali-z-lib.org-1.pdf',
  'Arabic 201_2024.pdf',
  'Arabic_Nahw_First_Semester (Sh. Hunzla).pdf',
  'Seekers Verbs (with Present Tense) (Sh. Hunzla).pdf',
]);

const ARABIC_SCALES_PRIORITY = ['Arabic_scales (Nadine).JPG', 'Arabic_scales_2 (Nadine).JPG'];

const ARABIC_GUIDE_TO_PRACTICE = new Set(['Beginner Vocabulary.JPG', 'Beginner Vocabulary 2.JPG']);

const COMPREHENSIVE_CLASS_ORDER = [
  'Seerah',
  'Arabic',
  'Fiqh',
  'Uloom Hadith',
  'Tafsir Juz Amma',
  'Surah Yusuf',
  'Tazkiyyah',
  'General',
];

/** Oversized handwritten notes — hosted on Drive, not copied into public/. */
const EXTERNAL_FILE_LINKS = {
  'Classmate_Notes/Official_notes_or_Book_pdfs/Arabic_Nahw_First_Semester (Sh. Hunzla).pdf':
    'https://drive.google.com/file/d/1dpzJ0MYfm2FtHvSvaD7d2f2tEOQdw3eo/view?usp=sharing',
  'Classmate_Notes/Comprehensive_Notes/Uloom Al- Hadith Flowchart (lejla).pdf':
    'https://drive.google.com/file/d/1VQlhXqBzZXeAWvCKSdID1Z-D-Lw9G58W/view?usp=sharing',
};

/** Maps source relative paths to safe public paths (URL-hostile chars in filenames). */
const publicRelMap = new Map();

const PUBLIC_FILENAME_OVERRIDES = {
  'Seekers Vocab #2.pdf': 'Seekers Vocab No2.pdf',
  'Salaah differences  Men & Women (MAW).pdf': 'Salaah differences Men and Women (MAW).pdf',
  'Morning+Adhkaar+Amanah+Fitness.pdf': 'Morning Adhkaar Amanah Fitness.pdf',
  'Tafseer of Juz Amma Study Guide - Noor Mansoor.pdf':
    'Tafseer of Juz Amma Study Guide (Noor Mansoor).pdf',
  'Seekers Vocab Past:Present:Sifaat (Sh. Hunzla).pdf':
    'Seekers Vocab Past-Present-Sifaat (Sh. Hunzla).pdf',
};

function sanitizePublicFilename(name) {
  return name
    .replace(/#/g, 'No')
    .replace(/&/g, 'and')
    .replace(/\+/g, ' ')
    .replace(/:/g, '-');
}

function publicFilename(name) {
  return PUBLIC_FILENAME_OVERRIDES[name] ?? sanitizePublicFilename(name);
}

function publicRelFor(srcRel) {
  return publicRelMap.get(srcRel.replace(/\\/g, '/')) ?? srcRel.replace(/\\/g, '/');
}

function encodePublicPath(relativePath) {
  return '/batch4/' + relativePath.split(path.sep).map(encodeURIComponent).join('/');
}

function parseCredit(filename) {
  const match = filename.match(/\(([^)]+)\)(?:\.[^.]+)?$/);
  return match ? match[1].trim() : undefined;
}

function displayName(filename) {
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/\s*\([^)]+\)\s*$/, '')
    .replace(/_/g, ' ')
    .trim();
}

function classifyComprehensiveNote(filename) {
  const lower = filename.toLowerCase();
  if (/seekers notes 2025/.test(lower)) return 'Seerah';
  if (/seerah|qasas|nabiyyeen/.test(lower)) return 'Seerah';
  if (/tazkiy|aqeedah|inner-dimension|worship/.test(lower)) return 'Tazkiyyah';
  if (/hadith|uloom/.test(lower)) return 'Uloom Hadith';
  if (/yusuf/.test(lower)) return 'Surah Yusuf';
  if (/juz|tafsir|tafseer|amma|tarjuma|tarjumaa/.test(lower)) return 'Tafsir Juz Amma';
  if (/fiqh|fasting|zakaat|finance|money|salaah|salah/.test(lower)) return 'Fiqh';
  if (/arabic|nahw|verb|vocab|sarf/.test(lower)) return 'Arabic';
  return 'General';
}

function toComprehensiveItem(filename) {
  const rel = `Classmate_Notes/Comprehensive_Notes/${filename}`;
  const cls = classifyComprehensiveNote(filename);
  const item = toMediaItem(rel, { classTags: [cls] });
  if (/seekers notes 2025/i.test(filename)) {
    item.displayName = 'Military Expeditions';
    item.classTags = ['Seerah'];
  }
  if (/^answers mock exam uloom al hadith/i.test(filename)) {
    item.displayName = 'Mock Exam Uloom Al Hadith Answers';
  }
  return item;
}

/** Practice / exam prep materials (non-Arabic) — shown in quicklinks + library bottom */
function isPracticeMaterial(filename, options = {}) {
  const lower = filename.toLowerCase();
  const { classTags = [], source } = options;

  if (classTags.includes('Arabic')) return false;

  if (
    source === 'worksheet' &&
    /verb|tarjuma|tarjumaa|vocab|sarf|nahw|arabic|badl|ta'?keed/i.test(lower)
  ) {
    return false;
  }

  if (/uloom al-?\s*hadith review/i.test(lower)) return false;

  if (/practice\s*questions?|mock\s*exam|self[\s-]*questions?/i.test(lower)) return true;
  if (/exam\s*study\s*guide/i.test(lower)) return true;
  if (/\breview\b/i.test(lower)) return true;
  if (/^answers?\s/i.test(lower)) return true;
  if (source === 'worksheet' && /worksheet|mock/i.test(lower)) return true;

  return false;
}

function collectPracticeItems() {
  const items = [];
  const notesRoot = path.join(MEDIA_SRC, 'Classmate_Notes');

  const compDir = path.join(notesRoot, 'Comprehensive_Notes');
  if (fs.existsSync(compDir)) {
    for (const f of namesInFolder(compDir, 'Classmate_Notes/Comprehensive_Notes')) {
      const cls = classifyComprehensiveNote(f);
      if (!isPracticeMaterial(f, { classTags: [cls], source: 'comprehensive' })) continue;
      items.push(toComprehensiveItem(f));
    }
  }

  const wsDir = path.join(notesRoot, 'Worksheets_and_templates');
  if (fs.existsSync(wsDir)) {
    for (const f of fs
      .readdirSync(wsDir)
      .filter((x) => !x.startsWith('.') && fs.statSync(path.join(wsDir, x)).isFile())) {
      if (!isPracticeMaterial(f, { source: 'worksheet' })) continue;
      items.push(toMediaItem(`Classmate_Notes/Worksheets_and_templates/${f}`));
    }
  }

  return items.sort((a, b) => a.displayName.localeCompare(b.displayName));
}

function buildPracticeSection() {
  const items = collectPracticeItems();
  if (!items.length) return null;
  return { id: 'practice', name: 'Practice & Exams', items };
}

function fileType(filename) {
  const ext = path.extname(filename).toLowerCase();
  if (ext === '.pdf') return 'pdf';
  if (['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext)) return 'image';
  return 'file';
}

function copyRecursive(src, dst, relBase = '') {
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (entry.name === '.DS_Store' || entry.name === 'file_links') continue;
    const srcPath = path.join(src, entry.name);
    const srcRel = relBase ? `${relBase}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      copyRecursive(srcPath, path.join(dst, entry.name), srcRel);
    } else {
      if (
        EXTERNAL_FILE_LINKS[srcRel] ||
        entry.name.endsWith('.compressed.pdf') ||
        entry.name.endsWith('.original.pdf')
      ) {
        continue;
      }
      const dstName = publicFilename(entry.name);
      const dstRel = relBase ? `${relBase}/${dstName}` : dstName;
      publicRelMap.set(srcRel, dstRel);
      fs.copyFileSync(srcPath, path.join(dst, dstName));
    }
  }
}

function namesInFolder(dir, folderRel) {
  const names = new Set();
  if (fs.existsSync(dir)) {
    for (const f of fs.readdirSync(dir)) {
      if (
        f.startsWith('.') ||
        f.endsWith('.compressed.pdf') ||
        f.endsWith('.original.pdf')
      ) {
        continue;
      }
      names.add(f);
    }
  }
  for (const rel of Object.keys(EXTERNAL_FILE_LINKS)) {
    if (path.dirname(rel) === folderRel) names.add(path.basename(rel));
  }
  return [...names];
}

function sortByPriority(files, priorityNames) {
  return [...files].sort((a, b) => {
    const ai = priorityNames.indexOf(a.name);
    const bi = priorityNames.indexOf(b.name);
    if (ai !== -1 && bi !== -1) return ai - bi;
    if (ai !== -1) return -1;
    if (bi !== -1) return 1;
    return a.name.localeCompare(b.name);
  });
}

function toMediaItem(srcRel, extra = {}) {
  const srcNorm = srcRel.replace(/\\/g, '/');
  const externalUrl = EXTERNAL_FILE_LINKS[srcNorm];
  if (externalUrl) {
    const name = path.basename(srcNorm);
    return {
      id: srcNorm.replace(/[^a-zA-Z0-9]+/g, '_'),
      name,
      displayName: displayName(name),
      credit: parseCredit(name),
      path: externalUrl,
      type: 'link',
      url: externalUrl,
      ...extra,
    };
  }

  const rel = publicRelFor(srcRel);
  const name = path.basename(rel);
  const item = {
    id: rel.replace(/[^a-zA-Z0-9]+/g, '_'),
    name,
    displayName: displayName(name),
    credit: parseCredit(name),
    path: encodePublicPath(rel),
    type: fileType(name),
    ...extra,
  };
  if (/morning adhkaar amanah fitness/i.test(name)) {
    item.displayName = 'Morning Adhkaar';
  }
  if (/seekers vocab no2/i.test(name)) {
    item.displayName = 'Seekers Vocab #2';
  }
  if (/seekers vocab past-present-sifaat/i.test(name)) {
    item.displayName = 'Seekers Vocab Past:Present:Sifaat';
  }
  return item;
}

function isArabicGuideToolLink(link) {
  const lower = `${link.title} ${link.url}`.toLowerCase();
  return (
    lower.includes('sentence generator') ||
    lower.includes('sarfing') ||
    lower.includes('sarf word practice')
  );
}

function buildEducationalLinksSection() {
  const links = parseFileLinks();
  const tools = links
    .filter((l) => l.category === 'tool' && !isArabicGuideToolLink(l))
    .map((l, i) => linkToItem(l, i));

  if (!tools.length) return null;

  return {
    id: 'links',
    name: 'Educational Links',
    children: [{ id: 'links_tools', name: 'Tools', items: tools }],
  };
}

function buildQuizletsSection() {
  const quizlets = parseFileLinks().filter((l) => l.category === 'quizlet');
  if (!quizlets.length) return null;
  return {
    id: 'quizlets',
    name: 'Quizlets',
    items: quizlets.map((l, i) => linkToItem(l, i + 100)),
  };
}

function buildWorksheetsSection() {
  const notesRoot = path.join(MEDIA_SRC, 'Classmate_Notes');
  const wsDir = path.join(notesRoot, 'Worksheets_and_templates');
  if (!fs.existsSync(wsDir)) return null;

  const topItems = fs
    .readdirSync(wsDir)
    .filter((f) => !f.startsWith('.') && fs.statSync(path.join(wsDir, f)).isFile())
    .filter((f) => !isPracticeMaterial(f, { source: 'worksheet' }));

  if (!topItems.length) return null;

  return {
    id: 'worksheets',
    name: 'Worksheets & Templates',
    items: topItems.map((f) => toMediaItem(`Classmate_Notes/Worksheets_and_templates/${f}`)),
  };
}

function buildTree(educationalLinks, worksheets, practice) {
  const tree = [];
  const notesRoot = path.join(MEDIA_SRC, 'Classmate_Notes');
  if (!fs.existsSync(notesRoot)) return tree;

  // 1) Official books — merged single folder, class books first
  const officialDir = path.join(notesRoot, 'Official_notes_or_Book_pdfs');
  if (fs.existsSync(officialDir)) {
    const all = namesInFolder(officialDir, 'Classmate_Notes/Official_notes_or_Book_pdfs');
    const books = all.filter((f) => CLASS_BOOKS.has(f));
    const other = all.filter((f) => !CLASS_BOOKS.has(f));
    const items = [
      ...books.map((f) => toMediaItem(`Classmate_Notes/Official_notes_or_Book_pdfs/${f}`)),
      ...other.map((f) => toMediaItem(`Classmate_Notes/Official_notes_or_Book_pdfs/${f}`)),
    ];
    tree.push({
      id: 'official',
      name: 'Official Notes & Books',
      items,
    });
  }

  // 2) Student notes — custom class order, practice items excluded
  const compDir = path.join(notesRoot, 'Comprehensive_Notes');
  if (fs.existsSync(compDir)) {
    const byClass = {};
    for (const f of namesInFolder(compDir, 'Classmate_Notes/Comprehensive_Notes')) {
      const cls = classifyComprehensiveNote(f);
      if (isPracticeMaterial(f, { classTags: [cls], source: 'comprehensive' })) continue;
      const item = toComprehensiveItem(f);
      if (!byClass[cls]) byClass[cls] = [];
      byClass[cls].push(item);
    }
    tree.push({
      id: 'comprehensive',
      name: 'Student Notes',
      children: COMPREHENSIVE_CLASS_ORDER.filter((c) => byClass[c]?.length).map((c) => ({
        id: `comp_${c.replace(/\s+/g, '_').toLowerCase()}`,
        name: c,
        items: byClass[c].sort((a, b) => a.displayName.localeCompare(b.displayName)),
      })),
    });
  }

  // Arabic Guides (+ Sentence Generator / Sarf Word Practice Generator)
  const arabicDir = path.join(notesRoot, 'Arabic_Guides');
  const arabicGuidePracticeItems = [];
  const arabicGuideLinkItems = parseFileLinks()
    .filter((l) => l.category === 'tool' && isArabicGuideToolLink(l))
    .map((l, i) => linkToItem(l, i + 50));

  if (fs.existsSync(arabicDir) || arabicGuideLinkItems.length) {
    const guideFiles = fs.existsSync(arabicDir)
      ? fs.readdirSync(arabicDir).filter((f) => !f.startsWith('.'))
      : [];
    for (const f of guideFiles) {
      if (!ARABIC_GUIDE_TO_PRACTICE.has(f)) continue;
      const item = toMediaItem(`Classmate_Notes/Arabic_Guides/${f}`, { classTags: ['Arabic'] });
      if (f === 'Beginner Vocabulary.JPG') item.displayName = 'Beginner Vocabulary 1';
      arabicGuidePracticeItems.push(item);
    }

    const files = sortByPriority(
      guideFiles
        .filter((f) => !ARABIC_GUIDE_TO_PRACTICE.has(f))
        .map((f) => ({ name: f, rel: `Classmate_Notes/Arabic_Guides/${f}` })),
      ARABIC_SCALES_PRIORITY
    );
    const guideItems = [
      ...files.map((f) => toMediaItem(f.rel, { classTags: ['Arabic'] })),
      ...arabicGuideLinkItems.map((item) => ({ ...item, classTags: ['Arabic'] })),
    ];
    if (guideItems.length) {
      tree.push({
        id: 'arabic_guides',
        name: 'Arabic Guides',
        items: guideItems,
      });
    }
  }

  // Quizlets — own top-level folder under Arabic Guides
  const quizlets = buildQuizletsSection();
  if (quizlets) tree.push(quizlets);

  // Duas
  const duasDir = path.join(notesRoot, 'Duas_from_Seerah');
  if (fs.existsSync(duasDir)) {
    tree.push({
      id: 'duas',
      name: 'Duas from Seerah',
      items: fs
        .readdirSync(duasDir)
        .filter((f) => !f.startsWith('.'))
        .map((f) =>
          toMediaItem(`Classmate_Notes/Duas_from_Seerah/${f}`, {
            classTags: ['Seerah'],
            description: '',
          })
        ),
    });
  }

  // Seerah diagrams
  const seerahDir = path.join(notesRoot, 'Seerah_Diagrams');
  if (fs.existsSync(seerahDir)) {
    tree.push({
      id: 'seerah_diagrams',
      name: 'Seerah Diagrams',
      items: fs
        .readdirSync(seerahDir)
        .filter((f) => !f.startsWith('.'))
        .map((f) => toMediaItem(`Classmate_Notes/Seerah_Diagrams/${f}`, { classTags: ['Seerah'] })),
    });
  }

  // Arabic Practice — bottom of library, collapsed by default
  const arabicPracticeDir = path.join(notesRoot, 'Worksheets_and_templates', 'Arabic_Practice');
  const arabicPracticeItems = [...arabicGuidePracticeItems];
  if (fs.existsSync(arabicPracticeDir)) {
    arabicPracticeItems.push(
      ...fs
        .readdirSync(arabicPracticeDir)
        .filter((f) => !f.startsWith('.'))
        .map((f) =>
          toMediaItem(`Classmate_Notes/Worksheets_and_templates/Arabic_Practice/${f}`, {
            classTags: ['Arabic'],
          })
        )
    );
  }
  if (arabicPracticeItems.length) {
    arabicPracticeItems.sort((a, b) => a.displayName.localeCompare(b.displayName));
    tree.push({
      id: 'arabic_practice',
      name: 'Arabic Practice',
      defaultCollapsed: true,
      items: arabicPracticeItems,
    });
  }

  // Recordings — bottom of library, collapsed by default
  const otherLinks = parseFileLinks().filter((l) => l.category === 'other');
  if (otherLinks.length) {
    tree.push({
      id: 'recordings',
      name: 'Recordings & References',
      defaultCollapsed: true,
      items: otherLinks.map((l, i) => linkToItem(l, i + 200)),
    });
  }

  // Mirror remaining educational links / worksheets / practice at library bottom
  if (educationalLinks) {
    tree.push({ ...educationalLinks, defaultCollapsed: true });
  }
  if (worksheets) {
    tree.push({ ...worksheets, defaultCollapsed: true });
  }
  if (practice) {
    tree.push({ ...practice, defaultCollapsed: true });
  }

  return tree;
}

function buildQuicklinks(educationalLinks, worksheets, practice, tree) {
  const sections = [];

  const morningAdhkaarTools = [];
  const morningAdhkaar = tree
    .find((s) => s.id === 'official')
    ?.items?.find((item) => /morning adhkaar/i.test(item.displayName));
  if (morningAdhkaar) morningAdhkaarTools.push(morningAdhkaar);

  const toolItems = parseFileLinks()
    .filter((l) => l.category === 'tool')
    .map((l, i) => linkToItem(l, i));
  const quicklinkToolMatchers = [
    /tahajjud|thirdofthenight/i,
    /sentence generator|custom chatgpt/i,
    /sarf (word )?practice|sarfing/i,
    /prayair|midflight|mid.?flight|prayer times/i,
    /zakat/i,
  ];
  for (const match of quicklinkToolMatchers) {
    const item = toolItems.find(
      (t) =>
        match.test(t.name) ||
        match.test(t.displayName) ||
        match.test(t.url ?? t.path ?? '')
    );
    if (item) morningAdhkaarTools.push(item);
  }

  if (morningAdhkaarTools.length) {
    sections.push({
      id: 'ql_morning_adhkaar_tools',
      name: 'Morning Adhkaar + Tools',
      items: morningAdhkaarTools,
    });
  }

  const worksheetItems =
    worksheets?.items?.filter(
      (item) =>
        /verb scale worksheet/i.test(item.name) ||
        /surah baqarah tarjuma template/i.test(item.name)
    ) ?? [];
  const quranWorksheetLinks = parseFileLinks()
    .filter((l) => /loveforallah|line-by-line worksheet|quran.*worksheet/i.test(`${l.title} ${l.url}`))
    .map((l, i) => linkToItem(l, i + 300));
  const allWorksheetQuicklinks = [...worksheetItems, ...quranWorksheetLinks];
  if (allWorksheetQuicklinks.length) {
    sections.push({
      id: 'ql_worksheets',
      name: 'Worksheets',
      items: allWorksheetQuicklinks,
    });
  }

  const quizletItems = parseFileLinks()
    .filter((l) => l.category === 'quizlet')
    .map((l, i) => linkToItem(l, i + 100));
  if (quizletItems.length) {
    sections.push({
      id: 'ql_quizlets',
      name: 'Quizlets',
      items: quizletItems,
    });
  }

  const practiceItems =
    practice?.items?.filter(
      (item) =>
        /mock exam uloom al hadith/i.test(item.name) ||
        /answers mock exam uloom al hadith/i.test(item.name) ||
        /final seerah exam practice questions/i.test(item.name)
    ) ?? [];
  if (practiceItems.length) {
    sections.push({
      id: 'ql_practice',
      name: 'Practice & Exams',
      items: practiceItems,
    });
  }

  return sections;
}

function parseFileLinks() {
  if (!fs.existsSync(FILE_LINKS)) return [];
  const text = fs.readFileSync(FILE_LINKS, 'utf8');
  const lines = text.split('\n');
  const links = [];
  let currentTitle = '';

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed === 'Tmp') continue;
    if (trimmed.startsWith('http')) {
      links.push({
        title: currentTitle,
        url: trimmed,
        category: categorizeLink(currentTitle, trimmed),
        credit: parseCredit(currentTitle) ?? parseCreditFromTitle(currentTitle),
      });
      currentTitle = '';
    } else {
      currentTitle = trimmed;
    }
  }
  return links;
}

function parseCreditFromTitle(title) {
  const m = title.match(/\(([^)]+)\)\s*$/);
  return m ? m[1] : undefined;
}

function categorizeLink(title, url) {
  const lower = `${title} ${url}`.toLowerCase();
  if (lower.includes('quizlet') || lower.includes('canva.com')) return 'quizlet';
  if (
    lower.includes('chatgpt') ||
    lower.includes('calculator') ||
    lower.includes('sarfing') ||
    lower.includes('prayair') ||
    lower.includes('thirdofthenight') ||
    lower.includes('generator') ||
    lower.includes('map-') ||
    lower.includes('familyecho') ||
    lower.includes('loveforallah') ||
    /line-by-line|quran.*worksheet/i.test(lower)
  ) {
    return 'tool';
  }
  return 'other';
}

function linkToItem(link, index) {
  return {
    id: `link_${index}_${link.title.replace(/\W+/g, '_')}`,
    name: link.title,
    displayName: link.title.replace(/\s*\([^)]+\)\s*$/, '').trim(),
    credit: link.credit,
    path: link.url,
    type: 'link',
    url: link.url,
    classTags: [],
  };
}

// --- Main ---
if (!fs.existsSync(MEDIA_SRC)) {
  console.log(
    'No batch4 media source at src/context/batch4/media — skipping generation.\n' +
      'Using committed public/batch4/ and src/data/batch4*.ts (for CI / Cloudflare deploy).'
  );
  process.exit(0);
}

console.log('Copying batch4 media to public/batch4 ...');
if (fs.existsSync(MEDIA_DST)) fs.rmSync(MEDIA_DST, { recursive: true, force: true });
publicRelMap.clear();
if (fs.existsSync(MEDIA_SRC)) copyRecursive(MEDIA_SRC, MEDIA_DST);

const educationalLinks = buildEducationalLinksSection();
const worksheets = buildWorksheetsSection();
const practice = buildPracticeSection();

const tree = buildTree(educationalLinks, worksheets, practice);
const quicklinks = buildQuicklinks(educationalLinks, worksheets, practice, tree);
const duas = tree.find((s) => s.id === 'duas')?.items ?? [];

fs.writeFileSync(
  OUT_MEDIA,
  `/** Auto-generated by scripts/generate-batch4-media.mjs — do not edit manually */\n\n` +
    `export type MediaItem = {\n` +
    `  id: string;\n` +
    `  name: string;\n` +
    `  displayName: string;\n` +
    `  credit?: string;\n` +
    `  path: string;\n` +
    `  type: 'pdf' | 'image' | 'link' | 'file' | 'duas_gallery';\n` +
    `  url?: string;\n` +
    `  classTags?: string[];\n` +
    `  description?: string;\n` +
    `};\n\n` +
    `export type MediaSection = {\n` +
    `  id: string;\n` +
    `  name: string;\n` +
    `  defaultCollapsed?: boolean;\n` +
    `  items?: MediaItem[];\n` +
    `  children?: { id: string; name: string; items: MediaItem[] }[];\n` +
    `};\n\n` +
    `export const batch4MediaTree: MediaSection[] = ${JSON.stringify(tree, null, 2)};\n\n` +
    `export const batch4Quicklinks: MediaSection[] = ${JSON.stringify(quicklinks, null, 2)};\n\n` +
    `export const DUAS_GALLERY_ID = '__duas_gallery__';\n\n` +
    `export const batch4Duas: MediaItem[] = ${JSON.stringify(duas, null, 2)};\n`
);

fs.writeFileSync(
  OUT_LINKS,
  `/** Auto-generated links from file_links */\n\n` +
    `export type ExternalLink = { id: string; title: string; url: string; category: string; credit?: string };\n\n` +
    `export const batch4ExternalLinks = ${JSON.stringify(
      parseFileLinks().map((l, i) => ({
        id: `ext_${i}`,
        title: l.title,
        url: l.url,
        category: l.category,
        credit: l.credit ?? parseCreditFromTitle(l.title),
      })),
      null,
      2
    )};\n`
);

console.log(`Generated ${OUT_MEDIA}`);
console.log(`Generated ${OUT_LINKS}`);
console.log(`Library sections: ${tree.length}, Quicklink sections: ${quicklinks.length}, Duas: ${duas.length}`);
