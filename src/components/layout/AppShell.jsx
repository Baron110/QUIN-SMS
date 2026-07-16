import { useState } from 'react'
import Sidebar from './Sidebar.jsx'
import TopBar from './TopBar.jsx'

export default function AppShell({ children, searchPlaceholder }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-base">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <TopBar searchPlaceholder={searchPlaceholder} onMenuClick={() => setSidebarOpen(true)} />
      <main className="lg:ml-[280px] pt-20 sm:pt-24 px-4 sm:px-6 lg:px-container-desktop pb-container-desktop">
        {children}
      </main>
    </div>
  )
}