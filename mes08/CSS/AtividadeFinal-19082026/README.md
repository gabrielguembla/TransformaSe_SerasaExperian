# Atividade Final de CSS (CAscading Style Sheet)

## Instruções 

**Observações**
> - Crie um único arquivo ou uma para cada tópico; 
> - Caso for um código único usar comentários para separar cada questão (ex: `/* Atividade 1 */`).


## 1ª Subatividade

Seletores e Tipografia

No cabeçalho da página, crie:

- Um título <h1> utilizando a cor `#6a1b9a` e a fonte **Arial**
- Um parágrafo com uma breve descrição (texto livre), com cor `#333`, tamanho `18px` e alinhamento `justify`
- Uma classe chamada `.destaque` que deve:
 - Ter fundo 



## 2ª Subatividade

Box Model 

Crie uma seção de destaque (pode ser uma tag div>) com as seguintes características:

- Largura: `300px`
- Preenchimento interno (`padding`): `20px`
- Borda: `5px solid #6a1b9a`
- Margem: `20px automática` (centralizada horizontalmente)
- `box-sizing: border-box` (para que a largura inclua padding e borda)
- Fundo: `#f3e5f5` (roxo claro)

**Dentro desta caixa, coloque um texto curtos.**


## 3ª Atividade

Posicionamento

Implemente os seguintes elementos de posicionamento:

Um menu de navegação fixo no topo da página, com:
- Fundo com cor
- Texto com cor
- Links de navegação: "Home", "Sobre", "Projetos", "Contato"

 Um elemento com posicionamento `relative`** que deve ser movido `20px` para baixo em relação à sua posição original. Coloque um texto dentro dele.

 Um elemento com posicionamento `absolute`** que deve ser **filho direto** de um elemento com posicionamento `relative`. Posicione-o onde desejar dentro do pai.


## 4ª Atividade  

Pseudo-classes e Pseudo-elementos 

 Crie um botão:
- Normal
- Hover
- Active

 Crie um input:
- Active

Crie uma lista não ordenada com 5 itens (conteúdo livre). Utilize a pseudo-classe `:nth-child(even)` para que as linhas pares com fundo.

Em um título <h2>, utilize o pseudo-elemento `::before` para adicionar o emoji antes  e depois do texto


## 5 Atividade

Flexbox

Crie um container com display: flex contendo 3 caixas (divs). O container deve ter:

- justify-content: center
- align-items: center
- Altura  
- Borda ou fundo para visualização  

Cada caixa deve ter:
- padding
- Fundo
- Texto 

Dentro de cada caixa, coloque os textos: "Caixa 1", "Caixa 2" e "Caixa 3".


## 6ª Atividade

CSS Grid

Crie um grid com 6 itens (divs com conteúdo livre, ex: números ou textos). O grid deve se comportar da seguinte forma:

- Mobile (até 599px): 1 coluna
- Tablet (600px a 899px): 2 colunas
- Desktop (900px ou mais): 3 colunas

Requisitos:
- Use gap: 15px entre os itens
- Cada item deve ter um fundo , texto branco e padding: 20px
- Utilize Media Queries para os breakpoints


## 7ª Atividade  

Transição e Animação 

 Crie um botão com uma transição que mude a cor de fundo no `hover` (escolha as cores que desejar). A transição deve ter duração opcinal e um ease no timing.

Crie um elemento com uma animação de pulsar que:
- Aumente e diminua de tamanho (escala) continuamente


## 8ª Atividade   

Layout Responsivo (1,0 ponto)

Crie um layout de duas colunas utilizando CSS Grid com grid-template-areas. O layout deve ter:

- Mobile (até 767px): Tudo em coluna única (sidebar em cima, main embaixo)
- Desktop (768px ou mais):
  - Sidebar com largura 200px (esquerda)
  - Main com o restante do espaço (direita)

Áreas do grid:
- header (ocupando toda a largura)
- sidebar (área da esquerda)
- main (área do conteúdo principal)
- footer (ocupando toda a largura)

**Preencha cada área com textos ou conteúdos fictícios.**



## 9ª Atividade

Galeria de Imagens

Crie uma **galeria de imagens** (use emojis ou textos como "Imagem 1", "Imagem 2"... no lugar de imagens reais) com as seguintes características:

- Utilize **Flexbox OU Grid** (escolha o que preferir)
- Responsiva: deve se adaptar para:
  - Mobile (até 599px): 1 coluna
  - Tablet (600px a 899px): 2 colunas
  - Desktop (900px ou mais): 3 colunas
- Efeito hover: ao passar o mouse sobre uma imagem, aplique um efeito visual (ex: aumentar escala, mudar cor, adicionar sombra, etc. Opcional)

A galeria deve ter no mínimo 8 itens