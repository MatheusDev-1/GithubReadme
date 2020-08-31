# GOBARBER

![projeto1](screenshot.png)

> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

# Backend

## Como rodar | Usage

> **cd backend** && **yarn**
>
> **yarn** typeorm migration:run 
>
> **yarn** dev:server

## Dependências de Produção | Production dependencies

| Dependência      | Utilização |
| ----------- | ----------- |
| bcryptjs    | Útil para criptografar senhas no banco de dados e dados sensíveis  |
| cors    | Serve para habilitar o CORS em nosso servidor e permitir determinadas requisições do backend  |
| date-fns    | Utilizado para formatar datas da melhor forma possível  |
| express    | Framework para construir aplicações e API's  |
| jsonwebtoken    | Permite trabalhar com tokenização e autenticação  |
| multer    | Utilizado para o upload de arquivos  |
| pg    | Driver do PostgreSQL  |
| typeorm    | Usado para abstrair queries de banco de dados através de javascript  |
| uuidv4    | Geração de UUID para ID dos parâmetros de rotas e banco de dados  |

## Dependências de Desenvolvimento | Development dependencies

| Dependência      | Utilização |
| ----------- | ----------- |
| eslint    | Linter para monitoramento do código e indicação de erros  |
| prettier    | Formatador de código, deixando-o padronizado  |
| ts-node-dev    | Permite a inicialização com Typescript, fazendo a conversão dos arquivos .js  |


# Frontend

## Como rodar | Usage

> **cd frontend** && **yarn**
>
> **yarn** start 

## Dependências de Produção | Production dependencies

| Dependência      | Utilização |
| ----------- | ----------- |
| react    | Biblioteca componentizada e flexível para criação de interfaces  |
| typescript    | Superset da linguagem JavaScript, permite a utilização de tipagem estática  |
| @unform/web    | Criação de formulários  |
| styled-components    | Permite utilização do CSS em JS  |
| yup    | Utilizado para validação de campos e schemas  |
| polished    | Escure ou clareia tons de cores do CSS com facilidade  |
| @testing-library/jest-dom    | Framework de teste unitário  |

## Dependências de Desenvolvimento | Development dependencies

| Dependência      | Utilização |
| ----------- | ----------- |
| eslint    | Linter para monitoramento do código e indicação de erros  |
| prettier    | Formatador de código, deixando-o padronizado  |

