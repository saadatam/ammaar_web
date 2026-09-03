import { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Batch4PasscodeGate from '../components/batch4/Batch4PasscodeGate';
import Batch4ResourcesLayout, {
  Batch4ResourcesLayoutMobile,
} from '../components/batch4/Batch4ResourcesLayout';
import Batch4ThemeToggle from '../components/batch4/Batch4ThemeToggle';
import { Batch4ThemeProvider } from '../context/Batch4ThemeContext';
import { useBatch4Auth } from '../hooks/useBatch4Auth';
import {
  batch4Days,
  formatDisplayTime,
  type ClassSession,
} from '../data/batch4Curriculum';
import {
  batch4Duas,
  batch4MediaTree,
  batch4Quicklinks,
  type MediaItem,
} from '../data/batch4Media';
import type { PreviewMode } from '../components/batch4/Batch4ResourcesLayout';
import { clearBatch4Auth } from '../utils/batch4Auth';

type Tab = 'resources' | 'recordings';

function Batch4Content() {
  const { authed, checking, login } = useBatch4Auth();
  const [tab, setTab] = useState<Tab>('resources');
  const [previewMode, setPreviewMode] = useState<PreviewMode>('file');
  const [selected, setSelected] = useState<MediaItem | null>(null);
  const [activeQuicklinkId, setActiveQuicklinkId] = useState<string | null>(null);
  const [activeSession, setActiveSession] = useState<ClassSession | null>(
    batch4Days[0]?.classes[0] ?? null
  );

  const handleFileSelect = (item: MediaItem) => {
    setPreviewMode('file');
    setActiveQuicklinkId(null);
    setSelected(item);
  };

  const handleQuicklinkSelect = (item: MediaItem) => {
    setActiveQuicklinkId(item.id);
    if (item.type === 'duas_gallery') {
      setPreviewMode('duas');
      setSelected(null);
    } else {
      setPreviewMode('file');
      setSelected(item);
    }
  };

  const handleDuaExpand = (item: MediaItem) => {
    setPreviewMode('file');
    setActiveQuicklinkId(null);
    setSelected(item);
  };

  const layoutProps = {
    tree: batch4MediaTree,
    quicklinks: batch4Quicklinks,
    duas: batch4Duas,
    previewMode,
    selected,
    activeQuicklinkId,
    onFileSelect: handleFileSelect,
    onQuicklinkSelect: handleQuicklinkSelect,
    onDuaExpand: handleDuaExpand,
  };

  if (checking) {
    return (
      <div className="b4-page min-h-screen flex items-center justify-center">
        <p className="b4-text-muted text-sm">Loading…</p>
      </div>
    );
  }

  if (!authed) {
    return <Batch4PasscodeGate onSuccess={login} />;
  }

  const day = batch4Days[0];

  return (
    <div className="b4-page min-h-screen pt-4 sm:pt-6">
      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 pb-12">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b b4-border-accent pb-4"
        >
          <div>
            <p className="b4-text-accent text-sm font-medium">Seekers Batch 4</p>
            <h1 className="text-2xl sm:text-3xl font-bold b4-text-heading">
              Class Resources
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex rounded-lg overflow-hidden border b4-border-panel">
              {(
                [
                  { id: 'resources', label: 'Resources' },
                  { id: 'recordings', label: 'Recordings' },
                ] as const
              ).map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className={`px-3 py-1.5 text-sm ${
                    tab === t.id ? 'b4-btn-tab-active font-medium' : 'b4-btn-tab-inactive'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                clearBatch4Auth();
                window.location.reload();
              }}
              className="text-xs b4-text-muted b4-hover-heading px-2 py-1 transition-colors"
            >
              Sign out
            </button>
          </div>
        </motion.header>

        {tab === 'resources' && (
          <>
            <Batch4ResourcesLayout {...layoutProps} />
            <Batch4ResourcesLayoutMobile {...layoutProps} />
          </>
        )}

        {tab === 'recordings' && day && (
          <div className="max-w-3xl mx-auto space-y-6">
            {activeSession && (
              <div className="rounded-xl overflow-hidden border b4-border-accent-strong b4-media-bg">
                <div className="aspect-video">
                  <iframe
                    title={activeSession.label}
                    src={activeSession.embedUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-3 b4-bg-surface-solid border-t b4-border-panel">
                  <div>
                    <p className="b4-text-accent font-semibold">{activeSession.label}</p>
                    <p className="b4-text-muted text-sm">
                      {day.dateLabel} · {formatDisplayTime(activeSession.startSeconds)}
                    </p>
                  </div>
                  <a
                    href={activeSession.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm b4-link-external underline"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            )}

            <section>
              <h2 className="text-lg font-semibold b4-text-heading mb-3">{day.dateLabel}</h2>
              <ol className="space-y-2">
                {day.classes.map((cls, i) => (
                  <li key={cls.id}>
                    <button
                      type="button"
                      onClick={() => setActiveSession(cls)}
                      className={`w-full flex items-center gap-3 rounded-lg border px-3 py-3 text-left transition-colors ${
                        activeSession?.id === cls.id &&
                        activeSession.startSeconds === cls.startSeconds
                          ? 'b4-recording-active'
                          : 'b4-recording-inactive'
                      }`}
                    >
                      <span className="b4-text-dim text-sm w-5">{i + 1}</span>
                      <span className="flex-1 font-medium">{cls.label}</span>
                      <span className="font-mono text-sm b4-text-accent">
                        {formatDisplayTime(cls.startSeconds)}
                      </span>
                    </button>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default function Batch4() {
  return (
    <Batch4ThemeProvider>
      <Batch4Content />
      <Batch4ThemeToggle />
    </Batch4ThemeProvider>
  );
}
