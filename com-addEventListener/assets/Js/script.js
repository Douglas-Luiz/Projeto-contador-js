var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0

var buttom_increment = document.getElementById('add')
var buttom_decrement = document.getElementById('remove')

neutro()

function neutro(){
  if (currentNumber === 0) {
   currentNumberWrapper.style.color = 'green'
  }
}

buttom_increment.addEventListener( 'click', function(){
  
     currentNumber = currentNumber + 1;
  if ( currentNumber >= 0 ) {
        currentNumberWrapper.style.color = 'black'}
  if (currentNumber === 0) {
    currentNumberWrapper.style.color = 'green'
  }
        
       currentNumberWrapper.innerHTML = currentNumber
       

})

buttom_decrement.addEventListener( 'click', function(){
  
    currentNumber = currentNumber - 1
    if (currentNumber < 0) {
      currentNumberWrapper.style.color = 'red'
    }
  if (currentNumber === 0) {
    currentNumberWrapper.style.color = 'green'
  }
    currentNumberWrapper.innerHTML = currentNumber
    
})
