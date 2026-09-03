import type { MediaItem } from '../../data/batch4Media';

type Props = {
  item: MediaItem | null;
};

function pdfViewerSrc(src: string): string {
  const hash = 'view=FitH';
  if (src.includes('#')) {
    const base = src.split('#')[0];
    return `${base}#${hash}`;
  }
  return `${src}#${hash}`;
}

function PdfPreview({ src, title }: { src: string; title: string }) {
  return (
    <div className="space-y-3">
      <iframe
        title={title}
        src={pdfViewerSrc(src)}
        className="w-full h-[min(85vh,900px)] rounded-lg border b4-border-panel bg-white"
      />
    </div>
  );
}

export default function Batch4Viewer({ item }: Props) {
  if (!item) {
    return (
      <div className="flex h-full min-h-[320px] items-center justify-center rounded-xl border border-dashed b4-border-panel b4-bg-surface p-8 text-center">
        <p className="b4-text-muted text-sm">
          Select a file from the library to preview it here.
        </p>
      </div>
    );
  }

  const openUrl = item.type === 'link' ? item.url ?? item.path : item.path;

  return (
    <div className="rounded-xl border b4-border-panel b4-bg-surface-solid overflow-hidden">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b b4-border-panel px-4 py-3">
        <div>
          <h2 className="text-lg font-semibold b4-text-heading">{item.displayName}</h2>
          {item.credit && (
            <p className="text-sm b4-text-muted">Credit: {item.credit}</p>
          )}
          {item.classTags && item.classTags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {item.classTags.map((tag) => (
                <span key={tag} className="b4-tag text-[10px] rounded-full px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <a
          href={openUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm b4-link-external underline underline-offset-2 shrink-0"
        >
          Open in new tab
        </a>
      </div>

      <div className="p-4">
        {item.description !== undefined && (
          <div className="mb-4 rounded-lg border b4-border-panel b4-bg-surface-deep px-3 py-2">
            <p className="text-[10px] uppercase tracking-wide b4-text-dim mb-1">
              Notes / context
            </p>
            <p className="text-sm b4-text-muted italic">
              {item.description || 'Space reserved for virtues, authenticity, and recitation context.'}
            </p>
          </div>
        )}

        {item.type === 'pdf' && <PdfPreview src={item.path} title={item.displayName} />}

        {item.type === 'image' && (
          <img
            src={item.path}
            alt={item.displayName}
            className="mx-auto max-h-[min(85vh,900px)] rounded-lg object-contain"
          />
        )}

        {item.type === 'link' && (
          <div className="rounded-lg border b4-border-panel b4-bg-surface-deep p-6 text-center">
            <p className="b4-text-muted text-sm mb-4">External resource</p>
            <a
              href={openUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="b4-btn-primary inline-block rounded-lg px-6 py-3 font-semibold transition-colors"
            >
              Visit link
            </a>
            <p className="mt-3 text-xs b4-text-dim break-all">{openUrl}</p>
          </div>
        )}
      </div>
    </div>
  );
}
