import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import '../css/batch4-theme.css';

export type Batch4Theme = 'default' | 'midnight' | 'miftaah';

export const BATCH4_THEMES: Batch4Theme[] = ['default', 'midnight', 'miftaah'];

export const BATCH4_THEME_LABELS: Record<Batch4Theme, string> = {
  default: 'Default',
  midnight: 'Midnight',
  miftaah: 'Miftaah',
};

const STORAGE_KEY = 'batch4-theme';
const STORAGE_VERSION_KEY = 'batch4-theme-v';
const STORAGE_VERSION = '2';

type Batch4ThemeContextValue = {
  theme: Batch4Theme;
  cycleTheme: () => void;
};

const Batch4ThemeContext = createContext<Batch4ThemeContextValue | null>(null);

function readStoredTheme(): Batch4Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const version = localStorage.getItem(STORAGE_VERSION_KEY);

    // Migrate: old "miftaah" was the dark navy/gold theme → now "midnight"
    if (version !== STORAGE_VERSION) {
      if (stored === 'miftaah') {
        localStorage.setItem(STORAGE_KEY, 'midnight');
      }
      localStorage.setItem(STORAGE_VERSION_KEY, STORAGE_VERSION);
      if (stored === 'miftaah') return 'midnight';
    }

    if (stored === 'default' || stored === 'midnight' || stored === 'miftaah') {
      return stored;
    }
  } catch {
    /* ignore */
  }
  return 'default';
}

export function Batch4ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Batch4Theme>(readStoredTheme);

  const cycleTheme = useCallback(() => {
    setTheme((prev) => {
      const idx = BATCH4_THEMES.indexOf(prev);
      const next = BATCH4_THEMES[(idx + 1) % BATCH4_THEMES.length];
      try {
        localStorage.setItem(STORAGE_KEY, next);
        localStorage.setItem(STORAGE_VERSION_KEY, STORAGE_VERSION);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      theme,
      cycleTheme,
    }),
    [theme, cycleTheme]
  );

  return (
    <Batch4ThemeContext.Provider value={value}>
      <div className="batch4-root" data-theme={theme}>
        {children}
      </div>
    </Batch4ThemeContext.Provider>
  );
}

export function useBatch4Theme() {
  const ctx = useContext(Batch4ThemeContext);
  if (!ctx) {
    throw new Error('useBatch4Theme must be used within Batch4ThemeProvider');
  }
  return ctx;
}
