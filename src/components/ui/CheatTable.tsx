import { cn } from "@/lib/utils";

export function CheatTable({
  headers,
  rows,
  className,
}: {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  className?: string;
}) {
  return (
    <div className={cn("w-full overflow-auto rounded-xl border bg-card", className)}>
      <table className="w-full text-sm text-left">
        <thead className="bg-muted text-muted-foreground uppercase text-xs font-semibold tracking-wider">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-6 py-4 border-b">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y text-foreground/90">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-muted/30 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-6 py-4 whitespace-normal align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
