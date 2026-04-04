import { useParams, useNavigate } from "react-router-dom";
import { postsData } from "./Blog"; // Puxa os dados atualizados
import "./Blog.css";

export default function Post() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Encontra o post exato com base na URL
  const post = postsData.find((p) => p.id === Number(id));

  if (!post) {
    return <div className="blog-master">Post não encontrado!</div>;
  }

  return (
    <div className="blog-master">
      <nav className="blog-nav">
        <div className="nav-container">
          <div className="logo-brand">
            <img src="/assets/logo-home.png" alt="Logo" />
            <div className="logo-txt">
              <span className="txt-green">REDE</span>
              <span className="txt-orange">NORDESTE</span>
            </div>
          </div>
          <div className="nav-menu">
            <a href="#" onClick={() => navigate("/")}>Início</a>
            <a href="#" className="active" onClick={() => navigate("/blog")}>Blog</a>
          </div>
        </div>
      </nav>

      <main className="post-view">
        <button className="btn-back" onClick={() => navigate("/blog")}>
          ← Voltar para o Blog
        </button>

        <header className="post-header">
          <span className="post-category-tag">{post.categoria}</span>
          <h1 className="post-title-main">{post.titulo}</h1>
          <div className="post-meta-data">
            <span>📅 {post.data}</span>
            <span>⏱️ {post.leitura} de leitura</span>
          </div>
        </header>

        <div className="post-hero">
          <img src={post.imagem} alt={post.titulo} />
        </div>

        <article className="post-body-content">
          <h2>{post.subtitulo}</h2>
          
          {/* O conteúdo longo do post aparece aqui */}
          <div className="post-text">
            {post.conteudo.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          
          <div className="post-quote">
            "A tecnologia não substitui o produtor, mas potencializa seu conhecimento e sua produção."
          </div>
        </article>
      </main>
    </div>
  );
}