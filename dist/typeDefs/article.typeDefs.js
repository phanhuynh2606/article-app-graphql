"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefsArticle = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefsArticle = (0, apollo_server_express_1.gql) `
  type Article {
    id: ID
    title: String
    avatar: String
    description: String
    category: Category
  }

  # Cho phép truy vấn ra data
  type Query {
    getListArticle(
      sortKey: String
      sortValue: String
      currentPage: Int = 1
      limitItems: Int = 2
      filterKey: String
      filterValue: String
      keyword: String
    ): [Article]
    getArticle(id: ID): Article
  }

  # Định nghĩa những key cho phép người nhập để gửi lên

  input ArticleInput {
    title: String
    avatar: String
    description: String
    categoryId: String
  }

  type ReturnDelete {
    code: Int
    message: String
  }

  # Cho phép gửi data để thêm sửa xoá data
  type Mutation {
    createArticle(article: ArticleInput): Article
    updateArticle(id: ID, article: ArticleInput): Article
    deleteArticle(id: ID): ReturnDelete
  }
`;