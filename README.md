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
2 - Ter o dorcker instalado na maquina
3 - Rodar o comando da raiz do projeto "docker-compose up --build"
4 - Rodar a aplicação com o comando "docker-compose exec app bash" para ter acesso a imagem docker
5 - Para rodar a aplicação, deve-se rodar o comando "yarn dev" após o comando "docker-compose up --build" e acessar "http://localhost:8080/calcular" passando {"numero": numero desejado} no body
6 - Para testar a aplicação, deve-se rodar o comando "yarn test" após o comando "docker-compose exec app bash"
