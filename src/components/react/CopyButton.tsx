import { useCallback, useEffect, useRef, useState } from 'react';
import { CheckIcon, CopyIcon } from '@phosphor-icons/react';
import { cx } from '~/lib/cx';

interface CopyButtonProps {
  value: string;
  label?: string;
  className?: string;
}

function legacyCopy(value: string): void {
  const area = document.createElement('textarea');
  area.value = value;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.top = '-1000px';
  document.body.appendChild(area);
  area.select();
  document.execCommand('copy');
  area.remove();
}

export default function CopyButton({ value, label = '复制', className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      legacyCopy(value);
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  }, [value]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? '已复制到剪贴板' : `复制${label ? ` ${label}` : ''}`}
      className={cx(
        'btn btn-ghost h-7 shrink-0 gap-1.5 px-2.5 text-[12px] text-ink-soft',
        copied && 'border-accent text-accent',
        className,
      )}
    >
      {copied ? <CheckIcon size={13} weight="bold" /> : <CopyIcon size={13} />}
      <span aria-live="polite">{copied ? '已复制' : label}</span>
    </button>
  );
}