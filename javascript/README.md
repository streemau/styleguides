# eslint-config-streem

This repo contains a custom Eslint config that is built upon the rules and configuration defined in [eslint-config-airbnb](https://github.com/airbnb/javascript) and eslint-plugin-vue, which follows the Official [Vue Style Guide](https://vuejs.org/v2/style-guide/) using the recommended rules.

## Installation
You will need the NPM registry auth token (found in 1password) in your environment to install this package.

`npm i --save-dev @streemau/eslint-config-streem`


## Using eslint-config-streem
In an `.eslintrc.js` config file, simply do:
``` javascript
const config = {
  // add any overrides or extra config here
};
module.exports = require('@streemau/eslint-config-streem')(config)
```

## Front end structure, rules and guidelines
To keep the code clean, consistent and well understood across all projects, we should follow the conventions, rules and guidelines below, in addition to the rules and conventions specified by the linting rules and generally those adopted by the language or framework/s.

Component Naming Conventions:
- always use multiword component names to avoid naming collisions or nondescriptive components
 - you should always know exactly what it is referring to based on the name
- use PascalCase to name all vue components
 - e.g. `TodoItem`
- child components that are tightly coupled with the parent should include the parent component in its name as a prefix - https://vuejs.org/v2/style-guide/#Tightly-coupled-component-names-strongly-recommended
- component names should start with the highest (most general) words and end with the descriptive words - https://vuejs.org/v2/style-guide/#Order-of-words-in-component-names-strongly-recommended
- component names should always prefer full words over abbreviations - https://vuejs.org/v2/style-guide/#Full-word-component-names-strongly-recommended
- avoid nested levels of folders
 - the components should be grouped well and easily discoverable by name, and forces developers to give descriptive names following the naming conventions

Page Naming Conventions:
- page components should be prefixed with the resource they refer to
  - `OrganisationsTable`, `BriefGroupForm`
- for pages that list content for a resource, suffix pages with `List`
  - `OrganisationsList`, `BriefGroupsList`
- we should use the same page component when building create/edit pages, and the resource should be singular and suffixed with `View`
  - `OrganisationView`, `BriefGroupView`
- for routes that are nested, like the organisation tabs components, we should follow the tightly coupled naming rule for components based on the page component it is nested under
  - `OrganisationBriefsList`, `OrganisationBrandingProfilesList`
- avoid nested levels of folders
  - the components will be grouped well, easily discoverable and forces developers to give descriptive names when following the naming conventions

Routing Conventions
- routes should be prefixed with the resource they refer to
  - `/radio-stations/1/edit`
- index pages should simply route to the base page of the resource
  - `/radio-stations`
- displaying the details of a singular resource should simply route to the base of the resource suffixed with an id
  - `/radio-stations/1`
- creation pages should be suffixed with `/new`
  - `/radio-stations/new`
- edit pages should be suffixed with `edit`
  - `/radio-stations/1/edit`
- the name given to each route should be prefixed with the resource, using dashes instead of underscores, and should contain the action of what they do
  - `radio-stations-list`, `radio-stations-show`, `radio-stations-new`, `radio-stations-edit`
- nested routes should follow the naming conventions above
- avoid route name nesting unless it is a requirement of the page to function, or it is also nested in the backend
- for any page that isn't covered by the rules above, it should always be prefixed with the resource(s) they refer to and include the action they refer to
  - `articles/bulk-search`, `articles-bulk-search`

General naming conventions
- directories should use camelCase multiword names
- regular js modules should follow the same directory naming conventions for components, and should be named in camelCase
- if the js module exports a class, the filename should be in PascalCase
