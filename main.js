const addBtn = document.getElementById('AddBtn');
const subBtn = document.getElementById('SubBtn');
var counter = document.getElementById('counter').innerHTML = 0;


addBtn.addEventListener('click', function () {
    counter++;
    return document.getElementById('counter').innerHTML = counter
})

subBtn.addEventListener('click', function () {
    counter--;
    return document.getElementById('counter').innerHTML = counter
})

function toast(message){
    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.innerText = message;
    document.getElementById('toast-container').appendChild(toast);
    setTimeout(function(){
        toast.remove()
    }, 1500)
}




addBtn.addEventListener('click',function(){
    toast('YUPPI!');
    })

subBtn.addEventListener('click',function(){
    toast('NOOO!');
    })



