import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, AlertCircle, Shield, BookOpen } from 'lucide-react';

export default function PesticidesGuideSection() {
  const safetySteps = [
    {
      step: 1,
      title: 'Leitura do Rótulo',
      description: 'Sempre leia completamente o rótulo do agrotóxico antes de usar. Verifique a classificação toxicológica, modo de aplicação e período de carência.',
      icon: BookOpen,
    },
    {
      step: 2,
      title: 'Equipamento de Proteção',
      description: 'Use sempre os EPIs recomendados: luvas, máscara, óculos de proteção, avental impermeável e botas adequadas.',
      icon: Shield,
    },
    {
      step: 3,
      title: 'Calibração de Equipamentos',
      description: 'Calibre corretamente os pulverizadores antes de cada aplicação para garantir a dose exata e evitar desperdícios.',
      icon: CheckCircle,
    },
    {
      step: 4,
      title: 'Condições Climáticas',
      description: 'Aplique apenas com ventos fracos ou inexistentes. Evite aplicação em dias muito quentes ou próximo a chuvas.',
      icon: AlertCircle,
    },
  ];

  const pesticidesTypes = [
    {
      name: 'Inseticidas',
      description: 'Controlam insetos pragas que atacam as plantações',
      examples: 'Controle de pulgões, ácaros, brocas e outros insetos',
      color: 'from-primary to-primary/80',
    },
    {
      name: 'Fungicidas',
      description: 'Previnem e combatem doenças causadas por fungos',
      examples: 'Controle de ferrugem, oídio, antracnose e mofo',
      color: 'from-secondary to-secondary/80',
    },
    {
      name: 'Herbicidas',
      description: 'Eliminam plantas daninhas que competem com a cultura',
      examples: 'Controle de capim-amargoso, trapoeraba e outras invasoras',
      color: 'from-accent to-accent/80',
    },
    {
      name: 'Acaricidas',
      description: 'Combatem ácaros que prejudicam as plantas',
      examples: 'Controle de ácaro-branco, ácaro-rajado e similares',
      color: 'from-muted to-muted/80',
    },
  ];

  const correctPractices = [
    'Respeite sempre o período de carência antes da colheita',
    'Nunca misture agrotóxicos sem orientação técnica',
    'Descarte as embalagens vazias em locais apropriados',
    'Mantenha agrotóxicos longe de crianças e animais',
    'Use apenas para as culturas e pragas indicadas no rótulo',
    'Realize a tríplice lavagem das embalagens',
  ];

  return (
    <section id="guide" className="agrinho-section bg-gradient-to-br from-white via-white to-accent/5">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="agrinho-section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Guia Completo de Agrotóxicos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprenda o uso correto e seguro de agrotóxicos para proteger sua saúde, sua família e o meio ambiente
          </p>
        </div>

        <Tabs defaultValue="safety" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white border border-border">
            <TabsTrigger value="safety" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Segurança
            </TabsTrigger>
            <TabsTrigger value="types" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Tipos
            </TabsTrigger>
            <TabsTrigger value="practices" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Boas Práticas
            </TabsTrigger>
          </TabsList>

          {/* Safety Tab */}
          <TabsContent value="safety" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {safetySteps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="agrinho-card p-6 border-l-4 border-l-primary"
                    style={{
                      animation: `fadeInUp 0.6s ease-out forwards`,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            Passo {item.step}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Types Tab */}
          <TabsContent value="types" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pesticidesTypes.map((type, index) => (
                <Card
                  key={index}
                  className="agrinho-card overflow-hidden"
                  style={{
                    animation: `fadeInUp 0.6s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className={`h-2 bg-gradient-to-r ${type.color}`}></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {type.name}
                    </h3>
                    <p className="text-foreground font-medium mb-3">
                      {type.description}
                    </p>
                    <div className="bg-accent/10 rounded-lg p-3">
                      <p className="text-sm text-muted-foreground">
                        <strong>Exemplos:</strong> {type.examples}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Practices Tab */}
          <TabsContent value="practices" className="space-y-6">
            <Card className="agrinho-card p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Checklist de Boas Práticas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {correctPractices.map((practice, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-foreground text-sm">
                      {practice}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="agrinho-card p-6 border-l-4 border-l-secondary bg-secondary/5">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-secondary mb-2">
                    Importante: Período de Carência
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    O período de carência é o intervalo mínimo entre a aplicação do agrotóxico e a colheita. Respeitar este período é essencial para garantir que o alimento não contenha resíduos acima do permitido. Consulte sempre o rótulo do produto.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
