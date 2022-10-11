let numbers = ["one", "two", "three", "four"]


// { one: 3, two: 3, three: 5, four: 4}


Array.prototype.associateWith = function(transformation){
    var newObj = {}
    this.forEach(transformation())
    /*for (let e in this) {
        newObj[this[e]] = transformation(this[e])
    }*/
    return newObj
}

/*function associateWith(transformation){
    return 
}*/

console.log(numbers.associateWith( str => str.length ))
