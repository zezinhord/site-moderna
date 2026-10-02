# Revisão dos assets visuais

Revisão de 01/10/2026. Alterações locais nas 20 páginas HTML, no estilo compartilhado e nos recursos visuais. A estética mantém papel claro, tipografia serifada, ouro, azul escuro, borgonha, verde e violeta.

## Problemas encontrados e correções

| Problema observado | Correção aplicada |
| --- | --- |
| Regras de várias versões acumuladas, com estilos completos copiados dentro de três páginas | Um único `style.css`, usado pelas 20 páginas; estilos embutidos removidos de Economia, Gênero e Religiosidade. |
| A imagem de fundo da página inicial era uma composição com textos embutidos e repetia o conteúdo da página | Nova paisagem decorativa, com título e descrição em HTML sobre painéis de contraste. |
| Divisor do título sobreposto às letras por herdar posicionamento absoluto | Divisores no fluxo do documento, com proporção preservada. |
| Moldura raster esticada para acompanhar a altura dos artigos, produzindo faixas e borrões na área de leitura | Bordas em CSS e cantos com dimensões fixas; sem alongar uma imagem de moldura pelo texto. |
| Ícones com fragmentos de figuras vizinhas e baixa definição | Quatro emblemas independentes, com transparência real e versões para exibição no site. |
| Divisores e molduras deformados por `100% 100%` | Ornamento novo exibido com `contain`; margens transparentes excedentes ajustadas na preparação do arquivo. |
| Capitulares aplicadas também a subtítulos e outros parágrafos | Capitular limitada ao primeiro parágrafo do corpo do verbete. |
| Imagens sem dimensões reservadas durante o carregamento | `width` e `height` explícitos, mantendo a razão entre largura e altura. |
| Dependência de servidores externos para imagens de Música e Demonologia | Cópias locais dos arquivos já usados pelo site, com endereço de origem registrado. |
| Uma reprodução muito pequena com legenda embutida e uma reprodução diferente da indicada no catálogo citado pelo texto | Substituições documentadas nas seções de fontes abaixo. |
| Figura inteira ocultada em caso de falha de carregamento | Aviso com acesso à imagem original; a legenda permanece visível. O estado inicial também é verificado quando a falha ocorre antes da execução do script. |
| Foco de links ignorado pelo WebKit neste ambiente | Ordem natural de navegação preservada, foco explícito nos links, indicação visual de foco e atalho para o conteúdo. |
| Links antigos encaminhando Tempo e Prostituição ao modelo vazio | Economia e Gênero agora encaminham aos respectivos verbetes existentes. |
| PNG corrompido de Cultura, já sem uso nas páginas | Arquivo preservado em `output/asset-review/unused-originals/category_cultura_hd.png.disabled`, fora dos assets ativos. |

## Assets gerados

Seis imagens criadas com o **image_gen integrado**, sem uso de API ou CLI externa. Os arquivos de resolução original permanecem no projeto; as páginas consomem versões menores e otimizadas. As dimensões abaixo são as efetivamente entregues pelo gerador, não uma resolução presumida a partir do prompt.

| Asset | Dimensões originais | Arquivo original preservado |
| --- | --- | --- |
| Paisagem da página inicial | 1942 × 809 | `assets/originals/hero-renascentista.png` |
| Divisor ornamental | 2172 × 724 | `assets/originals/divisor-renascentista.png` |
| Flor-de-lis | 1254 × 1254 | `assets/originals/flor-de-lis-renascentista.png` |
| Sol | 1254 × 1254 | `assets/originals/sol-renascentista.png` |
| Rosa dos ventos | 1254 × 1254 | `assets/originals/rosa-dos-ventos-renascentista.png` |
| Livro | 1254 × 1254 | `assets/originals/livro-renascentista.png` |

O divisor e os quatro emblemas têm canal alfa com pixels transparentes. A paisagem é uma ilustração decorativa original. As obras usadas como fontes dos verbetes não foram recriadas por IA.

Os **prompts completos**, a ferramenta utilizada, os arquivos finais e as variantes servidas estão em [asset-manifest.json](output/asset-review/asset-manifest.json). Os PNG de exibição dos emblemas têm 384 pixels de largura; o divisor preparado tem 1200 × 247 pixels. A paisagem oferece versões de 640, 1280 e 1942 pixels, com WebP e alternativa JPEG.

## Reproduções históricas e proveniência

