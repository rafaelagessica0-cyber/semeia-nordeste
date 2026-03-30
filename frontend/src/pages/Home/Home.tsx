import React, { useState, useEffect } from 'react';
import { Store, ShoppingBag, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const NOTICIAS = [
  { id: 1, img: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=2000" },
  { id: 2, img: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=2000" }
];

const CATEGORIAS_DB = [
  { nome: 'Hortifruti', cor: 'bg-[#7A7D5C]', icon: 'https://cdn-icons-png.flaticon.com/512/2329/2329903.png' },
  { nome: 'Laticínios', cor: 'bg-[#C4D663]', icon: 'https://cdn-icons-png.flaticon.com/512/2674/2674486.png' },
  { nome: 'Grãos e Farinhas', cor: 'bg-[#BC5434]', icon: 'https://cdn-icons-png.flaticon.com/512/1147/1147560.png' },
  { nome: 'Artesanato', cor: 'bg-[#A65E3F]', icon: 'https://cdn-icons-png.flaticon.com/512/3081/3081918.png' }
];

export default function Home() {
  const { isDark, toggleTheme } = useTheme();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % NOTICIAS.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 flex flex-col items-center ${
      isDark ? 'bg-[#2D3A27]' : 'bg-[#F5F2ED]'
    }`}>
      
      {/* NAVBAR: Logo Minimalista (h-12) */}
      <header className="w-full bg-white flex justify-center py-2 px-6 border-b border-gray-100 shadow-sm z-50">
        <div className="w-full max-w-7xl flex justify-between items-center">
          
          <div className="flex items-center">
            <img 
              src="/assets/logo-semeia.png" 
              alt="Semeia Nordeste Logo" 
              className="h-12 w-auto object-contain antialiased" 
            />
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-100 text-[#2D3A27] transition-colors"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button className="border-2 border-[#2D3A27] bg-[#2D3A27] text-white px-7 py-1.5 rounded-full font-black uppercase text-[10px] tracking-widest transition-all hover:bg-white hover:text-[#2D3A27]">
              Entrar
            </button>
          </div>
        </div>
      </header>

      {/* CARROSSEL */}
      <section className="w-full relative overflow-hidden h-[400px]">
        <div className="flex h-full transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {NOTICIAS.map((item) => (
            <img key={item.id} src={item.img} className="w-full h-full object-cover flex-shrink-0" alt="Destaque Rural" />
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {NOTICIAS.map((_, i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === current ? 'bg-white' : 'bg-white/40'}`} />
          ))}
        </div>
      </section>

      <main className="w-full flex flex-col items-center pt-10">
        <div className="text-center space-y-3 px-6 mb-10">
          <h1 className={`text-3xl md:text-4xl font-black italic uppercase tracking-tight transition-colors duration-500 ${isDark ? 'text-white' : 'text-[#2D3A27]'}`}>
            Conectando quem produz a quem consome
          </h1>
          <p className={`text-sm md:text-base font-medium max-w-lg mx-auto transition-colors duration-500 ${isDark ? 'text-white/70' : 'text-[#2D3A27]/70'}`}>
            A plataforma digital do Nordeste para compra e venda de produtos regionais.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 px-6 mb-16">
          <button className="flex flex-col items-center justify-center bg-[#B22246] text-white border-2 border-[#B22246] p-6 w-60 rounded-[2rem] transition-all hover:bg-white hover:text-[#B22246] shadow-lg group">
            <div className="flex items-center gap-2 mb-1">
              <Store size={18} />
              <span className="font-black uppercase text-sm tracking-widest">Sou vendedor</span>
            </div>
            <span className="text-[9px] font-bold italic opacity-70">Quero anunciar meus produtos</span>
          </button>
          
          <button className="flex flex-col items-center justify-center bg-[#F28C28] text-white border-2 border-[#F28C28] p-6 w-60 rounded-[2rem] transition-all hover:bg-white hover:text-[#F28C28] shadow-lg group">
            <div className="flex items-center gap-2 mb-1">
              <ShoppingBag size={18} />
              <span className="font-black uppercase text-sm tracking-widest">Sou comprador</span>
            </div>
            <span className="text-[9px] font-bold italic opacity-70">Procuro produtos da região</span>
          </button>
        </div>

        <section className={`w-full py-12 flex justify-center border-y transition-colors duration-500 ${
          isDark ? 'bg-[#1E271A] border-white/5' : 'bg-white border-gray-100'
        }`}>
          <div className="w-full max-w-5xl px-6 flex flex-col items-start">
            <h2 className={`font-black uppercase tracking-[0.2em] text-lg mb-8 transition-colors ${
              isDark ? 'text-white' : 'text-[#2D3A27]'
            }`}>
              Categorias
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full justify-items-center">
              {CATEGORIAS_DB.map((cat, index) => (
                <div key={index} className="flex flex-col items-center group cursor-pointer space-y-3">
                  <div className={`w-20 h-20 ${cat.cor} rounded-[40%_60%_70%_30%/50%_40%_60%_50%] flex items-center justify-center transition-all group-hover:rotate-6 group-hover:scale-110 shadow-md border border-black/5`}>
                    <img 
                      src={cat.icon} 
                      alt={cat.nome} 
                      className="w-10 h-10 object-contain brightness-0 opacity-70 transition-all group-hover:opacity-100" 
                    />
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
      </main>

      <footer className={`w-full text-center p-8 transition-colors duration-500 ${
        isDark ? 'bg-[#1a2318] text-white/20' : 'bg-gray-50 text-[#2D3A27]/20'
      }`}>
        <span className="text-[9px] font-black uppercase tracking-[0.3em]">© 2026 Semeia Nordeste</span>
      </footer>
    </div>
  );
}