const superheroes = require('superheroes')
const supervillains = require('supervillains')

let meuSuperHeroi = superheroes.random()
let meuSuperVilao = supervillains.random()

console.log(`Nome do superherói: ${meuSuperHeroi}.`)
console.log(`Nome do supervilão: ${meuSuperVilao}.`)
