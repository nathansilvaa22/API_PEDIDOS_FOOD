# Food Orders API

Este projeto é uma API para gerenciar pedidos de comida, que também oferece endpoints para listar categorias de comida e o total de itens em cada categoria.

## Funcionalidades

- **Gerenciamento de Pedidos**: Permite criar, visualizar, atualizar e deletar pedidos de comida. Cada pedido gera automaticamente um código único.
- **Categorias de Comida**: Endpoint que retorna todas as categorias disponíveis de comida.
- **Total de Itens por Categoria**: Endpoint que retorna o número total de itens disponíveis em cada categoria.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento.
- **Express.js**: Framework web para Node.js.
- **MySQL/MongoDB**: Banco de dados para armazenamento de pedidos e categorias.


## Endpoints

### Pedidos

- **GET /orders**: Retorna todos os pedidos.
- **POST /orders**: Cria um novo pedido (gera um código único automaticamente).
- **DELETE /orders/:code**: Deleta um pedido a partir do codigo do mesmo que é gerado de forma automatica para cade pedido.
**DELETE /orders/:name**: Deleta o pedido a partir do nome da pessoa que fez o pedido

### Categorias

- **GET /categories/foods**: Retorna todas as categorias de comida.


## Instalação

1. Clone este repositório.
2. Execute `npm install` para instalar as dependências.
3. Configure as variáveis de ambiente no arquivo `.env`.
4. Execute `npm start` para iniciar o servidor.


