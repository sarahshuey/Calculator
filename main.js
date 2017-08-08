let outputResult = document.querySelector('.display')

let numbs = document.querySelectorAll('.numb');
numbs.forEach(function(n) {
  n.addEventListener('click', function() {
    document.querySelector('.display').innerHTML += n.value
  })
})
let opts = document.querySelectorAll('.opt');
opts.forEach(function(o) {
  o.addEventListener('click',
    function(event) {
let keypressed = event.path[0].textContent
      if (keypressed === '+'|| keypressed === '-' || keypressed === '*' || keypressed === '/' || keypressed === '%' ){
        document.querySelector('.display').innerHTML += o.value
      }
      else if (keypressed === 'C') {
        document.querySelector('.display').innerHTML = ''
      }
      else {
        let result = eval(document.querySelector('.display').innerHTML);
        document.querySelector('.display').innerHTML=result
      }
    })
})
