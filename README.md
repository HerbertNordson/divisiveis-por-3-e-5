# Soma dos valores divisíveis por 3 e 5, dado um valor a função.

Olá, tudo bem? Me chamo Herbert Nordson e vou decorrer um pouco sobre este projeto. 

Essa é função que consiste em receber um número inteiro positivo e retornar o somatório de todos os valores inteiros divisíveis por 3 ou 5, que sejam inferiores ao número passado.

Está um pouco confuso? Vou apresentar dois exemplos para tornar simples a compreensão. 

Exemplo 1: Caso sua função receba o inteiro 10, ela deve retornar 23, resultante do somatório dos números 3, 5, 6 e 9 que são menores que 10.
Exemplo 2: Caso sua função receba o inteiro 11, ela deve retornar 33, resultante do somatório dos números 3, 5, 6, 9 e 10 que são menores que 11.

Agora ficou simples né?! Então vamos para ação!

## Como rodar o projeto: 

### Opção 1 - Utilizando o Code Pen no seu navegador:
Esta é a forma mais simples para fazer o teste deste script! 
Basta acessar este link - https://codepen.io/herbert-nordson/pen/NWaQqvx atrvés do seu navegador. 
Ao entrar na página de do Code Pen, clique com o botão esquerdo do mouse 
na opção "Console". Lá irá aparecer a resposta de retorno da função.

#### Fazendo seu próprio teste! 
Para testar a função, você precisa somente ir até a linha de número 24 do código da função 
e você encontrará o seguinte comando: 

       console.log(sumValues(10));

Basta alterar o valor de recebimento da função e aguardar a resposta no console. 
Caso o script não rode automaticamente, basta clicar na opção "RUN" do code pen! 
Vou utilizar o "Exemplo 2" como demonstração, ou seja, vou substituir o valor 10 pelo valor 11 da função sumValues().
O que resultará no seguinte comando: 

      console.log(sumValues(11));

e tendo como retorno: "A soma de todos os valores inteiros divisíveis por 3 ou 5 que sejam inferiores ao número 11 é: 33"
    
### Opção 2 - Clonando o repositório e executando no terminal:

#### Atenção, para esta opção é necessário ter o node instalado em sua máquina.

Caso você queria testar a função em sua máquina local, será necessário fazer o clone do repositório.
Se você já conhece bem o gitHub, é só seguir o caminho padrão. Clica no botão "Code" e copia o endereço url disponível em 
clone https. Mas caso você ainda não tenha familiaridade, é só copiar essa url - https://github.com/HerbertNordson/divisiveis-por-3-e-5.git 
e seguir os próximos passos.

Abra o terminal(cmd, powershell e etc) de sua preferência e copie o link do git clone. Em seguida aperte Enter e aguarde o download concluir.

Após concluir a transferência basta pedir para que o node execute o script da seguinte forma: 
      node ./script.js
E o resultado aparecerá na tela do seu terminal.

#### Fazendo seu próprio teste!

Acesse o arquivo script.js via terminal ou pelo seu editor de código, altere o valor de dentro da função sumValues(), assim como fizemos na opção 1,
e logo após salvar a alteração, rodar novamente o comando " node ./script.js " em seu terminal e aguardar o retorno da função com a resposta.

### Opção 3 - Clonando o repositório e executando a página HTML:

Para trazer um pouco a realidade de aplicação da função, resolvi criar uma página simples em HTML, CSS e JS; Para ver a execução dessa função de forma mais dinâmica.

A execução é bem simples, assim como na Opção 2, será necessário clonar o repositório seguindo os mesmo passos: 

Se você já conhece bem o gitHub, é só seguir o caminho padrão. Clica no botão "Code" e copia o endereço url disponível em 
clone https. Mas caso você ainda não tenha familiaridade, é só copiar essa url - https://github.com/HerbertNordson/divisiveis-por-3-e-5.git 
e seguir os próximos passos.

Abra o terminal(cmd, powershell e etc) de sua preferência e copie o link do git clone. Em seguida aperte Enter e aguarde o download concluir.

Após concluir a clonagem, vá até a pasta onde o arquivo foi clonado. Ao acessar a pasta, clique duas vezes no arquivo "index.html" e ele executará em seu
navegador padrão, ou no navegador que você selecionar. 

Feito isso, é só incluir um número positivo no campo input e clicar em Enter. O resultado aparecer no mesmo momento, lhe dando a opção de fazer um novo teste
ao clicar no botão "Novo Valor". O layout está responsivo para atender a todas as telas!

## Conclusão

Este foi a criaçã ode uma função que tem como principal objetivo, receber um valor numerico positivo e retornar a somos dos seus valores divisíveis por 3 e 5 que 
sejam inferiores ao nímero passado. Essa função pode ser testada e acessada de 3 formas: 1: através do code Pen; 2: Pelo prompt de comando o arquivo script.js com node 
e 3: através da aplicação web disponivel no index.html.

Obrigado por ter vindo até aqui e até uma próxima!

Herbert Nordson
