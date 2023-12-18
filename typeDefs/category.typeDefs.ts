import { gql } from "apollo-server-express";

//Định nghĩa trường dữ liệu cho phép người ta lấy ra
export const typeDefsCategory = gql`

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
