"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Campaign } from "@/lib/models/campaignInterface";

export function CampaignTable() {
  const [rows, setRows] = useState<Campaign[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedCampaigns = localStorage.getItem("campaigns");
    if (storedCampaigns) {
      setTimeout(() => setRows(JSON.parse(storedCampaigns) as Campaign[]), 0);
    }
  }, []);

  const handleDelete = (id: string) => {
    const updated = rows.filter((r) => r.id !== id);
    setRows(updated);
    localStorage.setItem("campaigns", JSON.stringify(updated));
  };

  const handleChange = (
    id: string,
    field: keyof Campaign,
    value: string | number
  ) => {
    const updated = rows.map((r) =>
      r.id === id ? { ...r, [field]: value } : r
    );
    setRows(updated);
    localStorage.setItem("campaigns", JSON.stringify(updated));
  };

  const typeOptions = ["Email", "WhatsApp"];
  const statusOptions = ["Active", "Inactive", "Paused"];

  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow className="bg-gray-100 dark:bg-gray-800">
            <TableHead className="p-3 text-left">Name</TableHead>
            <TableHead className="p-3 text-left">Type</TableHead>
            <TableHead className="p-3 text-left">Status</TableHead>
            <TableHead className="p-3 text-left">Sent</TableHead>
            <TableHead className="p-3 text-left">Replies</TableHead>
            <TableHead className="p-3 text-left">Meeting</TableHead>
            <TableHead className="p-3 text-left">Created At</TableHead>
            <TableHead className="p-3 text-left">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.length > 0 ? (
            rows.map((c, idx) => (
              <TableRow
                key={c.id}
                className={`transition-all duration-200 hover:bg-blue-50 dark:hover:bg-gray-700 ${
                  idx % 2 === 0
                    ? "bg-white dark:bg-gray-900"
                    : "bg-gray-50 dark:bg-gray-800"
                }`}
              >
                <TableCell className="p-3">
                  <input
                    type="text"
                    value={c.name}
                    onChange={(e) => handleChange(c.id, "name", e.target.value)}
                    className="bg-transparent w-full focus:outline-none"
                  />
                </TableCell>
                <TableCell className="p-3">
                  <select
                    value={c.type}
                    onChange={(e) => handleChange(c.id, "type", e.target.value)}
                    className="w-full border border-gray-300 rounded px-2 py-1 bg-white dark:bg-gray-800 dark:text-gray-100"
                  >
                    {typeOptions.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </TableCell>
                <TableCell className="p-3">
                  <select
                    value={c.status}
                    onChange={(e) =>
                      handleChange(c.id, "status", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded px-2 py-1 bg-white dark:bg-gray-800 dark:text-gray-100"
                  >
                    {statusOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </TableCell>
                <TableCell className="p-3">
                  <input
                    type="number"
                    value={c.sent}
                    onChange={(e) =>
                      handleChange(c.id, "sent", Number(e.target.value))
                    }
                    className="bg-transparent w-full focus:outline-none"
                  />
                </TableCell>
                <TableCell className="p-3">
                  <input
                    type="number"
                    value={c.replies}
                    onChange={(e) =>
                      handleChange(c.id, "replies", Number(e.target.value))
                    }
                    className="bg-transparent w-full focus:outline-none"
                  />
                </TableCell>
                <TableCell className="p-3">
                  <input
                    type="number"
                    value={c.meeting || 0}
                    onChange={(e) =>
                      handleChange(c.id, "meeting", Number(e.target.value))
                    }
                    className="bg-transparent w-full focus:outline-none"
                  />
                </TableCell>
                <TableCell className="p-3">{c.createdAt}</TableCell>
                <TableCell className="p-3">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(c.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={8}
                className="p-4 text-center text-gray-500 dark:text-gray-400"
              >
                No campaigns found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
