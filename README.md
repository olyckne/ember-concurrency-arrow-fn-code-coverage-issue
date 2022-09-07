# concurrency-arrow-fn issue with ember-cli-code-coverage

## Reproduction

* clone repo
* npm i
* COVERAGE=false npm start
* visit localhost:4200
* everything should work
* COVERAGE=true npm start
* visit localhost:4200
* You should see following error in the console: `Assertion Failed: It appears you're attempting to use the new task(async () => { ... }) syntax, but the async arrow task function you've provided is not being properly compiled by Babel.`

