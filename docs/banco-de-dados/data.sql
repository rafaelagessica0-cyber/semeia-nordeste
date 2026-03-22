-- Script para testes

INSERT INTO categorias (nome, descricao, imagem_icone_url) VALUES 
('Hortifruti', 'Frutas, legumes e verduras frescas da região', 'https://cdn-icons-png.flaticon.com/512/2329/2329903.png'),
('Laticínios', 'Queijos, coalhadas e leite direto do produtor', 'https://cdn-icons-png.flaticon.com/512/2674/2674486.png'),
('Grãos e Farinhas', 'Feijão, milho e a famosa farinha de mandioca', 'https://cdn-icons-png.flaticon.com/512/1147/1147560.png'),
('Artesanato', 'Produtos feitos à mão por artesãos locais', 'https://cdn-icons-png.flaticon.com/512/3081/3081918.png');

INSERT INTO usuarios (nome_completo, cpf_cnpj, telefone, email, senha_hash, tipo_perfil, conta_ativa) VALUES 
('José do Egito', '12345678901', '79999991111', 'jose@produtor.com', 'hash_exemplo_123', 'PRODUTOR', TRUE),
('Maria das Dores', '98765432100', '79988882222', 'maria@cliente.com', 'hash_exemplo_456', 'COMPRADOR', TRUE),
('Equipe Semeia', '00011122233', '7933334444', 'admin@semeia.com', 'hash_admin_789', 'ADMIN', TRUE);

INSERT INTO lojas (usuario_id, nome_loja, descricao_bio, cidade, estado, aceita_retirada, faz_entrega, valor_minimo_pedido) VALUES 
(1, 'Fazenda Boa Esperança', 'Produção familiar de laranjas e raízes no interior de Sergipe.', 'Boquim', 'SE', TRUE, TRUE, 30.00);

INSERT INTO produtos (loja_id, categoria_id, nome, descricao, preco_atual, unidade_medida, estoque_atual, imagem_url) VALUES 
(1, 1, 'Laranja Pera (Cento)', 'Laranjas doces colhidas no dia.', 25.00, 'Cento', 50, 'https://img.freepik.com/fotos-gratis/laranjas-frescas-em-uma-cesta_23-2148288594.jpg'),
(1, 3, 'Farinha de Mandioca Fina', 'Farinha artesanal torrada em forno de lenha.', 8.50, 'kg', 100, 'https://images.tcdn.com.br/img/editor/up/694503/farinha.jpg'),
(1, 1, 'Macaxeira Descascada', 'Macaxeira manteiga, cozinha em 10 minutos.', 5.00, 'kg', 30, 'https://p2.trrsf.com/image/fget/cf/1200/675/middle/images.terra.com/2023/05/22/1532822763-macaxeira.jpg');