/** POC curriculum data from ClassTimeStamps.csv + video_sorted.txt (#178 = oldest). */

export type ClassSession = {
  id: string;
  label: string;
  startTimestamp: string;
  startSeconds: number;
  youtubeUrl: string;
  embedUrl: string;
};

export type DayRecording = {
  date: string;
  dateLabel: string;
  playlistIndex: number;
  videoId: string;
  title: string;
  classes: ClassSession[];
};

/** Convert H:MM:SS or M:SS → seconds */
export function timestampToSeconds(raw: string): number {
  const parts = raw.trim().split(':').map(Number);
  if (parts.some((n) => Number.isNaN(n))) return 0;
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return parts[0] ?? 0;
}

export function formatDisplayTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) {
    return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }
  return `${m}:${String(s).padStart(2, '0')}`;
}

export function youtubeWatchUrl(videoId: string, startSeconds: number): string {
  return `https://www.youtube.com/watch?v=${videoId}&t=${startSeconds}s`;
}

export function youtubeEmbedUrl(videoId: string, startSeconds: number): string {
  return `https://www.youtube.com/embed/${videoId}?start=${startSeconds}`;
}

function session(
  videoId: string,
  id: string,
  label: string,
  startTimestamp: string
): ClassSession {
  const startSeconds = timestampToSeconds(startTimestamp);
  return {
    id,
    label,
    startTimestamp,
    startSeconds,
    youtubeUrl: youtubeWatchUrl(videoId, startSeconds),
    embedUrl: youtubeEmbedUrl(videoId, startSeconds),
  };
}

/** Playlist index 178 = oldest day (8/26/2025). */
const VIDEO_ID_826 = 'SCOLB7nRn60';

export const batch4Days: DayRecording[] = [
  {
    date: '2025-08-26',
    dateLabel: 'August 26, 2025',
    playlistIndex: 178,
    videoId: VIDEO_ID_826,
    title: 'Seekers 8-26-25',
    classes: [
      session(VIDEO_ID_826, 'seerah', 'Seerah', '0:19:23'),
      session(VIDEO_ID_826, 'tazkiyyah', 'Tazkiyyah', '0:55:41'),
      session(VIDEO_ID_826, '40_hadith', '40 Hadith Nawawi', '1:41:16'),
      // First half Juz Amma — empty in CSV
      session(VIDEO_ID_826, 'surah_yusuf', 'Surah Yusuf', '2:25:16'),
      session(VIDEO_ID_826, 'juz_amma_2', 'Second half Juz Amma', '3:53:17'),
      session(VIDEO_ID_826, 'uloom_quran', 'Uloom Quran', '4:41:04'),
      // Uloom Hadith — empty in CSV
      session(VIDEO_ID_826, 'arabic', 'Arabic', '5:39:35'),
    ],
  },
];

/** Flatten sessions grouped by class id across all days. */
export function sessionsByClass(): Record<string, { label: string; sessions: (ClassSession & { date: string; dateLabel: string })[] }> {
  const grouped: Record<
    string,
    { label: string; sessions: (ClassSession & { date: string; dateLabel: string })[] }
  > = {};

  for (const day of batch4Days) {
    for (const cls of day.classes) {
      if (!grouped[cls.id]) {
        grouped[cls.id] = { label: cls.label, sessions: [] };
      }
      grouped[cls.id].sessions.push({
        ...cls,
        date: day.date,
        dateLabel: day.dateLabel,
      });
    }
  }

  return grouped;
}
