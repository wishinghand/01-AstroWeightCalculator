'use strict';

//object store of planets, easy to add more
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

//dynamically creating the options in the select element
var select = document.getElementById('planet');
var docFrag = document.createDocumentFragment();

for (var i = 0; i < planets.length; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.text = planets[i].name;
    docFrag.appendChild(option);
}

select.appendChild(docFrag);

//called with onclick on <button> element
function calculate(){
    var planet = planets[parseFloat(document.getElementById('planet').value)];
    var humanWeight = parseFloat(document.getElementById('weight').value);
    var output = document.getElementById('output');
    var newWeight = humanWeight * planet.weightMultiplier;

    //error checking
    if (humanWeight <= 0) {
        output.innerHTML = 'I doubt you weigh that little- try a positive number';
        return;
    }else if(isNaN(newWeight)){
        output.innerHTML = 'Sorry buddy, you gotta use a positive number';
        return;
    }

    // final texual output of the calculation
    output.innerHTML = "Your new weight: " + newWeight;
    output.innerHTML += '<br><img src="' + planet.imagePath + '">';
}