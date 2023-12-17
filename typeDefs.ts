import { gql } from "apollo-server-express";

//Định nghĩa trường dữ liệu cho phép người ta lấy ra
export const typeDefs = gql`
  type Query {
    hello: String
  }
`;
