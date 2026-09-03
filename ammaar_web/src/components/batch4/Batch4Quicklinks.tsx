import { useState } from 'react';
import type { MediaItem, MediaSection } from '../../data/batch4Media';

type Props = {
  sections: MediaSection[];
  activeId: string | null;
  onSelect: (item: MediaItem) => void;
};

function Folder({
  name,
  defaultOpen = true,
  children,
}: {
  name: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="select-none mb-1">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-1.5 rounded px-2 py-1.5 text-left text-[15px] font-semibold b4-folder-btn transition-colors"
      >
        <span className="b4-folder-icon w-3 shrink-0 text-[11px] leading-none">
          {open ? '▾' : '▸'}
        </span>
        <span>{name}</span>
      </button>
      {open && <div className="ml-3 border-l b4-border-panel pl-1 mt-0.5">{children}</div>}
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

export default function Batch4Quicklinks({ sections, activeId, onSelect }: Props) {
  return (
    <aside>
      <h3 className="text-sm font-semibold b4-text-accent mb-3 uppercase tracking-wide">
        Quicklinks
      </h3>
      <div className="space-y-2">
        {sections.map((section) => {
          const defaultOpen = section.defaultCollapsed !== true;

          if (section.items && !section.children) {
            return (
              <Folder key={section.id} name={section.name} defaultOpen={defaultOpen}>
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
            <Folder key={section.id} name={section.name} defaultOpen={defaultOpen}>
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
                <Folder key={child.id} name={child.name} defaultOpen={true}>
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
}
