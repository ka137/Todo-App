const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#list')
let total =document.querySelector('#total')
let total_counter = 0

btn.addEventListener('click',(e) =>{
    if (input.value === '') return
    result.innerHTML += '<li class="item"><div class="item__text">'+input.value+'</div><img id = "delete-item" class="delete_icon" src="images/icon_2.svg" alt="icon" ></li>'
    total_counter+=1
    total.innerHTML = total_counter
    input.value = ''

})