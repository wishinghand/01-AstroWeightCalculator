'use strict';

var planets = [
    {
        name: "Sun",
        imagePath: "/images/thesun.jpg",
        weightMultiplier: 27.9
    },
    {
        name: "Mercury",
        imagePath: "/images/Mercury.jpg",
        weightMultiplier: 0.377
    },
    {
        name: "Venus",
        imagePath: "/images/Venus.jpg",
        weightMultiplier: 0.9032
    },
    {
        name: "Earth",
        imagePath: "/images/earth.jpg",
        weightMultiplier: 1
    },
    {
        name: "Moon",
        imagePath: "/images/moon.jpg",
        weightMultiplier: 0.1655
    },
    {
        name: "Mars",
        imagePath: "/images/mars.jpg",
        weightMultiplier: 0.3895
    },
    {
        name: "Jupiter",
        imagePath: "/images/jupiter.png",
        weightMultiplier: 2.640
    },
    {
        name: "Saturn",
        imagePath: "/images/saturn.jpg",
        weightMultiplier: 1.139
    },
    {
        name: "Uranus",
        imagePath: "/images/Uranus2.jpg",
        weightMultiplier: 0.917
    },
    {
        name: "Neptune",
        imagePath: "/images/neptune.jpg",
        weightMultiplier: 1.148
    },
    {
        name: "Pluto",
        imagePath: "/images/pluto.jpg",
        weightMultiplier: 0.06
    }
];

(function(){
    var select = document.getElementById('planet');
    var docFrag = document.createDocumentFragment();

    for (var i = 0; i < planets.length; i++) {
        var option = document.createElement('option');
        option.value = planets[i].weightMultiplier;
        option.text = planets[i].name;
        docFrag.appendChild(option);
    }

    select.appendChild(docFrag);
}());

function calculate(){
    var humanWeight = parseFloat(document.getElementById('weight').value);
    var planetMultiplier = parseFloat(document.getElementById('planet').value);
    var output = document.getElementById('output');
    var newWeight = humanWeight * planetMultiplier;

    if (humanWeight <= 0) {
        output.innerHTML = 'I doubt you weigh that little';
        return;
    }

    if(isNaN(newWeight)){
        output.innerHTML = 'Sorry buddy, you gotta use a number';
        return;
    }



    output.innerHTML = "Your new weight: " + newWeight;
    switch(planetMultiplier){
        case 27.9:
            output.innerHTML += '<br><img src="' + planets[0].imagePath + '">';
            break;
        case 0.377:
            output.innerHTML += '<br><img src="' + planets[1].imagePath + '">';
            break;
        case 0.9032:
            output.innerHTML += '<br><img src="' + planets[2].imagePath + '">';
            break;
        case 1:
            output.innerHTML += '<br><img src="' + planets[3].imagePath + '">';
            break;
        case 0.1655:
            output.innerHTML += '<br><img src="' + planets[4].imagePath + '">';
            break;
        case 0.3895:
            output.innerHTML += '<br><img src="' + planets[5].imagePath + '">';
            break;
        case 2.640:
            output.innerHTML += '<br><img src="' + planets[6].imagePath + '">';
            break;
        case 1.139:
            output.innerHTML += '<br><img src="' + planets[7].imagePath + '">';
            break;
        case 0.917:
            output.innerHTML += '<br><img src="' + planets[8].imagePath + '">';
            break;
        case 1.148:
            output.innerHTML += '<br><img src="' + planets[9].imagePath + '">';
            break;
        case 0.06:
            output.innerHTML += '<br><img src="' + planets[10].imagePath + '">';
            break;
    }
}