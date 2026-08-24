<!--
GUIA RÁPIDO DE CONFIGURAÇÃO - D'GUSTA DOCES

Siga estes passos para personalizar seu site rapidinho!
-->

# ⚡ GUIA RÁPIDO - Primeiras Configurações

## 🎯 Passo 1: Configurar WhatsApp (5 min)

Abra o arquivo: `script.js`

Encontre esta linha (por volta da linha 7):
```javascript
const WHATSAPP_NUMBER = '5511999999999';
```

Substitua pelo seu número:
- Formato: `55` (país) + `DDD` + `NÚMERO` (sem hífens, parênteses ou espaços)

**Exemplo:**
```javascript
// Se seu número é: (21) 98765-4321
const WHATSAPP_NUMBER = '5521987654321';
```

✅ Pronto! Todos os botões "Fazer Pedido" já funcionarão.

---

## 🖼️ Passo 2: Adicionar Imagens (10 min)

### A. Imagens dos Produtos

1. Coloque as fotos na pasta: `fotos/`
2. No arquivo `index.html`, procure por cada produto
3. Substitua o placeholder pela imagem real

**Encontre (por exemplo, linha ~190):**
```html
<div class="produto-imagem">
    <div class="imagem-placeholder">Bolo de Chocolate</div>
</div>
```

**Substitua por:**
```html
<div class="produto-imagem">
    <img src="fotos/bolo-chocolate.jpg" alt="Bolo de Chocolate Belga">
</div>
```

### B. Imagens da Galeria

1. Coloque as fotos na pasta: `fotos/`
2. No arquivo `index.html`, procure pela seção **Galeria** (~370)
3. Substitua cada placeholder

**Encontre:**
```html
<div class="galeria-imagem">
    <div class="imagem-placeholder">Trabalho 1</div>
</div>
```

**Substitua por:**
```html
<div class="galeria-imagem">
    <img src="fotos/trabalho-1.jpg" alt="Trabalho 1">
</div>
```

---

## 💰 Passo 3: Atualizar Produtos e Preços (10 min)

No arquivo `index.html`, procure pela seção **PRODUTOS** (~145).

**Encontre:**
```html
<h4 class="produto-nome">Bolo de Chocolate Belga</h4>
<p class="produto-descricao">Chocolate premium com cobertura meia amarga</p>
<p class="produto-preco">R$ --,--</p>
```

**Substitua pelo seu produto:**
```html
<h4 class="produto-nome">Seu Produto Aqui</h4>
<p class="produto-descricao">Descrição do produto</p>
<p class="produto-preco">R$ 89,90</p>
```

### Adicionar Mais Produtos

Copie um card inteiro `<div class="produto-card">...</div>` e cole no mesmo grid.

---

## 📞 Passo 4: Atualizar Contato (5 min)

No arquivo `index.html`, procure pela seção **RODAPÉ** (~405).

**Horário de Atendimento:**
Encontre e atualize:
```html
<p>
    Seg - Sex: 09h às 18h<br>
    Sáb: 09h às 17h<br>
    Dom: Fechado
</p>
```

**Link do Instagram:**
Encontre:
```html
<a href="https://instagram.com/dgustadoces" target="_blank">
```

Substitua `dgustadoces` pelo seu usuário:
```html
<a href="https://instagram.com/seu_usuario" target="_blank">
```

**Atendimento (Retirada/Delivery):**
Encontre e atualize se necessário:
```html
<p>
    ✓ Retirada no local<br>
    ✓ Delivery disponível
</p>
```

---

## 🎨 Passo 5: Personalizar Textos (5 min)

### Seção "Sobre"
Encontre por volta da linha ~100:
```html
<p>
    Na D'Gusta Doces, acreditamos que cada bolo...
</p>
```

Substitua pelo seu texto.

### Seção "Como Pedir"
Encontre por volta da linha ~320 e customize os textos dos 4 passos.

---

## 🧪 Passo 6: Testar Tudo (5 min)

1. **Abra o arquivo** `index.html` no navegador
2. **Teste em mobile:** F12 → Ctrl+Shift+M (ou abra no celular)
3. **Clique em todos os botões** "Fazer Pedido" e "WhatsApp"
4. **Verifique as imagens** aparecem corretamente
5. **Teste a navegação** (menu e âncoras)

---

## 🚀 Passo 7: Publicar no Netlify (5 min)

1. Acesse [netlify.com](https://netlify.com)
2. Crie uma conta (grátis)
3. **Drag & drop** a pasta `@dgustadoces` no Netlify
4. Pronto! Seu site está online 🎉

---

## 📋 Checklist Final

- [ ] WhatsApp configurado
- [ ] Imagens adicionadas
- [ ] Produtos atualizados com preços
- [ ] Contato/Instagram/Horários corretos
- [ ] Textos personalizados
- [ ] Testado em mobile
- [ ] Todos os botões funcionando
- [ ] Publicado no Netlify

---

## ❓ Dúvidas Frequentes

**P: As imagens não aparecem?**
R: Verifique se estão na pasta `/fotos/` e se o caminho está correto: `fotos/nome-imagem.jpg`

**P: O WhatsApp não abre?**
R: Certifique-se de que o número tem o formato correto (55DDD99999999).

**P: Como mudar as cores?**
R: Abra `style.css` e procure por `:root { --primary-color: #F7C6D9; }`. Mude o código hexadecimal.

**P: Posso adicionar mais seções?**
R: Sim! Copie uma seção existente e customize. Não esqueça de adicionar o link no menu.

---

**✨ Quando terminar, seu site ficará assim:**

```
https://seu-dominio.netlify.app
├── Hero elegante com logo
├── Sobre você
├── Produtos categorizados
├── Como pedir (passo a passo)
├── Galeria de trabalhos
└── Rodapé com contato
```

Sucesso! 🎂✨
