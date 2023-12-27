1. Le render deux fois qu'on le voie en mode dev c'est a casue de mode strict utilisé, pour reverfier les erreures
2. Pour eviter les re-render de la formulaire dans le onchange d'input tu peut utimiser le formData, ca rest une option
3. `useId` is a React Hook for generating unique IDs that can be passed to accessibility attributes. 
   `useId` should not be used to generate keys in a list*

4. `useMemo`: Used for memoizing expensive calculations or complex data transformations to optimize performance by preventing unnecessary recalculations.

5. `memo`: on mémorise une fonctoin avec les memes params, c'est par exemple cette fonction a essayer d'excuter avec les memes params, on utilise la dernier resultat et on ne'excute pas la fonction encore une fois, si les params sont une fonction, tableu, object, react pour lui se sont des nouveau params, car ils vont etre avec de deferent references, alors il va excuter le composant memorisé, et dans ce cas la nous pouvons utiliser les `useMemo` et le `useCallback`

`useMemo` et le `useCallback` est tres important lorsqu'on cree des hook personalisés

6. `Portal / createPortal`: on l'utilise souvent pour les Modal, pour que ca soit a la racing de notre dom 
    Prend en parametre `createPortal(1.Neoud JSX, 2.Eelemnt HTML le container utiliser ou on souhaite injecter notre Neoud JSX)`

7. `Errorboundary ressource`: https://github.com/bvaughn/react-error-boundary, on le mit dasn les cas sensible ou on pense que nous pouvons avoir des probleme notament avec le serveur et on veut pas que ce problem crash notre application, et nous pouvons donner plus d'infos aux utilisateurs

8. `Lazy component`: pour charger des composant d'une manniere asynchroun, on l'utilise pour gerer les performences de notre app, on fait apelle un a composant que on l'est besoin, et on souhaite le charger, dans ce cas la on le charge.

`Lazy` ne fonctione que avec les import par defaut de composant qu'on souhaite le faire import lazy
le composant lazy doit etre entourer pas un composant parent `Suspense` dans le composant `Suspense` il y a une propos fallback pour afficher qlq chose pendant le chargement, Icic le build va generé des chunks éparere pour c'est composant lazy et il va les apeller quand on veut les utilisé, alors ici le chargement de notre ca sera rapide
`Notes`: n'utilise ce Lazy sauf que tu as des composant lourd 

9. Pour tester les hook on utilise `renderHook` de react testing library

10. `CreateBrwoserRouter`: c'est lui qui ce sera reposable de charger le bon composant en fonction d'URL
    `NavLink`: pour creer de menu de navigation, avec active/no active..
    `Les params`: on utilise `product\:param_name`
    `useParams():` pour recuperer le parametre passer avec le path
                   Ex: `const {param_name} = useParams();`