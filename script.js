const temp1 = document.querySelector(".ordem_1tempo")
const temp2 = document.querySelector(".ordem_2tempo")
const playerOrdem = document.querySelector(".ordemPlayer")
const playerOrdem1 = document.querySelector(".ordemPlayer1")
const playerOrdem2 = document.querySelector('.ordemPlayer2')
const playerOrdem3 = document.querySelector('.ordemPlayer3')
const playerOrdem4 = document.querySelector('.ordemPlayer4')
const playerOrdem5 = document.querySelector(".ordemPlayer5")
const character = document.querySelector(".character")
const characters = document.querySelector(".characters")
const display = document.querySelector('.display')
const details = document.querySelector('.details')
var teste = 0; 

const thiagoFritz ={
    Name:"Thiago Fritz",
    imgProfile:"./assets/thiago_fritz.jpg",
    imgProfile2:"./assets/Thiago_Fritz_em_O_Segredo_na_Floresta.webp",
    description:"Thiago era um jornalista que após a suposta morte de seu pai, Arnaldo Fritz, decidiu investigar a causa de sua morte. Por essa investigação, ele descobriu a relação entre seu pai e a Ordo Realitas, se interessando a se juntar à organização. Era conhecido por sua lábia, carisma, habilidade interpessoal e contatos."
}
const danielHartmann = {
    Name:"Daniel Hartmann",
    imgProfile:"./assets/Daniel_Hartmann.webp",
    description:"Ele costumava ser um escritor de contos macabros e relatos sobrenaturais de muito sucesso, porém, o que não sabia, era que o medo causado por suas obras enfraquecia a Membrana. Quando se envolveu em uma investigação da Ordem e foi confrontado pelo agente Tristan Monteiro, percebeu o que acidentalmente estava fazendo e decidiu trabalhar na organização para combater o paranormal e suas monstruosas criações."
}
const elizabethWebber = {
    Name:"Elizabeth Webber",
    imgProfile:"./assets/Elizabeth Webber.jpg",
    imgProfile2:"./assets/Elizabeth Webber_floresta.jpg",
    description:"Elizabeth era uma médica e cientista forense, extremamente obstinada, inteligente e habilidosa, com uma obsessão por criar teorias e desvendar casos. Trabalhando com o seu parceiro detetive, Gustavo Dohmer, ajudou a resolver alguns casos para a Polícia Federal até que, finalmente, foi recrutada para a Ordo Realitas por Tristan Monteiro. "

   
}
const alexSanderKothe ={
    name:"alexSanderKothe",
    imgProfile:"./assets/Alexsander_Kothe.webp",
    description:"Ele era um professor de história na Escola Nostradamus de Ensino Médio, que misteriosamente sumiu de seu local de trabalho, estando diretamente ligado com o caso sobrenatural que ocorreu no lugar."
}
const cristopherCohen ={
    Name:"Cristopher Cohen",
    imgProfile:"./assets/Cristopher_Cohen_em_Desconjura3Fo.png",
    description:"Cristopher Cohen, nascido nos Estados Unidos, foi o primeiro dublê do ator Van Damme. Ele se mudou para o Brasil para trabalhar em um filme e se apaixonou pelo país. Depois de muitos anos, Cohen finalmente aceitou se unir à Ordem."
}
const jouiJouki ={
    Name:"Joui Jouki",
    imgProfile:"./assets/Joui_Jouki.png",
    description:"Ele era um ginasta olímpico que, durante uma viagem para o Brasil junto de seus amigos, acabou sofrendo um ataque por uma criatura Paranormal, sendo salvo por Elizabeth Webber e Thiago Fritz. Os dois acabam virando seus mentores, e então Joui se junta à Ordo Realitas."

}
const Cezar ={
    Name:"./assets/Cezar.jpg",
    imgProfile:"./assets/Cezar.jpg",
    description:"Cesar era um programador e hacker brasileiro, residente de São Paulo. Após se juntar à Ordo Realitas, é um dos membros designados ao Caso de Carpazinha. Seu pai, Cristopher, também se revela um membro da Ordem e o acompanha na missão."

}
const Arthur ={
    imgProfile:"./assets/Arthur.jpg",
    description: "Ele era um músico e membro da gangue de motoqueiros Gaudérios Abutres em Carpazinha, que se juntou a Ordo Realitas após perder seus colegas durante uma luta contra o Carniçal Preto da Morte. Após esse incidente, passou a fazer parte da Equipe E, grupo que investigava a manifestação"
}



