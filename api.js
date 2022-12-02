const ulElement = document.querySelector('ul');

const createElement = (valor)=>{
    const liElement = document.createElement('li');
    liElement.innerHTML = valor;
    return liElement;
}


fetch('https://pokeapi.co/api/v2/pokemon')
    .then((result)=> result. json())
  //-------------SE LE COLOCA RESULTS-DESPUES DE LA DATA CUANDO TE LO ENCUTRA EN LA API SI NO SOLO DATA---------//
    .then(data =>{
        data.results.forEach(element => 
            ulElement.appendChild(createElement(element.name))
        )
    })

    .catch(error=>console.log(error));

