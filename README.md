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
- Many small independent PR > one big PR:
![short_vs_long_code_reviews](https://raw.githubusercontent.com/streemau/styleguides/master/code_reviews.png)

## Usual backend apps structure

MVC + `actions` + `jobs` + `services` + `workers`

Actions receive & validate user input that create/update records, with any related business logic.

Job have a single purpose with a clear start and end, usually asynchronous and ideally idempotent.

Services encapsulate complex logic or external calls that can be used in multiple places, usually jobs and actions.

Workers are long running processes listening for events, usually triggering relevant job in response.