temp1.addEventListener("click",temporada1)
temp2.addEventListener("click", temporada2)
 playerOrdem.addEventListener('click', troca)
 playerOrdem1.addEventListener('click', troca1)
 playerOrdem2.addEventListener('click', troca2)
 playerOrdem3.addEventListener('click', troca3)
 playerOrdem4.addEventListener('click', troca4)
 playerOrdem5.addEventListener('click', troca5)


function troca(){
    if(teste == 1 ){
        character.style.display = "flex"
        display.src = thiagoFritz.imgProfile
    details.innerHTML = thiagoFritz.description
    }else if(teste == 2){
        character.style.display = "flex"
        display.src = thiagoFritz.imgProfile2
        details.innerHTML = thiagoFritz.description
    }
    
}
function troca1(){
if(teste == 1){
    character.style.display = "flex"
     display.src = danielHartmann.imgProfile
    details.innerHTML = danielHartmann.description
}else if(teste == 2){
    character.style.display = "flex"
    display.src = elizabethWebber.imgProfile2
    details.innerHTML = elizabethWebber.description
}

}
function troca2(){
if(teste == 1){
    character.style.display = "flex"
    display.src = alexSanderKothe.imgProfile
    details.innerHTML = alexSanderKothe.description
}else if(teste == 2){
    character.style.display = "flex"
    display.src = cristopherCohen.imgProfile
    details.innerHTML = cristopherCohen.description
}
}
function troca3(){
if(teste == 1){
    character.style.display = "flex"
    display.src = elizabethWebber.imgProfile
    details.innerHTML = elizabethWebber.description
}else if (teste == 2){
    character.style.display = "flex"
    display.src = jouiJouki.imgProfile
    details.innerHTML = jouiJouki.description
}
    
}
function troca4(){
    character.style.display = "flex"
    display.src = Cezar.imgProfile
    details.innerHTML = Cezar.description
}
function troca5(){
    character.style.display = "flex"
    display.src = Arthur.imgProfile
    details.innerHTML = Arthur.description
}


function temporada1 () {
    teste = 1;
    if(character.style.display === "flex"){
        character.style.display = "none"
    }
    characters.style.display = "flex"
    display.src = "/assets/icone_character.png"
    details.innerHTML = "..."
    playerOrdem.src = thiagoFritz.imgProfile
    playerOrdem1.src= danielHartmann.imgProfile
    playerOrdem2.src= alexSanderKothe.imgProfile
    playerOrdem3.src= elizabethWebber.imgProfile
    playerOrdem4.style.display = "none"
   playerOrdem5.style.display = "none"
  

        

}

function temporada2 () {
    teste = 2
    if(character.style.display === "flex"){
        character.style.display = "none"
    }
    characters.style.display = "flex"
    display.src = "/assets/icone_character.png"
    details.innerHTML = "..."
    playerOrdem.src = thiagoFritz.imgProfile2
    playerOrdem1.src= elizabethWebber.imgProfile2
    playerOrdem2.src= cristopherCohen.imgProfile
    playerOrdem3.src= jouiJouki.imgProfile
    playerOrdem4.style.display = "block"  
    playerOrdem4.src = Cezar.imgProfile
    playerOrdem5.style.display = "block"
    playerOrdem5.src = Arthur.imgProfile
    
}