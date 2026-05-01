import React from 'react';

export default function ResumoHoje() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow w-full mt-10 border border-gray-100">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm font-black uppercase tracking-widest">
          Visão operacional
        </h2>

        <span className="text-[10px] px-3 py-1 rounded-full bg-gray-100 text-gray-600">
          Hoje
        </span>
      </div>

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {/* TOTAL */}
        <div className="p-4 rounded-xl bg-gray-50 border">
          <p className="text-[10px] uppercase text-gray-500">
            Pedidos totais
          </p>
          <h3 className="text-2xl font-black mt-1">5</h3>
        </div>

        {/* PENDENTES */}
        <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-100">
          <p className="text-[10px] uppercase text-gray-500">
            Pendentes
          </p>
          <h3 className="text-2xl font-black text-yellow-600 mt-1">2</h3>
        </div>

        {/* PROCESSANDO */}
        <div className="p-4 rounded-xl bg-orange-50 border border-orange-100">
          <p className="text-[10px] uppercase text-gray-500">
            Em preparação
          </p>
          <h3 className="text-2xl font-black text-orange-600 mt-1">1</h3>
        </div>

        {/* ENTREGUES */}
        <div className="p-4 rounded-xl bg-green-50 border border-green-100">
          <p className="text-[10px] uppercase text-gray-500">
            Entregues
          </p>
          <h3 className="text-2xl font-black text-green-600 mt-1">1</h3>
        </div>

      </div>

      {/* FATURAMENTO */}
      <div className="mt-4 p-5 rounded-xl bg-[#f8faf7] border border-[#e7efe4] flex justify-between items-center">

        <div>
          <p className="text-[10px] uppercase text-gray-500">
            Faturamento estimado
          </p>
          <h3 className="text-3xl font-black text-[#55833d] mt-1">
            R$ 132,40
          </h3>
        </div>

        <div className="text-[10px] text-gray-500 text-right">
          +12% vs ontem
        </div>

      </div>

    </div>
  );
}