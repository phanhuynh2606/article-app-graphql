import { gql } from "apollo-server-express";

//Định nghĩa trường dữ liệu cho phép người ta lấy ra
export const typeDefs = gql`
  type Article {
    id: ID
    title: String
    avatar: String
    description: String
  }

  type Query {
    hello: String
    getListArticle: [Article]
    getArticle(id: ID): Article
  }
`;
