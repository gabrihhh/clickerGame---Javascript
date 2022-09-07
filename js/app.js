const dollar = document.getElementById('dollar');
const tela = document.getElementById('tela');

//10
const dez = document.getElementById('10');
const teladez = document.getElementById('tela10');
const telaprecodez = document.getElementById('precodez');
let precodez = 10;


let carteira= 0;

let n = 1;

//investimentos
let numDez = 0;


function reset(){
    dollar.style.width = '30vw';
}


dollar.onclick = () =>{

    dollar.style.width = '25vw';
    setTimeout(reset,40);
    carteira += n;
    tela.textContent = carteira;

}

dez.onclick = () =>{
    
    if(carteira>=precodez){
        carteira -= precodez;
        precodez = precodez*3;
        numDez += 1;
        n += 1
        telaprecodez.textContent = '$'+precodez;
        tela.textContent = carteira;
        teladez.textContent = numDez;

    }else{
        alert('Você não possui dinheiro para isso no momento.')
    }
}



