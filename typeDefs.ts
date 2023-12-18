import { gql } from "apollo-server-express";

//Định nghĩa trường dữ liệu cho phép người ta lấy ra
export const typeDefs = gql`
  type Article {
    id: ID
    title: String
    avatar: String
    description: String
    category: Category
  }
  type Category {
    id: ID
    title: String
    avatar: String
  }
  # Cho phép truy vấn ra data
  type Query {
    hello: String
    getListArticle: [Article]
    getArticle(id: ID): Article
    getListCategory: [Category]
    getCategory(id: ID): Category
  }

  # Cho phép gửi data để thêm sửa xoá data
  input ArticleInput {
    title: String
    avatar: String
    description: String
  }
  input CategoryInput {
    title: String
    avatar: String
  }
  type Return {
    code: String
    message: String
  }
  type Mutation {
    createArticle(article: ArticleInput): Article
    updateArticle(id: ID, article: ArticleInput): Article
    deleteArticle(id: ID): Return

    createCategory(category: CategoryInput): Category
    updateCategory(id: ID, category: CategoryInput): Category
    deleteCategory(id: ID): Return
  }
`;
