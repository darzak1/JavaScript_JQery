var osoba = {
  imię: 'Jan',
  nazwisko: 'Kowalski',
  przedstaw: function () {
      console.log('Jestem ' + this.imię + ' ' +
      this.nazwisko);
  }

};

osoba.przedstaw();

function Osoba() {
    this.imię = 'Andrzej';
    this.nazwisko = 'Nowak';
    this.przedstaw = function () {console.log('Jestem ' + this.imię + ' ' +
        this.nazwisko);

    }

}
var osoba2 = new Osoba();
osoba2.przedstaw();

function Osoba2(imie, nazwisko) {
    this.imię = imie;
    this.nazwisko = nazwisko;
    this.przedstaw = function () {
        console.log('Jestem ' + this.imię + ' ' + this.nazwisko);
    }
}

var osoba3 = new Osoba2('Antoni', 'Alfa');
osoba3.przedstaw();
