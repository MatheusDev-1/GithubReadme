
import fs from 'fs';
import projectConfig from '../config/project'

const { projectDir } = projectConfig
const backendDir = `${projectDir}/backend`
const frontendDir = `${projectDir}/frontend`;

import DependenciesList from '../config/dependencies';

const { listBackendDependencies,
  listBackendDevDependencies,
  listFrontendDependencies,
  listFrontendDevDependencies } = DependenciesList;

function developmentInterface(dir: string){
  if(fs.existsSync(dir)){
    const packageJson = fs.existsSync(dir) && require(`${dir}/package.json`)
    const {name, description, dependencies, devDependencies} = packageJson

    const allDependencies = dir.includes('backend') ? listBackendDependencies.filter((a: { name: string; })  => Object.keys(dependencies).includes(a.name)) : listFrontendDependencies.filter((a: { name: string; })  => Object.keys(dependencies).includes(a.name))
    const allDevDependencies = dir.includes('backend') ? listBackendDevDependencies.filter((a: { name: string; })  => Object.keys(devDependencies).includes(a.name)) : listFrontendDevDependencies.filter((a: { name: string; })  => Object.keys(devDependencies).includes(a.name))
    
    const content = `
# ${dir.includes('backend') ? 'Backend' : 'Frontend'}

${dir.includes('backend') ? `
## Como rodar | Usage

> **cd backend** && **yarn**
>
> **yarn** typeorm migration:run 
>
> **yarn** dev:server
` : `
## Como rodar | Usage

> **cd frontend** && **yarn**
>
> **yarn** start `}

${dir.includes('backend') ? `
## Rotas | Routes

| Método | Rota | Tipo | Parâmetros Aceitos |
| ------ | ---- | ---- | ------------------ |
|        |      |      |                    |
|        |      |      |                    |
|        |      |      |                    |
|        |      |      |                    |` : `

## Rotas | Routes

| Rota | Descrição |
| ------ | ---- | 
|        |      | 
|        |      | 
`}

## Dependências de Produção | Production dependencies

| Dependência      | Utilização |
| ----------- | ----------- |
${allDependencies.map((dependency: { name: string; used_for: string; })  => (
  `| ${dependency.name}    | ${dependency.used_for}  |`)).join(`
`)}

## Dependências de Desenvolvimento | Development dependencies

| Dependência      | Utilização |
| ----------- | ----------- |
${allDevDependencies.map((dependency: { name: string; used_for: string; }) => (
  `| ${dependency.name}    | ${dependency.used_for}  |`)).join(`
`)}
`
    return {
      name,
      description,
      content
    }
  }
}

const fileText = `# ${developmentInterface(backendDir)?.name ? developmentInterface(backendDir)?.name.toUpperCase() : developmentInterface(frontendDir)?.name.toUpperCase()}

![projectShot](screenshot.png)

> ${developmentInterface(backendDir)?.description || developmentInterface(frontendDir)?.description ? developmentInterface(backendDir)?.description : projectConfig.projectDescription}
${fs.existsSync(backendDir) && developmentInterface(backendDir)?.content}
${fs.existsSync(frontendDir) && developmentInterface(frontendDir)?.content}
`

const fileName = `${projectDir}/README.md`

async function readme () {
  fs.writeFile(fileName, fileText, function(err) {
    if (err) throw err;
    console.log('✨ Readme Written ✨')
  })
}

export default readme;