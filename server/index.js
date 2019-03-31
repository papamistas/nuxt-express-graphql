const { Nuxt, Builder } = require('nuxt')
import faker from "faker";
import lodash from "lodash";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "./models";
import passport from 'passport'
const { ApolloServer, gql } = require('apollo-server-express')

const express = require('express')
const consola = require('consola')

const app = express()

// Import and Set Nuxt.js options



const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const bcrypt = require("bcrypt");

const myroutes = require("./routes");
//,senha:bcrypt(password)
//bcrypt.compare(passwoed,user.senha)

const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
});
server.applyMiddleware({ app })
//app.use(myroutes.handler)
// app.use(express.static("app/dist"));
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json());

app.use(
  cookieSession({
    name: "mysession",
    keys: ["vueauthrandomkey"],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
);
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
  })
);

function checkAuth(req, res, next) {
  if (!req.session.passport) {
    res.send('You are not authorized to view this page')
  } else {
    next();
  }
}


async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host,() =>
    myroutes.handler(app,checkAuth))
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
