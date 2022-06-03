# challengeFramework

## Descrição do desafio:
1. Um cliente precisa de um sistema que seja capaz de decompor um número em todos os seus divisores, enumerando também aqueles que forem primos. 
2. Obs.: Não é permitido o uso de bibliotecas prontas, se houver, que façam a decomposição.

● Dado um número de entrada, o programa deve calcular todos os divisores que compõem o número.
● Dado um número de entrada, o programa deve calcular todos os divisores primos que compõem o número. 

Exemplo de Console:
Digite um número: 45
Após o usuário digitar o número, Console pode mostrar:
Número de Entrada: 45
Números divisores: 1 3 5 9 15 45
Divisores Primos: 1 3 5 

2. Já temos nossa funcionalidade principal. Contudo, você acaba de descobrir que essa funcionalidade vai ser usada em outros sistemas e, por isso, 
3. é necessário que seja disponibilizada um serviço que forneça as informações.

### Orientações para testar a aplicação:
1 - Clonar o repositorio
2 - Rodar o comando da raiz do projeto "docker-compose up --build"
3 - Após rodar o comando da linha 22, rodar a aplicação com o comando "docker-compose exec app bash" para ter acesso a imagem docker
4 - Para rodar a aplicação, deve-se rodar o comando "yarn dev" após o comando da linha 23 e acessar "http://localhost:8080/calcular" passando {"numero": numero desejado} no body
5 - Para testar a aplicação, deve-se rodar o comando "yarn test" após o comando da linha 23
