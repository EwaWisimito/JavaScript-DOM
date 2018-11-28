const addBtn = document.getElementById('AddBtn');
const subBtn = document.getElementById('SubBtn');
var counter = document.getElementById('counter').innerHTML = 0;


addBtn.addEventListener('click', function(){
    counter++;
return document.getElementById('counter').innerHTML= counter
})

subBtn.addEventListener('click', function(){
    counter--;
    return document.getElementById('counter').innerHTML= counter
})


const toast = document.createElement('div');
toast.id = 'toast';
document.body.appendChild(toast);



