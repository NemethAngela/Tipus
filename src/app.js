var szam = 35;
var szam2 = '27';

console.log(typeof szam);   //ki lehet iratni, hogy milyen típus, Pyton-ban: type
console.log(szam);
console.log(Number(szam) + Number(szam2))

var esik = true;
if (esik) {
    console.log('esik...')
}

var calcArea = function(base, height) {   //névtelen függvényt el tudok tenni változóba, mert van típusa pl.function calcArea(base, height)
    return base * height / 2;
}

console.log(typeof calcArea)    //visszaadja, hogy function tipusú

var pista = {
    nev: 'Pisti',
    kor: 28
};

console.log(typeof pista)   //ez már object tipusú

var szamok = [25, 30, 40];     //számok tömbje
console.log(typeof szamok);
var nevek = ['Pisti', 'Pali', 'Dani'] ;
console.log(typeof nevek);