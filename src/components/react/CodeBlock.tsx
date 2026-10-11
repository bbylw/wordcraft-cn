import CopyButton from './CopyButton';

interface CodeBlockProps {
  code: string;
  caption?: string;
}

export default function CodeBlock({ code, caption }: CodeBlockProps) {
  return (
    <div className="code-block">
      <div className="flex items-center justify-between gap-3 border-b border-line px-3 py-2">
        <span className="pl-1 font-mono text-[11.5px] tracking-wide text-ink-mute">{caption}</span>
        <CopyButton value={code} />
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}