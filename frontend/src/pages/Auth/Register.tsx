import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Phone, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Register() {
  const { isDark } = useTheme();
  
  const [formData, setFormData] = useState({
    nome_completo: '',
    email: '',
    senha: '',
    telefone: '',
    cpf_cnpj: '',
    tipo_perfil: 'COMPRADOR'
  });

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-500 py-16 px-6 ${
      isDark ? 'bg-[#2D3A27]' : 'bg-[#F5F2ED]'
    }`}>
      <div className={`w-full max-w-2xl p-8 md:p-12 rounded-[3.5rem] shadow-2xl transition-colors ${
        isDark ? 'bg-[#1a2318] border border-white/5' : 'bg-white border border-gray-100'
      }`}>
        
        {/* CABEÇALHO COM LOGO DINÂMICA */}
        <div className="flex flex-col items-center mb-12 text-center space-y-6">
          <Link to="/">
            <img 
              // Corrigido: logo-white para o fundo escuro (Dark Mode)
              src={isDark ? "/assets/logo-green.png" : "/assets/logo-white.png"} 
              alt="Semeia Logo" 
              className="h-20 w-auto object-contain antialiased"
            />
          </Link>
          <div>
            <h2 className={`font-black uppercase italic tracking-widest text-2xl ${isDark ? 'text-white' : 'text-[#2D3A27]'}`}>
              Crie sua conta
            </h2>
            <p className={`text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mt-2 ${isDark ? 'text-white' : 'text-[#2D3A27]'}`}>
              Junte-se à maior rede de produtos regionais
            </p>
          </div>
        </div>

        <form className="space-y-6">
          
          {/* SELEÇÃO DE PERFIL - CINZA REMOVIDO */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              type="button"
              onClick={() => setFormData({...formData, tipo_perfil: 'COMPRADOR'})}
              className={`p-5 rounded-3xl border-2 flex flex-col items-center gap-2 transition-all ${
                formData.tipo_perfil === 'COMPRADOR' 
                ? 'border-[#F28C28] bg-[#F28C28]/10 text-[#F28C28] shadow-lg' 
                // Removido o bg-gray-100/50, agora fica transparente/cor do container
                : `border-white/10 bg-transparent text-gray-500 opacity-40 hover:opacity-60`
              }`}
            >
              <CheckCircle2 size={16} className={formData.tipo_perfil === 'COMPRADOR' ? 'block' : 'invisible'} />
              <span className="font-black uppercase text-[10px] text-[#F28C28] tracking-widest">Sou Comprador</span>
            </button>

            <button
              type="button"
              onClick={() => setFormData({...formData, tipo_perfil: 'PRODUTOR'})}
              className={`p-5 rounded-3xl border-2 flex flex-col items-center gap-2 transition-all ${
                formData.tipo_perfil === 'PRODUTOR' 
                ? 'border-[#B22246] bg-[#B22246]/10 text-[#B22246] shadow-lg' 
                // Removido o bg-gray-100/50
                : `border-white/10 bg-transparent text-gray-500 opacity-40 hover:opacity-60`
              }`}
            >
              <CheckCircle2 size={16} className={formData.tipo_perfil === 'PRODUTOR' ? 'block' : 'invisible'} />
              <span className="font-black uppercase text-[10px] text-[#B22246] tracking-widest">Sou Vendedor</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nome Completo */}
            <div className="space-y-1">
              <label className={`text-[9px] font-black uppercase tracking-widest ml-4 opacity-50 ${isDark ? 'text-white' : 'text-[#2D3A27]'}`}>Nome Completo</label>
              <div className="relative">
                <User size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#B22246]" />
                <input 
                  type="text" 
                  className={`w-full py-4 pl-12 pr-6 rounded-full text-sm font-medium outline-none border-2 transition-all ${
                    isDark ? 'bg-white/5 border-white/10 text-white focus:border-[#B22246]' : 'bg-gray-50 border-gray-100 text-[#2D3A27] focus:border-[#B22246]'
                  }`}
                  placeholder="Nome e sobrenome"
                />
              </div>
            </div>

            {/* CPF / CNPJ */}
            <div className="space-y-1">
              <label className={`text-[9px] font-black uppercase tracking-widest ml-4 opacity-50 ${isDark ? 'text-white' : 'text-[#2D3A27]'}`}>CPF ou CNPJ</label>
              <div className="relative">
                <FileText size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#B22246]" />
                <input 
                  type="text" 
                  className={`w-full py-4 pl-12 pr-6 rounded-full text-sm font-medium outline-none border-2 transition-all ${
                    isDark ? 'bg-white/5 border-white/10 text-white focus:border-[#B22246]' : 'bg-gray-50 border-gray-100 text-[#2D3A27] focus:border-[#B22246]'
                  }`}
                  placeholder="000.000.000-00"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className={`text-[9px] font-black uppercase tracking-widest ml-4 opacity-50 ${isDark ? 'text-white' : 'text-[#2D3A27]'}`}>E-mail</label>
              <div className="relative">
                <Mail size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#B22246]" />
                <input 
                  type="email" 
                  className={`w-full py-4 pl-12 pr-6 rounded-full text-sm font-medium outline-none border-2 transition-all ${
                    isDark ? 'bg-white/5 border-white/10 text-white focus:border-[#B22246]' : 'bg-gray-50 border-gray-100 text-[#2D3A27] focus:border-[#B22246]'
                  }`}
                  placeholder="exemplo@email.com"
                />
              </div>
            </div>

            {/* Telefone */}
            <div className="space-y-1">
              <label className={`text-[9px] font-black uppercase tracking-widest ml-4 opacity-50 ${isDark ? 'text-white' : 'text-[#2D3A27]'}`}>Telefone</label>
              <div className="relative">
                <Phone size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#B22246]" />
                <input 
                  type="text" 
                  className={`w-full py-4 pl-12 pr-6 rounded-full text-sm font-medium outline-none border-2 transition-all ${
                    isDark ? 'bg-white/5 border-white/10 text-white focus:border-[#B22246]' : 'bg-gray-50 border-gray-100 text-[#2D3A27] focus:border-[#B22246]'
                  }`}
                  placeholder="(79) 9 9999-9999"
                />
              </div>
            </div>

            {/* Senha */}
            <div className="space-y-1 md:col-span-2">
              <label className={`text-[9px] font-black uppercase tracking-widest ml-4 opacity-50 ${isDark ? 'text-white' : 'text-[#2D3A27]'}`}>Crie uma Senha forte</label>
              <div className="relative">
                <Lock size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#B22246]" />
                <input 
                  type="password" 
                  className={`w-full py-4 pl-12 pr-6 rounded-full text-sm font-medium outline-none border-2 transition-all ${
                    isDark ? 'bg-white/5 border-white/10 text-white focus:border-[#B22246]' : 'bg-gray-50 border-gray-100 text-[#2D3A27] focus:border-[#B22246]'
                  }`}
                  placeholder="No mínimo 8 caracteres"
                />
              </div>
            </div>
          </div>

          <button className={`w-full py-4 rounded-full font-black uppercase text-xs tracking-[0.2em] shadow-lg transition-all flex items-center justify-center gap-2 group mt-4 ${
            formData.tipo_perfil === 'PRODUTOR' ? 'bg-[#B22246] hover:bg-[#8e1b38]' : 'bg-[#F28C28] hover:bg-[#d47a22]'
          } text-white`}>
            Finalizar Cadastro
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className={`text-[10px] font-bold uppercase tracking-wider opacity-70 ${isDark ? 'text-white' : 'text-[#2D3A27]'}`}>
            Já faz parte da nossa rede? <Link to="/login" className="text-[#F28C28] hover:underline">Faça Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}