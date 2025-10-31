export interface EmailData {
  name: string;
  type: string;
  id: string;
  status: string;
  sent: number;
  replies: number;
  createdAt: string;
}

export interface EmailPerformanceChartProps {
  data: EmailData[];
}