"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CampaignTable } from "../components/CampaignTable";

export default function CampaignsPage() {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Campaigns</h1>
        <Button onClick={() => router.push("/campaigns/create")}>
          + Create New Campaign
        </Button>
      </div>
      <CampaignTable />
    </div>
  );
}
