---
title: "Tailwind CSS: Les bonnes pratiques"
description: "Les bonnes pratiques que je met en place avec Tailwind CS"
category: "Taiwind CSS"
pubDate: "Jul 05 2024"
lang: "fr"
heroImage: "/tailwindcss_logo.jpg"
---

## 1. Mise en place en commun avec les équipes design

Si vous avez une squad de designers avec qui vous travaillez, mettez vous d'accord sur les pattern de css qui vont être réutilisés.
Par exemple par ordre d'importance :

- Les breakpoints Mobile / Tablet / Laptop / Desktop
- Les titres / paragraphes / fonts
- Les couleurs
- Les box-shadows
- Les border radius
- Les animations / keyframes

Et mettez les en place dans votre tailwind config. afin d'éviter la repetitions et maintenir l'harmonie des classes tailwind dans votre codebase.
Cela va également vous éviter un gros piège qui serait d'utiliser un trop grand nombre de fois les valeurs arbitraires et faire grossir inutilement le fichier généré en sortie par tailwind.

![Exemple de tailwind config.](/tailwindconfig-example.png)

## 2. Eviter d'utiliser les classes générées dynamiquement

En effet, qui n'a jamais eu la mauvaise surprise d'une classe dynamique qui se s'applique pas !? (@fab, combien de fois m'as tu repris sur ce sujet haha)

<strong style="color:#CF0000">
❌ Ceci ne fonctionne pas!
</strong>

```jsx
<div className={cn(heading1, `text-[${color}]`)}>Un grand titre</div>
```

Et oui, tailwind a besoin de pouvoir reconnaitre l'entiéreté de la class pour l'appliquer car il utilise des expressions régulières assez strictes.

### Deux choix s'offrent alors à vous

Le premier, assez simple, vous demandera d'utiliser l'attribut de style à la place de la classe, mais il est un peu plus contraignant à utiliser :

<strong style="color:#00CF00">
✅ Ceci fonctionne!
</strong>

```jsx
<div className={heading1} style={{color}}>
  Un grand titre
</div>
```

Le second, plus pratique mais plus situationnelle, est d'utiliser une librairie très largement utilisée, qui est **clsx**.

```
npm i clsx
```

Clsx va vous permettre d'ajouter des propriétés conditionnelles à vos classes tailwind, je vous montre ...

<strong style="color:#00CF00">
✅ Ceci fonctionne!
</strong>

```jsx
<div
  className={clsx(heading1, {
    "text-red-500": color === "red",
    "text-green-500": color === "green",
    "text-blue-500": color === "blue",
  })}
></div>
```

## 3. Se faciliter la vie en mergeant les classes

Je vous conseille d'utiliser une fonction afin de merger les classNames et ainsi éviter les interpolations au maximum.

```jsx
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
```

puis un exemple d'utilisation ci-dessous :

```jsx
<div
  key={i}
  className={
    cn(
        "flex shrink-0 justify-around", 
        { "flex-row": !vertical },
        classnames
    )}>
</div>
```
