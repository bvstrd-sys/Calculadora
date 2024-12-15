const display=document.getElementById('display')
const buttons=document.querySelectorAll('button')
buttons.forEach((boton)=>{
    boton.addEventListener('click',()=>{
        if(boton.id==='ac'){
            display.value=''
        }else if(boton.id==='de'){
            display.value=display.value.slice(0,-1)
        }else if(boton.id==='='){
            display.value=eval(display.value)
        }else{
            display.value+=boton.id
        }
    })
})