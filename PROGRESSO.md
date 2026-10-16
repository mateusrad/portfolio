# Progresso: Portfólio (Mateus Simões da Rosa)

Site estático (HTML, CSS e JS puros) publicado no GitHub Pages: https://mateusrad.github.io/portfolio/

## Pronto
- Home com 9 projetos, em ordem de força do caso: CDI Vision, EscalaFácil, FiscalPro, EletroSys, Projeluz, TrainOS, Lista de Presentes, Menu Interativo e Residencial Vila Aurora.
- Página de estudo de caso para cada projeto, com prints, `og:image` próprio e entrada no `sitemap.xml`.
- Projetos de clientes: anonimizados (texto e prints desfocados) e marcados como "Código privado".
- Residencial Vila Aurora (adicionado em 2026-10-14): é o único projeto público, uma demonstração com empreendimento fictício. Por isso o card mostra o selo "Projeto de demonstração" e o link "Ver ao vivo" no lugar do selo "Código privado". O "(demo)" aparece no título da página, no `<title>` e no `og:title`, e o status é "Demo Publicada". A seção da home passou de "Sistemas em produção" para "Projetos". Os prints foram gerados do site publicado (https://mateusrad.github.io/demo-lancamento-imobiliario/) com o Chrome headless.
- Link do GitHub (2026-10-16) no contato da home, no card e na página do Vila Aurora ("Código" / "Ver código no GitHub") e no cartão digital. Liberado depois de revisar o perfil público, que hoje tem só `portfolio`, `demo-lancamento-imobiliario`, `gestor-de-contratos-releases` (notas de versão já sem nomes) e `humanizer-v3`. Antes de tornar público qualquer repositório novo, conferir se ele não tem dados de clientes.
- Cartão de visita digital: 4 modelos no canvas https://claude.ai/artifact/V5Co9GymXuzKZTaKpMJUEy (privado). Faltam o telefone, a URL do LinkedIn e o QR code.
- Performance e acessibilidade 100 no Lighthouse (home e CDI Vision, medição de 07/10). Cloudflare Web Analytics em todas as páginas.

## Pendências
- LinkedIn: falta a URL do perfil.
- Números de impacto nos textos (usuários, contratos, exames por mês): dependem de dados do Mateus.

## Melhorias opcionais
- `srcset` com versões de ~600 px dos prints e logos menores (ganho pequeno, ~15 KB por imagem).
- A classe `mt-4` é usada nas páginas de projeto, mas não existe no CSS (não faz nada hoje).

## Próximo passo
Publicar o link do GitHub (commit e push aguardam o OK do Mateus). Depois: escolher um modelo do cartão e, se quiser, transformá-lo numa página `cartao.html` com o botão "Salvar contato" (.vcf).
