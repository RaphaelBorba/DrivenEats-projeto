let total = 0;
let valores=[0,0,0];
let pratos =[0,0,0]
let autoriza=0;
let endereco;
let nome;
// FUNÇÃO PARA SELECIONAR OS PRATOS E ADICIONAR O VALOR E O NOME NA LISTA VALORES E DE PRATOS
function selecionaPrato(plate){
    // Vereficação se já tem um prato selecionado
    let alreadySelect= document.querySelector('.principal .selecionado');
    if(alreadySelect !== null){
        alreadySelect.classList.remove('selecionado');
    }
    // Seleciona o prato
    const selectPlate = plate;
    selectPlate.classList.toggle('selecionado');

    // Vereficação se já tem um check
    let alreadyCheck = document.querySelector('.principal .check');
    if(alreadyCheck !== null){
        alreadyCheck.classList.remove('check');
        alreadyCheck.classList.add('checkoff');
    }
    // Liga o check
    const check = plate.children[4];
    check.classList.remove('checkoff');
    check.classList.add('check');
    
    // Adiciona valores nas variáveis do escopo global
    pratos.splice(0,1,selectPlate.children[1].innerHTML);
    valores.splice(0,1,Number(selectPlate.children[3].children[0].innerHTML));
    if(autoriza!==1){
        liberaBotao();
    }
    
}
// FUNÇÃO PARA SELECIONAR OS PRATOS E ADICIONAR O VALOR E O NOME NA LISTA VALORES E DE PRATOS
function selecionaPrato1(plate1){
    // Vereficação se já tem um prato selecionado
    let alreadySelect= document.querySelector('.bebida .selecionado');
    if(alreadySelect !== null){
        alreadySelect.classList.remove('selecionado');
    }
    // Seleciona o prato
    const selectPlate = plate1;
    selectPlate.classList.toggle('selecionado');

    // Vereficação se já tem um check
    let alreadyCheck = document.querySelector('.bebida .check');
    if(alreadyCheck !== null){
        alreadyCheck.classList.remove('check')
        alreadyCheck.classList.add('checkoff')
    }
    // Liga o check
    const check = plate1.children[4];
    check.classList.remove('checkoff')
    check.classList.add('check');

    // Adiciona valores nas variáveis do escopo global
    pratos.splice(1,1,selectPlate.children[1].innerHTML)
    valores.splice(1,1,Number(selectPlate.children[3].children[0].innerHTML));
    if(autoriza!==1){
        liberaBotao();
    }
}
// FUNÇÃO PARA SELECIONAR OS PRATOS E ADICIONAR O VALOR E O NOME NA LISTA VALORES E DE PRATOS
function selecionaPrato2(plate2){
    // Vereficação se já tem um prato selecionado
    let alreadySelect= document.querySelector('.sobremesa .selecionado');
    if(alreadySelect !== null){
        alreadySelect.classList.remove('selecionado');
    }
    // Seleciona o prato
    const selectPlate = plate2;
    selectPlate.classList.toggle('selecionado');
    // Vereficação se já tem um check
    let alreadyCheck = document.querySelector('.sobremesa .check');
    if(alreadyCheck !== null){
        alreadyCheck.classList.remove('check')
        alreadyCheck.classList.add('checkoff')
    }
    // Liga o check
    const check = plate2.children[4];
    check.classList.remove('checkoff')
    check.classList.add('check');

    // Adiciona valores nas variáveis do escopo global
    pratos.splice(2,1,selectPlate.children[1].innerHTML)
    valores.splice(2,1,Number(selectPlate.children[3].children[0].innerHTML));
    if(autoriza!==1){
        liberaBotao();
    }
}
// FUNÇÃO PARA LIBERAR O BOTÃO DE FECHAR COMPRA ASSIM QUE TIVER 3 VALORES SELECIONADOS
function liberaBotao(){
    let contador=0;
    let but1 = document.querySelector('.butligado');
    let but2 = document.querySelector('.butdesligado');
    for(i in valores){
        if(valores[i] !== 0){
            contador++;;
        }
    }
    if(contador === 3){
        but1.classList.add('butdesligado');
        but2.classList.remove('butdesligado');
        autoriza++;
    }
}
// Calcula o valor total do pedido
function calcTotal(){
    total = 0;
    for(i in valores){
        total+=valores[i];
    }
    total = total.toFixed(2);
    return total;
}
//  Abre o card sobre a tela
function abreCard(){
    const card = document.querySelector('.back');
    card.classList.remove('none');
    const nomes = document.querySelector('.left-side');
    const precos = document.querySelector('.right-side');
    for(i in pratos){
        nomes.children[i].innerHTML = pratos[i];
    }
    for(j in valores){
        precos.children[j].innerHTML = valores[j].toFixed(2);
    }
    precos.children[3].innerHTML = calcTotal()

    
}
// Fecha o card
function fechaCard(){
    const card = document.querySelector('.back');
    card.classList.add('none');
}

// FUNÇÃO PARA FECHAR O PEDIDO
function fechaPedido(){
    endereco= prompt('Informe seu endereço:')
    nome = prompt('Imforme seu nome:')
    let cardapio = `Cardápio:
- Prato principal: ${pratos[0]}
- Bebida: ${pratos[1]}
- Sobremesa: ${pratos[2]}
Total: R$${total}

Nome: ${nome}
Endereço: ${endereco}`
    
    let cardapiowht = encodeURIComponent(cardapio);
    let openWhats = "https://wa.me/5521984773051?text="+cardapiowht;
    window.open(openWhats,'_blank').focus();
}
