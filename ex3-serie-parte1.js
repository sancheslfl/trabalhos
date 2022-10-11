const validators = [
    {
    name : "p1" , validators: [s => typeof s == 'string' && s.length > 2, s => s[0]=="a"] 
    },
    {
    name : "p2" , validators: [s => Number.isInteger(s)] 
    }
 ]
 const obj1 = { p1 : "a" }
 const obj2 = { p1 : 123  }
 const obj3 = { p1 : "abc" , p2 : 123 }

 
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

 function validateProperties(obj, propValidators){
    if(propValidators.constructor != Array) return undefined
    propValidators = propValidators.filter(s => validateProperty(obj,s) == false)
    propValidators = propValidators.map(s => s.name)
    return propValidators
    
}

Object.prototype.validateProperties = function(propValidators){
    return validateProperties(this, propValidators)
}

const a = obj1.validateProperties(validators) // ["p1", "p2"]
console.log(a)
const b = obj2.validateProperties(validators) // ["p1", "p2"]
console.log(b)
const c = obj3.validateProperties(validators) // []
console.log(c)
