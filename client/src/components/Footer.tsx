import { Leaf, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5" />
              <h3 className="text-lg font-bold">Agrinho</h3>
            </div>
            <p className="text-sm opacity-90">
              Educação para um agro forte e futuro sustentável. Equilibrando produção e meio ambiente.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:opacity-80 transition-opacity">Início</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Artigos</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Simulador</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:opacity-80 transition-opacity">Guia de Agrotóxicos</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Boas Práticas</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Legislação</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>contato@agrinho.edu.br</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>+55 (41) 3000-0000</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Paraná, Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>&copy; 2026 Agrinho. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacidade</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Termos</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
