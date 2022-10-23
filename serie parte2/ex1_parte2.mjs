import  fetch  from 'node-fetch'
import { readFile, writeFile } from 'node:fs/promises'

const URL = `https://imdb-api.com/en/API/Title/k_i5isf0t6`
const OUT_FILE_NAME = './odd-ids.json'

let movie_ids = readFile('./ids.json')
movie_ids.then(processFileContents)

//Função que lê o conteúdo do ficheiro e dá fetch prosseguindo a outras funções depois relativamente ao resultado da Promise
function processFileContents(fileContents){
    let objIds = JSON.parse(fileContents)
    objIds[`movie-ids`].forEach(id => fetch(`${URL}/${id}`)
                        .then(movieIds => movieIds.json())
                        .then(processResults)
                        .catch(processError))
    }

//Variáveis para a função processResults (declarar fora da função)
let movielist = {}
movielist["total-duration"] = 0
var movie_array = []
let i = 0

//Função que executa quando a Promise resolve
function processResults(obj) {
    let new_movie_obj = {}
    movielist["movies"] = []
    movielist["total-duration"] += parseInt(obj.runtimeMins)
    new_movie_obj.id = obj.id
    new_movie_obj.title = obj.title
    new_movie_obj.duration = obj.runtimeMins
    movie_array[i] = new_movie_obj
    writeInFile(movie_array)
    i++
}

//Função que executa quando a Promise falha
function processError(error) {
    console.log(`An error occurred ${error} `)
}

//Função que escreve no ficheiro de output
function writeInFile(obj){
    movielist["movies"] = obj
    writeFile(OUT_FILE_NAME, JSON.stringify(movielist, null, 4))
        .then( () => console.log(`Odd ids file ${OUT_FILE_NAME} written with success `)  )
        .catch( err => console.log(`Odd ids not written. Reason ${err}`)  )
}