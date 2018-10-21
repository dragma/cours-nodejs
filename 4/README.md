Cours 4

# Ton premier serveur http Express

## Généralités : Enfonçons des portes ouvertes ensemble

Un serveur http, c'est simplement un process qui écoute sur un port précis des requettes HTTP.

Les types de requettes HTTP les plus utilisés sont les suivantes :

- GET
  - C'est la requete la plus utilisée tous les jours, parce que c'est la requete qui est excutée lorsqu'on écrit quelque chose dans l'url de son navigateur.
  - La particularité de cette requete par rapport aux autres, c'est qu'elle ne peut pas envoyer de data autre que dans les parametres de l'url :
    - ex : http://localhost:3000/?**foo=bar**&**hello=world**
- POST
- PUT
- PATCH
- DELETE

Chaque requete ammène avec elle un tas d'informations, comme des headers, des cookies, de la donnée, etc...

## Express.js, qu'est ce que c'est ?

C'est simplement le module nodejs le plus utilisé pour créer un serveur http.

Avec express, on crée le serveur, on paramètre des routes et des actions liées aux routes, on applique des middlewares pour pouvoir s'authentifier, etc...

[Documentation express.js](https://expressjs.com/fr/4x/api.html).

## C'est parti !

### Notre premier serveur

On crée un nouveau fichier `server.js`
