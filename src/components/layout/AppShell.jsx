import Sidebar from './Sidebar.jsx'
import TopBar from './TopBar.jsx'

export default function AppShell({ children, searchPlaceholder }) {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body-base">
      <Sidebar />
      <TopBar searchPlaceholder={searchPlaceholder} />
      <main className="ml-[280px] pt-24 px-container-desktop pb-container-desktop">
        {children}
      </main>
    </div>
  )
}
