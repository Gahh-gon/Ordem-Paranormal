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


temp1.addEventListener("click",temporada1)
temp2.addEventListener("click", temporada2)
 playerOrdem.addEventListener('click', troca)
 playerOrdem1.addEventListener('click', troca1)
 playerOrdem2.addEventListener('click', troca2)
 playerOrdem3.addEventListener('click', troca3)
 playerOrdem4.addEventListener('click', troca4)
 playerOrdem5.addEventListener('click', troca5)
// playerOrdem1.addEventListener("click", troca1)

function troca(){
    if(teste == 1 ){
        character.style.display = "flex"
        display.src = "/assets/thiago_fritz.jpg"
    details.innerHTML = "Thiago era um jornalista que após a suposta morte de seu pai, Arnaldo Fritz, decidiu investigar a causa de sua morte. Por essa investigação, ele descobriu a relação entre seu pai e a Ordo Realitas, se interessando a se juntar à organização. Era conhecido por sua lábia, carisma, habilidade interpessoal e contatos."
    }else if(teste == 2){
        character.style.display = "flex"
        display.src = "/assets/Thiago_Fritz_em_O_Segredo_na_Floresta.webp"
        details.innerHTML = "Thiago era um jornalista que após a suposta morte de seu pai, Arnaldo Fritz, decidiu investigar a causa de sua morte. Por essa investigação, ele descobriu a relação entre seu pai e a Ordo Realitas, se interessando a se juntar à organização. Era conhecido por sua lábia, carisma, habilidade interpessoal e contatos."
    }
    
}
function troca1(){
if(teste == 1){
    character.style.display = "flex"
     display.src = "/assets/Daniel_Hartmann.webp"
    details.innerHTML = "Ele costumava ser um escritor de contos macabros e relatos sobrenaturais de muito sucesso, porém, o que não sabia, era que o medo causado por suas obras enfraquecia a Membrana. Quando se envolveu em uma investigação da Ordem e foi confrontado pelo agente Tristan Monteiro, percebeu o que acidentalmente estava fazendo e decidiu trabalhar na organização para combater o paranormal e suas monstruosas criações."
}else if(teste == 2){
    character.style.display = "flex"
    display.src = "/assets/Elizabeth Webber_floresta.jpg"
    details.innerHTML = "Ele costumava ser um escritor de contos macabros e relatos sobrenaturais de muito sucesso, porém, o que não sabia, era que o medo causado por suas obras enfraquecia a Membrana. Quando se envolveu em uma investigação da Ordem e foi confrontado pelo agente Tristan Monteiro, percebeu o que acidentalmente estava fazendo e decidiu trabalhar na organização para combater o paranormal e suas monstruosas criações."
}

}
function troca2(){
if(teste == 1){
    character.style.display = "flex"
    display.src = "/assets/Alexsander_Kothe.webp"
    details.innerHTML = "Ele era um professor de história na Escola Nostradamus de Ensino Médio, que misteriosamente sumiu de seu local de trabalho, estando diretamente ligado com o caso sobrenatural que ocorreu no lugar."
}else if(teste == 2){
    character.style.display = "flex"
    display.src = "/assets/Cristopher_Cohen_em_Desconjura3Fo.png"
    details.innerHTML = "Cristopher Cohen, nascido nos Estados Unidos, foi o primeiro dublê do ator Van Damme. Ele se mudou para o Brasil para trabalhar em um filme e se apaixonou pelo país. Depois de muitos anos, Cohen finalmente aceitou se unir à Ordem."
}
}
function troca3(){
if(teste == 1){
    character.style.display = "flex"
    display.src = "/assets/Elizabeth Webber.jpg"
    details.innerHTML = "Elizabeth era uma médica e cientista forense, extremamente obstinada, inteligente e habilidosa, com uma obsessão por criar teorias e desvendar casos. Trabalhando com o seu parceiro detetive, Gustavo Dohmer, ajudou a resolver alguns casos para a Polícia Federal até que, finalmente, foi recrutada para a Ordo Realitas por Tristan Monteiro."
}else if (teste == 2){
    character.style.display = "flex"
    display.src = "/assets/Joui_Jouki.png"
    details.innerHTML = "Ele era um ginasta olímpico que, durante uma viagem para o Brasil junto de seus amigos, acabou sofrendo um ataque por uma criatura Paranormal, sendo salvo por Elizabeth Webber e Thiago Fritz. Os dois acabam virando seus mentores, e então Joui se junta à Ordo Realitas."
}
    
}
function troca4(){
    character.style.display = "flex"
    display.src = "/assets/Cezar.jpg"
    details.innerHTML = "Cesar era um programador e hacker brasileiro, residente de São Paulo. Após se juntar à Ordo Realitas, é um dos membros designados ao Caso de Carpazinha. Seu pai, Cristopher, também se revela um membro da Ordem e o acompanha na missão."
}
function troca5(){
    character.style.display = "flex"
    display.src ="/assets/Arthur.jpg"
    details.innerHTML = "Ele era um músico e membro da gangue de motoqueiros Gaudérios Abutres em Carpazinha, que se juntou a Ordo Realitas após perder seus colegas durante uma luta contra o Carniçal Preto da Morte. Após esse incidente, passou a fazer parte da Equipe E, grupo que investigava a manifestação"
}


function temporada1 () {
    teste = 1;
    if(character.style.display === "flex"){
        character.style.display = "none"
    }
    characters.style.display = "flex"
    display.src = "/assets/icone_character.png"
    details.innerHTML = "..."
    playerOrdem.src = "/assets/thiago_fritz.jpg"
    playerOrdem1.src= "/assets/Daniel_Hartmann.webp"
    playerOrdem2.src= "/assets/Alexsander_Kothe.webp"
    playerOrdem3.src= "/assets/Elizabeth Webber.jpg"
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
    playerOrdem.src = "/assets/Thiago_Fritz_em_O_Segredo_na_Floresta.webp"
    playerOrdem1.src= "/assets/Elizabeth Webber_floresta.jpg"
    playerOrdem2.src= "/assets/Cristopher_Cohen_em_Desconjura3Fo.png"
    playerOrdem3.src= "/assets/Joui_Jouki.png"
    playerOrdem4.style.display = "block"  
    playerOrdem4.src = "/assets/Cezar.jpg"
    playerOrdem5.style.display = "block"
    playerOrdem5.src = "/assets/Arthur.jpg"
    
}