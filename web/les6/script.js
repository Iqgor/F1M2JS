const myTitle = document.getElementById("myTitle")
const myImage = document.getElementById("myImage")
const myInput = document.getElementById("myInput")



let directionButtons = {
    "Noord" : document.getElementById('knopNoord'),
    "Oost" : document.getElementById('knopOost'),
    "Zuid" : document.getElementById('knopZuid'),
    "West" : document.getElementById('knopWest')
}

let current_index = 0;


let locaties = [ //Array
    { //pos 0 object
        "titel": "plaats 0",
        "image": "img/0.jpg",
        "directions":{
            "Zuid": 1,
        }
    },
    { //pos 1 object
        "titel": "plaats 1",
        "image": "img/1.jpg",
        "directions":{
            "Noord": 0,
            "Oost": 5,
            "Zuid": 4,
            "West": 2,
        }
    },
    { //pos 2 object
        "titel": "plaats 2",
        "image": "img/2.jpg",
        "directions":{
            "Oost": 1,
            "Zuid": 3,
            
        }
    },
    { //pos 3 object
        "titel": "plaats 3",
        "image": "img/3.jpg",
        "directions":{
            "Noord": 2,
            
        }

    },
    { //pos 4 object
        "titel": "plaats 4",
        "image": "img/4.jpg",
        "directions":{
            "Noord": 1,
            
        }
    },
    { //pos 5 object
        "titel": "plaats 5",
        "image": "img/5.jpg",
        "directions":{
            "Noord": 10,
            "Oost": 6,
            "West": 1,
        }
    },
    { //pos 6 object
        "titel": "plaats 6",
        "image": "img/6.jpg",
        "directions":{
            "Oost": 7,
            "Zuid": 11,
            "West": 5,
        }
    },
    { //pos 7 object
        "titel": "plaats 7",
        "image": "img/7.jpg",
        "directions":{
            "Noord": 9,
            "Zuid": 8,
            "West": 6,
        }
    },
    { //pos 8 object
        "titel": "plaats 8",
        "image": "img/8.jpg",
        "directions":{
            "Noord": 7,
        }
    },
    { //pos 9 object
        "titel": "plaats 9",
        "image": "img/9.jpg",
        "directions":{
            "Zuid": 7,
            "West": 10,
        }
    },
    { //pos 10 object
        "titel": "plaats 10",
        "image": "img/10.jpg",
        "directions":{
            "Oost": 9,
            "Zuid": 5,
        }
    },
    {  //pos 11 object
        "titel": "plaats 11",
        "image": "img/11.jpg",
        "directions":{
            "Noord": 6,
        }
    }

]


function show(index){
    myTitle.innerHTML = locaties[index].titel;
    myImage.src = locaties[index].image;
    current_index = index

    //knoppen opnieuw berekenen
    updateDirections();
}

function updateDirections(){
    // haal de mogelijke directions op voor currunt_index
    let possible = locaties[current_index].directions;

    // zet de diretion key in een aparte variable
    let possible_keys = Object.keys(possible);

   
    // zet de keys van de buttons in een aparte variable
    let buttons_keys = Object.keys(directionButtons);
    

    // Zet eerst alle knoppen uit 
    for (const key of buttons_keys){
        directionButtons[key].style.visibility = "hidden";
    }
    for (const key of possible_keys){
        directionButtons[key].style.visibility = "visible";
    } 
    // Zet nu de mogelijke knoppen (directions) aan

}



function getInput(){
    show(myInput.value)
    myInput.value = "",
    myInput.focus();
}

function goDirection(richting){
    let punt_index = locaties[current_index].directions[richting];
    console.log(current_index)
    show(punt_index);
}

show(0)
