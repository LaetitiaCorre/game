let questionPlateBlue = new Question ("Je te conseillerai de me parler autrement tu ne sais pas à qui tu as à faire.", [
  new Answer('Oui j\'aimerai beaucoup y aller avec toi'), new Answer ('Peut-etre on verra!'), new Answer ('Pourquoi je suivrai un inconnu comme toi ?!')
]);

let questionPlateYellow = new Question("Donc je suppose que ça ne te dérange que je reste à tes côtés.", [
  new Answer("Dit donc toi, qu’est ce que t’as derrière la tete ?"), 
  new Answer("pas du tout"), 
  new Answer("je préfère rester toute seule")
]);

let questionPlateRed = new Question ("Pourquoi t’es tu enfuis de chez toi ?", [
  new Answer ("Mon copain ma trompé, je suis tombé sur lui et ma meilleur amie en pleine ..."),
  new Answer ("marre"), 
  new Answer ('hmm')
]);

let firstQuestion = new Question ("Serais-tu perdus ? ", [
  new Answer("Oui, je me suis enfui de chez moi et je me suis retrouvé ici. Tu peux me dire où est ce que je me trouve ? ", questionPlateRed, -10), 
  new Answer ("Mais pas du tout ! C’est ma passion de me promener tard la nuit dans les forêts sombres et humides par un temps pareil.", questionPlateYellow, -20),
  new Answer ("Ca ne vous regarde pas ce que je fais de mes nuits ?", questionPlateBlue, 20)
]);

let currentQuestion = firstQuestion;
let moodbar = 0;

let section = document.querySelector('#button');
let moodbarProgress = document.querySelector('.moodbarProgress');

let prota = new Character('taurus', 'O+', 'green');
let wWalker = new Character('taurus', 'A+', 'green');

if (prota.astroSigns === wWalker.astroSigns) {
  moodbar = moodbar + 10;
} else { 
  moodbar = moodbar - 15;
};

if (prota.bloodTypes === wWalker.bloodTypes) {
  moodbar = moodbar + 5;
} else {
  moodbar = moodbar - 7;
};

if (prota.colors === wWalker.colors) {
  moodbar = moodbar + 5;
};

display();

function display (){
  let message = document.querySelector('#message');
  let Abutton = document.createElement('button');
  let Bbutton = document.createElement('button');
  let Cbutton = document.createElement('button');
  
  moodbarProgress.style.width = moodbar + '%';
  
  message.textContent = currentQuestion.message;
  Abutton.textContent = currentQuestion.answers[0].message;
  Bbutton.textContent = currentQuestion.answers[1].message;
  Cbutton.textContent = currentQuestion.answers[2].message;

  let buttonSection = document.querySelector('#button');

  buttonSection.appendChild(Abutton);
  buttonSection.appendChild(Bbutton);
  buttonSection.appendChild(Cbutton);

// Faire que quand je clique sur le bouton, ca remplace la question actuelle par
// la question lié à la réponse.


// Faire en sorte que quand j'affiche la question suivante,
// je n’ai plus les boutons de la question précédente

  Abutton.addEventListener('click', function(event) {
  moodbar = moodbar + currentQuestion.answers[0].repercussion;
  currentQuestion = currentQuestion.answers[0].question;
   display();
   section.removeChild(Abutton);
   section.removeChild(Bbutton);
   section.removeChild(Cbutton);
  });

  Bbutton.addEventListener('click', function (event) {
  moodbar = moodbar + currentQuestion.answers[1].repercussion; 
  currentQuestion = currentQuestion.answers[1].question;
  display();
  section.removeChild(Bbutton);
  section.removeChild(Cbutton);
  section.removeChild(Abutton);
  });

  Cbutton.addEventListener('click', function (event) {
    moodbar = moodbar + currentQuestion.answers[2].repercussion;   
    currentQuestion = currentQuestion.answers[2].question;
    display();
    section.removeChild(Cbutton);
    section.removeChild(Bbutton);
    section.removeChild(Abutton);
    
  });

}

//AButton.parentElement.removeChild(AButton);

// 1. Créer une variable pour la barre d’humeur




// 2. Chaque réponse doit avoir une “répercussion”

// 3. Quand une réponse est cliquée, faire l’addition de la répercussion sur la barre d’humeur
// 4. Afficher la barre d’humeur dans la page (et mettre à jour quand elle est changée)