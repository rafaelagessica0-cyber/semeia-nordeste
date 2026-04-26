import React from 'react';
import { TrendingUp, TrendingDown, Trophy, Package } from 'lucide-react';

type Produto = {
  nome: string;
  preco: number;
  vendas?: number;
};

type Props = {
  totalProdutos: number;
  faturamentoTotal: number;
  produtoMaisCaro: Produto | null;
  categoriasCount: Record<string, number>;
};

export default function Dashboard0({
  totalProdutos,
  faturamentoTotal,
  produtoMaisCaro,
  categoriasCount,
}: Props) {

  // 🔥 simulação de crescimento (depois vem do backend)
  const growthPedidos = 12.4;
  const growthFaturamento = 8.7;

  // 🔥 ranking fake (depois liga com vendas reais)
  const ranking = [
    { nome: 'Tomate Cereja', vendas: 120 },
    { nome: 'Ovos Caipira', vendas: 98 },
    { nome: 'Alface Orgânica', vendas: 76 },
  ];

  return (
    <div className="w-full space-y-6">

      {/* KPIs PRINCIPAIS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-xs opacity-60">Produtos</p>
          <h3 className="text-2xl font-black">{totalProdutos}</h3>
          <span className="text-[10px] text-green-600 flex items-center gap-1">
            <TrendingUp size={12} /> +5% vs ontem
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-xs opacity-60">Faturamento</p>
          <h3 className="text-2xl font-black">
            R$ {faturamentoTotal.toFixed(2)}
          </h3>
          <span className="text-[10px] text-green-600 flex items-center gap-1">
            <TrendingUp size={12} /> +{growthFaturamento}% vs ontem
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-xs opacity-60">Produto destaque</p>

          <h3 className="text-sm font-black flex items-center gap-2">
            <Trophy size={14} className="text-yellow-500" />
            {produtoMaisCaro?.nome || '—'}
          </h3>

          <span className="text-[10px] bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full inline-block mt-2">
            Top seller
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-xs opacity-60">Pedidos</p>
          <h3 className="text-2xl font-black">+{growthPedidos}%</h3>

          <span className="text-[10px] text-red-600 flex items-center gap-1">
            <TrendingDown size={12} /> queda ontem
          </span>
        </div>
      </div>

      {/* CATEGORIAS */}
      <div className="bg-white p-5 rounded-2xl shadow">
        <p className="text-xs opacity-60 mb-3">Categorias mais ativas</p>

        <div className="flex flex-wrap gap-2">
          {Object.entries(categoriasCount).map(([cat, qtd]) => (
            <span
              key={cat}
              className="text-[10px] bg-gray-100 px-3 py-1 rounded-full"
            >
              {cat} ({String(qtd)})
            </span>
          ))}
        </div>
      </div>

      {/* RANKING */}
      <div className="bg-white p-5 rounded-2xl shadow">
        <div className="flex items-center gap-2 mb-4">
          <Package size={16} />
          <p className="text-sm font-black uppercase">
            Ranking de produtos
          </p>
        </div>

        <div className="space-y-3">
          {ranking.map((item, index) => (
            <div
              key={item.nome}
              className="flex justify-between items-center border-b pb-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-black">
                  #{index + 1}
                </span>
                <span className="text-sm">{item.nome}</span>
              </div>

              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                {item.vendas} vendas
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}