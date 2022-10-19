const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#list')
const clearall = document.querySelector('#clear_all')
let total =document.querySelector('#total')
let total_counter = 0
// Добавляем по клику
btn.addEventListener('click',(e) =>{
    if (input.value === '') return
    result.innerHTML += '<li class="item"><div class="item__text">'+input.value+'</div><img id = "delete-item" class="delete_icon" src="images/icon_2.svg" alt="icon" ></li>'
    total_counter+=1
    total.innerHTML = +total_counter
    input.value = ''

})
//По нажатию на enter
function pressed(event) {
    if ( (window.event ? event.keyCode : e.which) == 13){
        if (input.value === '') return
        result.innerHTML += '<li class="item"><div class="item__text">'+input.value+'</div><img id = "delete-item" class="delete_icon" src="images/icon_2.svg" alt="icon" ></li>'
        total_counter+=1
        total.innerHTML = +total_counter
        input.value = ''
    }
}
// чистим все
clearall.addEventListener('click',(e) => {
    result.innerHTML = '<ul class="list" id = "list"></ul>'
    total_counter = 0
    total.innerHTML = +total_counter
})