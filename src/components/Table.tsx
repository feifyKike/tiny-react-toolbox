'use client';

import { TableRow } from "../lib/components/table";

interface TableProps {
  headers: string[];
  rows: TableRow[];
  headersStyling?: string;
  rowsStyling?: string;
  indexCols?: boolean
}

const Table = ({headers, rows, headersStyling, rowsStyling, indexCols = false}: TableProps) => {
  const displayHeaders = indexCols ? [' ', ...headers] : headers;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className={headersStyling && headersStyling.length > 0 ? headersStyling : 'bg-gray-200'}>
            {
              displayHeaders.map((header, idx) => <th key={idx} className="px-4 py-2 border-b text-left">{header}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            rows.map((row, idx) => {
              const displayCols = indexCols
              ? [(idx + 1).toString(), ...row.columns]
              : row.columns;
              return (
                <tr key={idx} className={rowsStyling && rowsStyling.length > 0 ? rowsStyling : 'bg-white'}>
                  {
                    displayCols.map((col, idx) => <td key={idx} className="px-4 py-2 border-b">{col}</td>)
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table;