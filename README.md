# App Comments-Space with GraphQL

This project has been development using the following technologies:

* [Node](http://elixir-lang.org/)
* [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
* [Sequelize](https://sequelize.org/)
* [Mysql](https://www.mysql.com/downloads/)
* [React](https://facebook.github.io/react/)
* [Apollo Client](https://www.apollographql.com/docs/react/)
* [Styled Components](https://www.styled-components.com/)
* [Motion](https://www.framer.com/motion/)

## Features
This repository contains the source code of a comments application that pretends to serve as an example to learn how to build applications with graphql.
In this project, you will find how to implement important features and services such as:

### Backend

* Api Grapqhl(Apollo Server)
* Implementing Query and Mutation Resolvers
* Data modeling and persistency (Sequelize + MYSQL)
* Testing with Jest

### Frontend

* Component based SPA (React)
* Styled Components for styling
* React-Apollo for interfacing with Apollo Client
* Advanced animations with framer

## Demo

Demo available [here](https://comments-nujabes.herokuapp.com/). 

![Demo#1](https://i.imgur.com/UhstI2n.png)


## Setup
To start this application locally:

Make sure you have installed _Node_, _Yarn_ and _MYSQL_

### server
1. Change directory: `$ cd server`
2. Install the dependencies: `$ yarn install`
3. Create and migrate the development database: `$ yarn db:setup`
4. Run the seed: `$ yarn db:seed`
5. Start the web development server: `$ yarn dev`

### client
1. Change directory: `$ cd client`
2. Install the dependencies: `$ yarn install`
3. Start the web development server: `$ yarn start`
