var goodUsers = [
   { id: 1 },
   { id: 2 },
   { id: 3 }
]

// `checkUsersValid` is the function you'll define
var testAllValid = checkUsersValid(goodUsers)

testAllValid([
   { id: 2 },
   { id: 1 }
])
// => true

testAllValid([
   { id: 2 },
   { id: 4 },
   { id: 1 }
])
// => false

function checkUsersValid(goodUsers){
   for (let i in testAllValid){
       var valid = false
       for(let j in goodUsers){
           if((testAllValid[i].id == goodUsers[j].id)){
               valid = true
               break
               }
           }
       if( valid == false ) return valid
       }
   return true
   }