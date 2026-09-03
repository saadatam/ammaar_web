import { useMemo, useState } from 'react';
import type { MediaItem, MediaSection } from '../../data/batch4Media';

type Props = {
  tree: MediaSection[];
  selectedId: string | null;
  onSelect: (item: MediaItem) => void;
  searchQuery?: string;
  /** When true, all folders start collapsed (used on mobile). */
  startCollapsed?: boolean;
};

function itemMatches(item: MediaItem, query: string): boolean {
  const q = query.toLowerCase();
  return (
    item.displayName.toLowerCase().includes(q) ||
    item.name.toLowerCase().includes(q) ||
    (item.credit?.toLowerCase().includes(q) ?? false) ||
    (item.classTags?.some((tag) => tag.toLowerCase().includes(q)) ?? false)
  );
}

function filterTree(tree: MediaSection[], query: string): MediaSection[] {
  const trimmed = query.trim();
  if (!trimmed) return tree;

  const results: MediaSection[] = [];

  for (const section of tree) {
    const items = section.items?.filter((item) => itemMatches(item, trimmed));
    const children = section.children
      ?.map((child) => ({
        ...child,
        items: child.items.filter((item) => itemMatches(item, trimmed)),
      }))
      .filter((child) => child.items.length > 0);

    const hasItems = Boolean(items?.length);
    const hasChildren = Boolean(children?.length);
    if (!hasItems && !hasChildren) continue;

    results.push({
      ...section,
      items: hasItems ? items : undefined,
      children: hasChildren ? children : undefined,
    });
  }

  return results;
}

function initialOpenSections(tree: MediaSection[], startCollapsed = false): Set<string> {
  if (startCollapsed) return new Set();
  return new Set(tree.filter((s) => !s.defaultCollapsed).map((s) => s.id));
}

function Folder({
  name,
  isOpen,
  onToggle,
  forceOpen = false,
  children,
}: {
  name: string;
  isOpen: boolean;
  onToggle: () => void;
  forceOpen?: boolean;
  children: React.ReactNode;
}) {
  const open = forceOpen || isOpen;

  return (
    <div className="select-none">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-1.5 rounded px-2 py-1.5 text-left text-[15px] font-semibold b4-folder-btn transition-colors"
      >
        <span className="b4-folder-icon w-3 shrink-0 text-[11px] leading-none">
          {open ? '▾' : '▸'}
        </span>
        <span>{name}</span>
      </button>
      {open && <div className="ml-3 border-l b4-border-panel pl-1">{children}</div>}
    </div>
  );
}

function NestedFolder({
  name,
  defaultOpen = true,
  forceOpen = false,
  children,
}: {
  name: string;
  defaultOpen?: boolean;
  forceOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const isOpen = forceOpen || open;

  return (
    <Folder name={name} isOpen={isOpen} onToggle={() => setOpen((v) => !v)} forceOpen={forceOpen}>
      {children}
    </Folder>
  );
}

function FileRow({
  item,
  selected,
  onSelect,
}: {
  item: MediaItem;
  selected: boolean;
  onSelect: () => void;
}) {
  const fileColor =
    item.type === 'link'
      ? 'b4-file-link'
      : item.type === 'pdf'
        ? 'b4-file-pdf'
        : 'b4-file-image';

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`b4-file-btn flex w-full items-start text-left text-[15px] transition-colors ${
        selected
          ? 'b4-file-selected border'
          : `${fileColor}`
      }`}
    >
      <span className="min-w-0">
        <span className="block truncate">{item.displayName}</span>
        {item.credit && (
          <span className="block text-[11px] b4-text-dim truncate">{item.credit}</span>
        )}
      </span>
    </button>
  );
}

function ItemList({
  items,
  selectedId,
  onSelect,
}: {
  items: MediaItem[];
  selectedId: string | null;
  onSelect: (item: MediaItem) => void;
}) {
  return (
    <div className="space-y-1 py-1">
      {items.map((item) => (
        <FileRow
          key={item.id}
          item={item}
          selected={selectedId === item.id}
          onSelect={() => onSelect(item)}
        />
      ))}
    </div>
  );
}

export function Batch4LibrarySearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search files…"
      aria-label="Search library"
      className="b4-input w-full rounded-lg border px-3 py-2 text-[15px] placeholder:b4-text-dim focus:outline-none"
    />
  );
}

export default function Batch4FileTree({
  tree,
  selectedId,
  onSelect,
  searchQuery = '',
  startCollapsed = false,
}: Props) {
  const filteredTree = useMemo(
    () => filterTree(tree, searchQuery),
    [tree, searchQuery]
  );
  const isSearching = searchQuery.trim().length > 0;
  const nestedDefaultOpen = !startCollapsed;

  const [openSections, setOpenSections] = useState<Set<string>>(() =>
    initialOpenSections(tree, startCollapsed)
  );

  function toggleTopSection(id: string) {
    setOpenSections((prev) => {
      if (prev.has(id)) {
        const next = new Set(prev);
        next.delete(id);
        return next;
      }
      return new Set([id]);
    });
  }

  if (isSearching && filteredTree.length === 0) {
    return (
      <p className="px-2 py-4 text-[13px] b4-text-muted italic">
        No files match &ldquo;{searchQuery.trim()}&rdquo;
      </p>
    );
  }

  return (
    <nav className="space-y-1 pr-1">
      {filteredTree.map((section) => (
        <Folder
          key={section.id}
          name={section.name}
          isOpen={openSections.has(section.id)}
          onToggle={() => toggleTopSection(section.id)}
          forceOpen={isSearching}
        >
          {section.items && (
            <ItemList items={section.items} selectedId={selectedId} onSelect={onSelect} />
          )}
          {section.children?.map((child) => (
            <NestedFolder
              key={child.id}
              name={child.name}
              defaultOpen={nestedDefaultOpen}
              forceOpen={isSearching}
            >
              <ItemList items={child.items} selectedId={selectedId} onSelect={onSelect} />
            </NestedFolder>
          ))}
        </Folder>
      ))}
    </nav>
  );
}
