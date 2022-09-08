const dollar = document.getElementById('dollar');
const tela = document.getElementById('tela');
const click = document.getElementById('click');
let n = 1;
let carteira= 0;
tela.textContent = '$0';






//Funções 

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

function autoClick(numAuto){

    setTimeout(()=>{
        
        click.textContent = "+"+10;
        clicker();
        carteira+=10;
        tela.textContent = "$"+carteira;
        dollar.style.width = '300px';
        setTimeout(reset,40);
    },1500);
    setTimeout(()=>{autoClick(numAuto);},1500)
}



dollar.onclick = () =>{

    dollar.style.width = '300px';
    setTimeout(reset,40);
    carteira += n;
    tela.textContent = '$'+carteira;
    click.textContent = "+"+n;
    clicker();
}

//funcionalidades das compras

//Click Automatico -----------------------------------------------------

const auto = document.getElementById('auto');
const telaauto = document.getElementById('telaauto');
const telaprecoauto = document.getElementById('precoauto');
const telaTempoClick = document.getElementById('tempoClick');
let precoAuto = 10;
let numAuto = 0;

auto.onclick = () =>{
   if(carteira>=precoAuto){
        carteira-=precoAuto;
        numAuto += 1;
        precoAuto = precoAuto*8;
        if(numAuto>=1){autoClick(numAuto)}
        telaTempoClick.textContent = numAuto+" cliques a cada 1 segundo";
        telaprecoauto.textContent = "$"+precoAuto
        telaauto.textContent = numAuto;
        tela.textContent = "$"+carteira;
   }else{
        alert('Você não possui dinheiro para isso no momento.');
   }
};

//Primeiros investimentos -------------------------------------------------

const dez = document.getElementById('10');
const teladez = document.getElementById('tela10');
const telaprecodez = document.getElementById('precodez');
let precodez = 10;
let numDez = 0;

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
        alert('Você não possui dinheiro para isso no momento.');
    }
}


