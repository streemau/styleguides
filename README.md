# Streem coding style guides

## Philosophy

Code is not about telling the computer what to do, it's about explaining to other humans what you want the computer to do.

> Clear is better than clever

> Every line of code is a liability

> No code is faster than no code

## General guidelines

In order to limit cognitive overhead prefer:
- Short classes and methods with single responsibility
- Long descriptive variable & method names
- Comments only to explain "why" when necessary (i.e. uncommon business rule, specific magic value...)

## Usual backend apps structure

MVC + `actions` + `jobs` + `services` + `workers`
