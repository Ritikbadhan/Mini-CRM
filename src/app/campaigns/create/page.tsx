"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { campaignSchema, CampaignFormData } from "@/schemas/campaignSchema";
import { showSuccess, showError } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function CreateCampaignPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CampaignFormData>({
    resolver: zodResolver(campaignSchema),
  });

  const onSubmit = (data: CampaignFormData) => {
    try {
      const newCampaign = {
        ...data,
        id: uuidv4(),
        status: "Active",
        sent: 0,
        replies: 0,
        createdAt: new Date().toLocaleDateString(),
      };

      const prev = JSON.parse(localStorage.getItem("campaigns") || "[]");
      localStorage.setItem("campaigns", JSON.stringify([...prev, newCampaign]));

      showSuccess("Campaign created successfully!");
      router.push("/campaigns");
    } catch (err) {
      console.error(err);
      showError("Something went wrong while saving campaign");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        Create New Campaign
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Label htmlFor="name">Campaign Name</Label>
          <div style={{ marginTop: "8px" }}>
            <Input
              id="name"
              {...register("name")}
              placeholder="Enter campaign name"
              className={errors.name ? "border-red-500" : ""}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm" style={{ marginTop: "4px" }}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Label htmlFor="type">Type</Label>
          <select
            style={{ marginTop: "8px" }}
            id="type"
            {...register("type")}
            className="w-full mt-2 p-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select type</option>
            <option value="Email">Email</option>
            <option value="WhatsApp">WhatsApp</option>
          </select>
          {errors.type && (
            <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
          )}
        </div>

        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Label htmlFor="description">Description</Label>
          <div style={{ marginTop: "8px" }}>
            <Textarea
              id="description"
              {...register("description")}
              rows={4}
              placeholder="Describe your campaign"
              className={errors.description ? "border-red-500" : ""}
            />
          </div>
          {errors.description && (
            <p className="text-red-500 text-sm" style={{ marginTop: "4px" }}>
              {errors.description.message}
            </p>
          )}
        </div>

        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Button type="submit" className="w-full">
            Create Campaign
          </Button>
        </div>
      </form>
    </div>
  );
}
