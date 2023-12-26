"use client";

import { ChangeEvent, useEffect, useState } from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useToast } from "@/components/ui/use-toast";

type Task = {
  id: number;
  title: string;
  priority: string;
  date: string;
};

type Option = {
  label: string;
  value: string;
};

const TableCell = ({ getValue, row, column, table }: any) => {
  const { toast } = useToast();
  const initialValue = getValue();
  const columnMeta = column.columnDef.meta;
  const tableMeta = table.options.meta;
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onBlur = () => {
    tableMeta?.updateData(row.index, column.id, value);
    toast({
      title: "Changes Saved!",
      description: "You successfully edited the task.",
    });
  };

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    tableMeta?.updateData(row.index, column.id, e.target.value);
    toast({
      title: "Changes Saved!",
      description: "You successfully changed priority of the task.",
    });
  };

  return columnMeta?.type === "select" ? (
    <select
      className="bg-white w-[70px] md:w-[130px] outline-none"
      onChange={onSelectChange}
      value={initialValue}
    >
      {columnMeta?.options?.map((option: Option) => (
        <option key={option.value} value={option.value}>
          {option.label}{" "}
        </option>
      ))}
    </select>
  ) : (
    <input
      className=" w-[70px] md:w-[130px] bg-white"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      type={column.columnDef.meta?.type || "text"}
    />
  );
};

const columnHelper = createColumnHelper<Task>();
const columns = [
  columnHelper.accessor("id", {
    header: "Task ID",
    cell: TableCell,
    meta: {
      type: "number",
    },
  }),
  columnHelper.accessor("title", {
    header: "Task Name",
    cell: TableCell,
    meta: {
      type: "text",
    },
  }),
  columnHelper.accessor("date", {
    header: "Date",
    cell: TableCell,
    meta: {
      type: "date",
    },
  }),
  columnHelper.accessor("priority", {
    header: "Priority",
    cell: TableCell,
    meta: {
      type: "select",
      options: [
        { value: "Low", label: "Low" },
        { value: "High", label: "High" },
        { value: "Urgent", label: "Urgent" },
      ],
    },
  }),
];

interface TableProps {
  array: Task[];
}

export const Table: React.FC<TableProps> = ({ array }) => {
  const [data, setData] = useState(()=>[...array]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (rowIndex: number, columnId: string, value: string) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              };
            }
            return row;
          })
        );
      },
    },
  });

  useEffect(() => {
    setData([...array]);
  }, [array]);

  return data && data.length > 0 ? (
    <>
      <table className="border-collapse text-center text-xs md:text-base border m-2 md:m-6 bg-white">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="border-b" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="text-center md:px-10 md:py-2 p-1"
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className=" text-center p-2" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* <pre>{JSON.stringify(data, null, "\t")}</pre> */}
    </>
  )
  : null
};
