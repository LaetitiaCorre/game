let tuLeDis = new Question ("Passons aux sérieuses, je ne sais pas comment tu t'es retrouvé ici mais t'es vraiment dans le pétrin", [
  new Answer("Bien sûr, je t'écoute."),
  new Answer("On peut attendre que je reprennes des forces ?"),
  new Answer("Et tu crois me faire peur.. J'en ai vue bien pire que toi mon choux!")
]);

let aQuiJeParle = new Question ("L'heure n'est pas au présentation! Tu es en danger, si ils te trouvent ici...", [
  new Answer("Qui ils, arretes tu me fais peur ."),
  new Answer("ok, on garde son calme"),
  new Answer("Je suis prete à les acceuillires")
]);

let commentCa = new Question ("J'ai pas l'impression que tu comprennes dans quelle situation tu t'es mises", [
  new Answer("Comment, je ne comprends pas... Je n'ai rien demandé"),
  new Answer(" mais de quoi tu me parles.. quelle situation?" ),
  new Answer("Relax Moi je m'adaptes à n'importe quel situation!", [])
]);

let maMere = new Question ("Du calme, on en est pas encore à là voyons", [
  new Answer("... (rougis)"),
  new Answer("mais tu plaisantes, je blaguais tout à l'heure.. Je veux rien à faire avec toi.. d'ailleurs je m'en vais"),
  new Answer("ça me plait bien tout ça")
]);

let suisFoutu = new Question ("T'as rien à craindre si tu réponds bien à mes questions", [
  new Answer("vas-y, je t'écoute."),
  new Answer("On peut attendre que je reprennes des forces avant la séance interrogatoire?!"),
  new Answer("Pourquoi je devrais répondre à tes questions d'abord?")
]);

let galopin = new Question ("Je te conseillerai de me parler sur un autre ton si tu ne veux pas que je me faches.", [
  new Answer("Oui Mr le bizarroide, a vos ordre."),
  new Answer("nia nia nia ?"),
  new Answer("Et tu crois me faire peur.. J'en ai vue bien pire que toi mon choux!")
]);

let laiss = new Question("A");
let laissaaa = new Question("B");
let laissuuu = new Question("C");
let laisserAttache = new Question ("À ce que je vois t'es une petite coquine...Je suis désolé mais on a pas le temps à ça", [
  new Answer("c'est bon ça va relax?", laiss),
  new Answer("t'es pas un marrant toi!", laissaaa),
  new Answer("Oui je sais, on me le dit souvent.", laissuuu)
]);
let quiEsTu = new Question("Moi ? Ca n'a pas d'importance...", [
  new Answer("Comment ça ?", commentCa ),
  new Answer("Je préfèrerai savoir à qui je parle...", aQuiJeParle),
  new Answer("Si tu le dis...", tuLeDis)
]);

let ouSommesNous = new Question ("Tu le sauras bien assez tôt petit galopin.", [
  new Answer("Je ne suis pas ton petit galopin sac à patate", galopin,-25),
  new Answer("Ça y est, je suis foutu...",suisFoutu ,-5),
  new Answer("Ma mère m'appelait comme ça ! ça me plait bien ",maMere, 10)
]);

let firstQuestion = new Question ("Tu es réveillé! Désolé pour ce traitement, je vais te détacher...", [
  new Answer("Où sommes-nous ? Ne t'approche pas de moi !", ouSommesNous, -10),
  new Answer("Qui es-tu ? Qu'est-ce que je fais là ?", quiEsTu, -20),
  new Answer("..ou tu peux me laisser attaché beau gosse...", laisserAttache, 40)
]);

let currentQuestion = firstQuestion;
let moodbar = 25;

let section = document.querySelector('#button');
let moodbarProgress = document.querySelector('.hideb');
let orage = document.querySelector('.orage');

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

/*
showOrage();
function showOrage() {
  setTimeout(function () {
    orage.classList.add('orage-animation');
    setTimeout(function() {
      orage.classList.remove('orage-animation');
      showOrage();
    }, 1000);
  }, 0);
}
*/

function display (){
  if (moodbar <= 30) {
   
    document.querySelector('.characterA').style.display = "block";
  }else {
    document.querySelector('.characterA').style.display = "none"; 
  }

  if (moodbar >= 50) {
    document.querySelector('.characterH').style.display = "block";
  }

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
