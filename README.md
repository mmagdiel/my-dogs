# My dogs 

It's a simple dogs photo album

## Technologies used

It was carried out with:
- [Vite](https://vite.dev/)
- [React](https://es.react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Daisy](https://daisyui.com/)
- [Axios](https://axios-http.com/es/)
- [React use](https://streamich.github.io/react-use/)
- [Vitest](https://vitest.dev/)
- [React testing library](https://testing-library.com/)
- [React Hook Form](https://react-hook-form.com/)
- And [dog.ceo api](https://dog.ceo/dog-api/)



## Develop
Requirement to develop 
- Node v20.17.0
- Npm  v10.8.2
- Public and private ssh key on github (optional but recommended )

Then:

> git clone git@github.com:mmagdiel/my-dogs.git [for ssh]
> git clone https://github.com/mmagdiel/my-dogs.git [for http]
> cd my-dogs
> npm i
> npm run dev

## Architectural Principles

1. Development guided by functional programming.
2. Easy searchable files [Ctrl + P, of windows VSC] o [⌘ + P, on Mac VSC].
3. Adapted to industry standards.
4. It's easy to differentiate abstractions [types or interfaces] from concretions [functions or components].

## Architecture Conventions

- All abstractions must go in the *models* folder for [4.] principles
- The **function interface** will be written in *Pascal case* while the **function** will be written in *Camel case* with the same name.
- The **components** are written in *Pascal case*, therefore **their interface** arrives at the *props subfix of the name of the component*.
- Single **function or component** preferred per file, but always keeping below 150 lines per file for [1. and 2.] principles,
- In case of several files, they share the same behavior, group them by creating a folder with a plural identifier. 
  - That identifier is added as a subfix to the name of the files by separating it with a dot
  - Only **hooks** and **components** are the exception to the previous convention
  - The **hooks** are named using the prefix *use*

## Architectural Design

To distinguish the public context from the private, a couple of hooks were created that help validate this context by redirecting in case of not meeting the condition and providing the required function to close or log in. 

Because you do not have to consult more than 10 thousand records directly in the database, it was decided to use the browser's scroll to load the images, a solution known as infinite scroll