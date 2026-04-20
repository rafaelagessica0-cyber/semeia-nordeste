import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, User, Plus, Edit, Trash2,
  LayoutGrid, Palette, Beef, Sprout, Wheat, Carrot, Milk
} from 'lucide-react';

// DADOS INICIAIS
const PRODUTOS_DATA = [
  { id: 1, categoria: 'Hortifruti', nome: 'Tomate Cereja Orgânico', local: 'Sítio Alvorada, SE', preco: 8.90, img: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=400&q=80' },
  { id: 2, categoria: 'Laticínios', nome: 'Ovos Caipira (Dúzia)', local: 'Granja Girassol, BA', preco: 14.50, img: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=400&q=80' },
];

const CATEGORIAS = [
  { nome: 'Todos', Icone: LayoutGrid },
  { nome: 'Artesanais', Icone: Palette },
  { nome: 'Carnes', Icone: Beef },
  { nome: 'Colheita', Icone: Sprout },
  { nome: 'Grãos', Icone: Wheat },
  { nome: 'Hortifruti', Icone: Carrot },
  { nome: 'Laticínios', Icone: Milk },
];

export default function Vendedor() {
  const [catAtiva, setCatAtiva] = useState('Todos');
  const [busca, setBusca] = useState('');
  const [termoPesquisado, setTermoPesquisado] = useState('');
  const [produtos, setProdutos] = useState(PRODUTOS_DATA);

  const [mostrarModal, setMostrarModal] = useState(false);
  const [produtoEditando, setProdutoEditando] = useState<any>(null);

  const [form, setForm] = useState({
    nome: '',
    preco: '',
    local: '',
    img: '',
    categoria: 'Hortifruti',
  });

  const handlePesquisa = () => {
    setTermoPesquisado(busca);
    setCatAtiva('Todos');
  };

  const handleCategoriaClick = (nome: string) => {
    setCatAtiva(nome);
    setTermoPesquisado('');
    setBusca('');
  };

  const deletarProduto = (id: number) => {
    setProdutos(produtos.filter(p => p.id !== id));
  };

  const handleImagem = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm(prev => ({
        ...prev,
        img: reader.result as string
      }));
    };

    reader.readAsDataURL(file);
  };

  const salvarProduto = () => {
    if (!form.nome || !form.preco || !form.local) return;

    if (produtoEditando) {
      setProdutos(produtos.map(p =>
        p.id === produtoEditando.id
          ? { ...p, ...form, preco: Number(form.preco) }
          : p
      ));
    } else {
      const novo = {
        id: Date.now(),
        ...form,
        preco: Number(form.preco),
        img: form.img || 'https://via.placeholder.com/150'
      };
      setProdutos([...produtos, novo]);
    }

    setMostrarModal(false);
    setForm({ nome: '', preco: '', local: '', img: '', categoria: 'Hortifruti' });
    setProdutoEditando(null);
  };

  const produtosExibidos = produtos.filter(p => {
    const matchCategoria = catAtiva === 'Todos' || p.categoria === catAtiva;
    const matchBusca = p.nome.toLowerCase().includes(termoPesquisado.toLowerCase());
    return matchCategoria && matchBusca;
  });

  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#394158] antialiased pb-20 font-sans">

      {/* HEADER IGUAL COMPRADOR */}
      <header className="w-full bg-white py-4 px-8 border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-10">
            <Link to="/home2">
              <img src="/assets/logo-home.png" className="h-14" />
            </Link>

            <span className="text-[10px] font-black uppercase tracking-widest text-[#55833d]">
              Painel do Vendedor
            </span>
          </div>

          <User size={22} className="cursor-pointer hover:text-[#55833d]" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 pt-12 flex flex-col items-center">

        {/* BUSCA IGUAL */}
        <div className="relative w-full max-w-5xl mb-16">
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar meus produtos"
            className="w-full bg-white py-4 pl-8 pr-16 rounded-full border border-gray-100 shadow-sm outline-none"
          />
          <button
            onClick={handlePesquisa}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#55833d] text-white p-3 rounded-full"
          >
            <Search size={18} />
          </button>
        </div>

        {/* CATEGORIAS IGUAL */}
        <section className="w-full mb-16">
          <h2 className="text-sm font-black uppercase tracking-widest italic mb-10">
            Categorias
          </h2>

          <div className="flex justify-between">
            {CATEGORIAS.map(cat => {
              const Icone = cat.Icone;
              const ativo = catAtiva === cat.nome;

              return (
                <button
                  key={cat.nome}
                  onClick={() => handleCategoriaClick(cat.nome)}
                  className="flex flex-col items-center gap-3"
                >
                  <div className={`w-20 h-12 rounded-2xl flex items-center justify-center border ${
                    ativo ? 'bg-[#f9943b] text-white' : 'bg-white'
                  }`}>
                    <Icone size={22} />
                  </div>

                  <span className="text-[10px] font-black uppercase">
                    {cat.nome}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* TÍTULO + BOTÃO */}
        <div className="w-full flex justify-between items-center mb-10">
          <h1 className="text-xl font-black italic uppercase">
            Meus Produtos
          </h1>

          <button
            onClick={() => {
              setProdutoEditando(null);
              setMostrarModal(true);
            }}
            className="flex items-center gap-2 bg-[#f9943b] text-white px-6 py-3 rounded-full font-black uppercase text-xs shadow-lg"
          >
            <Plus size={16} />
            Novo Produto
          </button>
        </div>

        {/* PRODUTOS IGUAL AO COMPRADOR */}
        <section className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {produtosExibidos.map(prod => (
              <div key={prod.id} className="bg-white p-5 rounded-[2.5rem] shadow-xl flex flex-col group hover:-translate-y-1 transition-all">

                <div className="relative overflow-hidden rounded-[2rem] mb-4 aspect-square">
                  <img src={prod.img} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>

                <span className="text-[9px] font-black uppercase text-[#55833d]">
                  {prod.categoria}
                </span>

                <h3 className="font-bold text-sm mb-1">
                  {prod.nome}
                </h3>

                <p className="text-[10px] opacity-50 uppercase">
                  {prod.local}
                </p>

                <div className="mt-auto pt-4 border-t flex justify-between items-center">
                  <span className="text-lg font-black">
                    R$ {prod.preco.toFixed(2)}
                  </span>
                </div>

                {/* BOTÕES LADO A LADO */}
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => {
                      setProdutoEditando(prod);
                      setForm({
                        nome: prod.nome,
                        preco: String(prod.preco),
                        local: prod.local,
                        img: prod.img,
                        categoria: prod.categoria,
                      });
                      setMostrarModal(true);
                    }}
                    className="flex-1 text-[9px] font-black uppercase bg-[#394158] text-white py-2 rounded-xl flex items-center justify-center gap-1"
                  >
                    <Edit size={12} /> Editar
                  </button>

                  <button
                    onClick={() => deletarProduto(prod.id)}
                    className="flex-1 text-[9px] font-black uppercase bg-red-500 text-white py-2 rounded-xl flex items-center justify-center gap-1"
                  >
                    <Trash2 size={12} /> Excluir
                  </button>
                </div>

              </div>
            ))}
          </div>
        </section>

      </main>

      {/* MODAL (NÃO ALTERADO) */}
      {mostrarModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-8 rounded-[2rem] w-96 shadow-2xl">

            <h2 className="font-bold mb-4 text-lg">
              {produtoEditando ? "Editar Produto" : "Novo Produto"}
            </h2>

            <div className="mb-4">
              {form.img ? (
                <img src={form.img} className="w-full h-40 object-cover rounded-xl mb-2" />
              ) : (
                <div className="w-full h-40 bg-[#F5F2ED] rounded-xl flex items-center justify-center text-xs opacity-50">
                  Sem imagem
                </div>
              )}

              <label className="cursor-pointer text-xs font-bold text-[#55833d]">
                📸 Adicionar imagem
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleImagem}
                  className="hidden"
                />
              </label>
            </div>

            <input
              placeholder="Nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="w-full bg-[#F5F2ED] p-3 mb-3 rounded-xl outline-none"
            />

            <input
              placeholder="Preço"
              value={form.preco}
              onChange={(e) => setForm({ ...form, preco: e.target.value })}
              className="w-full bg-[#F5F2ED] p-3 mb-3 rounded-xl outline-none"
            />

            <input
              placeholder="Local"
              value={form.local}
              onChange={(e) => setForm({ ...form, local: e.target.value })}
              className="w-full bg-[#F5F2ED] p-3 mb-3 rounded-xl outline-none"
            />

            <select
              value={form.categoria}
              onChange={(e) => setForm({ ...form, categoria: e.target.value })}
              className="w-full bg-[#F5F2ED] p-3 mb-3 rounded-xl outline-none"
            >
              {CATEGORIAS.filter(c => c.nome !== 'Todos').map(cat => (
                <option key={cat.nome} value={cat.nome}>
                  {cat.nome}
                </option>
              ))}
            </select>

            <div className="flex gap-2 mt-4">
              <button onClick={salvarProduto} className="bg-[#55833d] text-white px-4 py-2 rounded-xl w-full">
                Salvar
              </button>

              <button onClick={() => setMostrarModal(false)} className="bg-gray-200 px-4 py-2 rounded-xl w-full">
                Cancelar
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}