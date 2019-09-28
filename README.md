# React SSR

*work in progress*

## About

This project does the following:
- Renders static/dynamic content on the server into HTML/CSS
- Client hydrates the server generated content and continues rendering the
application

## Prerequisites

```
Node.js v10.16.3
Yarn v1.17.3
```

## Installation

To install dependencies
```sh
yarn install
```

## Running locally

### Server

```sh
yarn watch-server
yarn start-server
```

### Client

```sh
yarn start
```

## Deployment

Building and running the project in production
```sh
yarn build
yarn serve
```

## Built With

* [Parcel](https://parceljs.org/) - Web application bundler
* [React](https://reactjs.org/) - User interface framework
* [React Helmet Async](https://github.com/staylor/react-helmet-async) - A document head manager for React
* [React Router Dom](https://reacttraining.com/react-router/) - Collection of navigational components
* [TypeScript](https://www.typescriptlang.org/) - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
* [Yarn](https://yarnpkg.com) - Package manager

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/react-ssr/) for details
on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available,
see the
[tags on this repository](https://github.com/HenryBrown0/react-ssr/tags). 

## Authors

* **Henry Brown** - *Initial work* - 
[HenryBrown0](https://github.com/HenryBrown0)

## Special thanks

Thanks to the Redux team for the [server side rendering guide](https://redux.js.org/recipes/server-rendering).
I've used this as an example of how to get the server generated state hydrated
into the client using Reacts context API.

## License

This project is licensed under the MIT License - see the
[LICENSE](LICENSE.md) file for details
