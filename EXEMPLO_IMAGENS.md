<!--
EXEMPLO DE INTEGRAÇÃO COM IMAGENS REAIS

Este arquivo mostra como integrar as imagens dos produtos
e da galeria com o código HTML final.

INSTRUÇÕES:
1. Copie apenas o trecho que precisa substituir
2. Coloque as imagens na pasta /fotos/
3. Use caminhos relativos: fotos/nome-imagem.jpg
-->

<!-- ============================================
     EXEMPLO 1: Seção de Produtos com Imagens
     ============================================ -->

<div class="produto-card fade-in">
    <div class="produto-imagem">
        <!-- ANTES (Placeholder) -->
        <!-- <div class="imagem-placeholder">Bolo de Chocolate</div> -->
        
        <!-- DEPOIS (Com imagem real) -->
        <img src="fotos/bolo-chocolate.jpg" alt="Bolo de Chocolate Belga" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div class="produto-info">
        <h4 class="produto-nome">Bolo de Chocolate Belga</h4>
        <p class="produto-descricao">Chocolate premium com cobertura meia amarga</p>
        <p class="produto-preco">R$ 89,90</p>
        <button class="btn-pedido" onclick="abrirWhatsApp('Olá! Gostaria de encomendar o Bolo de Chocolate Belga'); return false;">
            Encomendar
        </button>
    </div>
</div>

<!-- ============================================
     EXEMPLO 2: Galeria com Imagens
     ============================================ -->

<div class="galeria-item fade-in">
    <!-- ANTES -->
    <!-- <div class="galeria-imagem">
        <div class="imagem-placeholder">Trabalho 1</div>
    </div> -->
    
    <!-- DEPOIS -->
    <div class="galeria-imagem">
        <img src="fotos/trabalho-1.jpg" alt="Bolo de Casamento Elegante" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
</div>

<!-- ============================================
     EXEMPLO 3: Logo no Hero (Imagem do Cliente)
     ============================================ -->

<div class="hero-image">
    <div class="placeholder-logo">
        <!-- Já está usando a imagem fornecida -->
        <img src="WhatsApp Image 2026-08-24 at 14.34.56.jpeg" alt="D'Gusta Doces Logo">
    </div>
</div>

<!-- ============================================
     DICAS DE OTIMIZAÇÃO
     ============================================ -->

<!--

1. FORMATOS RECOMENDADOS:
   - WebP (melhor compressão): fotos/imagem.webp
   - JPG (compatibilidade): fotos/imagem.jpg
   - PNG (se precisar transparência): fotos/imagem.png

2. TAMANHO DAS IMAGENS:
   - Produtos: 400x400px (quadrado)
   - Galeria: 600x600px (quadrado)
   - Hero: 800x600px mínimo
   - Comprimir para web (máx 200KB por imagem)

3. FERRAMENTAS RECOMENDADAS:
   - TinyPNG: https://tinypng.com (comprimir)
   - Canva: https://canva.com (editar)
   - GIMP: https://gimp.org (grátis, profissional)

4. CÓDIGO CSS ALTERNATIVO (sem obrigar quadrado):
   .produto-imagem {
       width: 100%;
       height: 250px;
       background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
       display: flex;
       align-items: center;
       justify-content: center;
       overflow: hidden;
   }
   
   .produto-imagem img {
       width: 100%;
       height: 100%;
       object-fit: cover; /* Cobre todo o espaço */
   }

5. ADICIONAR MÚLTIPLAS IMAGENS POR PRODUTO (Galeria):
   <div class="produto-card fade-in">
       <div class="produto-carousel">
           <img src="fotos/produto1-foto1.jpg" alt="Foto 1">
           <img src="fotos/produto1-foto2.jpg" alt="Foto 2" style="display:none;">
       </div>
       <!-- Adicione controles com JavaScript -->
   </div>

-->

<!-- ============================================
     ESTRUTURA SUGERIDA DE PASTAS
     ============================================ -->

<!--

@dgustadoces/
├── index.html
├── style.css
├── script.js
├── fotos/
│   ├── produtos/
│   │   ├── bolo-chocolate.jpg
│   │   ├── bolo-morango.jpg
│   │   ├── bolo-red-velvet.jpg
│   │   ├── bolo-cenoura.jpg
│   │   ├── brigadeiro.jpg
│   │   └── docinhos.jpg
│   ├── galeria/
│   │   ├── trabalho-1.jpg
│   │   ├── trabalho-2.jpg
│   │   ├── trabalho-3.jpg
│   │   ├── trabalho-4.jpg
│   │   ├── trabalho-5.jpg
│   │   └── trabalho-6.jpg
│   └── hero/
│       └── destaque-principal.jpg
├── README.md
├── GUIA_RAPIDO.md
└── EXEMPLO_IMAGENS.md (este arquivo)

Para usar essa estrutura, altere os caminhos:
- fotos/produtos/bolo-chocolate.jpg
- fotos/galeria/trabalho-1.jpg
- fotos/hero/destaque-principal.jpg

-->

<!-- ============================================
     SCRIPT PARA CARREGAR IMAGENS DINAMICAMENTE
     ============================================ -->

<script>
// Descomente para usar carregamento dinâmico de imagens

/*
// Mapeamento de produtos com imagens
const produtosMapeados = {
    'Bolo de Chocolate Belga': 'fotos/produtos/bolo-chocolate.jpg',
    'Bolo de Morango': 'fotos/produtos/bolo-morango.jpg',
    'Bolo Red Velvet': 'fotos/produtos/bolo-red-velvet.jpg',
    // ... mais produtos
};

// Função para carregar imagens
function carregarImagensProdutos() {
    document.querySelectorAll('.produto-nome').forEach(nome => {
        const nomeTexto = nome.textContent;
        if (produtosMapeados[nomeTexto]) {
            const card = nome.closest('.produto-card');
            const imgContainer = card.querySelector('.produto-imagem');
            
            const img = document.createElement('img');
            img.src = produtosMapeados[nomeTexto];
            img.alt = nomeTexto;
            img.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
            
            imgContainer.innerHTML = '';
            imgContainer.appendChild(img);
        }
    });
}

// Chamar ao carregar
document.addEventListener('DOMContentLoaded', carregarImagensProdutos);
*/
</script>

<!-- ============================================
     VALIDAÇÃO DE IMAGENS
     ============================================ -->

<!--
Para verificar se as imagens carregam corretamente:

1. Abra o DevTools (F12)
2. Vá para "Network"
3. Recarregue a página (F5)
4. Procure por imagens com status 404 (não encontrada)

Se encontrar 404:
- Verifique se o arquivo existe na pasta /fotos/
- Verifique se o caminho está correto (case-sensitive)
- Verifique se o nome do arquivo está correto
-->

<!-- ============================================
     TESTE COM IMAGENS PLACEHOLDER ONLINE
     ============================================ -->

<!--
Se quiser testar o site antes de ter as imagens reais,
use URLs de placeholder:

<img src="https://via.placeholder.com/400x300?text=Bolo+de+Chocolate" alt="Bolo">

Após receber as imagens reais, substitua pelos caminhos locais.
-->
