import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Droplet } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary pt-20 pb-32 md:pt-32 md:pb-48">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-muted/20 rounded-full -ml-40 -mb-40"></div>

      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8 agrinho-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-accent" />
                <span className="text-accent font-semibold text-sm md:text-base">Educação para o Futuro</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Agro Forte,<br />Futuro Sustentável
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
                Aprenda sobre o equilíbrio entre produção agrícola e preservação ambiental. Descubra como usar agrotóxicos de forma segura e responsável.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-6 text-base flex items-center justify-center gap-2 group"
                size="lg"
              >
                Começar Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base"
                size="lg"
              >
                Saiba Mais
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-white/20">
              <div>
                <p className="text-3xl font-bold text-accent">500+</p>
                <p className="text-white/80 text-sm">Estudantes Engajados</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">50+</p>
                <p className="text-white/80 text-sm">Artigos Educativos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">100%</p>
                <p className="text-white/80 text-sm">Gratuito e Acessível</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center relative h-96">
            <div className="relative w-full h-full">
              {/* Floating Cards */}
              <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-md rounded-2xl p-6 w-64 border border-white/20 shadow-xl agrinho-hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <Leaf className="w-6 h-6 text-accent" />
                  <h3 className="font-semibold text-white">Sustentabilidade</h3>
                </div>
                <p className="text-sm text-white/80">Práticas que preservam o meio ambiente</p>
              </div>

              <div className="absolute bottom-12 left-0 bg-white/10 backdrop-blur-md rounded-2xl p-6 w-64 border border-white/20 shadow-xl agrinho-hover-lift" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3 mb-3">
                  <Droplet className="w-6 h-6 text-muted" />
                  <h3 className="font-semibold text-white">Uso Seguro</h3>
                </div>
                <p className="text-sm text-white/80">Aplicação correta de agrotóxicos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
