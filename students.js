const corso1 = {
  nome: "programmatore front-end",
  ore: 300,
  terminato: false,
};

const voti1 = [8, 5, 10, 9];

const studente1 = {
  nome: "Mirco",
  cognome: "Faro",
  genere: "m",
  eta: 28,
  sposato: false,
  corso: corso1,
  voti: voti1,
};

const voti2 = [4, 6, 10, 9];

const studente2 = {
  nome: "Paolo",
  cognome: "Foppiano",
  genere: "m",
  eta: 24,
  sposato: false,
  corso: corso1,
  voti: voti2,
};

const studente3 = {
  nome: "Cinzia",
  cognome: "Ariotti",
  genere: "f",
  eta: 25,
  sposato: false,
  corso: corso1,
  voti: [3, 10, 9, 7],
};

const studente4 = {
  nome: "Leslie",
  cognome: "Fritas",
  genere: "f",
  eta: 27,
  sposato: true,
  corso: corso1,
  voti: [6, 9, 10, 6],
};

const studente5 = {
  nome: "Polina",
  cognome: "Boretc",
  genere: "f",
  eta: 27,
  sposato: false,
  corso: corso1,
  voti: [3, 10, 7, 7],
};

const studente6 = {
  nome: "Christopher",
  cognome: "Limone",
  genere: "m",
  eta: 27,
  sposato: false,
  corso: {
    nome: "Programmatore Mobile",
    ore: 250,
    terminato: true,
  },
  voti: [9, 8, 7, 6],
};


const todo = {
  name: "pane",
  priority: 6
}

const auto1 = {
  modello: "panda",
  cilindrata: 1000,
  produttore: 'fiat'
};

// const studente2 = ['Paolo', 'Foppiano', 24, false];

const studenti = [
  studente1,
  studente2,
  studente3,
  studente4,
  studente5,
  studente6,
];





function showStudents() {

  createStudentsListHtml(studenti);

  // const container = document.getElementById("students-container");

  // container.innerHTML = '';

  // for (const student of studenti) {
  //   const li = document.createElement("li");

  //   const nameDiv = document.createElement("div");
  //   const nameNode = document.createTextNode(
  //     student.nome + " " + student.cognome
  //   );
  //   nameDiv.appendChild(nameNode);

  //   const ageDiv = document.createElement("div");
  //   const ageNode = document.createTextNode("Età: " + student.eta);
  //   ageDiv.appendChild(ageNode);

  //   const courseDiv = document.createElement("div");
  //   const courseNode = document.createTextNode("Corso: " + student.corso.nome);
  //   courseDiv.appendChild(courseNode);

  //   li.appendChild(nameDiv);
  //   li.appendChild(ageDiv);
  //   li.appendChild(courseNode);

  //   container.appendChild(li);
  // }

}

function showStudentsByAge() {

  const studentsCopy = [...studenti];

  studentsCopy.sort(compareStudentsByAge);

  createStudentsListHtml(studentsCopy);
  
}

function compareStudentsByAge(stud1, stud2){
  return stud1.eta - stud2.eta;
}

function showFemaleStudents() {
    // const femaleStudents = studenti.filter(keepFemaleStudent);
    const femaleStudents = studenti.filter((s) => s.genere === 'f');

    createStudentsListHtml(femaleStudents);  
}

function keepFemaleStudent(studente){
  // if (studente.genere === 'f') {
  //   return true;
  // } else {
  //   return false;
  // }
  return studente.genere === 'f'
}



function createStudentsListHtml(studentsArray){

    const container = document.getElementById("students-container");

    container.innerHTML = "";

    for (const student of studentsArray) {
      const li = document.createElement("li");

      const nameDiv = document.createElement("div");
      const nameNode = document.createTextNode(
        student.nome + " " + student.cognome
      );
      nameDiv.appendChild(nameNode);

      const ageDiv = document.createElement("div");
      const ageNode = document.createTextNode("Età: " + student.eta);
      ageDiv.appendChild(ageNode);

      const courseDiv = document.createElement("div");
      const courseNode = document.createTextNode(
        "Corso: " + student.corso.nome
      );
      courseDiv.appendChild(courseNode);

      li.appendChild(nameDiv);
      li.appendChild(ageDiv);
      li.appendChild(courseNode);

      container.appendChild(li);
    }

}



///////////////////////INNER HTML


function logInnerHtml(){
  const exampleDiv = document.getElementById("innerhtml-example");
  console.log(exampleDiv.innerHTML);
}

function clearInnerHtml() {
  const exampleDiv = document.getElementById("innerhtml-example");
  exampleDiv.innerHTML = '';
}

function replaceInnerHtml() {
  const exampleDiv = document.getElementById("innerhtml-example");
  // exampleDiv.innerHTML = "";
  // const p = document.createElement('p');
  // const node = document.createTextNode('ciao sono il sostituto del lorem ipsum')
  // p.appendChild(node);
  // exampleDiv.appendChild(p);
  const newHTMLString = "<p>ciao sono il sostituto del lorem ipsum</p>";
  exampleDiv.innerHTML = newHTMLString;
}
