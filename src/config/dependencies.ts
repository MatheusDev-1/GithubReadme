const DependenciesList = {
  "listBackendDependencies": [
  {"name": "bcryptjs", "used_for":"Útil para criptografar senhas no banco de dados e dados sensíveis"},
  {"name": "cors", "used_for":"Serve para habilitar o CORS em nosso servidor e permitir determinadas requisições do backend"},
  {"name": "date-fns", "used_for":"Utilizado para formatar datas da melhor forma possível"},
  {"name": "express", "used_for":"Framework para construir aplicações e API's"},
  {"name": "jsonwebtoken", "used_for":"Permite trabalhar com tokenização e autenticação"},
  {"name": "multer", "used_for":"Utilizado para o upload de arquivos"},
  {"name": "pg", "used_for":"Driver do PostgreSQL"},
  {"name": "typeorm", "used_for":"Usado para abstrair queries de banco de dados através de javascript"},
  {"name": "uuidv4", "used_for":"Geração de UUID para ID dos parâmetros de rotas e banco de dados"}
],
  "listBackendDevDependencies": [
    {"name": "eslint", "used_for":"Linter para monitoramento do código e indicação de erros"},
    {"name": "prettier", "used_for":"Formatador de código, deixando-o padronizado"},
    {"name": "ts-node-dev", "used_for":"Permite a inicialização com Typescript, fazendo a conversão dos arquivos .js"}
],
  "listFrontendDependencies": [
    {"name": "react", "used_for":"Biblioteca componentizada e flexível para criação de interfaces"},
    {"name": "typescript", "used_for":"Superset da linguagem JavaScript, permite a utilização de tipagem estática"},
    {"name": "@unform/web", "used_for":"Criação de formulários"},
    {"name": "styled-components", "used_for": "Permite utilização do CSS em JS"},
    {"name": "yup", "used_for":"Utilizado para validação de campos e schemas"},
    {"name": "polished", "used_for":"Escure ou clareia tons de cores do CSS com facilidade"},
    {"name": "@testing-library/jest-dom", "used_for":"Framework de teste unitário"}
],
  "listFrontendDevDependencies": [
    {"name": "eslint", "used_for":"Linter para monitoramento do código e indicação de erros"},
    {"name": "prettier", "used_for":"Formatador de código, deixando-o padronizado"}
  ]
}

export default DependenciesList;