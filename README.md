# brewdog.js

[![Build Status](https://travis-ci.org/mikefrancis/brewdog.js.svg?branch=master)](https://travis-ci.org/mikefrancis/brewdog.js) [![codecov](https://codecov.io/gh/mikefrancis/brewdog.js/branch/master/graph/badge.svg)](https://codecov.io/gh/mikefrancis/brewdog.js)

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
