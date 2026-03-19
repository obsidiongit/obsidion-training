import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import ProgressTracker from '@/components/ProgressTracker';

export default function PlaybookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <ProgressTracker />
      <Sidebar />
      <div className="md:pl-64 flex flex-col min-h-screen pt-16 md:pt-0">
        <Topbar />
        <main className="flex-1 w-full max-w-5xl mx-auto p-4 sm:p-6 md:p-10 lg:p-12">
          {children}
        </main>
      </div>
    </div>
  );
}
