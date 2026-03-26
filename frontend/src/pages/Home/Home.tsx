import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Leaf 
} from 'lucide-react';

// Dados sincronizados com seu data.sql
const CATEGORIAS_SQL = [
  { id: 1, nome: 'Hortifruti', icon: 'https://cdn-icons-png.flaticon.com/512/2329/2329903.png' },
  { id: 2, nome: 'Laticínios', icon: 'https://cdn-icons-png.flaticon.com/512/2674/2674486.png' },
  { id: 3, nome: 'Grãos e Farinhas', icon: 'https://cdn-icons-png.flaticon.com/512/1147/1147560.png' },
  { id: 4, nome: 'Artesanato', icon: 'https://cdn-icons-png.flaticon.com/512/3081/3081918.png' },
];

const NOTICIAS = [
  { id: 1, tag: "SAFRA", titulo: "Laranja Pera: Colheita em alta em Boquim", img: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1000" },
  { id: 2, tag: "SUCESSO", titulo: "José do Egito dobra produção este ano", img: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=1000" }
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <nav className="p-6 border-b-4 border-primary-earth flex justify-between items-center bg-white sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Leaf className="text-accent-clay" />
          <span className="font-black text-2xl uppercase italic tracking-tighter">Semeia Nordeste</span>
        </div>
        <button className="bg-primary-earth text-white px-6 py-2 font-bold uppercase text-xs shadow-mini active:translate-y-1 transition-all">Entrar</button>
      </nav>

      {/* CARROSSEL DE NOTÍCIAS */}
      <section className="p-6 max-w-7xl mx-auto">
        <div className="relative h-[400px] border-4 border-primary-earth shadow-brutal overflow-hidden group bg-primary-earth">
          <img src={NOTICIAS[current].img} alt={NOTICIAS[current].titulo} className="w-full h-full object-cover opacity-60 transition-transform group-hover:scale-105" />
          <div className="absolute inset-0 p-10 flex flex-col justify-end">
            <span className="bg-accent-clay text-white self-start px-3 py-1 text-[10px] font-black mb-4 tracking-widest">{NOTICIAS[current].tag}</span>
            <h2 className="text-white text-5xl font-black uppercase italic leading-[0.9] max-w-2xl">{NOTICIAS[current].titulo}</h2>
          </div>
          <div className="absolute bottom-6 right-6 flex gap-2">
            <button onClick={() => setCurrent((c: number) => (c === 0 ? 1 : 0))} className="p-4 bg-white border-2 border-primary-earth hover:bg-accent-clay hover:text-white transition-all"><ChevronLeft /></button>
            <button onClick={() => setCurrent((c: number) => (c === 1 ? 0 : 1))} className="p-4 bg-white border-2 border-primary-earth hover:bg-accent-clay hover:text-white transition-all"><ChevronRight /></button>
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="p-6 max-w-7xl mx-auto space-y-8 mt-10">
        <h3 className="text-4xl font-black uppercase italic tracking-tighter">Categorias</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIAS_SQL.map(cat => (
            <div key={cat.id} className="bg-white border-2 border-primary-earth p-8 text-center shadow-mini hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer">
              <span className="font-black uppercase text-xs tracking-widest">{cat.nome}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}