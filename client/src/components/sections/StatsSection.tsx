import { TrendingUp, Leaf, Droplet, Shield } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: Leaf,
      title: 'Produção Sustentável',
      value: '20%',
      description: 'Aumento de produtividade com práticas sustentáveis',
      color: 'from-primary to-accent',
    },
    {
      icon: Droplet,
      title: 'Economia de Água',
      value: '40%',
      description: 'Redução no consumo de água com manejo correto',
      color: 'from-secondary to-blue-600',
    },
    {
      icon: Shield,
      title: 'Segurança',
      value: '99%',
      description: 'Proteção ao agricultor com uso correto de EPIs',
      color: 'from-muted to-orange-500',
    },
    {
      icon: TrendingUp,
      title: 'Rentabilidade',
      value: '35%',
      description: 'Aumento de renda com práticas responsáveis',
      color: 'from-accent to-green-600',
    },
  ];

  return (
    <section className="agrinho-section bg-white">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="agrinho-section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Impacto da Sustentabilidade
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dados comprovam que o equilíbrio entre produção e preservação ambiental gera resultados positivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="agrinho-card group"
                style={{
                  animation: `fadeInUp 0.6s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className={`bg-gradient-to-br ${stat.color} p-4 rounded-lg mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </h3>
                <h4 className="font-semibold text-foreground mb-2">
                  {stat.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
