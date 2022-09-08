const dollar = document.getElementById('dollar');
const tela = document.getElementById('tela');
const click = document.getElementById('click');

//10
const dez = document.getElementById('10');
const teladez = document.getElementById('tela10');
const telaprecodez = document.getElementById('precodez');
let precodez = 10;

tela.textContent = '$0'
let carteira= 0;

let n = 1;

//investimentos
let numDez = 0;


function reset(){
    dollar.style.width = '30vw';
}
function clicker(){
    setTimeout(() => {click.style.bottom = '110px';click.style.opacity = '100%'}, 70);
    setTimeout(() => {click.style.bottom = '110px';click.style.opacity = '90%'}, 100);
    setTimeout(() => {click.style.bottom = '115px';click.style.opacity = '60%'}, 120);
    setTimeout(() => {click.style.bottom = '120px';click.style.opacity = '40%'}, 150);
    setTimeout(() => {click.style.bottom = '125px';click.style.opacity = '20%'}, 200);
    setTimeout(() => {click.style.bottom = '130px';click.style.opacity = '10%'}, 250);
    setTimeout(() => {click.style.bottom = '130px';click.style.opacity = '0%'}, 300);
}



dollar.onclick = () =>{

    dollar.style.width = '25vw';
    setTimeout(reset,40);
    carteira += n;
    tela.textContent = '$'+carteira;
    click.textContent = "+"+n;
    clicker();
}

dez.onclick = () =>{
    
    if(carteira>=precodez){
        carteira -= precodez;
        precodez = precodez*3;
        numDez += 1;
        n += 1
        telaprecodez.textContent = '$'+precodez;
        tela.textContent = '$'+carteira;
        teladez.textContent = numDez;

    }else{
        alert('Você não possui dinheiro para isso no momento.')
    }
}


