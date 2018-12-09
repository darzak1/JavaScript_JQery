function prostaFunkcja() {
    console.log('Wywołanie funkcji');
}
prostaFunkcja();

function prostaFunkcja2(param1,param2) {
    console.log('Wywołanie fukcji dla parametrów: ' + param1 + ' ' + param2 );
}
prostaFunkcja2('jeden','dwa');

function sum(liczbaPierwsza, liczbaDruga) {
    return liczbaDruga + liczbaPierwsza;
}

console.log('Wynik sumowania ' + sum(1,3));
