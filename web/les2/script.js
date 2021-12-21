console.log("script is geladen")

const groentenvak = document.getElementById('groenten');
const fruitvak = document.getElementById('fruit');

function zetInGroenten(groenten){
    console.log(groenten);
    
    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = groenten ;
    nieuwElement.className = 'groen';
    groentenvak.appendChild(nieuwElement);
}

function zetInFruit(fruit){
    console.log(fruit);
    
    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = fruit ;
    nieuwElement.className = 'paars';    
    fruitvak.appendChild(nieuwElement);

}