# Portfólio — Mateus Simões

Site de portfólio estático (HTML/CSS/JS puro, sem build), pronto para publicar no GitHub Pages.

## Estrutura

```
index.html
css/style.css
js/script.js
```

## Adicionando um novo projeto

Para adicionar um novo projeto, copie um bloco `<article class="project reveal">...</article>` inteiro dentro de `<section id="projetos">` em `index.html`, ajuste o número da folha (`project__num`), título, descrição e tags, e crie a página de estudo de caso correspondente (copie `eletrosys.html` como modelo). Lembre de atualizar também as meta tags `og:title`, `og:description`, `og:image` e `og:url` no `<head>` da nova página.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (por exemplo, `mateusrad/portfolio`) e suba estes três arquivos/pastas (pode usar GitHub Desktop, que você já usa).
2. No repositório, vá em **Settings → Pages**.
3. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
4. Salve. Em alguns minutos o site fica disponível em:
   `https://mateusrad.github.io/NOME-DO-REPOSITORIO/`
5. Se quiser que fique em `https://mateusrad.github.io/` diretamente (sem subpasta), o nome do repositório precisa ser exatamente `mateusrad.github.io`.

## Customização rápida

Todas as cores, fontes e espaçamentos ficam centralizados no topo de `css/style.css`, dentro de `:root`. Para trocar a cor de destaque (atualmente o âmbar `#E8A33D`), basta alterar a variável `--bp-amber`.
