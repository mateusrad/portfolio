# Progresso: Portfólio (Mateus Simões da Rosa)

Site estático (HTML, CSS e JS puros) publicado no GitHub Pages: https://portfolio.msr-dev.com.br/ (o endereço antigo, https://mateusrad.github.io/portfolio/, redireciona para ele)

## Pronto
- Home com 8 projetos, em ordem de força do caso: BoxHop, EscalaFácil, EletroSys, Projeluz, TrainOS, Lista de Presentes, Menu Interativo e Residencial Vila Aurora.
- BoxHop (adicionado em 2026-11-19, como projeto 01): sistema de reservas e Pix para boxes de CrossFit e Hyrox, em uso num box real. A página `boxhop.html` usa só os prints do **Volt Box**, o box fictício de demonstração (`D:\MEUS_PROJETOS\BoxHop\docs\demo-voltbox\prints`), por isso nada foi desfocado. O box real não é nomeado (o roteiro do BoxHop pede autorização para usar a marca). Sem link para o demo (`demo.boxhop.com.br`), porque os logins dele não são divulgados: a página diz que a demonstração ao vivo é feita numa conversa. As 6 telas do celular usam a classe `mobile-showcase--seis` (3 por linha no computador, 2 no celular).
- CDI Vision e FiscalPro (2026-11-19): saíram da home e do `sitemap.xml` a pedido do Mateus. As páginas `cdivision.html` e `fiscalpro.html` e os prints continuam no repositório e no ar para quem tiver o endereço, sem nenhum link até elas. As duas têm `<meta name="robots" content="noindex">` no lugar do `canonical`, para o Google tirá-las da busca. Não bloquear essas páginas no `robots.txt`: o Google precisa conseguir abri-las para ver o `noindex`.
- Página de estudo de caso para cada projeto, com prints, `og:image` próprio e entrada no `sitemap.xml`.
- Projetos de clientes: anonimizados (texto e prints desfocados) e marcados como "Código privado".
- Residencial Vila Aurora (adicionado em 2026-10-14): é o único projeto público, uma demonstração com empreendimento fictício. Por isso o card mostra o selo "Projeto de demonstração" e o link "Ver ao vivo" no lugar do selo "Código privado". O "(demo)" aparece no título da página, no `<title>` e no `og:title`, e o status é "Demo Publicada". A seção da home passou de "Sistemas em produção" para "Projetos". Os prints foram gerados do site publicado (https://mateusrad.github.io/demo-lancamento-imobiliario/) com o Chrome headless.
- Link do GitHub (2026-10-16) no contato da home, no card e na página do Vila Aurora ("Código" / "Ver código no GitHub") e no cartão digital. Liberado depois de revisar o perfil público, que hoje tem só `portfolio`, `demo-lancamento-imobiliario`, `gestor-de-contratos-releases` (notas de versão já sem nomes) e `humanizer-v3`. Antes de tornar público qualquer repositório novo, conferir se ele não tem dados de clientes.
- Cartão de visita digital: 4 modelos no canvas https://claude.ai/artifact/V5Co9GymXuzKZTaKpMJUEy (privado). O escolhido (modelo A) virou a página `cartao.html`, com WhatsApp, e-mail, portfólio, LinkedIn e GitHub, e o botão "Salvar contato", que baixa `mateus-simoes.vcf`. Desde 2026-11-14 o cartão é indexado (o `noindex` saiu, porque o telefone já está na home) e está no `sitemap.xml`. As assinaturas "Desenvolvido por Mateus Simões" nos projetos passam a apontar para o cartão (`https://portfolio.msr-dev.com.br/cartao.html`), e o demo Vila Aurora já foi atualizado. Os modelos C e D ainda têm o espaço do QR code vazio.
- Logos recortados (2026-10-16): `img/logo-amber.png` e `img/logo-light.png`, sem a margem transparente do original, usados no topo e no rodapé das 10 páginas e no cartão.
- LinkedIn no contato da home (2026-10-16).
- Contato profissional (2026-11-14): e-mail `rosams.dev@gmail.com` e WhatsApp (49) 99160-3779 na home, no cartão e no vCard. O telefone agora aparece também na home (antes ficava só no cartão), a pedido do Mateus. Os links do WhatsApp abrem com mensagem pronta, diferente em cada lugar, para saber de onde veio o contato: na home, "Vi seu portfólio…"; no cartão, "Peguei seu contato pelo cartão digital…". O `.gitattributes` mantém o vCard com quebras de linha CRLF (o `core.autocrlf` estava convertendo para LF).
- Subdomínio `portfolio.msr-dev.com.br` (2026-11-14): CNAME `portfolio` → `mateusrad.github.io` no Registro.br, domínio cadastrado no GitHub Pages (arquivo `CNAME` na raiz, que não pode ser apagado), certificado HTTPS aprovado (válido até 2027-02-12, renovado pelo GitHub) e "Enforce HTTPS" ligado. As URLs absolutas (canonical, `og:url`, `og:image`, `sitemap.xml`, `robots.txt`, vCard e o texto do cartão) já usam o domínio novo. Os links do demo continuam em `mateusrad.github.io/demo-lancamento-imobiliario`.
- Arquivos internos fora do site (2026-11-14): o `_config.yml` tira `docs/`, `PROGRESSO.md` e `README.md` do site publicado (eles continuam no repositório público). Por isso, nunca escrever dados pessoais nos resumos de sessão.
- Pré-visualização do link (2026-11-16): a home e o cartão usam `img/og-portfolio.jpg` (1200×630, 96 KB, com foto, nome, função e endereço, no visual do site). É o cartão que aparece ao compartilhar o link no WhatsApp, no LinkedIn etc. O conteúdo fica centralizado, para continuar legível quando o WhatsApp corta a imagem em miniatura quadrada. O WhatsApp guarda a prévia de cada endereço por um tempo: para testar sem o cache, use um endereço com `?v=2` no final.
- Performance e acessibilidade 100 no Lighthouse (home e CDI Vision, medição de 07/10). Cloudflare Web Analytics em todas as páginas.

## Pendências
- Números de impacto nos textos (usuários, contratos, exames por mês): dependem de dados do Mateus.

## Melhorias opcionais
- `srcset` com versões de ~600 px dos prints e logos menores (ganho pequeno, ~15 KB por imagem).
- A classe `mt-4` é usada nas páginas de projeto, mas não existe no CSS (não faz nada hoje).

## Ideias futuras
- Integrar IA ao WhatsApp profissional (triagem de orçamentos), testando no servidor local do Mateus depois que ele instalar o Docker. Caminho combinado: WhatsApp Cloud API oficial, webhook exposto pelo Cloudflare Tunnel, backend em Django ou Flask. Se der certo, vira estudo de caso no portfólio. Antes de usar com clientes reais: conferir as regras atuais da Meta para bots de IA e passar pela avaliação de conformidade (LGPD).

## Próximo passo
Depois de publicar: cadastrar `https://portfolio.msr-dev.com.br/` no Google Search Console e enviar o `sitemap.xml` (opcional), atualizar o link do portfólio no LinkedIn e na bio do Instagram, e testar o "Salvar contato" (já com o contato novo) num celular Android e num iPhone.
