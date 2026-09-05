# Moderna I — Site para hospedagem

Este pacote é uma versão estática do site, preparada para hospedagem em serviços como GitHub Pages, Netlify, Vercel ou qualquer servidor que publique arquivos HTML.

## Estrutura

- `index.html` — página inicial
- `corpos_costumes.html` — Corpos e Costumes
- `crencas.html` — Crenças
- `inovacoes.html` — Inovações
- `cultura.html` — Cultura
- demais páginas HTML — verbetes e páginas complementares
- `style.css` — folha de estilo
- `.nojekyll` — permite publicação direta no GitHub Pages

## Divisão do site

- **Corpos e Costumes:** Mulheres, Prostituição, Moda e Festas
- **Crenças:** Luteranismo, Reforma Puritana e Demonologia
- **Inovações:** Ciências, Tempo e Imprensa
- **Cultura:** Teatro, Música e Artes Plásticas

## Publicação

O arquivo que deve ser usado como página inicial é `index.html`.

Não é necessário instalar servidor, banco de dados ou linguagem de programação. Basta enviar **todos os arquivos desta pasta** para o serviço de hospedagem, mantendo-os no mesmo diretório.

### GitHub Pages

1. Crie um repositório.
2. Envie todos os arquivos deste pacote para a raiz do repositório.
3. Em Settings → Pages, escolha a publicação a partir da branch principal e da pasta `/ (root)`.
4. Aguarde a publicação e abra o endereço fornecido pelo GitHub.

### Netlify / Vercel

Envie a pasta do site como um projeto estático. O arquivo `index.html` na raiz será usado como entrada.
