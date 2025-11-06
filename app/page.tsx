// Install lucide-react icons: npm install lucide-react

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SolutionsGrid from '@/components/SolutionsGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <SolutionsGrid />
      <Footer />
    </main>
  );
}
