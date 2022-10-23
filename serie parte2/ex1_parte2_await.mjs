import  fetch  from 'node-fetch'
import { readFile, writeFile } from 'node:fs/promises'

const URL = `https://imdb-api.com/en/API/Title/k_i5isf0t6`
const OUT_FILE_NAME = './odd-ids.json'

let i= 0
let movie_ids = await readFile('./ids.json')
makeRequest(movie_ids)
let movielist = {}
let movie_array = []
movielist["total-duration"] = 0

// HTTP Request em Async/Await
async function makeRequest(fileContents) {
    try {
        let objIds = JSON.parse(fileContents)
        let movieIds = objIds[`movie-ids`]
        console.log(movieIds)
        while(i < movieIds.length){
            let response = await fetch(`${URL}/${movieIds[i]}`)
            let call = await response.json()
            processResults(call)
        }
    } 
    catch(err) {
        processError(err)
    }
    
}


function processResults(obj) {
        let new_movie_obj = {}
        movielist["total-duration"] += parseInt(obj.runtimeMins)
        new_movie_obj.id = obj.id
        new_movie_obj.title = obj.title
        new_movie_obj.duration = obj.runtimeMins
        movie_array[i]=new_movie_obj
        writeInFile(movie_array)
        i++
}

function writeInFile(obj){
    movielist["movies"]=obj
    writeFile(OUT_FILE_NAME, JSON.stringify(movielist,null,4))
}
        

function processError(error) {
    console.log(`An error occurred ${error} `)
}