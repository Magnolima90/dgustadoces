# 🚀 GUIA DE HOSPEDAGEM - NETLIFY

Passo a passo para colocar seu site online **gratuitamente** no Netlify.

## 📋 Pré-requisitos

- ✅ Todos os arquivos prontos (`index.html`, `style.css`, `script.js`, `/fotos/`)
- ✅ Conta de email (para criar conta no Netlify)
- ✅ (Opcional) Conta GitHub para deploy contínuo

---

## 🎯 OPÇÃO 1: Drag & Drop (Mais Fácil - 2 min)

### Passo 1: Acessar Netlify
1. Abra https://app.netlify.com
2. Clique em **"Sign Up"** → Criar conta (use seu email)

### Passo 2: Upload dos Arquivos
1. Na página inicial, procure por **"Drag & drop your site folder here"**
2. Selecione a pasta inteira `@dgustadoces` do seu computador
3. **Arraste** para a área de upload
4. Aguarde o carregamento (geralmente leva menos de 1 minuto)

### Passo 3: Seu Site Está Online! 🎉
- Netlify gera automaticamente uma URL: `https://xxxxx.netlify.app`
- Compartilhe esse link com clientes!

---

## 🎯 OPÇÃO 2: Conectar GitHub (Recomendado - Atualização Automática)

### Passo 1: Criar Repositório GitHub
1. Acesse https://github.com/new
2. Nome do repositório: `dgustadoces-site`
3. Descrição: "Landing page D'Gusta Doces"
4. Deixe como **Public**
5. Clique em **"Create repository"**

### Passo 2: Upload dos Arquivos para GitHub
No seu computador, abra o **PowerShell** na pasta `@dgustadoces`:

```powershell
# Inicializar git
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Initial commit: Landing page D'Gusta Doces"

# Conectar ao repositório remoto
git remote add origin https://github.com/seu_usuario/dgustadoces-site.git

# Fazer push
git branch -M main
git push -u origin main
```

**Ou** use GitHub Desktop (mais visual):
1. Baixe https://desktop.github.com
2. Clique em "Add Local Repository"
3. Selecione a pasta `@dgustadoces`
4. "Publish repository"

### Passo 3: Conectar GitHub ao Netlify
1. Acesse https://app.netlify.com
2. Clique em **"Add new site"** → **"Import an existing project"**
3. Escolha **"GitHub"**
4. Autorize Netlify a acessar seu GitHub
5. Selecione o repositório `dgustadoces-site`
6. Configure as opções (deixe como padrão)
7. Clique em **"Deploy site"**

### Passo 4: Atualização Automática 🤖
Agora, sempre que você fizer mudanças no GitHub, o Netlify atualiza automaticamente!

```powershell
# Para fazer uma atualização:
git add .
git commit -m "Atualizei os produtos"
git push
```

---

## 🌐 CONFIGURAR DOMÍNIO PERSONALIZADO

### Opção 1: Domínio Netlify Grátis (Recomendado Inicialmente)
1. No painel Netlify, acesse **"Site Settings"**
2. Procure por **"Change site name"**
3. Coloque algo como: `dgustadoces`
4. Sua URL será: `https://dgustadoces.netlify.app`

### Opção 2: Domínio Próprio (.com.br)

#### Comprar Domínio
1. Acesse https://www.registro.br (se for .br) ou Namecheap, GoDaddy, etc.
2. Procure por: `dgustadoces.com.br`
3. Compre o domínio (geralmente R$ 30-50/ano)
4. Guarde os dados de acesso

#### Conectar ao Netlify
1. No painel Netlify, vá para **"Domain Settings"**
2. Clique em **"Add custom domain"**
3. Digite: `dgustadoces.com.br`
4. Siga as instruções para configurar os **nameservers**
5. (Pode levar até 48h para funcionar)

---

## 🔒 ATIVAR HTTPS (Segurança)

1. No painel Netlify → **"SSL/TLS Certificate"**
2. Netlify gera automaticamente (grátis)
3. Sua URL terá o cadeado 🔒 na frente

---

## 📊 MONITORAR ANALYTICS

