//! -------------------------------------------------------------------------------------
//! SNACK 1
//! -------------------------------------------------------------------------------------

// Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo e la lista degli invitati in ordine di posto.
// const tableName = 'Tavolo Vip';

// const guests = [
//   'Brad Pitt',
//   'Johnny Depp',
//   'Lady Gaga',
//   'Cristiano Ronaldo',
//   'Georgina Rodriguez',
//   'Chiara Ferragni',
//   'Fedez',
//   'George Clooney',
//   'Amal Clooney',
//   'Maneskin'
// ];

// Per stampare il tutto, la tipografia vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell'ospite e posto occupato.
// Generiamo questo array in una variabile guestsList e stampiamolo in console

//TODO -------------------------------------- SVOLGIMENTO -------------------------------------- \\

// Creo il tavolo
const tableName = 'Tavolo Vip';

// Creo il gruppo degli invitati
const guests = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];

// Creo la lista degli ospiti dettagliata specificando, in base all'ospite, nome tavolo, nome ospite e posto occupato
const guestsList = guests.map((guest, index) => {
    return {
        table: tableName,
        guestName: guest,
        seatNumber: ++index
    }

});

// Stampo in console la lista dettagliata
console.log(guestsList);

//! -------------------------------------------------------------------------------------
//! SNACK 2
//! -------------------------------------------------------------------------------------

// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
// Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni
// 1.Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 2.Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
// 3.Dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);

//TODO Questo è l'elenco degli studenti:
// Id|Name|Grades
// 213|Marco della Rovere|78
// 110|Paola Cortellessa|96
// 250|Andrea Mantegna|48
// 145|Gaia Borromini|74
// 196|Luigi Grimaldello|68
// 102|Piero della Francesca|50
// 120|Francesca da Polenta|84

//TODO -------------------------------------- SVOLGIMENTO -------------------------------------- \\

// Creo la lista degli studenti
const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78,
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96,
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48,
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74,
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68,
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50,
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84,
    },
];

console.log(students);

// 1.Creo una lista di tutti gli studenti che hanno un totale di voti superiore a 70
const voteOver70 = students.filter(student => (student.grades > 70));
console.log(voteOver70);

// 2.Creo una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
const voteOver70IdOver120 = students.filter(student => (student.grades > 70 && student.id > 120));
console.log(voteOver70IdOver120);

// 3.Stampo le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);
const nameStudents = students.map((student) => {
    return student.name.toUpperCase();
});
console.log(nameStudents);

//TODO ------ Stampo in pagina gli elementi

// Recupero gli elementi in pagina
const studentsElement = document.querySelector('.students');

// Creo gli elementi
const maxGrade = 100;
let studentList = '';

students.forEach((student) => {
    studentList += `

<ul class="list-group m-3">
    <li class="list-group-item">Studente:<strong> ${student.name}</strong></li>
    <li class="list-group-item">ID: ${student.id}</li>
    <li class="list-group-item">Somma voti:<strong> ${student.grades}</strong>/${maxGrade}</li>
</ul>`

});

// Stampo in pagina la lista degli studenti

studentsElement.innerHTML = studentList;