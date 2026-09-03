import { useState } from 'react';
import { motion } from 'framer-motion';
import type { MediaItem } from '../../data/batch4Media';

type Props = {
  duas: MediaItem[];
  onExpand: (item: MediaItem) => void;
};

export default function DuasSlideshow({ duas, onExpand }: Props) {
  const [index, setIndex] = useState(0);
  const current = duas[index];

  if (!duas.length) return null;

  const prev = () => setIndex((i) => (i === 0 ? duas.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === duas.length - 1 ? 0 : i + 1));

  return (
    <section className="h-full min-h-[480px] flex flex-col rounded-xl border b4-border-panel b4-bg-surface-solid overflow-hidden">
      <div className="flex items-center justify-between border-b b4-border-panel px-4 py-3 shrink-0">
        <div>
          <h2 className="text-lg font-semibold b4-text-accent">Duas from Seerah</h2>
          <p className="text-xs b4-text-muted">
            {index + 1} of {duas.length}
            {current.displayName !== current.name && ` · ${current.displayName}`}
          </p>
        </div>
        <button
          type="button"
          onClick={() => onExpand(current)}
          className="text-xs b4-link-external underline"
        >
          View full size
        </button>
      </div>

      <div
        className="relative flex-1 min-h-[320px] cursor-pointer b4-media-bg"
        onClick={() => onExpand(current)}
      >
        <motion.img
          key={current.id}
          src={current.path}
          alt={current.displayName}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex items-center justify-between px-4 py-3 border-t b4-border-panel shrink-0">
        <button
          type="button"
          onClick={prev}
          className="rounded px-3 py-1.5 text-sm b4-text-control b4-hover-surface"
        >
          ← Prev
        </button>
        <div className="flex gap-1 overflow-x-auto max-w-[50%]">
          {duas.map((dua, i) => (
            <button
              key={dua.id}
              type="button"
              onClick={() => setIndex(i)}
              className={`shrink-0 w-8 h-8 rounded overflow-hidden border-2 ${
                i === index ? 'b4-thumbnail-active' : 'border-transparent opacity-60'
              }`}
            >
              <img src={dua.path} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          className="rounded px-3 py-1.5 text-sm b4-text-control b4-hover-surface"
        >
          Next →
        </button>
      </div>

      <div className="px-4 pb-3 shrink-0">
        <p className="text-[10px] b4-text-dim italic">
          Space reserved for virtues, authenticity, and recitation context per dua.
        </p>
      </div>
    </section>
  );
}
