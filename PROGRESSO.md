# Progresso: Portfólio (Mateus Simões da Rosa)

Site estático (HTML, CSS e JS puros) publicado no GitHub Pages: https://portfolio.msr-dev.com.br/ (o endereço antigo, https://mateusrad.github.io/portfolio/, redireciona para ele)

## Pronto
- Home com 9 projetos, em ordem de força do caso: CDI Vision, EscalaFácil, FiscalPro, EletroSys, Projeluz, TrainOS, Lista de Presentes, Menu Interativo e Residencial Vila Aurora.
- Página de estudo de caso para cada projeto, com prints, `og:image` próprio e entrada no `sitemap.xml`.
- Projetos de clientes: anonimizados (texto e prints desfocados) e marcados como "Código privado".
- Residencial Vila Aurora (adicionado em 2026-10-14): é o único projeto público, uma demonstração com empreendimento fictício. Por isso o card mostra o selo "Projeto de demonstração" e o link "Ver ao vivo" no lugar do selo "Código privado". O "(demo)" aparece no título da página, no `<title>` e no `og:title`, e o status é "Demo Publicada". A seção da home passou de "Sistemas em produção" para "Projetos". Os prints foram gerados do site publicado (https://mateusrad.github.io/demo-lancamento-imobiliario/) com o Chrome headless.
- Link do GitHub (2026-10-16) no contato da home, no card e na página do Vila Aurora ("Código" / "Ver código no GitHub") e no cartão digital. Liberado depois de revisar o perfil público, que hoje tem só `portfolio`, `demo-lancamento-imobiliario`, `gestor-de-contratos-releases` (notas de versão já sem nomes) e `humanizer-v3`. Antes de tornar público qualquer repositório novo, conferir se ele não tem dados de clientes.
- Cartão de visita digital: 4 modelos no canvas https://claude.ai/artifact/V5Co9GymXuzKZTaKpMJUEy (privado). O escolhido (modelo A) virou a página `cartao.html`, com WhatsApp, e-mail, portfólio, LinkedIn e GitHub, e o botão "Salvar contato", que baixa `mateus-simoes.vcf`. A página tem `noindex` (não aparece em buscadores, porque mostra o telefone) e não está no `sitemap.xml`. Os modelos C e D ainda têm o espaço do QR code vazio.
- Logos recortados (2026-10-16): `img/logo-amber.png` e `img/logo-light.png`, sem a margem transparente do original, usados no topo e no rodapé das 10 páginas e no cartão.
- LinkedIn no contato da home (2026-10-16).
- Contato profissional (2026-11-14): e-mail `rosams.dev@gmail.com` e WhatsApp (49) 99160-3779 na home, no cartão e no vCard. O telefone agora aparece também na home (antes ficava só no cartão), a pedido do Mateus. Os links do WhatsApp abrem com mensagem pronta, diferente em cada lugar, para saber de onde veio o contato: na home, "Vi seu portfólio…"; no cartão, "Peguei seu contato pelo cartão digital…". O `.gitattributes` mantém o vCard com quebras de linha CRLF (o `core.autocrlf` estava convertendo para LF).
- Subdomínio `portfolio.msr-dev.com.br` (2026-11-14): CNAME `portfolio` → `mateusrad.github.io` no Registro.br, domínio cadastrado no GitHub Pages (arquivo `CNAME` na raiz, que não pode ser apagado), certificado HTTPS aprovado (válido até 2027-02-12, renovado pelo GitHub) e "Enforce HTTPS" ligado. As URLs absolutas (canonical, `og:url`, `og:image`, `sitemap.xml`, `robots.txt`, vCard e o texto do cartão) já usam o domínio novo. Os links do demo continuam em `mateusrad.github.io/demo-lancamento-imobiliario`.
- Performance e acessibilidade 100 no Lighthouse (home e CDI Vision, medição de 07/10). Cloudflare Web Analytics em todas as páginas.

## Pendências
- Apagar `img/logo-monogram-amber.png` e `img/logo-monogram-light.png`, que ficaram sem uso (aguarda o OK do Mateus).
- Números de impacto nos textos (usuários, contratos, exames por mês): dependem de dados do Mateus.

## Melhorias opcionais
- `srcset` com versões de ~600 px dos prints e logos menores (ganho pequeno, ~15 KB por imagem).
- A classe `mt-4` é usada nas páginas de projeto, mas não existe no CSS (não faz nada hoje).

## Próximo passo
Depois de publicar: cadastrar `https://portfolio.msr-dev.com.br/` no Google Search Console e enviar o `sitemap.xml` (opcional), atualizar o link do portfólio no LinkedIn e na bio do Instagram, e testar o "Salvar contato" (já com o contato novo) num celular Android e num iPhone.
