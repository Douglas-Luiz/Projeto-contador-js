var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0

neutro()

function neutro(){
  if (currentNumber === 0) {
    currentNumberWrapper.style.color = 'green'
  }
}

function increment(){
     currentNumber = currentNumber + 1;
  
  if (currentNumber > 0) {
    currentNumberWrapper.style.color = 'black'
  }
        if ( currentNumber > 100){
          return decrement()
        }
       currentNumberWrapper.innerHTML = currentNumber
       
}

function decrement(){

    currentNumber = currentNumber - 1
  if (currentNumber === 0) {
    currentNumberWrapper.style.color = 'green'
  }
    if (currentNumber < 0) {
      
      return increment()
    }
    currentNumberWrapper.innerHTML = currentNumber
    
}

