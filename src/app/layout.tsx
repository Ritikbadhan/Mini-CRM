import "./globals.css";
import Sidebar from "./components/Sidebar";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Campaign Manager",
  description: "Mini Campaign Manager App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-8">{children}</main>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
