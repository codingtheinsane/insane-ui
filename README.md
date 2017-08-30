# Insane UI

Javascript Single Page Application with Bootstrap and JQuery UI libraries and a couple of Model-View-Controller structure page usage samples

The aim of this project is to prove that it is possible to reduce development and maintenance cost of the User Interface by clearly splitting the concerns and source code between UI-UX (User Experience) and UI pages (Navigation and Functionality).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

npm

### Installing

Install libraries

```
npm install
```

Build UI

```
grunt build
```

Open sample UI on the browser

```
Open index.html
```

## Running the tests

### Unit Tests

Unit tests for all js files, both MVC and UI libraries

```
./node_modules/mocha/bin/mocha test/unit/**/*.js
```

### Coding style tests

ESLint tests run with Grunt command

```
grunt eslint
```

## Contributing

Please read [CONTRIBUTING.md](https://github.com/codingtheinsane/insane-ui/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/codingtheinsane/insane-ui/tags).

## Authors

* **Pedro Almeida** - [pedroalmeida89](https://github.com/pedroalmeida89)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/codingtheinsane/insane-ui/blob/master/LICENSE.md) file for details
