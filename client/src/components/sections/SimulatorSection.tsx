import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

export default function SimulatorSection() {
  const [cropType, setCropType] = useState('soja');
  const [pestType, setPestType] = useState('herbicida');
  const [dosage, setDosage] = useState(50);
  const [weather, setWeather] = useState('ideal');
  const [epiUsage, setEpiUsage] = useState(false);
  const [result, setResult] = useState<'safe' | 'warning' | 'danger' | null>(null);

  const crops = [
    { value: 'soja', label: 'Soja' },
    { value: 'milho', label: 'Milho' },
    { value: 'arroz', label: 'Arroz' },
    { value: 'feijao', label: 'Feijão' },
  ];

  const pesticides = [
    { value: 'herbicida', label: 'Herbicida' },
    { value: 'inseticida', label: 'Inseticida' },
    { value: 'fungicida', label: 'Fungicida' },
  ];

  const weatherOptions = [
    { value: 'ideal', label: 'Ideal (sem vento, 20-25°C)' },
    { value: 'warning', label: 'Aceitável (vento leve)' },
    { value: 'danger', label: 'Inadequado (vento forte, chuva)' },
  ];

  const runSimulation = () => {
    let simulationResult: 'safe' | 'warning' | 'danger' = 'safe';

    if (!epiUsage) {
      simulationResult = 'danger';
    } else if (dosage > 100 || weather === 'danger') {
      simulationResult = 'warning';
    } else if (weather === 'warning') {
      simulationResult = 'warning';
    }

    setResult(simulationResult);
  };

  const getResultInfo = () => {
    switch (result) {
      case 'safe':
        return {
          icon: CheckCircle,
          title: 'Aplicação Segura',
          message: 'Condições ideais para aplicação. Siga o protocolo de segurança e respeite o período de carência.',
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
        };
      case 'warning':
        return {
          icon: AlertTriangle,
          title: 'Atenção Requerida',
          message: 'Condições aceitáveis, mas com ressalvas. Revise os parâmetros e considere adiar se possível.',
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
        };
      case 'danger':
        return {
          icon: AlertCircle,
          title: 'Aplicação Não Recomendada',
          message: 'Condições inadequadas para aplicação. Não prossiga até que todas as condições sejam atendidas.',
          color: 'text-red-600',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
        };
      default:
        return null;
    }
  };

  const resultInfo = getResultInfo();
  const ResultIcon = resultInfo?.icon;

  return (
    <section id="simulator" className="agrinho-section bg-white">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="agrinho-section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Simulador de Aplicação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Teste diferentes cenários e aprenda as melhores práticas para aplicação segura de agrotóxicos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="agrinho-card p-8 border-2 border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-6">Configure a Simulação</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Cultura
                </label>
                <Select value={cropType} onValueChange={setCropType}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {crops.map((crop) => (
                      <SelectItem key={crop.value} value={crop.value}>
                        {crop.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Tipo de Agrotóxico
                </label>
                <Select value={pestType} onValueChange={setPestType}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {pesticides.map((pest) => (
                      <SelectItem key={pest.value} value={pest.value}>
                        {pest.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Dosagem: {dosage}% da Recomendada
                </label>
                <Slider
                  value={[dosage]}
                  onValueChange={(value) => setDosage(value[0])}
                  min={0}
                  max={150}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>0%</span>
                  <span>100% (Ideal)</span>
                  <span>150%</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Condições Climáticas
                </label>
                <Select value={weather} onValueChange={setWeather}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {weatherOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={epiUsage}
                    onChange={(e) => setEpiUsage(e.target.checked)}
                    className="w-5 h-5 rounded border-primary cursor-pointer"
                  />
                  <span className="text-sm font-semibold text-foreground">
                    Usando todos os EPIs recomendados?
                  </span>
                </label>
                <p className="text-xs text-muted-foreground mt-2 ml-8">
                  Luvas, máscara, óculos, avental impermeável e botas
                </p>
              </div>
              <Button
                onClick={runSimulation}
                className="agrinho-button bg-primary hover:bg-primary/90 w-full py-6 text-lg font-semibold"
              >
                Executar Simulação
              </Button>
            </div>
          </Card>
          <div className="flex flex-col justify-center">
            {result ? (
              <Card
                className={`agrinho-card p-8 border-2 ${resultInfo?.borderColor} ${resultInfo?.bgColor}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  {ResultIcon && (
                    <ResultIcon className={`w-8 h-8 ${resultInfo?.color} flex-shrink-0 mt-1`} />
                  )}
                  <div>
                    <h3 className={`text-2xl font-bold ${resultInfo?.color} mb-2`}>
                      {resultInfo?.title}
                    </h3>
                    <p className="text-foreground">
                      {resultInfo?.message}
                    </p>
                  </div>
                </div>

                {/* Detailed Results */}
                <div className="mt-6 pt-6 border-t border-current/20 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-foreground">Cultura:</span>
                    <span className="text-muted-foreground capitalize">
                      {crops.find((c) => c.value === cropType)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-foreground">Agrotóxico:</span>
                    <span className="text-muted-foreground capitalize">
                      {pesticides.find((p) => p.value === pestType)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-foreground">Dosagem:</span>
                    <span className={`font-semibold ${
                      dosage === 100 ? 'text-green-600' : dosage > 100 ? 'text-red-600' : 'text-yellow-600'
                    }`}>
                      {dosage}%
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-foreground">EPIs:</span>
                    <span className={`font-semibold ${epiUsage ? 'text-green-600' : 'text-red-600'}`}>
                      {epiUsage ? 'Sim' : 'Não'}
                    </span>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="agrinho-card p-8 border-2 border-border/50 text-center">
                <p className="text-muted-foreground text-lg">
                  Configure os parâmetros e clique em Executar Simulação para ver os resultados
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