- **Música:** cópia do [arquivo do Metropolitan Museum](https://collectionapi.metmuseum.org/api/collection/v1/iiif/435844/1581937/main-image) já referenciado na página, salva em `assets/musica_caravaggio_met.jpg`, 1200 × 932 pixels.
- **Demonologia:** cópia do [arquivo do Metropolitan Museum](https://images.metmuseum.org/CRDImages/dp/original/DP826750.jpg) já referenciado na página, salva em `assets/demonologia_baldung_met.jpg`, 2579 × 3685 pixels.
- **Moda, burguesia:** a legenda já citava a [obra NG1399 da National Gallery](https://www.nationalgallery.org.uk/paintings/gerard-ter-borch-portrait-of-a-young-man), mas a imagem fornecida mostrava outra composição. Foi adotada a reprodução do registro citado, disponível no [arquivo da própria galeria](https://www.nationalgallery.org.uk/media/3gwnnhhy/n-1399-00-000014-web-hd.jpg), salva em `assets/moda_burguesia_ter_borch_ng1399.jpg`, 1920 × 2382 pixels. A imagem anterior foi preservada. Esta foi uma substituição para corresponder ao registro citado, não uma ampliação do arquivo antigo.
- **Prostituição, primeiro retrato:** o arquivo anterior tinha 233 × 343 pixels e incluía uma legenda dentro da imagem. Foi adotada uma reprodução da mesma composição, conferida visualmente, disponibilizada na [página do arquivo no Wikimedia Commons](https://commons.wikimedia.org/wiki/File:VeronicaFranco.jpg), salva em `assets/prostituicao_portrait_of_a_lady_reproducao.jpg`, 1790 × 2238 pixels. A legenda condicional existente foi mantida. A atribuição histórica e a identidade da retratada não foram revalidadas; o catálogo direto do Worcester Art Museum retornou HTTP 403. A origem da reprodução está explicitada no manifesto.

Os demais arquivos documentais foram preservados. Nenhuma fonte pequena foi ampliada para simular detalhes ausentes. Os links nas figuras abrem os arquivos originais locais para inspeção.

## Validação realizada

**360 casos de renderização aprovados**, correspondentes às 20 páginas em seis tamanhos de tela e três navegadores. As páginas com as duas reproduções substituídas foram verificadas novamente após a alteração. **42 verificações de interação aprovadas**, sem falhas pendentes nos testes executados.

| Ambiente | Cobertura |
| --- | --- |
| Chrome 154.0.8037.93 | 20 páginas, seis tamanhos de tela |
| Edge 154.0.4258.48 | 20 páginas, seis tamanhos de tela |
| WebKit 26.5 | 20 páginas, seis tamanhos de tela |
| Firefox | Não verificado: o executável não iniciou neste Windows. |

Tamanhos: **320 × 740, 390 × 844, 768 × 1024, 1024 × 768, 1440 × 1000 e 844 × 390**. A configuração de 390 × 844 foi renderizada com densidade 2; o teste de toque no Chrome utilizou densidade 3.

Foram verificados carregamento de imagens, ausência de erros de recursos e JavaScript, referências locais, proporções, reserva de dimensões, conteúdo fora da tela, texto cortado e ausência de dependências externas de assets. Também foram exercitados clique, toque, teclado, retorno entre páginas, abertura das imagens originais, carregamento ao rolar, movimento reduzido, funcionamento sem JavaScript, falha e recuperação de imagem, alternativa PNG/JPEG e o título dinâmico do modelo.

A conferência visual incluiu a página inicial em computador, celular e tablet, páginas de categorias, o início dos artigos e figuras documentais. A comparação do texto dos arquivos confirmou preservação dos textos acadêmicos, autores, legendas e referências nas 20 páginas.

### Contraste medido

| Par de cores | Razão |
| --- | --- |
| Texto principal | 14.13:1 |
| Texto secundário | 7.77:1 |
| Links | 10.55:1 |
| Card borgonha | 7.92:1 |
| Card azul | 7.47:1 |
| Card verde | 5.7:1 |
| Card violeta | 7.25:1 |
| Rodapé | 12.01:1 |

A medição considera os pares sólidos e a extremidade mais clara dos gradientes dos cards. Não representa uma certificação completa de acessibilidade.

### Evidências

- [Resultado dos testes no navegador](output/asset-review/browser-validation.json)
- [Preservação de conteúdo e contraste](output/asset-review/content-and-contrast-validation.json)
- [Página inicial em computador](output/asset-review/after-index-desktop.png)
- [Página inicial em celular](output/asset-review/after-index-phone.png)
- [Página inicial em tablet](output/asset-review/after-index-tablet.png)
- [Categoria em celular](output/asset-review/after-corpos_costumes-phone.png)
- [Artigo em computador](output/asset-review/after-moda-desktop.png)
- [Assets anteriores em conjunto](output/asset-review/asset-contact-sheet.jpg)

## Desempenho, manutenção e limites

O estilo compartilhado passou de 109,335 para 14,536 bytes (redução de 86.7% no arquivo CSS). Essa medição é de tamanho de arquivo; não constitui uma medição de velocidade em conexão móvel real. Foram utilizados WebP responsivo, alternativas PNG/JPEG, carregamento adiado para imagens fora do início da página e prioridade alta para a paisagem principal. Variantes geradas sem uso foram removidas.

O Firefox apresentou erro de inicialização lado a lado no Windows, relacionado à assembly `mozglue`. Esse ambiente não foi marcado como aprovado. WebKit é o motor testado, não uma execução do Safari em iPhone real. Os tamanhos de tela foram emulados; não houve testes em aparelhos físicos.

Algumas reproduções documentais preservadas ainda têm resolução limitada. Melhorias adicionais nesses arquivos dependem de obter reproduções verificáveis de melhor qualidade. A arte nova ficou restrita à decoração do site.

As alterações estão na pasta local. Não houve publicação externa. O projeto continua estático, sem processo de compilação obrigatório. A prévia local está em [127.0.0.1:8765](http://127.0.0.1:8765/index.html), enquanto o servidor desta sessão permanecer ativo.

Uma cópia dos HTML, CSS e documentos anteriores à revisão está em `C:\Users\jhenr\.codex\backups\site-moderna-assets-2026-10-01`. Os arquivos de imagens anteriores permanecem preservados, incluindo o PNG corrompido em quarentena.

Para repetir a verificação, disponibilize o site em um servidor local, instale/disponibilize a biblioteca Playwright e execute `node scripts/audit-site.cjs`. O endereço pode ser configurado por `AUDIT_URL`. A ausência de um navegador é registrada como limitação, separadamente das falhas dos testes.
