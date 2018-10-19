Cours 1

# JavaScript, c'est pas comme le rap. C'etait pas mieux avant.

## Les années 2000, la piqure de rappel

Avant, Javascript, c'etait une putain d'épine dans le pied. Ce language a été inventé pour s'intégrer à un navigateur et pouvoir modifier le [DOM Document](https://www.w3schools.com/jsref/dom_obj_document.asp), selon une variété d'évènement.

Exemple :

- Evènement : Je clique sur cette photo de femme nue
- Action : Je télécharge un virus

Si tu connais un peu JavaScript parce qu'à un moment on a essayé de t'apprendre le développement web classique HTML / CSS / JS, tu dois te souvenirs de trucs comme ça

```html
<script>
  function vrai_ou_faux() {
    var test = false;
    if (Math.random() > 0.5) {
      test = true;
    }
    return test;
  }

  function pile_ou_face() {
    if (vrai_ou_faux()) {
      alert('pile');
    } else {
      alert('face');
    }
  }
</script>

<button onclick="pile_ou_face()">Pile ou face ?<Button>
```

Ça a très bien marché pendant 10 ans, mais maintenant, si tu dis que tu sais coder en javascript et que tu sors ça, on te rira au nez.

Si je t'ai offensé, et que tu vois pas ce qu'il y a de mal dans ce code, ce tutoriel est fait pour toi.

## Javascript en 2018

### Un language pour les rassembler tous...

On fait un bond de 10 ans en avant.
Javascript est devenue un language à la mode avec une ÉNORME communauté.

<p align="center">
  <img src="./img/communaute.jpg" alt="La communauté de l'anneau">
</p>

Pourquoi ? Parce qu'un jour, google a fait un nouveau moteur javascript, qu'il a appelé v8. Et ce moteur etait tellement efficace, que les gens on commencé à envisager le javascript comme language à part entière, désolidarisé de son navigateur.

Et puis tant qu'on y est, soyons fou ! Pourquoi pas penser le Javascript comme un language compatible pour le client et server, un language pour les rassembler tous !

Quelle surprise ! Des génies y ont pensé, et ça a donné [node.js](https://nodejs.org).

### ... et sur npm, les lier.

Ce titre est pour la blague, mais j'en profite pour introduire le point fort de javascript aujourd'hui : [npm](https://www.npmjs.com). J'en parlerai plus tard.

### Et le code maintenant ?

[Minute papillon !](https://www.youtube.com/channel/UCBOEy0ETYHd5gWQ2DayMv_g)

Avant de rentrer dans le code, je dois te dire que le javascript a beaucoup évolué dans ses standards depuis quelques année. L'engouement et la communauté n'y sont pas pour rien. Chaque standard possède une dénomination. Tu liras très souvent [ES6](http://es6-features.org/#Constants), ES7, ES8 etc...

Par exemple, dans ces standards, on y trouve ça :

#### On n'écrit plus `var`, mais `const` ou `let`;

Si tu écris var, tu mérites de mourir. Son utilisation est prohibée dans toutes les grandes guidelines.

[Un peu de lecture](https://medium.com/@vincent.bocquet/var-let-const-en-js-quelles-diff%C3%A9rences-b0f14caa2049).

TLDR:

  - `cosnt` : C'est une constante que tu ne peux pas réaffecter. Elle existe dans le bloc où elle est définie.
  - `let` : C'est une variable qui peut être réaffectée. Elle existe dans le bloc où elle est définie.
  - `var` : Tu oublies, ça ne sert plus.

#### les fonctions anonymes deviennent des "arrow function"

Avant on écrivait une déclaration de fonction comme ça :

```js
function a() {
  return 'a';
}
// ou
var b = function() {
  return 'b';
}
```

Maintenant on écrit une lambda comme ça dans 99% du temps.

```js
const a = () => {
  return 'a';
}
// ou si la seule instructio nde la fonction est un return
const b = () => 'b';
```

Tu remarques la petite flêche `=>` ? Et bien bravo Sherlock, voilà pouruqoi on appelle ça une "arrow function".

#### On peut déstructurer des objets à la volée.

Disons que j'ai dans un objet suivant, décrivant une voiture :

```js
const voiture = {
  nb_roues: 4,
  marque: 'audi',
  couleur: 'gris',
  modele: 'r8',
};
```

Et que je veux accéder faire une fonction qui affiche la marque de cette voiture.

Old style:

```js
function affiche_marque(voiture) {
  return voiture.marque;
}

console.log(affiche_marque(voiture)); // affiche 'audi'
```

New style

```js
const affiche_marque = ({ marque }) => marque;

console.log(affiche_marque(voiture)); // affiche 'audi'

// dans ce cas j'aurais très bien pu écrire

// const affiche_marque = (voiture) => voiture.marque;

// ça revient exactement au même
// mais mon but c'etait de montrer la deconstruction
```

Maintenant je souhaite créer une variable contenant le nombre de roues

Old style:

```js
var nb_roues = voiture.nb_roues;
console.log(nb_roues) // affiche => 4;

var nb_roues_bis = voiture.nb_roues;
console.log(nb_roues_bis) // affiche => 4;
```

New style

```js
const { nb_roues } = voiture;
console.log(nb_roues) // affiche => 4;

const { nb_roues: nb_roues_bis } = voiture;
console.log(nb_roues_bis) // affiche => 4;

```

#### et bien d'autres...

Il y a une tonne d'aurtes normes / syntaxe en javascript. Je pense que je t'ai listé les plus importantes. Tu tomberas forcément dessus un jour ou l'autre.


## Je te laisse processer ça...

Quand tu seras prêt, RDV au [cours 2](../2).
