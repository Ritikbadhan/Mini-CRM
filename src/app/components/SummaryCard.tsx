"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SummaryCardProps } from "@/lib/models/summaryCardInterFace";

export default function SummaryCard({ title, value }: SummaryCardProps) {
  return (
    <Card
      className="
        bg-white dark:bg-gray-900 
        rounded-xl 
        shadow-sm 
        border border-transparent
        hover:border-blue-500/40
        hover:shadow-md 
        transition-all 
        duration-300 
        ease-in-out 
        cursor-pointer
        hover:-translate-y-1
      "
    >
      <CardContent className="p-4 text-center">
        <h3 className="text-gray-600 dark:text-gray-400 font-medium">
          {title}
        </h3>
        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">
          {value}
        </p>
      </CardContent>
    </Card>
  );
}