1. No painel Netlify → **"Analytics"**
2. Veja quantas pessoas visitam seu site
3. Qual página é mais visitada
4. De que países/cidades acessam

---

## ⚙️ TROUBLESHOOTING

### "Meu site não aparece"
1. Aguarde 2-3 minutos
2. Recarregue (Ctrl+F5)
3. Verifique se todos os arquivos foram feitos upload

### "As imagens não aparecem"
1. Verifique se a pasta `/fotos/` foi feita upload
2. No DevTools (F12), verifique os erros 404
3. Certifique-se dos caminhos: `fotos/imagem.jpg`

### "Domínio personalizado não funciona"
1. Aguarde até 48h
2. Verifique o email de confirmação
3. Verifique os nameservers no seu provedor de domínio
4. No painel Netlify, clique em **"Check DNS"**

### "Erro ao fazer push para GitHub"
1. Verifique sua senha/token GitHub
2. Use SSH em vez de HTTPS (mais seguro)
3. Execute: `git config --global user.email "seu_email@gmail.com"`
4. E: `git config --global user.name "Seu Nome"`

---

## 🎯 ATUALIZAÇÕES FUTURAS

### Via Drag & Drop
- Faça upload novamente da pasta inteira
- Netlify fará deploy automaticamente

### Via GitHub
```powershell
git add .
git commit -m "Descrição da mudança"
git push
```
Site atualiza automaticamente em 2-3 minutos!

---

## 📱 TESTAR NO CELULAR

Seu site está online, teste em qualquer dispositivo:

1. Acesse a URL do Netlify no celular
2. Teste todos os botões
3. Teste a navegação mobile
4. Teste o WhatsApp (clique em "Fazer Pedido")

---

## 💡 DICAS DE PERFORMANCE

### Otimizar Imagens
```powershell
# Comprimir imagens online:
https://tinypng.com

# Converter para WebP (melhor compressão):
# Use Canva ou GIMP
```

### Reduzir Tamanho dos Arquivos
1. Minify CSS: https://cssminifier.com
2. Minify JS: https://jsminifier.com
3. Minify HTML: https://htmlminifier.com

### Verificar Performance
- Google PageSpeed: https://pagespeed.web.dev
- GTmetrix: https://gtmetrix.com
- Lighthouse (dentro do Chrome DevTools)

---

## 🔄 BACKUP E SEGURANÇA

### Fazer Backup
1. Se usar GitHub, está seguro (histórico completo)
2. Se usar apenas Drag & Drop, mantenha os arquivos locais

### Proteger o Site
1. Ative HTTPS (Netlify faz automaticamente)
2. Configure firewall (opcional, no plano Enterprise)
3. Mantenha backups regulares

---

## 📚 PRÓXIMOS PASSOS

Após o site estar online:

1. **Compartilhar Link**
   - Instagram: Link na bio
   - WhatsApp: Envie para clientes
   - Email: Adicione em assinatura

2. **Melhorar SEO**
   - Adicione descrição no Google Meu Negócio
   - Divulgue nas redes sociais

3. **Coletar Feedback**
   - Peça opinião de clientes
   - Faça melhorias

4. **Expandir**
   - Adicione mais produtos
   - Crie blog com receitas
   - Adicione avaliações de clientes

---

## 📧 CONTATO NETLIFY

- Help: https://netlify.com/support
- Email: hello@netlify.com
- Chat: Disponível no painel

---

## ✅ CHECKLIST FINAL

- [ ] Conta Netlify criada
- [ ] Todos os arquivos fazem upload corretamente
- [ ] Site está online em `xxxxx.netlify.app`
- [ ] Testado no mobile (todos os botões funcionam)
- [ ] Imagens aparecem corretamente
- [ ] WhatsApp funciona
- [ ] Menu responsivo OK
- [ ] (Opcional) Domínio personalizado configurado
- [ ] (Opcional) GitHub conectado para atualizações automáticas

---

## 🎉 PRONTO!

Seu site está no ar! Agora é só aproveitar o fluxo de clientes! 

Compartilhe a URL e comece a receber pedidos! 🎂✨

**Dúvidas?** Acesse a documentação: https://docs.netlify.com
