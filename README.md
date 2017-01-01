# brewdog.js

[![Build Status](https://travis-ci.org/mikefrancis/brewdog.js.svg?branch=master)](https://travis-ci.org/mikefrancis/brewdog.js) [![Coverage Status](https://coveralls.io/repos/github/mikefrancis/brewdog.js/badge.svg?branch=master)](https://coveralls.io/github/mikefrancis/brewdog.js?branch=master)

A JS wrapper for [punkapi.com](https://punkapi.com).

## Installation

### NPM

```bash
npm install --save brewdog-js
```

### Yarn

```bash
yarn add brewdog-js
```

## Usage

```javascript
import Api from 'brewdog-js';

const beer = new Api.Beer();

beer.all(beers => {
    console.log(beers);
});
```
