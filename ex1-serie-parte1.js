const validator = {name : "p1" , validators: [s => typeof s == 'string' && s.length > 2, s => s[0]=="a"] }
const obj1 = { p1 : "abc" }
const obj2 = { p2 : 123 }
const obj3 = { p1 : "a" , p2 : 123 }


function validateProperty(obj, propValidator){
    for (let key in obj) {
        if(key != propValidator.name){
            for(let validatorFunc of propValidator.validators){
                if(!validatorFunc(obj[propValidator.name])) return false
            }
        }
      
    }
    return true  
}

const a = validateProperty(obj1, validator)
console.log(a) //true
const b = validateProperty(obj2, validator) //false
console.log(b)
const c = validateProperty(obj3, validator) //false
console.log(c)

    /*let i=0; i < propValidator.validators.length; i++*/

    /* if(Object.values(obj).every(value => value instanceof String && value.length > 2, value => value=="a") == true) return true
           else return false*/