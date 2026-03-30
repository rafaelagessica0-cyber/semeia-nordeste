import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Store, ShoppingBag, Sun, Moon, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// --- ESTRUTURA DE DADOS DO CARROSSEL ---
const SLIDES_DESTAQUE = [
  { 
    id: 1, 
    tipo: "SAFRA DO MÊS",
    titulo: "A melhor época para comprar manga",
    subtitulo: "Produtos frescos e com preços especiais direto do produtor.",
    img: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=2000", 
    corDestaque: "text-[#F28C28]" 
  },
  { 
    id: 2, 
    tipo: "HISTÓRIA DE SUCESSO",
    titulo: "Como o seu João dobrou a renda com a macaxeira",
    subtitulo: "Conheça a trajetória do agricultor que apostou na venda direta.",
    img: "https://images.unsplash.com/photo-1595974482597-4b8da0879d67?q=80&w=2000", 
    corDestaque: "text-[#B22246]" 
  },
  { 
    id: 3, 
    tipo: "PRÊMIO DE METAS ALCANÇADAS",
    titulo: "Dona Maria ganhou em primeiro lugar nas vendas de artesanato",
    subtitulo: "Valorizamos o esforço de quem leva a cultura nordestina adiante.",
    img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2000", 
    corDestaque: "text-[#C4D663]" 
  }
];

const CATEGORIAS_DB = [
  { nome: 'Hortifruti', cor: 'bg-[#7A7D5C]', icon: 'https://cdn-icons-png.flaticon.com/512/2329/2329903.png' },
  { nome: 'Laticínios', cor: 'bg-[#C4D663]', icon: 'https://cdn-icons-png.flaticon.com/512/2674/2674486.png' },
  { nome: 'Grãos e Farinhas', cor: 'bg-[#BC5434]', icon: 'https://cdn-icons-png.flaticon.com/512/1147/1147560.png' },
  { nome: 'Artesanato', cor: 'bg-[#A65E3F]', icon: 'https://cdn-icons-png.flaticon.com/512/3081/3081918.png' }
];

// --- DADOS DAS HISTÓRIAS ---
const HISTORIAS_DB = [
  {
    id: 1,
    nome: "Seu João",
    local: "Aracaju, SE",
    perfil: "Produtor",
    foto: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=600",
    texto: "Trabalho na terra desde os 12 anos. Com o Semeia, parei de depender de atravessadores e hoje levo minha macaxeira fresquinha direto para as feiras da cidade.",
  },
  {
    id: 2,
    nome: "Dona Maria",
    local: "Olinda, PE",
    perfil: "Artesã",
    foto: "https://images.pexels.com/photos/2162938/pexels-photo-2162938.jpeg?auto=compress&cs=tinysrgb&w=600",
    texto: "Minhas cestas de palha carregam a tradição da minha família. Vender aqui me deu a chance de mostrar meu artesanato para o Brasil inteiro sem sair de casa.",
  }
];

