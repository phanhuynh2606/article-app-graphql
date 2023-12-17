import { gql } from "apollo-server-express";

//Định nghĩa trường dữ liệu cho phép người ta lấy ra
export const typeDefs = gql`
  type Article {
    id: ID
    title: String
    avatar: String
    description: String
  }
  # Cho phép truy vấn ra data
  type Query {
    hello: String
    getListArticle: [Article]
    getArticle(id: ID): Article
  }

  # Cho phép gửi data để thêm sửa xoá data
  input ArticleInput {
    title: String
    avatar: String
    description: String
  }
  type Return {
    code: String
    message: String
  }
  type Mutation {
    createArticle(article: ArticleInput): Article
    updateArticle(id: ID, article: ArticleInput): Article
    deleteArticle(id: ID): Return
  }
`;
