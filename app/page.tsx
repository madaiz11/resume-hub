import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ResumeClient } from "./resume-client";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-8 px-4">
          <ResumeClient />
        </div>
      </main>
      <Footer />
    </div>
  );
}