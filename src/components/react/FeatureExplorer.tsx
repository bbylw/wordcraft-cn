import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowSquareOutIcon, CheckIcon } from '@phosphor-icons/react';
import type { FeatureDomain } from '~/data/content';
import { cx } from '~/lib/cx';

interface FeatureExplorerProps {
  domains: FeatureDomain[];
}

export default function FeatureExplorer({ domains }: FeatureExplorerProps) {
  const [activeId, setActiveId] = useState(domains[0]?.id ?? '');
  const reduceMotion = useReducedMotion();
  const baseId = useId();

  const active = domains.find((domain) => domain.id === activeId) ?? domains[0];
  if (!active) return null;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = domains.findIndex((d) => d.id === active.id);
    if (currentIndex === -1) return;

    let nextIndex = -1;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % domains.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      nextIndex = (currentIndex - 1 + domains.length) % domains.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = domains.length - 1;
    }

    if (nextIndex !== -1) {
      e.preventDefault();
      const nextDomain = domains[nextIndex];
      if (nextDomain) {
        setActiveId(nextDomain.id);
        const el = document.getElementById(`${baseId}-tab-${nextDomain.id}`);
        el?.focus();
      }
    }
  };

  return (
    <div className="mt-16 grid gap-6 md:grid-cols-12 md:gap-12">
      <div
        role="tablist"
        aria-label="功能领域"
        onKeyDown={handleKeyDown}
        className="-mx-5 flex snap-x gap-1 overflow-x-auto px-5 pb-2 md:col-span-4 md:mx-0 md:flex-col md:gap-0 md:overflow-visible md:border-l md:border-line md:px-0 md:pb-0"
      >
        {domains.map((domain) => {
          const selected = domain.id === active.id;
          return (
            <button
              key={domain.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${domain.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(domain.id)}
              className={cx(
                'relative shrink-0 snap-start whitespace-nowrap rounded-control px-4 py-2.5 text-left text-[15px] transition-colors duration-150 select-none md:w-full',
                selected ? 'font-medium text-ink' : 'text-ink-mute hover:text-ink',
              )}
            >
              {selected && !reduceMotion ? (
                <motion.div
                  layoutId="active-feature-tab"
                  className="absolute inset-0 rounded-control bg-raised shadow-sm"
                  transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
                />
              ) : selected ? (
                <div className="absolute inset-0 rounded-control bg-raised shadow-sm" />
              ) : null}
              <span className="relative z-10">{domain.label}</span>
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active.id}`}
        tabIndex={0}
        className="surface-card min-w-0 p-6 sm:p-9 md:col-span-8"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.id}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="serif text-[2rem] font-medium leading-none tracking-tight text-ink">
              {active.label}
            </h3>
            <p className="mt-5 max-w-[54ch] text-[16px] leading-[1.85] text-ink-soft">
              {active.summary}
            </p>

            <ul className="mt-9 grid gap-x-10 gap-y-4 border-t border-line pt-8 sm:grid-cols-2">
              {active.items.map((item) => (
                <li key={item} className="flex gap-3 text-[15.5px] leading-[1.75] text-ink-soft">
                  <CheckIcon size={15} weight="bold" className="mt-[4px] shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {active.shot ? (
              <a
                href={active.shot}
                target="_blank"
                rel="noreferrer noopener"
                className="folio mt-9 inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-accent"
              >
                在新标签页查看{active.label}界面截图
                <ArrowSquareOutIcon size={13} />
              </a>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}