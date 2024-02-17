"use client";

import "@smastrom/react-rating/style.css";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { AIModel } from "@/models/ai-model";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { Rating } from "../rating";
import { getModelIcon } from "@/lib/getModelIcon";
import { getModelName } from "@/lib/getModelName";

const noop = () => {};

export const columns: ColumnDef<AIModel>[] = [
  {
    accessorKey: "model",
    header: ({ column }) => (
      <DataTableColumnHeader className="w-40" column={column} title="Model" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2 w-40">
        {getModelIcon(row.getValue("model"))}
        <span>{getModelName(row.getValue("model"))}</span>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "version",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="text-center"
        title="Versions"
      />
    ),
    cell: ({ row }) => (
      <div className="text-center text-sm">v{row.getValue("version")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "license",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="text-center"
        title="License"
      />
    ),
    cell: ({ row }) => (
      <div className="text-center text-sm">{row.getValue("license")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "contributors",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-center"
        column={column}
        title="Contributors"
      />
    ),
    cell: ({ row }) => {
      const contributors: string[] = row.getValue("contributors");
      return (
        <div className="relative flex items-center justify-center -space-x-16">
          {contributors.map((contributor, index) => {
            const leftOffset = index * 16;

            return (
              <Avatar key={index}>
                <AvatarImage
                  src={`/contributors/${contributor}.png`}
                  alt={contributor}
                  style={{ left: `${leftOffset}rem` }}
                />
                <AvatarFallback>{contributor}</AvatarFallback>
              </Avatar>
            );
          })}
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "rating",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="text-center"
        title="Ratings"
      />
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Rating count={row.getValue('rating')} onRatingChange={noop} />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
