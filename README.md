# brewdog.js

[![Build Status](https://github.com/mikefrancis/brewdog.js/workflows/CI/badge.svg)](https://github.com/mikefrancis/brewdog.js/actions?query=workflow%3ACI) [![codecov](https://codecov.io/gh/mikefrancis/brewdog.js/branch/master/graph/badge.svg)](https://codecov.io/gh/mikefrancis/brewdog.js) [![npm](https://img.shields.io/npm/v/brewdog-js.svg)](https://www.npmjs.com/package/brewdog-js)

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
import { Beer } from 'brewdog-js';

const beers = new Beer();

console.log(await beers.all());
```
