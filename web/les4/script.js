const myTitle = document.getElementById('myTitle');
const myImage = document.getElementById('myImage');

let seizoenen = [
    {
        "title" :"Seizoenen",
        "image" :"img/seasons.jpg",
        "backGround":"white"
    },
    {
        "title" :"Lente",
        "image" :"img/spring.jpg",
        "backGround":"green"
    },
    {
        "title" :"Zomer",
        "image" :"img/summer.jpg",
        "backGround":"orange"
    },
    {
        "title" :"Herfst",
        "image" :"img/autumn.jpg",
        "backGround":"brown"
        
    },
    {
        "title" :"Winter",
        "image" :"img/winter.jpg",
        "backGround":"white"
        
    }
];

function show(index){
    myTitle.innerHTML = seizoenen[index].title;
    myImage.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].backGround;
}

