import CopyButton from './CopyButton';

interface CodeBlockProps {
  code: string;
  caption?: string;
}

export default function CodeBlock({ code, caption }: CodeBlockProps) {
  return (
    <div className="code-block group">
      <div className="flex items-center justify-between gap-3 border-b border-line bg-raised/50 px-3.5 py-2.5 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-line-strong transition-colors duration-200 group-hover:bg-[#ff5f56]/80"></span>
            <span className="h-2 w-2 rounded-full bg-line-strong transition-colors duration-200 group-hover:bg-[#ffbd2e]/80"></span>
            <span className="h-2 w-2 rounded-full bg-line-strong transition-colors duration-200 group-hover:bg-[#27c93f]/80"></span>
          </div>
          {caption ? (
            <span className="pl-1.5 font-mono text-[11.5px] tracking-wide text-ink-mute select-none">{caption}</span>
          ) : null}
        </div>
        <CopyButton value={code} />
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}