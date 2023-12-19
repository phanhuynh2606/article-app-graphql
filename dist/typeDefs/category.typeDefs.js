"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefsCategory = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefsCategory = (0, apollo_server_express_1.gql) `

  type Category {
    id: ID
    title: String
    avatar: String
  }
  # Cho phép truy vấn ra data
  type Query {
    
    getListCategory: [Category]
    getCategory(id: ID): Category
  }

  # Định nghĩa những key cho phép người nhập để gửi lên
  input CategoryInput {
    title: String
    avatar: String
  }
  type Return {
    code: String
    message: String
  }
  # Cho phép gửi data để thêm sửa xoá data
  type Mutation {
    createCategory(category: CategoryInput): Category
    updateCategory(id: ID, category: CategoryInput): Category
    deleteCategory(id: ID): Return
  }
`;
