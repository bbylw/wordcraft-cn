import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowDownIcon } from '@phosphor-icons/react';
import type { DownloadPlatform } from '~/data/content';
import CopyButton from './CopyButton';
import { cx } from '~/lib/cx';

interface DownloadTabsProps {
  platforms: DownloadPlatform[];
  releaseUrl: string;
}

export default function DownloadTabs({ platforms, releaseUrl }: DownloadTabsProps) {
  const [activeId, setActiveId] = useState(platforms[0]?.id ?? '');
  const reduceMotion = useReducedMotion();
  const baseId = useId();

  const active = platforms.find((platform) => platform.id === activeId) ?? platforms[0];
  if (!active) return null;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = platforms.findIndex((p) => p.id === active.id);
    if (currentIndex === -1) return;

    let nextIndex = -1;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % platforms.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      nextIndex = (currentIndex - 1 + platforms.length) % platforms.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = platforms.length - 1;
    }

    if (nextIndex !== -1) {
      e.preventDefault();
      const nextPlatform = platforms[nextIndex];
      if (nextPlatform) {
        setActiveId(nextPlatform.id);
        const el = document.getElementById(`${baseId}-tab-${nextPlatform.id}`);
        el?.focus();
      }
    }
  };

  return (
    <div className="grid gap-8 md:grid-cols-12 md:gap-12">
      <div
        role="tablist"
        aria-label="下载平台"
        onKeyDown={handleKeyDown}
        className="-mx-5 flex snap-x gap-1 overflow-x-auto px-5 pb-2 md:col-span-3 md:mx-0 md:flex-col md:gap-0 md:overflow-visible md:border-l md:border-line md:px-0 md:pb-0"
      >
        {platforms.map((platform) => {
          const selected = platform.id === active.id;
          return (
            <button
              key={platform.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${platform.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(platform.id)}
              className={cx(
                'shrink-0 snap-start whitespace-nowrap rounded-control px-4 py-2.5 text-left text-[15px] transition-colors duration-200 md:w-full',
                selected
                  ? 'bg-raised font-medium text-ink'
                  : 'text-ink-mute hover:bg-raised hover:text-ink',
              )}
            >
              {platform.label}
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active.id}`}
        tabIndex={0}
        className="min-w-0 md:col-span-9"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.id}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap items-end justify-between gap-5 border-b-2 border-ink pb-5">
              <div>
                <p className="folio">构建</p>
                <h3 className="serif mt-1.5 text-[1.75rem] font-medium leading-none tracking-tight text-ink">
                  {active.label}
                </h3>
              </div>
              <a
                href={releaseUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-primary h-11 px-5 text-[15px]"
              >
                下载 WordCraft
                <ArrowDownIcon size={17} weight="bold" />
              </a>
            </div>

            <div className="mt-8 space-y-9">
              {active.groups.map((group) => (
                <div key={group.label}>
                  <h4 className="folio">{group.label}</h4>
                  <ul className="mt-3">
                    {group.files.map((file) => (
                      <li
                        key={file.name}
                        className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-line py-2.5 first:mt-2 first:border-t-0 first:pt-0"
                      >
                        <code className="min-w-0 flex-1 font-mono text-[13.5px] leading-7 text-ink [overflow-wrap:anywhere]">
                          {file.name}
                        </code>
                        {file.note ? <span className="folio">{file.note}</span> : null}
                        <CopyButton value={file.name} label="" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {active.note ? (
              <p className="mt-9 max-w-[58ch] border-t border-line pt-5 text-[15px] leading-[1.85] text-ink-soft">
                {active.note}
              </p>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}