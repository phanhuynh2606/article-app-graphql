import express, { Express, Request, Response } from "express";
import * as database from "./config/database";
import dotenv from "dotenv";
import Article from "./model/article.model";
import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
//GraphQL
const startServer = async () => {

  
dotenv.config();

database.connect();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app: app,
    path: "/graphql",
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
};

startServer();

//Rest API
// app.get("/articles", async(req:Request , res : Response) =>{
//     const articles = await Article.find({
//         deleted: false
//     });
//     res.json({
//         articles : articles
//     });
// });


