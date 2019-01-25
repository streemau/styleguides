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

