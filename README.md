# D'Gusta Doces

> Site institucional para D'Gusta Doces — bolos e doces artesanais.

Descrição curta
----------------
Este repositório contém um site estático simples com HTML, CSS e JavaScript para apresentação do negócio D'Gusta Doces. O layout inclui seções de hero, sobre, produtos, galeria e contato com CTA para WhatsApp.

Como visualizar localmente
-------------------------
Opções rápidas:

- Abrir `index.html` diretamente no navegador.
- Usar um servidor local (recomendado):

```powershell
cd "c:\\Users\\Magno\\Desktop\\@dgustadoces"
python -m http.server 8000
# Abra http://localhost:8000
```

Edição e contribuições
----------------------
- Atualize textos e imagens na pasta `fotos/`.
- Configure o número real do WhatsApp em `script.js` na constante `WHATSAPP_NUMBER`.

Publicação
---------
Você pode publicar o site em Netlify, Vercel ou GitHub Pages. Exemplos rápidos:

- Netlify: crie um novo site e aponte para o repositório GitHub — deploy automático a cada push.
- GitHub Pages: em `Settings` > `Pages`, selecione a branch `main` e a pasta `/(root)`.
  
Automação (GitHub Pages)
------------------------
Este repositório já contém um workflow GitHub Actions (`.github/workflows/pages.yml`) que publica automaticamente o conteúdo da branch `main` para o GitHub Pages a cada push. Após o primeiro push, ative o GitHub Pages em `Settings` → `Pages` e selecione `GitHub Actions` como método de publicação, se necessário.

Netlify
-------
Também incluí um arquivo `netlify.toml` com configuração mínima. Para publicar no Netlify:

1. Acesse https://app.netlify.com/sites/new
2. Conecte o repositório `Magnolima90/dgustadoces`
3. Como o site não tem etapa de build, deixe o comando de build vazio e defina a pasta de publicação como `/` (ou deixe o Netlify usar a configuração de `netlify.toml`).


Licença
-------
Este projeto está aberto para uso e ajustes pessoais. Adicione uma licença se desejar compartilhar publicamente.

Contato
-------
Perfil do autor: https://github.com/Magnolima90
# 🎂 D'Gusta Doces - Landing Page

Uma landing page elegante e responsiva para a confeitaria artesanal **D'Gusta Doces**.

## 📁 Estrutura do Projeto

```
@dgustadoces/
├── index.html          # Página principal
├── style.css           # Estilos (responsivo e animações)
├── script.js           # Funcionalidades interativas
├── fotos/              # Pasta para imagens dos produtos
├── README.md           # Este arquivo
└── WhatsApp Image...   # Logo fornecido
```

## 🎨 Identidade Visual

- **Cores Principais:**
  - Rosa Pastel: `#F7C6D9`
  - Rosa Secundário: `#FFB3D9`
  - Preto: `#1a1a1a`
  - Branco: `#ffffff`

- **Tipografia:**
  - Títulos: `Playfair Display` (serif elegante)
  - Corpo: `Poppins` (sans-serif limpa)

- **Estética:** Minimalista, clean, elegante com muito espaço em branco

## 🚀 Como Usar

### 1. Configurar o Número do WhatsApp

No arquivo `script.js`, substitua o número padrão:

```javascript
const WHATSAPP_NUMBER = '5511999999999'; // Formato: 55 + DDD + Número
```

**Exemplo:** Para o número `(11) 99999-9999`, use `5511999999999`

### 2. Adicionar Imagens

Coloque todas as imagens dos produtos e galeria na pasta `/fotos`:

```
fotos/
├── bolo-chocolate.jpg
├── bolo-morango.jpg
├── trabalho-1.jpg
└── ...
```

### 3. Atualizar Produtos e Preços

No arquivo `index.html`, procure pela seção **PRODUTOS** e atualize:

- Nomes dos produtos
- Descrições
- Preços (substituir `R$ --,--`)
- Imagens (adicionar referência)

