"use client";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import TopNavbar from '@/components/TopNavbar';
import Overlay from "@/components/Overlay";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <html lang="en">
      <body>
        <div className="top-navbar">
          <TopNavbar onMenuClick={() => setSidebarOpen(true)} />
        </div>
          {/* Overlay for click-outside-to-close, only shows on mobile when sidebar is open */}
      <Overlay show={sidebarOpen} onClick={() => setSidebarOpen(false)} />
        <div className="dashboard-layout">
          
            <Sidebar openSidebar={sidebarOpen} onClose={() => setSidebarOpen(false)}/>
         
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}