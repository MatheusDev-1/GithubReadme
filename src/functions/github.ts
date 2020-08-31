import fs from 'fs';
import projectConfig from '../config/project';
import execProcess from "../utils/exec_process";

const message = process.argv[2] == undefined ? 'Commit' : process.argv[2];

const { projectDir } = projectConfig
const username = "MatheusDev-1"

const dirnameLength = projectDir.split('\\').length
const repositoryName = projectDir.split('\\')[dirnameLength - 1].toLowerCase()
const repositoryURL = `https://github.com/${username}/${repositoryName}.git`

const gitDir = `${projectDir}/.git`
const gitInit = `cd "${projectDir}" && git init`
const gitCreateRemote = `cd "${projectDir}" && git remote add origin ${repositoryURL}`
const gitCAP = `cd "${projectDir}" && git cep "${message}"`

console.log(gitCAP)

function callProcess(command: string): void{
  execProcess(command, function(err: Error, response: any){
    if(err){
      console.log(err)
    }
    console.log(response)
  })
}

async function github () {
  //const getUserRepositories = await api.get(`/users/${username}/repos`)
  //const userRepositories = getUserRepositories.data.map(repository => repository.html_url)

  if( !fs.existsSync(gitDir) ) {
      await callProcess(gitInit)
      console.log('✨ Git Init ✨')  
  }

  fs.readFile(`${projectDir}/.git/config`, function(err, data) {
    if(err){
      console.log(err)
    }
    if(!data.includes(`[remote "origin"]`)){
      callProcess(gitCreateRemote)
      console.log('✨ Git Add Remote ✨') 
    }
  })
  
  await callProcess(gitCAP)
  console.log('✨ Git Pushed ✨')
}

export default github;