**Exemplo:**
```html
<div class="produto-card fade-in">
    <div class="produto-imagem">
        <img src="fotos/bolo-chocolate.jpg" alt="Bolo de Chocolate">
    </div>
    <div class="produto-info">
        <h4 class="produto-nome">Bolo de Chocolate Belga</h4>
        <p class="produto-descricao">Chocolate premium com cobertura meia amarga</p>
        <p class="produto-preco">R$ 89,90</p>
        ...
    </div>
</div>
```

### 4. Atualizar Informações do Rodapé

No arquivo `index.html`, seção **RODAPÉ**, atualize:

- Horário de atendimento
- Opções de entrega
- Link do Instagram

### 5. Personalizar o Texto "Sobre"

Atualize a seção **SOBRE** com informações reais da confeiteira.

## 📱 Funcionalidades

✅ **Menu Responsivo** - Se adapta automaticamente para mobile
✅ **Botão Flutuante WhatsApp** - Visível em toda a página
✅ **Links WhatsApp Pré-preenchidos** - Todos os botões "Fazer Pedido"
✅ **Animações de Scroll** - Fade-in ao rolar a página
✅ **Design Responsivo** - Mobile first, funciona em todos os dispositivos
✅ **Sem Dependências** - HTML5, CSS3 e JavaScript puro

## 🔧 Personalizações Avançadas

### Mudar Cores

Edite as variáveis CSS no arquivo `style.css`:

```css
:root {
    --primary-color: #F7C6D9;      /* Rosa principal */
    --secondary-color: #FFB3D9;    /* Rosa secundário */
    --dark-color: #1a1a1a;         /* Preto */
    --light-color: #ffffff;        /* Branco */
}
```

### Adicionar Mais Categorias de Produtos

Copie e cole o bloco `<div class="categoria">` na seção de produtos:

```html
<div class="categoria">
    <h3 class="categoria-title">🍰 Nova Categoria</h3>
    <div class="produtos-grid">
        <!-- Adicione seus produtos aqui -->
    </div>
</div>
```

### Modificar Animações

As animações estão definidas em `style.css`. Procure pela seção **ANIMAÇÕES**:

```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

## 📊 SEO e Performance

- ✅ Meta tags descritivas
- ✅ Estrutura HTML semântica
- ✅ Imagens otimizadas (usar formatos WebP quando possível)
- ✅ CSS e JS minificados recomendado em produção

## 🌐 Hospedagem no Netlify

1. **Crie uma conta** em [netlify.com](https://netlify.com)
2. **Faça upload** dos arquivos (ou conecte seu repositório Git)
3. **Configure o domínio** personalizado (opcional)
4. **Pronto!** Seu site estará online

### Estrutura para Upload:
```
Arraste toda a pasta @dgustadoces para o Netlify
```

## 🎯 Checklist Antes de Publicar

- [ ] Número do WhatsApp configurado em `script.js`
- [ ] Todos os produtos adicionados com preços
- [ ] Imagens carregadas na pasta `/fotos`
- [ ] Informações do rodapé atualizadas
- [ ] Links do Instagram verificados
- [ ] Horários de atendimento corretos
- [ ] Logo posicionado corretamente
- [ ] Teste em mobile (abrir em celular/tablet)
- [ ] Teste todos os botões "Fazer Pedido"
- [ ] Verificar links de navegação

## 🐛 Troubleshooting

**Imagens não aparecem?**
- Verifique se estão em `/fotos/`
- Use caminhos relativos: `fotos/nome-imagem.jpg`
- Formatos suportados: JPG, PNG, WebP

**WhatsApp não funciona?**
- Verifique o número (formato: 55 + DDD + número)
- Teste em: https://wa.me/5511999999999?text=Teste
- Certifique-se de incluir o código do país (55)

**Menu mobile não funciona?**
- Abra o console (F12) e procure por erros
- Verifique se `script.js` está carregando corretamente

## 📧 Suporte

Para dúvidas sobre personalização, consulte a documentação inline nos arquivos HTML, CSS e JS.

## 📄 Licença

Este projeto é fornecido como está para uso pessoal de D'Gusta Doces.

---

**Feito com ♥ para D'Gusta Doces**
