# ReactJS Refresher

<a href="https://www.typescriptlang.org/"><img src="https://img.icons8.com/color/48/000000/typescript.png" alt="TypeScript Logo"/></a> <a href='https://reactjs.org/'><img src="https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png" width="48" alt="React Logo"></a> <a href="https://formik.org/"><img src="https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png" width="48" alt="Formik Logo"></a> <a href="https://react-bootstrap.github.io/"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--bSimDHKi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/m9brm89w3tbmdohgjfgm.png" width="48" alt="TypeScript Logo"/></a> <a href="https://firebase.google.com/"><img src="https://www.gstatic.com/devrel-devsite/prod/vdb246b8cc5a5361484bf12c07f2d17c993026d30a19ea3c7ace6f0263f62c0dd/firebase/images/touchicon-180.png" width="48" alt="TypeScript Logo"/></a>

A Simple Meetup App skeleton work which is a part of [Next.js & React - The Complete Guide](https://www.udemy.com/course/nextjs-react-the-complete-guide/) on Udemy.

Nonetheless, this practice is built with TypeScript unlike the original work with JavaScript. Feel free to play around with my code if you wish.

## Installation

Clone this repo:

```console
git clone https://github.com/brandonwie/react-refresher.git [folderName]
```

Inside the directory installed:

```console
npm install
```

Navigate to `localhost:3000`

## Stacks used

- ReactJS v17
- Context API
- Formik + Bootstrap combination
- Firebase Realtime Database

## Takeaways

- Seems Formik with React-Bootstrap requires more codes compared to Formik with MaterialUI
- Context API resets to initial state whenever any of DOMs re-renders (to make the data persist, need to use localStorage for instance)
- Could improve this project using Context Reducer and localStorage.

## Screenshots

Main page
![Main](/screenshots/meetups.jpg)
Register page
![Register](/screenshots/register.jpg)

## Notes

- Search tab in Navbar does not have any function.
- Registering your Meetup will actually communicate with my Firebase database, if it doesn't connect, you can simply create your own free-tier Realtime database and connect it.
- `To Favorites` & `Remove from Favorites` buttons actually changes ContextAPI state(check with Chrome React Devtool), but it resets when you visit Favorites page because there's no local storage working.
