var mario = document.querySelector(".mario")
var pipe = document.querySelector(".pipe")
var clouds = document.querySelector(".clouds")
const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
    mario.classList.remove('jump')

    }, 500)
}
const loop = setInterval(()=> {
    const cloudsposition = +window.getComputedStyle(clouds).right.replace('px','')
    const pipeposition = pipe.offsetLeft
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px','')

    //PARTE DE QUANDO O JOGO ACABA

    if (pipeposition <= 120 && pipeposition > 0 && marioposition < 93) {
        clouds.style.animation = "none"
        clouds.style.right = `${cloudsposition}px`
        pipe.style.animation = "none"//Acaba a animação
        
        pipe.style.left = `${pipeposition}px`
        //Parte de baixo, quando o Mário tocar no pipe, ficar no sítio onde tocou.
        mario.style.animation = "none" //Acaba a animação
        mario.style.bottom = `${marioposition}px`
        mario.src = 'game-over.png' //Imagem de quando o mario toca no pipe
        mario.style.width = '75px' //Como a imagem não é da mesma dimensão que a outra, tive de trocar o seu tamanho.
        mario.style.marginLeft = '40px' //Serve para quando a imagem trocada(busted) aparece, ficar no mesmo lugar da imagem antiga.
        
        clearInterval(loop)//Para o loop parar de rodar no console
    }
},10)

document.addEventListener("keydown", jump)//Quando qualquer tecla for accionada, o Mário salta.







/*
Explicação de chatgpt de "=>"

A seta azul que você está vendo no código
do seu professor é uma representação gráfica
do operador de seta "=>" que é usado para criar
funções arrow (funções de flecha) em JavaScript.
*/

/*Se não tive-se colocado o 'setTimeout' só dava para 
pular apenas uma vez,colocando o comando mario.classList.remove('jump')
dentro do setTimeout, este remove a class jump, e assim já podemos voltar
a fazer o mario saltar.
*/