const formOptions = document.getElementById('options');
const btnAddOption = document.getElementById('btn-add');
const btnCaos = document.getElementById('btn-caos');
const textResult = document.getElementById('result');
const text = document.createElement('p');
const btnResetPage = document.getElementById('reset');

let counterId = 0;
let counterInputs = 0;
const arrayValues = [];

btnAddOption.addEventListener('click', (event)=>{
    event.preventDefault();
    event.stopPropagation(); 
    const btnRemove = document.createElement('img');
    const divInputs = document.createElement('div'); 
    const btnUnchecked = document.createElement('img');
    const input = document.createElement('input');

    if(counterInputs<=8){
    counterId+=1;
    counterInputs+=1;
    text.textContent = "";

    formOptions.appendChild(divInputs);
    divInputs.appendChild(input);  
    divInputs.appendChild(btnRemove);
    divInputs.appendChild(btnUnchecked);

    divInputs.classList.add('div-input');  
    btnRemove.classList.add('icon-remove');
    btnRemove.setAttribute('src', '/desafio-carreira-m03-t10/assets/btn-remove-option.png') 
    btnUnchecked.classList.add('icon-check');
    btnUnchecked.setAttribute('src', '/desafio-carreira-m03-t10/assets/btn-unchecked.png');
    input.setAttribute('id', `${counterId}`);
    input.setAttribute('name', `${counterId}`);
    input.classList.add('input-option')
    textResult.classList.remove('text-area');
    text.classList.remove('text');

    btnUnchecked.addEventListener('click', ()=>{
        console.log(input.value);
        arrayValues.push(input.value);
        btnUnchecked.setAttribute('src', '/desafio-carreira-m03-t10/assets/btn-checked.png');
    }) 
    }

    btnRemove.addEventListener('click', (event)=>{
        event.preventDefault();
        event.stopPropagation(); 
        formOptions.removeChild(divInputs);
        counterInputs-=1;
        let id = arrayValues.indexOf(input.value);
        arrayValues.splice(id, 1)
    })
});


btnCaos.addEventListener('click', ()=>{   
    const result = arrayValues[Math.floor(Math.random()*counterInputs)];

    
    
    if(counterInputs===0){
        text.textContent = `Você veio aqui vazio, você é o próprio Caos!`; 
    }
    if(counterInputs===1){
        text.textContent = `Uauuuu, baita dúvida a sua!`; 
    }
    if(counterInputs>=2){
        text.textContent = `O Caos escolheu: ${result}`

        counterId = 0;
        counterInputs = 0;
    }

    textResult.appendChild(text);
    textResult.classList.add('text-area');
    text.classList.add('text');

    removeInputs();
});

function removeInputs (){
    let allDivInputs = document.getElementsByClassName('div-input');
    for(let i = allDivInputs.length-1; i>=0; i--){
        allDivInputs[i].remove();
    }
    for(let i = arrayValues.length-1; i>=0; i--){
        arrayValues.pop(i);
    }

}

btnResetPage.addEventListener('click', ()=>{
    removeInputs();
    text.textContent = "";
    counterId = 0;
    counterInputs = 0;
    textResult.classList.remove('text-area');
    text.classList.remove('text');
})