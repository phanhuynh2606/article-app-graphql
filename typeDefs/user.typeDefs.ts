import { gql } from "apollo-server-express";

//Định nghĩa trường dữ liệu cho phép người ta lấy ra
export const typeDefsUser = gql`
  type User {
    id: ID
    fullName: String
    email: String
    token: String
    code: Int
    message: String
  }

  # Cho phép truy vấn ra data
  type Query {
    getUser(id: ID): User
  }

  # Định nghĩa những key cho phép người nhập để gửi lên

  input RegisterUserInput {
    fullName: String
    email: String
    password: String
  }
  input LoginUserInput {
    email: String
    password: String
  }

  # Cho phép gửi data để thêm sửa xoá data
  type Mutation {
    registerUser(user: RegisterUserInput): User
    loginUser(user: LoginUserInput): User
  }
`;
