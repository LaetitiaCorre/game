let merci = new Question ("Je t'en prie. J'aurai cependant quelques questions à te poser...", [
  new Answer("A propos de quoi ?"),
  new Answer("On peut attendre que je reprennes des forces ?"),
  new Answer("Bien sûr, je t'écoute.")
]);
let quiEsTu = new Question("Moi ? Ca n'a pas d'importance...", [
  new Answer("Comment ça ?"),
  new Answer("Je préfèrerai savoir à qui je parle..."),
  new Answer("Si tu le dis...")
]);
let ouSommesNous = new Question ("Nous sommes au QG de l'Alliance.", [
  new Answer("L’alliance ?"),
  new Answer("Je suis vraiment mal tombé..."),
  new Answer("Dieu merci !")
]);
let firstQuestion = new Question ("Tu es réveillé! Désolé pour ce traitement, je vais te détacher...", [
  new Answer("Où somme nous ?", ouSommesNous, -10),
  new Answer("Qui es-tu ??", quiEsTu, -20),
  new Answer("Merci...", merci, 20)
]);

let currentQuestion = firstQuestion;
let moodbar = 0;

let section = document.querySelector('#button');
let moodbarProgress = document.querySelector('.hideb');

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
  if (!currentQuestion) {
    console.log('pas de question à afficher');
    return;
  }

  let message = document.querySelector('#message');
  let Abutton = document.createElement('button');
  let Bbutton = document.createElement('button');
  let Cbutton = document.createElement('button');

  moodbarProgress.style.height = moodbar + '%';

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
