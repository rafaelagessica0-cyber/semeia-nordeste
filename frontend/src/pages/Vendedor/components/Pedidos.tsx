import React, { useState } from 'react';
import { Clock, Truck, Check, X } from 'lucide-react';

const pedidosIniciais = [
  {
    id: 1001,
    cliente: 'Maria Silva',
    telefone: '(11) 99999-1111',
    endereco: 'Rua das Flores, 123 - São Paulo',
    total: 45.9,
    status: 'pendente',
    data: '26/04/2026',
  },
  {
    id: 1002,
    cliente: 'João Santos',
    telefone: '(11) 98888-2222',
    endereco: 'Av. Brasil, 500 - São Paulo',
    total: 28.5,
    status: 'pendente',
    data: '25/04/2026',
  },
];

function getIcon(status: string) {
  if (status === 'pendente') return <Clock size={14} />;
  if (status === 'preparando') return <Clock size={14} />;
  if (status === 'enviado') return <Truck size={14} />;
  if (status === 'entregue') return <Check size={14} />;
  if (status === 'recusado') return <X size={14} />;
  return <Clock size={14} />;
}

function getStatusColor(status: string) {
  if (status === 'pendente') return 'bg-yellow-100 text-yellow-700';
  if (status === 'preparando') return 'bg-orange-100 text-orange-700';
  if (status === 'enviado') return 'bg-blue-100 text-blue-700';
  if (status === 'entregue') return 'bg-green-100 text-green-700';
  if (status === 'recusado') return 'bg-red-100 text-red-700';
  return 'bg-gray-100 text-gray-600';
}

export default function Pedidos() {
  const [pedidos, setPedidos] = useState(pedidosIniciais);

  const atualizarStatus = (id: number, novoStatus: string) => {
    setPedidos(
      pedidos.map((p) =>
        p.id === id ? { ...p, status: novoStatus } : p
      )
    );
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow w-full mt-10">
      <h2 className="text-sm font-black uppercase mb-6">
        Pedidos recebidos
      </h2>

      <div className="space-y-4">
        {pedidos.map((p) => (
          <div key={p.id} className="border rounded-2xl p-4 flex flex-col gap-3">

            {/* topo */}
            <div className="flex justify-between items-center">
              <p className="font-black text-sm">Pedido #{p.id}</p>

              <span className={`text-[10px] px-2 py-1 rounded-full font-bold flex items-center gap-1 ${getStatusColor(p.status)}`}>
                {getIcon(p.status)}
                {p.status}
              </span>
            </div>

            {/* cliente */}
            <div>
              <p className="text-sm font-bold">{p.cliente}</p>
              <p className="text-xs opacity-60">{p.telefone}</p>
            </div>

            {/* endereço */}
            <p className="text-xs opacity-70">
              📍 {p.endereco}
            </p>

            {/* data + total */}
            <div className="flex justify-between items-center">
              <span className="text-xs opacity-60">{p.data}</span>
              <span className="font-black text-green-600">
                R$ {p.total.toFixed(2)}
              </span>
            </div>

            {/* CONTROLES DO VENDEDOR */}
            <div className="flex gap-2 flex-wrap mt-2">

              <button
                onClick={() => atualizarStatus(p.id, 'preparando')}
                className="text-[10px] px-2 py-1 bg-orange-100 text-orange-700 rounded-full"
              >
                Preparar
              </button>

              <button
                onClick={() => atualizarStatus(p.id, 'enviado')}
                className="text-[10px] px-2 py-1 bg-blue-100 text-blue-700 rounded-full"
              >
                Enviar
              </button>

              <button
                onClick={() => atualizarStatus(p.id, 'entregue')}
                className="text-[10px] px-2 py-1 bg-green-100 text-green-700 rounded-full"
              >
                Entregue
              </button>

              {/* 🔴 NOVO: RECUSAR */}
              <button
                onClick={() => atualizarStatus(p.id, 'recusado')}
                className="text-[10px] px-2 py-1 bg-red-100 text-red-700 rounded-full flex items-center gap-1"
              >
                <X size={12} />
                Recusar
              </button>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}