# 🧩 Mini CRM

A modern **frontend CRM dashboard** built with **Next.js**, **React**, and **Tailwind CSS**.  
This project focuses on managing and visualizing campaign data — allowing users to create, edit, and track marketing campaigns with real-time updates on the dashboard.

---

## 📸 Application Screenshots

| Dashboard | Campaigns | Create Campaign |
|------------|------------|----------------|
<img width="1919" height="838" alt="Screenshot_1" src="https://github.com/user-attachments/assets/f8dfebc4-fe45-4cc2-a712-7f2f26e77c61" />
<img width="1919" height="820" alt="Screenshot_2" src="https://github.com/user-attachments/assets/38cd6812-31d0-4502-b446-57ab5ff4f999" />
<img width="1919" height="827" alt="Screenshot_17" src="https://github.com/user-attachments/assets/ad43d44f-1e48-440d-be85-b8c56f57a6a5" />




---

## 🧠 Overview

**Mini CRM** provides a simplified, responsive dashboard where users can manage their campaigns efficiently.  
The system displays live statistics, charts, and tables reflecting campaign performance, helping teams visualize their marketing data in real time.

---

## 🔥 Features

- 📊 **Interactive Dashboard**
  - Summary cards showing campaign metrics
  - Dynamic Recharts graph for visual analytics

- 🗂️ **Campaign Management**
  - Create, edit (inline), and delete campaigns
  - Real-time updates reflected in dashboard and charts

- 🧾 **Create Campaign Modal**
  - Add new campaign details (Name, Type, Description)
  - Auto-sync with summary cards and campaign table

- 📱 **Responsive UI**
  - Built with Tailwind CSS and Radix UI components
  - Works seamlessly on desktop and mobile devices

- 🔔 **Notifications**
  - Integrated with React Hot Toast for instant feedback

---

## ⚙️ Tech Stack

### 🎨 Frontend

| Technology | Description |
|-------------|-------------|
| **Framework** | Next.js 16 (React 19) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4 |
| **UI Components** | Radix UI + Lucide Icons |
| **Forms & Validation** | React Hook Form + Zod |
| **Charts** | Recharts 3 |
| **Notifications** | React Hot Toast |
| **Utilities** | UUID, Tailwind Merge, Class Variance Authority |

---

## 🚀 Setup Instructions

Follow these steps to run the frontend locally:

Open cmd and then run these commands

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Ritikbadhan/Mini-CRM.git

# 2️⃣ Navigate into the frontend directory
cd Mini-CRM

# 3️⃣ Install dependencies
npm install --legacy-peer-deps

# 4️⃣ Start the development server
npm run dev
```

After starting, visit:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 🧱 Project Structure

```
src/
│
├── app/
│   ├── campaigns/
│   │   ├── create/
│   │   │   └── page.tsx           # Create Campaign Page
│   │   └── page.tsx               # Campaigns Listing Page
│   ├── components/
│   │   ├── CampaignTable.tsx      # Campaigns Table
│   │   ├── EmailPerformanceChart.tsx  # Recharts Performance Graph
│   │   ├── Sidebar.tsx            # App Sidebar Navigation
│   │   └── SummaryCard.tsx        # Dashboard Cards
│   ├── favicon.ico
│   ├── globals.css                # Global Styles
│   ├── layout.tsx                 # Root Layout
│   └── page.tsx                   # Dashboard Page
│
├── components/                    # Shared Components
├── data/
│   └── dashboardData.ts           # Static Dashboard Data
│
├── lib/
│   ├── models/                    # Type Models
│   └── utils.ts                   # Utility Functions
│
├── schemas/                       # Validation Schemas
└── .gitignore
```

---

## 📈 Workflow

1. Open the **Dashboard** to view campaign performance metrics.  
2. Navigate to **Campaigns** to manage existing campaigns.  
3. Click **Create New Campaign** to add a new one.  
4. Dashboard and chart update automatically upon each change.

---

## 🧾 License

This project is open source and available under the **MIT License**.
