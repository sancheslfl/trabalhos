function Spy(obj, method) {
      this.count = 0 //iniciar a propriedade count com 0
      const method1 = obj[method]
      const spy = this
    obj[method] = function () {
        spy.count++ //incrementa na propriedade count
        method1.call(this, ...arguments) //chama a função com o Spy e os respetivos argumentos
      }
    }
  
  var spy = new Spy(console, "error")
  
  console.error("calling console.error")
  console.error("calling console.error")
  console.error("calling console.error")
  console.error("calling console.error")
  
  console.log(spy.count) // 4