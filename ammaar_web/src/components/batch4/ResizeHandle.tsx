import { useCallback, useEffect, useRef, useState } from 'react';

type Direction = 'horizontal' | 'vertical';

type ResizeHandleProps = {
  direction: Direction;
  onDrag: (delta: number) => void;
};

export function ResizeHandle({ direction, onDrag }: ResizeHandleProps) {
  const dragging = useRef(false);
  const lastPos = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    lastPos.current = direction === 'horizontal' ? e.clientX : e.clientY;
    document.body.style.cursor =
      direction === 'horizontal' ? 'col-resize' : 'row-resize';
    document.body.style.userSelect = 'none';
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      const pos = direction === 'horizontal' ? e.clientX : e.clientY;
      const delta = pos - lastPos.current;
      if (delta !== 0) {
        onDrag(delta);
        lastPos.current = pos;
      }
    };

    const onMouseUp = () => {
      dragging.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [direction, onDrag]);

  const isHorizontal = direction === 'horizontal';

  return (
    <div
      role="separator"
      aria-orientation={isHorizontal ? 'vertical' : 'horizontal'}
      onMouseDown={onMouseDown}
      className={`group shrink-0 z-10 ${
        isHorizontal
          ? 'w-1.5 cursor-col-resize hover:w-2 self-stretch'
          : 'h-1.5 cursor-row-resize hover:h-2 w-full'
      }`}
    >
      <div
        className={`mx-auto rounded-full b4-resize-bar ${
          isHorizontal ? 'w-0.5 h-full min-h-[120px]' : 'h-0.5 w-full min-w-[120px]'
        }`}
      />
    </div>
  );
}

const STORAGE_KEY = 'batch4_panel_sizes_v1';

export type PanelSizes = {
  library: number;
  quicklinks: number;
};

const DEFAULTS: PanelSizes = {
  library: 260,
  quicklinks: 240,
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function usePanelSizes() {
  const [sizes, setSizes] = useState<PanelSizes>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return { ...DEFAULTS, ...JSON.parse(raw) };
    } catch {
      /* ignore */
    }
    return DEFAULTS;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sizes));
  }, [sizes]);

  const adjustLibrary = useCallback((delta: number) => {
    setSizes((s) => ({ ...s, library: clamp(s.library + delta, 180, 480) }));
  }, []);

  const adjustQuicklinks = useCallback((delta: number) => {
    setSizes((s) => ({
      ...s,
      quicklinks: clamp(s.quicklinks - delta, 180, 420),
    }));
  }, []);

  return { sizes, adjustLibrary, adjustQuicklinks };
}
