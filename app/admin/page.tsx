import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AdminDashboardClient } from "./admin-client";

export default function AdminPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
          <AdminDashboardClient />
        </div>
      </main>
      <Footer />
    </div>
  );
}