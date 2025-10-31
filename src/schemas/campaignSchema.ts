import { z } from "zod";

export const campaignSchema = z.object({
    name: z.string().min(1, "Name is required"),
    type: z.enum(["Email", "WhatsApp"]),
    description: z.string().min(5, "Description is too short"),
});

export type CampaignFormData = z.infer<typeof campaignSchema>;
