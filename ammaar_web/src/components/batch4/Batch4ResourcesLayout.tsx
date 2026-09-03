import { useState } from 'react';
import Batch4FileTree, { Batch4LibrarySearch } from './Batch4FileTree';
import Batch4Viewer from './Batch4Viewer';
import Batch4Quicklinks from './Batch4Quicklinks';
import DuasSlideshow from './DuasSlideshow';
import { ResizeHandle, usePanelSizes } from './ResizeHandle';
import type { MediaItem, MediaSection } from '../../data/batch4Media';

export type PreviewMode = 'file' | 'duas';

type Props = {
  tree: MediaSection[];
  quicklinks: MediaSection[];
  duas: MediaItem[];
  previewMode: PreviewMode;
  selected: MediaItem | null;
  activeQuicklinkId: string | null;
  onFileSelect: (item: MediaItem) => void;
  onQuicklinkSelect: (item: MediaItem) => void;
  onDuaExpand: (item: MediaItem) => void;
};

export default function Batch4ResourcesLayout({
  tree,
  quicklinks,
  duas,
  previewMode,
  selected,
  activeQuicklinkId,
  onFileSelect,
  onQuicklinkSelect,
  onDuaExpand,
}: Props) {
  const { sizes, adjustLibrary, adjustQuicklinks } = usePanelSizes();
  const [librarySearch, setLibrarySearch] = useState('');

  return (
    <div className="hidden lg:flex h-[calc(100vh-7rem)] min-h-[520px] w-full max-w-[1600px] mx-auto">
      <aside
        style={{ width: sizes.library }}
        className="shrink-0 flex flex-col rounded-xl border b4-border-panel b4-bg-surface p-3 overflow-hidden"
      >
        <h2 className="text-xs font-semibold uppercase tracking-wide b4-text-muted mb-2 px-1 shrink-0">
          Library
        </h2>
        <div className="mb-2 shrink-0">
          <Batch4LibrarySearch value={librarySearch} onChange={setLibrarySearch} />
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto">
          <Batch4FileTree
            tree={tree}
            selectedId={previewMode === 'file' ? selected?.id ?? null : null}
            onSelect={onFileSelect}
            searchQuery={librarySearch}
          />
        </div>
      </aside>

      <ResizeHandle direction="horizontal" onDrag={adjustLibrary} />

      <main className="flex-1 min-w-0 overflow-y-auto">
        {previewMode === 'duas' ? (
          <DuasSlideshow duas={duas} onExpand={onDuaExpand} />
        ) : (
          <Batch4Viewer item={selected} />
        )}
      </main>

      <ResizeHandle direction="horizontal" onDrag={adjustQuicklinks} />

      <aside
        style={{ width: sizes.quicklinks }}
        className="shrink-0 flex flex-col rounded-xl border b4-border-panel b4-bg-surface p-4 overflow-y-auto"
      >
        <Batch4Quicklinks
          sections={quicklinks}
          activeId={activeQuicklinkId}
          onSelect={onQuicklinkSelect}
        />
      </aside>
    </div>
  );
}

export function Batch4ResourcesLayoutMobile({
  tree,
  quicklinks,
  duas,
  previewMode,
  selected,
  activeQuicklinkId,
  onFileSelect,
  onQuicklinkSelect,
  onDuaExpand,
}: Props) {
  const [librarySearch, setLibrarySearch] = useState('');

  return (
    <div className="lg:hidden space-y-4">
      <aside className="rounded-xl border b4-border-panel b4-bg-surface p-3 flex flex-col">
        <h2 className="text-xs font-semibold uppercase tracking-wide b4-text-muted mb-2 px-1 shrink-0">
          Library
        </h2>
        <div className="mb-2 shrink-0">
          <Batch4LibrarySearch value={librarySearch} onChange={setLibrarySearch} />
        </div>
        <div className="min-h-0">
          <Batch4FileTree
            tree={tree}
            selectedId={previewMode === 'file' ? selected?.id ?? null : null}
            onSelect={onFileSelect}
            searchQuery={librarySearch}
            startCollapsed
          />
        </div>
      </aside>
      {previewMode === 'duas' ? (
        <DuasSlideshow duas={duas} onExpand={onDuaExpand} />
      ) : (
        <Batch4Viewer item={selected} />
      )}
      <aside className="rounded-xl border b4-border-panel b4-bg-surface p-4">
        <Batch4Quicklinks
          sections={quicklinks}
          activeId={activeQuicklinkId}
          onSelect={onQuicklinkSelect}
        />
      </aside>
    </div>
  );
}