export default function Home() {
  const { isDark, toggleTheme } = useTheme();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES_DESTAQUE.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 flex flex-col items-center ${
      isDark ? 'bg-[#2D3A27]' : 'bg-[#F5F2ED]'
    }`}>
      
      {/* NAVBAR */}
      <header className="w-full bg-white flex justify-center py-2 px-6 border-b border-gray-100 shadow-sm z-50">
        <div className="w-full max-w-7xl flex justify-between items-center">
          <div className="flex items-center">
            <img src="/assets/logo-semeia.png" alt="Semeia Logo" className="h-12 w-auto object-contain antialiased" />
          </div>
          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 text-[#2D3A27] transition-colors">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/login" className="border-2 border-[#2D3A27] bg-[#2D3A27] text-white px-7 py-1.5 rounded-full font-black uppercase text-[10px] tracking-widest transition-all hover:bg-white hover:text-[#2D3A27]">
              Entrar
            </Link>
          </div>
        </div>
      </header>

      {/* CARROSSEL */}
      <section className="w-full relative overflow-hidden h-[450px] md:h-[550px]">
        <div 
          className="flex h-full transition-transform duration-1000 ease-in-out" 
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {SLIDES_DESTAQUE.map((slide) => (
            <div key={slide.id} className="w-full h-full flex-shrink-0 relative group">
              <img src={slide.img} className="w-full h-full object-cover" alt={slide.titulo} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-16 left-0 w-full flex justify-center px-6">
                <div className="w-full max-w-5xl flex flex-col items-start space-y-3">
                  <span className={`font-black uppercase tracking-[0.3em] text-[10px] md:text-xs py-1 px-3 bg-black/40 rounded-full ${slide.corDestaque}`}>
                    {slide.tipo}
                  </span>
                  <h2 className="font-black text-3xl md:text-5xl text-white uppercase italic leading-tight tracking-tight max-w-3xl">
                    {slide.titulo}
                  </h2>
                  <div className="flex flex-col md:flex-row md:items-center gap-4 pt-2 w-full justify-between">
                    <p className="text-sm md:text-base text-white/80 font-medium max-w-xl">
                      {slide.subtitulo}
                    </p>
                    <button className="flex items-center gap-2 text-white font-black uppercase text-[10px] tracking-widest bg-white/10 hover:bg-white/20 py-2.5 px-5 rounded-full transition-all group-hover:gap-3">
                      Saiba Mais <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {SLIDES_DESTAQUE.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-white scale-150 shadow-lg' : 'bg-white/30 hover:bg-white/60'}`} />
          ))}
        </div>
      </section>

      <main className="w-full flex flex-col items-center pt-16">
        {/* TEXTOS DE CHAMADA */}
        <div className="text-center space-y-3 px-6 mb-12">
          <h1 className={`text-3xl md:text-4xl font-black italic uppercase tracking-tight transition-colors duration-500 ${isDark ? 'text-white' : 'text-[#2D3A27]'}`}>
            Conectando quem produz a quem consome
          </h1>
          <p className={`text-sm md:text-base font-medium max-w-lg mx-auto transition-colors duration-500 ${isDark ? 'text-white/70' : 'text-[#2D3A27]/70'}`}>
            A plataforma digital do Nordeste para compra e venda de produtos regionais.
          </p>
        </div>

        {/* BOTÕES DE PERFIL */}
        <div className="flex flex-col md:flex-row gap-6 px-6 mb-20">
          <Link to="/cadastro" className="flex flex-col items-center justify-center bg-[#B22246] text-white border-2 border-[#B22246] p-6 w-60 rounded-[2rem] transition-all hover:bg-white hover:text-[#B22246] shadow-lg group text-center">
            <div className="flex items-center gap-2 mb-1">
              <Store size={18} />
              <span className="font-black uppercase text-sm tracking-widest">Sou vendedor</span>
            </div>
            <span className="text-[9px] font-bold italic opacity-70">Quero anunciar meus produtos</span>
          </Link>
          <Link to="/cadastro" className="flex flex-col items-center justify-center bg-[#F28C28] text-white border-2 border-[#F28C28] p-6 w-60 rounded-[2rem] transition-all hover:bg-white hover:text-[#F28C28] shadow-lg group text-center">
            <div className="flex items-center gap-2 mb-1">
              <ShoppingBag size={18} />
              <span className="font-black uppercase text-sm tracking-widest">Sou comprador</span>
            </div>
            <span className="text-[9px] font-bold italic opacity-70">Procuro produtos da região</span>
          </Link>
        </div>

        {/* SEÇÃO CATEGORIAS */}
        <section className={`w-full py-16 flex justify-center border-y transition-colors duration-500 ${
          isDark ? 'bg-[#1E271A] border-white/5' : 'bg-white border-gray-100'
        }`}>
          <div className="w-full max-w-5xl px-6 flex flex-col items-start">
            <h2 className={`font-black uppercase tracking-[0.2em] text-lg mb-10 transition-colors ${
              isDark ? 'text-white' : 'text-[#2D3A27]'
            }`}>
              Categorias
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full justify-items-center">
              {CATEGORIAS_DB.map((cat, index) => (
                <div key={index} className="flex flex-col items-center group cursor-pointer space-y-3">
                  <div className={`w-20 h-20 ${cat.cor} rounded-[40%_60%_70%_30%/50%_40%_60%_50%] flex items-center justify-center transition-all group-hover:rotate-6 group-hover:scale-110 shadow-md border border-black/5`}>
                    <img src={cat.icon} alt={cat.nome} className="w-10 h-10 object-contain brightness-0 opacity-70 transition-all group-hover:opacity-100" />
                  </div>
                  <span className={`font-bold uppercase text-[10px] text-center tracking-widest transition-colors ${
                    isDark ? 'text-white/80' : 'text-[#2D3A27]'
                  }`}>
                    {cat.nome}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SEÇÃO: HISTÓRIAS DE VIDA --- */}
        <section className="w-full flex justify-center py-20">
          <div className="w-full max-w-5xl px-6">
            <h2 className={`font-black uppercase italic tracking-[0.2em] text-lg mb-12 ${isDark ? 'text-white' : 'text-[#2D3A27]'}`}>
              Histórias de Vida
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {HISTORIAS_DB.map((hist) => (
                <div key={hist.id} className={`flex flex-col md:flex-row gap-6 p-8 rounded-[3rem] border transition-all shadow-xl ${
                  isDark 
                    ? 'bg-[#BC5434] border-transparent' 
                    : 'bg-[#2D3A27] border-transparent' 
                }`}>
                  <img 
                    src={hist.foto} 
                    className={`w-full md:w-40 h-40 object-cover rounded-[2.5rem] border-2 ${isDark ? 'border-[#2D3A27]/20' : 'border-white/20'}`} 
                    alt={hist.nome} 
                  />
                  <div className="flex flex-col justify-center space-y-3">
                    <div>
                      {/* Subtítulo (Perfil) */}
                      <span className={`text-[10px] font-black uppercase tracking-widest ${
                        isDark ? 'text-[#2D3A27]' : 'text-[#C4D663]' 
                      }`}>
                        {hist.perfil}
                      </span>
                      
                      {/* Nome do Personagem */}
                      <h3 className={`text-xl font-black uppercase italic ${
                        isDark ? 'text-[#2D3A27]' : 'text-white'
                      }`}>
                        {hist.nome}
                      </h3>
                      
                      {/* Localização */}
                      <p className={`text-[10px] font-bold uppercase opacity-60 ${
                        isDark ? 'text-[#2D3A27]' : 'text-white'
                      }`}>
                        {hist.local}
                      </p>
                    </div>

                    {/* Depoimento */}
                    <p className={`text-xs leading-relaxed font-medium ${
                      isDark ? 'text-[#2D3A27]' : 'text-white/90'
                    }`}>
                      "{hist.texto}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className={`w-full text-center p-10 transition-colors duration-500 ${
        isDark ? 'bg-[#1a2318] text-white/20' : 'bg-gray-50 text-[#2D3A27]/20'
      }`}>
        <span className="text-[9px] font-black uppercase tracking-[0.3em]">© 2026 Semeia Nordeste</span>
      </footer>
    </div>
  );
}