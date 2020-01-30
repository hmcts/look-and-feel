# Look and Feel

[![Greenkeeper badge](https://badges.greenkeeper.io/hmcts/look-and-feel.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/hmcts/look-and-feel.svg?branch=master)](https://travis-ci.org/hmcts/look-and-feel)
[![npm (scoped)](https://img.shields.io/npm/v/@hmcts/look-and-feel.svg)](https://www.npmjs.com/package/@hmcts/look-and-feel)
[![Codacy grade](https://img.shields.io/codacy/grade/46e31ccc16cf41688c9e8dd5e4c112a9.svg)](https://www.codacy.com/app/michaeldfallen/look-and-feel)

GOV.UK look and feel as a single easy import (at least that's the goal).

## Usage

To use look-and-feel first add it to your `package.json`:

    yarn add @hmcts/look-and-feel

Then configure it in your `app.js`:

    const express = require('express');
    const app = express();
    ...
    const lookAndFeel = require('@hmcts/look-and-feel');
    lookAndFeel.configure(app);
    ...

## Documentation

All documentation is stored in the [docs] folder.

## Verification

Run tests:
    
    yarn test

Run Eslint:

    yarn lint

Check for Vulnerabilities:

    yarn audit
