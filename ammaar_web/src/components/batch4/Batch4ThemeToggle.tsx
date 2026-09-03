import {
  useBatch4Theme,
  BATCH4_THEME_LABELS,
  BATCH4_THEMES,
} from '../../context/Batch4ThemeContext';

const THEME_SWATCH = {
  default: 'linear-gradient(135deg, #030712 50%, #4ade80 50%)',
  midnight: 'linear-gradient(135deg, #1a2639 50%, #922724 50%)',
  miftaah: 'linear-gradient(135deg, #ffffff 33%, #922724 33%, #922724 66%, #1a2639 66%)',
} as const;

export default function Batch4ThemeToggle() {
  const { theme, cycleTheme } = useBatch4Theme();
  const label = BATCH4_THEME_LABELS[theme];
  const idx = BATCH4_THEMES.indexOf(theme);
  const nextTheme = BATCH4_THEMES[(idx + 1) % BATCH4_THEMES.length];
  const nextLabel = BATCH4_THEME_LABELS[nextTheme];

  return (
    <button
      type="button"
      onClick={cycleTheme}
      title={`Theme: ${label}. Click for ${nextLabel}.`}
      aria-label={`Current theme ${label}. Switch to ${nextLabel}.`}
      className="b4-theme-toggle fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold shadow-lg backdrop-blur-sm transition-colors sm:bottom-6 sm:right-6 sm:px-4 sm:text-sm"
    >
      <span
        className="inline-block h-3 w-3 rounded-full border border-current sm:h-3.5 sm:w-3.5"
        style={{ background: THEME_SWATCH[theme] }}
        aria-hidden
      />
      {label}
    </button>
  );
}
