"use client";

import { useEffect, useState } from "react";
import SummaryCard from "./components/SummaryCard";
import EmailPerformanceChart from "./components/EmailPerformanceChart";
import { EmailData } from "@/lib/models/emailInterface";
import { Campaign } from "@/lib/models/campaignInterface";

export default function DashboardPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [summary, setSummary] = useState({
    activeCampaigns: 0,
    emailsSent: 0,
    replies: 0,
    meetingsBooked: 0,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedCampaigns = localStorage.getItem("campaigns");
    if (storedCampaigns) {
      const parsed: Campaign[] = JSON.parse(storedCampaigns);

      const activeCampaigns = parsed.filter(
        (c) => c.status === "Active"
      ).length;
      const emailsSent = parsed.reduce((sum, c) => sum + (c.sent || 0), 0);
      const replies = parsed.reduce((sum, c) => sum + (c.replies || 0), 0);
      const meetingsBooked = parsed.reduce(
        (sum, c) => sum + (c.meeting || 0),
        0
      );

      setTimeout(() => {
        setCampaigns(parsed);
        setSummary({ activeCampaigns, emailsSent, replies, meetingsBooked });
      }, 0);
    }
  }, []);

  const emailData: EmailData[] = campaigns.map((c) => ({
    name: c.name,
    type: c.type,
    id: c.id,
    status: c.status,
    sent: c.sent,
    replies: c.replies,
    createdAt: c.createdAt,
  }));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <SummaryCard title="Active Campaigns" value={summary.activeCampaigns} />
        <SummaryCard title="Emails Sent" value={summary.emailsSent} />
        <SummaryCard title="Replies" value={summary.replies} />
        <SummaryCard title="Meetings Booked" value={summary.meetingsBooked} />
      </div>

      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md transition-colors">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Email Performance
        </h2>
        <EmailPerformanceChart data={emailData} />
      </div>
    </div>
  );
}
