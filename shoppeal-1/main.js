const btn=document.getElementById('anually-btn')
const btn1=document.getElementById('monthly-btn')
const mon=document.getElementById('month')
const anu=document.getElementById('anual')

btn.addEventListener('click',toggle)

function toggle(){
anu.classList.remove('hide')
mon.classList.add('hide')
}

btn1.addEventListener('click',toggle1)

function toggle1(){
    mon.classList.remove('hide')
    anu.classList.add('hide')
}