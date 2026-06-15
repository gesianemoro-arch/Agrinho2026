import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react';

export default function ArticlesSection() {
  const articles = [
    {
      id: 1,
      title: 'Manejo Integrado de Pragas: Uma Abordagem Sustentável',
      excerpt: 'Descubra como o MIP reduz o uso de agrotóxicos mantendo a produtividade. Técnicas naturais e biológicas que protegem o ambiente.',
      category: 'Sustentabilidade',
      author: 'Dr. João Silva',
      date: '15 de junho de 2026',
      readTime: '8 min',
      image: 'from-primary to-primary/80',
    },
    {
      id: 2,
      title: 'Uso Correto de EPIs: Proteção do Agricultor',
      excerpt: 'Guia completo sobre Equipamentos de Proteção Individual. Saiba quais EPIs usar, como usar corretamente e quando substituir.',
      category: 'Segurança',
      author: 'Dra. Maria Santos',
      date: '12 de junho de 2026',
      readTime: '6 min',
      image: 'from-secondary to-secondary/80',
    },
    {
      id: 3,
      title: 'Período de Carência: Por que Respeitar?',
      excerpt: 'Entenda a importância do período de carência para garantir alimentos seguros. Legislação, riscos e melhores práticas.',
      category: 'Legislação',
      author: 'Prof. Carlos Oliveira',
      date: '10 de junho de 2026',
      readTime: '7 min',
      image: 'from-accent to-accent/80',
    },
    {
      id: 4,
      title: 'Recuperação de Áreas Degradadas: Casos de Sucesso',
      excerpt: 'Conheça histórias reais de produtores que recuperaram áreas degradadas e aumentaram sua produtividade de forma sustentável.',
      category: 'Casos de Sucesso',
      author: 'Eng. Agrônoma Paula Costa',
      date: '8 de junho de 2026',
      readTime: '10 min',
      image: 'from-muted to-muted/80',
    },
    {
      id: 5,
      title: 'Tecnologia de Precisão na Agricultura Sustentável',
      excerpt: 'Como drones, sensores e IA estão revolucionando a aplicação de agrotóxicos, reduzindo desperdícios e impactos ambientais.',
      category: 'Tecnologia',
      author: 'Dr. Roberto Ferreira',
      date: '5 de junho de 2026',
      readTime: '9 min',
      image: 'from-primary to-accent',
    },
    {
      id: 6,
      title: 'Educação Ambiental: O Futuro do Agro',
      excerpt: 'Por que a educação é fundamental para transformar a agricultura. O papel das escolas e programas como o Agrinho.',
      category: 'Educação',
      author: 'Profa. Fernanda Gomes',
      date: '1 de junho de 2026',
      readTime: '8 min',
      image: 'from-secondary to-primary',
    },
  ];

  return (
    <section id="articles" className="agrinho-section bg-gradient-to-br from-white via-white to-primary/5">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="agrinho-section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Artigos Educativos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leia artigos aprofundados sobre sustentabilidade, segurança e boas práticas agrícolas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card
              key={article.id}
              className="agrinho-card overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
              style={{
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className={`h-48 bg-gradient-to-br ${article.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="inline-block bg-white/90 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                  {article.excerpt}
                </p>
                <div className="space-y-2 mb-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <User className="w-3 h-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  Ler Artigo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            className="agrinho-button bg-primary hover:bg-primary/90 px-8 py-6 text-lg"
            size="lg"
          >
            Ver Todos os Artigos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
