
let numbs = document.querySelectorAll('.numb');
numbs.forEach(function(n) {n.addEventListener('click', function (){console.log(n.value);
})
})
let opts = document.querySelectorAll('.opt');
opts.forEach(function(o){o.addEventListener('click',
function(){console.log(o.value);
})
})
