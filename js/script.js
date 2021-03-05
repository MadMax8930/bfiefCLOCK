// Séléctionner les aiguilles de montre

const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

function demarrerLaMontre() {

//Extraire l'heure actuel à l'aide de l'objet Date()
      
    let now = new Date();

//Stocker l'heure , minute , seconde  dans des variables   

const second = now.getSeconds();
const minute = now.getMinutes();
const heure = now.getHours();

 /*if (mySec < 10) { mySec = "0"+mySec};
   if (myMin < 10) { myMin = "0"+myMin};
   if (myHour < 10) { myHour = "0"+myHour};
   monHeureHorloge = myHour + ":" + myMin + ":" + mySec

   console.log(monHeureHorloge);*/

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

let times = second + minute * 60 + heure * 3600; // variable times somme le mouvement de chaque aiguille

   const secDeg = times * 6;          //chaque seconde => 6°
   const minDeg = (times * 6)/60;     //il y a 60 secondes dans une minute
   const heurDeg = (times * 30)/3600; //le passage de 0 a 1, de 1 a 2 etc... => 30°

/*

pour le seconds:
360/60=6°
pour les minutes: (1h = 30°)
30/60=0.5°
pour les heures:
360/3600=0.1°

*/

// Déplacer les aiguilles

    AIGUILLESEC.style.transform= `rotate(${secDeg}deg)`;
    AIGUILLEMIN.style.transform= `rotate(${minDeg}deg)`;
    AIGUILLEHR.style.transform= `rotate(${heurDeg}deg)`;

}

// Exercuter la fonction chaque second

var interval = setInterval(demarrerLaMontre, 1000);


/*
//------------------------DEUXIENE-SOLUCE------------------//

// Séléctionner les aiguilles de montre

const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");


//Extraire l'heure actuel à l'aide de l'objet Date()

let maDate = new Date();

//console.log(maDate);
//Stocker l'heure , minute , seconde  dans des variables

let monHeure = maDate.getHours();
let maMin = maDate.getMinutes();
let maSec = maDate.getSeconds();


if(monHeure<10){
    monHeure="0"+monHeure;
}
if(maMin<10){
    maMin="0"+maMin;
}
if(maSec<10){
    maSec="0"+maSec;
}
let formatHeure = monHeure+":"+maMin+":"+maSec;
console.log(formatHeure);

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

let heurDeg = heurDeg*360/3600;
let minDeg = minDeg * 30/60;
let secDeg = secDeg * 360/60; 

function demarrerLaMontre() {

console.log('degre :',heurDeg);
console.log('degre :',minDeg);
console.log('degre :',secDeg);

heurDeg = heurDeg + 0.1;
minDeg = minDeg + 0.5;
secDeg = secDeg + 6;

// Déplacer les aiguilles 

AIGUILLEHR.style.transform=
    'rotate('+ heurDeg +'deg)';

AIGUILLEMIN.style.transform= 
    'rotate('+ minDeg +'deg)';

AIGUILLESEC.style.transform=
   'rotate('+ secDeg +'deg)';

}

// Exercuter la fonction chaque second

var interval = setInterval(demarrerLaMontre, 1000);

*/