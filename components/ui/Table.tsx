import React from 'react';

export interface TableColumn<T> {
  key: string;
  header: string;
  render?: (row: T, index: number) => React.ReactNode;
  className?: string;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  rowKey?: (row: T, index: number) => string;
  empty?: React.ReactNode;
  compact?: boolean;
}

export default function Table<T extends Record<string, unknown>>({
  columns,
  data,
  rowKey = (_, index) => String(index),
  empty,
  compact = false,
}: TableProps<T>) {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-[#DCE5F2] bg-white">
      <table className="w-full min-w-[640px] text-left">
        <thead className="bg-[#F5F8FF] border-b border-[#DCE5F2]">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={`px-4 ${compact ? 'py-2.5' : 'py-3.5'} text-xs font-semibold uppercase tracking-wider text-[#64748B] ${column.className || ''}`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#EEF2F7]">
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr key={rowKey(row, index)} className="hover:bg-[#F8FAFF] transition-colors">
                {columns.map((column) => (
                  <td key={column.key} className={`px-4 ${compact ? 'py-2.5' : 'py-3.5'} text-sm text-[#172033] ${column.className || ''}`}>
                    {column.render ? column.render(row, index) : String(row[column.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="px-4 py-12 text-center text-sm text-[#64748B]">
                {empty || 'Belum ada data.'}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
