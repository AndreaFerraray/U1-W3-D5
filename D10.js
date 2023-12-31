/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
a = 10;
b = 20;

let sum = a + b;
console.log("esercizio A", a + b);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
// let random = function RandomNumber(range) {
//   const rand = Math.floor(Math.random() * (20 - 0) + 1);
// };

// RandomNumber(0, 20);
// console.log("esercizio B", random);
// ----------------------DA FARE-----------------------------------
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Andrea",
  surname: "Ferrara",
  age: "25",
};
console.log("ES C", me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log("ESERCIZIO D", me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
const skills = ["HTML", "CSS", "JS"];
me.skills = skills;
console.log("ES E", me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
skills.push("ciao");
console.log(skills);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
skills.pop();
console.log(skills);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  number = Math.floor(Math.random() * 6);
}
dice();
console.log(number);
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
const result = whoIsBigger(3, 7);
console.log("esercizio 2", result);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(string) {
  const stringa = "i love coding";
  return stringa.split(" ");
}
const splitstring = splitMe();
console.log("esercizio 3", splitstring);
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deletOne(string, booleano) {
  if (true) {
    return string.substring(1);
  } else {
    return string.substring(0, string.length - 1);
  }
}
const result1 = deletOne("ciao", true);
console.log("es 4", result1);
const result2 = deletOne("ciao", false);
console.log("es4", result2);
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(string) {
  return string.replace(/\d+/g, "");
}

const resul = onlyLetters("ho 765 coccodrilli");
console.log(resul);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("Esercizio 6");

const isThisAEmail = (str) => {
  const x = str.search("@");
  const y = str.endsWith(".com");
  if (x === -1 || y === false) return false;
  else return true;
};
const Email = "prova.mail@gmail.com";
console.log(`La mail inserita è:${Email}`);
if (isThisAEmail(Email)) {
  console.log("La mail inserita è valida");
} else {
  console.log("La mail inserita non è valida");
}
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = () => {
  const now = new Date();
  const day = now.getDay();
  switch (day) {
    case 0:
      return "Domenica";
    case 1:
      return "Lunedi";
    case 2:
      return "Martedi";
    case 3:
      return "Mercoledi";
    case 4:
      return "Giovedi";
    case 5:
      return "Venerdi";
    case 6:
      return "Sabato";
  }
};
console.log(`La data di oggi è: ${whatDayIsIt()}`);
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

// function rollTheDices(n1) {
//   const result = {
//     sum: 0
//       values : []}

//   for (let i = 0; i < n1; i++) {
//     const value = dice();
//     result.sum += value;
//     result.values.push(value);
//   }
//   return result;
// }
// const cro = rollTheDices(3);
// console.log(cro);
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = (date) => {
  let now = new Date();

  const ms = 1000 * 60 * 60 * 24;
  now = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  let d = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  console.log(`Giorni trascorsi: ${Math.floor((now - d) / ms)}`);
};
const date = new Date("2022-7-14");
howManyDays(date);
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday() {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;

  const myBirthdayDay = 19;
  const myBirthdayMonth = 7;

  if (dd === myBirthdayDay && mm === myBirthdayMonth) {
    return true;
  } else {
    return false;
  }
}
let obj = isTodayMyBirthday();
console.log("es10", obj);
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(obj, string) {
  const myobj = {
    name: "Andrea",
    cognome: "Ferrara",
  };
  delete myobj[string];
  return myobj;
}
const del = deleteProp(myobj, "name");
console.log("es11", del);
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(movies) {
  let newest = null;

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (!newest || movie.releaseDate > newest.releaseDate) {
      newest = movie;
    }
  }

  return newest;
}

const movies = [
  {
    title: "Film A",
    releaseDate: new Date("2022-01-01"),
  },
  {
    title: "Film B",
    releaseDate: new Date("2021-12-15"),
  },
  {
    title: "Film C",
    releaseDate: new Date("2023-03-10"),
  },
];

const result = newestMovie(movies);
console.log(result); // Stampa: { title: "Film C", releaseDate: <data> }

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(movies) {
  return movies.length;
}

// Esempio di utilizzo della funzione
const movies = ["Film A", "Film B", "Film C"];
const result = countMovies(movies);
console.log(result);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(movies) {
  const years = [];

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const releaseYear = movie.releaseDate.getFullYear();
    years.push(releaseYear);
  }

  return years;
}

const movies = [
  { title: "Film A", releaseDate: new Date("2022-01-01") },
  { title: "Film B", releaseDate: new Date("2021-12-15") },
  { title: "Film C", releaseDate: new Date("2023-03-10") },
];

const result = onlyTheYears(movies);
console.log("es14", result); // Stampa: [2022, 2021, 2023]

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(movies) {
  const lastMillenniumMovies = [];

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const releaseYear = parseInt(movie.Year);

    if (releaseYear >= 2000 && releaseYear <= 2099) {
      lastMillenniumMovies.push(movie);
    }
  }

  return lastMillenniumMovies;
}

const result = onlyInLastMillennium(movies);
console.log('es15',result);


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(movies) {
  const lastMillenniumMovies = [];

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const releaseYear = parseInt(movie.Year);

    if (releaseYear >= 2000 && releaseYear <= 2999) {
      lastMillenniumMovies.push(movie);
    }
  }

  return lastMillenniumMovies;
}

const result = onlyInLastMillennium(movies);
console.log('es,16'result);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(searchTerm, movies) {
  const matchingMovies = [];

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];

    if (movie.Title.toLowerCase().includes(searchTerm.toLowerCase())) {
      matchingMovies.push(movie);
    }
  }

  return matchingMovies;
}


const searchTerm = "Lord";
const result = searchByTitle(searchTerm, movies);
console.log('es17'result);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(searchTerm, movies) {
  const result = {
    match: [],
    unmatch: []
  };

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];

    if (movie.Title.toLowerCase().includes(searchTerm.toLowerCase())) {
      result.match.push(movie);
    } else {
      result.unmatch.push(movie);
    }
  }

  return result;
}

const searchTerm = "Lord";
const result = searchAndDivide(searchTerm, movies);
console.log('es18',result);
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = (index) => {
  movies.splice(index, 1);
};
console.log(movies);
removeIndex(1);
console.log(movies);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const selector = () => {
  const container = document.getElementById("container");
};
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const select = () => {
  const td = document.getElementsByTagName("td");
};
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const printer = () => {
  const td = document.getElementsByTagName("td");
  for (let i = 0; i < td.length; i++) {
    console.log(td[i].innerText);
  }
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const background = () => {
  const a = document.getElementsByTagName("a");
  for (let i = 0; i < a.length; i++) a[i].style.backgroundColor = "red";
};
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const addElement = () => {
  const ul = document.getElementById("myList");
  const li = document.createElement("li");
  li.innerText = "Nuovo elemento ";
  ul.appendChild(li);
};
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const svuota = () => {
  const ul = document.getElementById("myList");
  ul.innerHTML = "";
};
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addClass = () => {
  const tr = document.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) tr[i].classList.add("test")
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
