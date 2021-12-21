const myimage = document.getElementById("myimage")
const mytitle = document.getElementById("mytitle")
const mytext = document.getElementById("mytext")

let paintings =  [
    "img/painting0.jpg",
    "img/painting1.jpg",
    "img/painting2.jpg",
    "img/painting3.jpg",
    "img/painting4.jpg",
    "img/painting5.jpg"]

let titles = [
    "De schilderijen van van Gogh",
    "De rode wijngaard",
    "De sterrennacht",
    "Sterrennacht boven de Rhöne",
    "Zonnebloemen" ,
    "Boerderij in de Provence"
]

let texts = [
    "Klik maar lekkah",
    "november 1888. Pesjkinmuseum. Moskouw" ,
    "juni 1889. Museum of Modern Art. New York",
    "september 1888. Musue d'Orsay. Parijs",
    "januari 1889. Neue Pinakothek. Munchen",
    "september 1888. National Gallery of Art. Washington D.C.",

]

function changeimage(index){
    mytitle.innerHTML = titles[index]
    mytext.innerHTML = texts[index]
    myimage.src = paintings[index];
}

