import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Leaf, Droplet, Shield, TrendingUp, BookOpen, Beaker } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ArticlesSection from '@/components/sections/ArticlesSection';
import SimulatorSection from '@/components/sections/SimulatorSection';
import StatsSection from '@/components/sections/StatsSection';
import PesticidesGuideSection from '@/components/sections/PesticidesGuideSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <PesticidesGuideSection />
        <SimulatorSection />
        <ArticlesSection />
        <section className="agrinho-section bg-gradient-to-r from-primary to-secondary">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Juntos pelo Agro Forte e Futuro Sustentável
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Educação é o caminho para transformar a agricultura em uma força que alimenta o mundo sem comprometer o planeta.
            </p>
            <Button 
              className="agrinho-button bg-white text-primary hover:bg-gray-100"
              size="lg"
            >
              Comece sua Jornada
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
