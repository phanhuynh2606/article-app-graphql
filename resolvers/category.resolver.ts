import Article from "../model/article.model";
import Category from "../model/category.model";

export const resolversCategories = {
  Query: {
    getListCategory: async () => {
      const categories = await Category.find({
        deleted: false,
      });

      return categories;
    },

    getCategory: async (_, args) => {
      const { id } = args;
      const category = await Category.findOne({
        _id: id,
        deleted: false,
      });

      return category;
    },
  },

  Mutation: {
    createCategory: async (_, args) => {
      const { category } = args;

      const record = new Category(category);
      await record.save();

      return record;
    },

    updateCategory: async (_, args) => {
      const { id, category } = args;

      await Category.updateOne(
        {
          _id: id,
          deleted: false,
        },
        category
      );
      const record = await Category.findOne({
        _id: id,
        deleted: false,
      });

      return record;
    },

    deleteCategory: async (_, args) => {
      const { id } = args;

      await Category.updateOne (
        {
          _id: id,
          deleted: false,
        },
        {
          deleted: true,
          deletedAt: new Date(),
        }
      );

      return {
        code: "200",
        message: "Xoá thành công",
      };
    },
  },
};
