import { forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import type { MediaItem, MediaSection } from '../../data/batch4Media';
import type { FolderExpandHandle } from './Batch4FileTree';

type Props = {
  sections: MediaSection[];
  activeId: string | null;
  onSelect: (item: MediaItem) => void;
};

function collectFolderIds(sections: MediaSection[]): string[] {
  const ids: string[] = [];
  for (const section of sections) {
    ids.push(section.id);
    section.children?.forEach((child) => ids.push(child.id));
  }
  return ids;
}

function initialOpenIds(sections: MediaSection[]): Set<string> {
  const open = new Set<string>();
  for (const section of sections) {
    if (section.defaultCollapsed !== true) open.add(section.id);
    section.children?.forEach((child) => open.add(child.id));
  }
  return open;
}

function Folder({
  name,
  isOpen,
  onToggle,
  children,
}: {
  name: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="select-none mb-1">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-1.5 rounded px-2 py-1.5 text-left text-[15px] font-semibold b4-folder-btn transition-colors"
      >
        <span className="b4-folder-icon w-3 shrink-0 text-[11px] leading-none">
          {isOpen ? '▾' : '▸'}
        </span>
        <span>{name}</span>
      </button>
      {isOpen && <div className="ml-3 border-l b4-border-panel pl-1 mt-0.5">{children}</div>}
    </div>
  );
}

function QuicklinkButton({
  item,
  active,
  onSelect,
}: {
  item: MediaItem;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left rounded-lg border px-3 py-2 text-[15px] transition-colors ${
        active ? 'b4-quicklink-active' : 'b4-quicklink-inactive'
      }`}
    >
      <span className="block font-medium truncate">{item.displayName}</span>
      {item.credit && (
        <span className="block text-[13px] b4-text-muted mt-0.5 truncate">{item.credit}</span>
      )}
    </button>
  );
}

const Batch4Quicklinks = forwardRef<FolderExpandHandle, Props>(function Batch4Quicklinks(
  { sections, activeId, onSelect },
  ref
) {
  const allIds = useMemo(() => collectFolderIds(sections), [sections]);
  const [openIds, setOpenIds] = useState<Set<string>>(() => initialOpenIds(sections));

  useImperativeHandle(ref, () => ({
    expandAll: () => setOpenIds(new Set(allIds)),
    collapseAll: () => setOpenIds(new Set()),
  }));

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <aside>
      <div className="space-y-2">
        {sections.map((section) => {
          if (section.items && !section.children) {
            return (
              <Folder
                key={section.id}
                name={section.name}
                isOpen={openIds.has(section.id)}
                onToggle={() => toggle(section.id)}
              >
                {section.items.map((item) => (
                  <div key={item.id} className="py-0.5">
                    <QuicklinkButton
                      item={item}
                      active={activeId === item.id}
                      onSelect={() => onSelect(item)}
                    />
                  </div>
                ))}
              </Folder>
            );
          }

          return (
            <Folder
              key={section.id}
              name={section.name}
              isOpen={openIds.has(section.id)}
              onToggle={() => toggle(section.id)}
            >
              {section.items?.map((item) => (
                <div key={item.id} className="py-0.5">
                  <QuicklinkButton
                    item={item}
                    active={activeId === item.id}
                    onSelect={() => onSelect(item)}
                  />
                </div>
              ))}
              {section.children?.map((child) => (
                <Folder
                  key={child.id}
                  name={child.name}
                  isOpen={openIds.has(child.id)}
                  onToggle={() => toggle(child.id)}
                >
                  {child.items.map((item) => (
                    <div key={item.id} className="py-0.5">
                      <QuicklinkButton
                        item={item}
                        active={activeId === item.id}
                        onSelect={() => onSelect(item)}
                      />
                    </div>
                  ))}
                </Folder>
              ))}
            </Folder>
          );
        })}
      </div>
    </aside>
  );
});

export default Batch4Quicklinks;
