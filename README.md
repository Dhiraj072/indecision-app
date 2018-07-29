# Indecision-App

A web application to manage your to-do lists. 
Demo application is running live [here](https://inndecision.herokuapp.com/).

The application uses browser's [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). Hence how long your to-do lists are persisted depends on your [browser settings](https://stackoverflow.com/questions/9948284/how-persistent-is-localstorage/9948339). You will lose them if you clean your browser data manually.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

* Yarn v1.3.2 - Installation instructions [here](https://yarnpkg.com/lang/en/docs/install/)
* Node v8.9.3 - Installation instructions [here](https://nodejs.org/en/download/package-manager/)

### Installing

Clone the repository and cd to it

```
$ git clone https://github.com/Dhiraj072/indecision-app
$ cd indecision-app
```

Install packages

```
$ yarn install
```

Run development server

```
$ yarn dev-server
```

Finally, access the application at http://localhost:8081/

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Yarn](https://yarnpkg.com/en/) - Dependency Management
* [Webpack](https://webpack.js.org/) - Module bundler

## Authors

* [Dhiraj](https://github.com/dhiraj072)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Andrew Mead](https://mead.io/) for his excellent [udemy course](https://www.udemy.com/react-2nd-edition/)
