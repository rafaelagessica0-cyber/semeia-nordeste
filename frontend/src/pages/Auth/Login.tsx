import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

export default function Login() {
  const { isDark } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-500 px-6 ${
      isDark ? 'bg-[#2D3A27]' : 'bg-[#F5F2ED]'
    }`}>
      <div className={`w-full max-w-md p-10 rounded-[3rem] shadow-2xl transition-colors ${
        isDark ? 'bg-[#1a2318] border border-white/5' : 'bg-white border border-gray-100'
      }`}>
        
        {/* LOGO DINÂMICA E MAIOR (h-20) */}
        <div className="flex flex-col items-center mb-12 space-y-5">
          <Link to="/">
            <img 
              src={isDark ? "/assets/logo-green.png" : "/assets/logo-white.png"} 
              alt="Logo Semeia Nordeste" 
              className="h-20 w-auto object-contain antialiased" // Aumentei para h-20
            />
          </Link>
          <h2 className={`font-black uppercase italic tracking-widest text-xl ${
            isDark ? 'text-white' : 'text-[#2D3A27]'
          }`}>
            Bem-vindo de volta
          </h2>
        </div>

        {/* FORMULÁRIO */}
        <form className="space-y-6">
          <div className="space-y-2">
            <label className={`text-[10px] font-black uppercase tracking-widest ml-4 ${isDark ? 'text-white/50' : 'text-[#2D3A27]/50'}`}>
              E-mail
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#B22246]" />
              <input 
                type="email" 
                className={`w-full py-4 pl-12 pr-6 rounded-full text-sm font-medium outline-none border-2 transition-all ${
                  isDark ? 'bg-[#2D3A27] border-transparent text-white focus:border-[#B22246]' : 'bg-gray-50 border-gray-100 text-[#2D3A27] focus:border-[#B22246]'
                }`}
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className={`text-[10px] font-black uppercase tracking-widest ml-4 ${isDark ? 'text-white/50' : 'text-[#2D3A27]/50'}`}>
              Senha
            </label>
            <div className="relative">
              <Lock size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#B22246]" />
              <input 
                type="password" 
                className={`w-full py-4 pl-12 pr-6 rounded-full text-sm font-medium outline-none border-2 transition-all ${
                  isDark ? 'bg-[#2D3A27] border-transparent text-white focus:border-[#B22246]' : 'bg-gray-50 border-gray-100 text-[#2D3A27] focus:border-[#B22246]'
                }`}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button className="w-full bg-[#B22246] hover:bg-[#8e1b38] text-white py-4 rounded-full font-black uppercase text-xs tracking-[0.2em] shadow-lg transition-all flex items-center justify-center gap-2 group">
            Entrar no Semeia
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-10 text-center space-y-4">
          <p className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-[#2D3A27]/40'}`}>
            Não tem conta? <Link to="/cadastro" className="text-[#F28C28] cursor-pointer hover:underline">Cadastre-se aqui</Link>
          </p>
        </div>
      </div>
    </div>
  );
}