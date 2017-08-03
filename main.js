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
      // console.log(event.path[0].textContent)
      if (event.path[0].textContent !== '='){
        document.querySelector('.display').innerHTML += o.value
      }
      else {
        let result = eval(document.querySelector('.display').innerHTML);
        document.querySelector('.display').innerHTML=result
        // console.log(result);
      }
    })
})
