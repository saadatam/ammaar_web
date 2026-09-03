import { useRef, useState, type RefObject } from 'react';
import Batch4FileTree, {
  Batch4LibrarySearch,
  PanelExpandControls,
  type FolderExpandHandle,
} from './Batch4FileTree';
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

function openMediaInNewTab(item: MediaItem) {
  if (item.type === 'duas_gallery') return;
  const url = item.type === 'link' ? item.url ?? item.path : item.path;
  if (!url) return;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function PanelHeader({
  title,
  expandRef,
}: {
  title: string;
  expandRef: RefObject<FolderExpandHandle | null>;
}) {
  return (
    <div className="mb-2 flex items-center justify-between gap-2 px-1 shrink-0">
      <h2 className="text-xs font-semibold uppercase tracking-wide b4-text-muted">{title}</h2>
      <PanelExpandControls
        onExpand={() => expandRef.current?.expandAll()}
        onCollapse={() => expandRef.current?.collapseAll()}
      />
    </div>
  );
}

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
  const libraryRef = useRef<FolderExpandHandle>(null);
  const quicklinksRef = useRef<FolderExpandHandle>(null);

  return (
    <div className="hidden lg:flex h-[calc(100vh-7rem)] min-h-[520px] w-full max-w-[1600px] mx-auto">
      <aside
        style={{ width: sizes.library }}
        className="shrink-0 flex flex-col rounded-xl border b4-border-panel b4-bg-surface p-3 overflow-hidden"
      >
        <PanelHeader title="Library" expandRef={libraryRef} />
        <div className="mb-2 shrink-0">
          <Batch4LibrarySearch value={librarySearch} onChange={setLibrarySearch} />
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto">
          <Batch4FileTree
            ref={libraryRef}
            tree={tree}
            selectedId={previewMode === 'file' ? selected?.id ?? null : null}
            onSelect={onFileSelect}
            searchQuery={librarySearch}
            startCollapsed
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
        <div className="mb-3 flex items-center justify-between gap-2">
          <h3 className="text-sm font-semibold b4-text-accent uppercase tracking-wide">
            Quicklinks
          </h3>
          <PanelExpandControls
            onExpand={() => quicklinksRef.current?.expandAll()}
            onCollapse={() => quicklinksRef.current?.collapseAll()}
          />
        </div>
        <Batch4Quicklinks
          ref={quicklinksRef}
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
  const libraryRef = useRef<FolderExpandHandle>(null);
  const quicklinksRef = useRef<FolderExpandHandle>(null);

  const handleFileSelect = (item: MediaItem) => {
    openMediaInNewTab(item);
    onFileSelect(item);
  };

  const handleQuicklinkSelect = (item: MediaItem) => {
    openMediaInNewTab(item);
    onQuicklinkSelect(item);
  };

  return (
    <div className="lg:hidden space-y-4">
      <aside className="rounded-xl border b4-border-panel b4-bg-surface p-3 flex flex-col">
        <PanelHeader title="Library" expandRef={libraryRef} />
        <div className="mb-2 shrink-0">
          <Batch4LibrarySearch value={librarySearch} onChange={setLibrarySearch} />
        </div>
        <div className="min-h-0">
          <Batch4FileTree
            ref={libraryRef}
            tree={tree}
            selectedId={previewMode === 'file' ? selected?.id ?? null : null}
            onSelect={handleFileSelect}
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
        <div className="mb-3 flex items-center justify-between gap-2">
          <h3 className="text-sm font-semibold b4-text-accent uppercase tracking-wide">
            Quicklinks
          </h3>
          <PanelExpandControls
            onExpand={() => quicklinksRef.current?.expandAll()}
            onCollapse={() => quicklinksRef.current?.collapseAll()}
          />
        </div>
        <Batch4Quicklinks
          ref={quicklinksRef}
          sections={quicklinks}
          activeId={activeQuicklinkId}
          onSelect={handleQuicklinkSelect}
        />
      </aside>
    </div>
  );
}
