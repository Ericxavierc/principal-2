import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Clock, Camera, Gift, MessageCircle, Star, Check, ArrowRight, Users, Phone } from 'lucide-react';
import './App.css';

// Importando as novas imagens dos modelos
import modeloMariaJoao from './assets/modelo_maria_joao.png';
import modeloOriginalCasamento from './assets/modelo_original_casamento.jpeg';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const whatsappNumber = "5571996435116";
  const whatsappMessage = "Olá! Gostaria de criar um site de casamento personalizado. Pode me ajudar?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const scrollToModelos = () => {
    const modelosSection = document.getElementById('modelos-section');
    if (modelosSection) {
      modelosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const beneficios = [
    {
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      titulo: "Página Personalizada",
      descricao: "Nome do casal e história de amor única, contada de forma emocionante"
    },
    {
      icon: <MapPin className="w-8 h-8 text-rose-500" />,
      titulo: "Informações Completas",
      descricao: "Local, horário, traje e mapa interativo para facilitar a vida dos convidados"
    },
    {
      icon: <Clock className="w-8 h-8 text-rose-500" />,
      titulo: "Contagem Regressiva",
      descricao: "Crie expectativa com uma contagem regressiva dinâmica para o grande dia"
    },
    {
      icon: <Camera className="w-8 h-8 text-rose-500" />,
      titulo: "Galeria de Momentos",
      descricao: "Compartilhe fotos e vídeos especiais da jornada do casal"
    },
    {
      icon: <Gift className="w-8 h-8 text-rose-500" />,
      titulo: "Lista de Presentes",
      descricao: "Links diretos para lojas ou PIX, de forma elegante e prática"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-rose-500" />,
      titulo: "RSVP Online",
      descricao: "Confirmação de presença simplificada e WhatsApp direto com os noivos"
    }
  ];

  const modelos = [
    {
      nome: "Maria & João",
      subtitulo: "Nosso Casamento",
      imagem: modeloMariaJoao,
      descricao: "Site elegante e clássico com contagem regressiva e design romântico",
      caracteristicas: ["Contagem regressiva em tempo real", "Design romântico e elegante", "Informações completas do evento", "Confirmação de presença online"],
      link: "https://dainty-selkie-987f79.netlify.app/"
    },
    {
      nome: "Ana & Carlos",
      subtitulo: "Nosso Amor",
      imagem: modeloOriginalCasamento,
      descricao: "Site elegante com contagem regressiva e design sofisticado",
      caracteristicas: ["Contagem regressiva em tempo real", "Design sofisticado e moderno", "Seções organizadas e claras", "Interface intuitiva e responsiva"],
      link: "https://ericxavierc.github.io/original-casamento/"
    }
  ];

  const depoimentos = [
    {
      nome: "Marina Oliveira",
      profissao: "Arquiteta",
      texto: "Quando decidimos fazer nosso site de casamento, não imaginávamos como seria prático e emocionante! Nossos convidados adoraram poder ver nossa história de amor e ter todas as informações do casamento em um só lugar.",
      estrelas: 5
    },
    {
      nome: "Camila Santos",
      profissao: "Professora de Música",
      texto: "Como somos músicos, queríamos algo que refletisse nossa personalidade. O site ficou perfeito! A galeria de fotos com nossos momentos musicais emocionou todos os convidados.",
      estrelas: 5
    },
    {
      nome: "Juliana Costa",
      profissao: "Advogada",
      texto: "Eu sou bem detalhista e o Thiago é mais descontraído, então precisávamos de algo que funcionasse para os dois estilos. O site conseguiu unir perfeitamente nossa personalidade!",
      estrelas: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-rose-500" />
              <span className="text-2xl font-bold text-gray-800">Sites de Casamento</span>
            </div>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-full transition-colors text-sm whitespace-nowrap"
            >
              Quero Meu Site Agora!
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Seu Casamento Merece um Site
              <span className="text-rose-500 block">Tão Único Quanto Sua História</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Chega de complicações! Centralize todas as informações do seu grande dia, 
              compartilhe sua história de amor e facilite a vida dos seus convidados com um site personalizado.
            </p>
            
            {/* Seção de Preço Promocional */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-2xl mb-8 max-w-2xl mx-auto shadow-2xl">
              <div className="text-sm font-semibold mb-2">🔥 OFERTA ESPECIAL - APENAS HOJE!</div>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-2xl line-through opacity-70">R$ 600,00</span>
                <span className="text-5xl font-bold">R$ 199,00</span>
              </div>
              <div className="text-lg font-semibold mb-2">💥 ECONOMIA DE R$ 401,00!</div>
              <div className="text-sm opacity-90">⏰ Restam apenas 12 vagas com este preço!</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToModelos}
                className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center"
              >
                Ver Modelos <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                Falar Conosco
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Por que ter um site de casamento */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Por Que Ter um Site de Casamento?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Imagine um espaço digital exclusivo onde cada detalhe do seu amor é celebrado. 
              Muito mais que uma página na internet, é uma extensão da sua celebração.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="mb-4">{beneficio.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{beneficio.titulo}</h3>
                <p className="text-gray-600">{beneficio.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelos de Sites */}
      <section id="modelos-section" className="py-20 px-6 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Modelos de Site
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Cada casal é único, e seu site também será! Nossos modelos são apenas um ponto de partida. 
              Criamos um site 100% personalizado para você, com a paleta de cores e o estilo que você sempre sonhou, 
              tornando cada detalhe uma extensão da sua história de amor.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {modelos.map((modelo, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img src={modelo.imagem} alt={modelo.nome} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{modelo.nome}</h3>
                  <p className="text-rose-500 font-semibold mb-4">{modelo.subtitulo}</p>
                  <p className="text-gray-600 mb-6">{modelo.descricao}</p>
                  <ul className="space-y-2 mb-6">
                    {modelo.caracteristicas.map((caracteristica, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Check className="w-4 h-4 text-rose-500 mr-2" />
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={modelo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-full font-semibold transition-colors block text-center"
                  >
                    Ver Modelo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A satisfação dos nossos casais é nossa maior recompensa. 
              Veja o que eles têm a dizer sobre a experiência.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <div key={index} className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl">
                <div className="flex mb-4">
                  {[...Array(depoimento.estrelas)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{depoimento.texto}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{depoimento.nome}</p>
                  <p className="text-gray-600">{depoimento.profissao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que oferecemos */}
      <section className="py-20 px-6 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              O Que Nosso Site de Casamento Oferece
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Máximo de 6 seções essenciais para tornar seu casamento inesquecível
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Heart className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Nossa História de Amor</h3>
              <p className="text-gray-600">Seção dedicada à jornada do casal, personalizada com nomes e momentos especiais.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <MapPin className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Detalhes do Grande Dia</h3>
              <p className="text-gray-600">Local, horário, traje e mapa interativo para facilitar o acesso dos convidados.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Clock className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Contagem Regressiva</h3>
              <p className="text-gray-600">Contagem dinâmica que cria expectativa e lembra o quão perto está o grande dia.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Camera className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Galeria de Momentos</h3>
              <p className="text-gray-600">Espaço para fotos e vídeos do casal, criando um álbum digital emocionante.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Gift className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Presentes e RSVP</h3>
              <p className="text-gray-600">Lista de presentes com links ou PIX e sistema de confirmação de presença online.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <MessageCircle className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fale Conosco</h3>
              <p className="text-gray-600">Link direto para WhatsApp dos noivos para dúvidas e mensagens rápidas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Transforme Seu Sonho em Realidade Digital!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Não deixe que a organização do seu casamento seja um estresse. 
            Com um site personalizado, você terá mais tempo para aproveitar cada momento.
          </p>
          
          {/* Seção de Urgência */}
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-8 rounded-2xl mb-8 max-w-4xl mx-auto shadow-2xl">
            <div className="text-2xl font-bold mb-4">⚡ ÚLTIMAS VAGAS COM DESCONTO! ⚡</div>
            <div className="text-lg mb-4">Apenas R$ 199,00 (ao invés de R$ 600,00)</div>
            <div className="text-sm opacity-90 mb-6">🔥 Esta oferta expira em breve! Não perca!</div>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-500 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold transition-colors inline-flex items-center"
            >
              GARANTIR MINHA VAGA AGORA! <Heart className="ml-2 w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center"
            >
              Criar Meu Site Agora <Heart className="ml-2 w-5 h-5" />
            </a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-8 h-8 text-rose-500" />
            <span className="text-2xl font-bold">Sites de Casamento</span>
          </div>
          <p className="text-gray-400 mb-4">
            Criando sites únicos para histórias de amor especiais
          </p>
          <p className="text-gray-500">
            © 2024 Sites de Casamento. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 animate-pulse"
        aria-label="Falar no WhatsApp"
      >
        <Phone className="w-8 h-8" />
      </a>
    </div>
  );
};

export default App;

