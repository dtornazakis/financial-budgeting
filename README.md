# README

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for?

- A financial structure with classes, objects and libraries to represent a budgeting management system

### How do I get set up?

- Run `npm install -g http-server` to install a basic http server in your machine
- Run `rollup -c rollup.config.js --watch` to serve compiled code and watch for changes
- Run `http-server -p {PORT_NUMBER}` to start an http server in the desired port

##### Deployment for production

- Copy the contents of the `dist` directory to a server

#### Modeling

Accounts hold the money

Accounts assign their money to wallets.

Only wallets are able to make transactions and then update their accounts balance