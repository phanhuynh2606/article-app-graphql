import { skip } from "node:test";
import Article from "../model/article.model";
import Category from "../model/category.model";

export const resolversArticles = {
  Query: {
    getListArticle: async (_, args) => {
      const {
        sortKey,
        sortValue,
        currentPage,
        limitItems,
        filterKey,
        filterValue,
        keyword,
      } = args;

      const find = {
        deleted: false,
      };
      //   Sort
      const sort = {};
      if (sortKey && sortValue) {
        sort[sortKey] = sortValue;
      }
      // End Sort

      //   pagination
      const skip = (currentPage - 1) * limitItems;
      //   pagination

      //   filter
      if (filterKey && filterValue) {
        find[filterKey] = filterValue;
      }
      // End filter

      //search
      const keywordRegex = new RegExp(keyword, "i");
      find["title"] = keywordRegex;
      // End search
      const articles = await Article.find(find)
        .sort(sort)
        .limit(limitItems)
        .skip(skip);

      return articles;
    },

    getArticle: async (_, args) => {
      const { id } = args;
      const article = await Article.findOne({
        _id: id,
        deleted: false,
      });

      return article;
    },
  },

  Article: {
    category: async (article) => {
      const categoryId = article.categoryId;
      const category = await Category.findOne({
        _id: categoryId,
        deleted: false,
      });

      return category;
    },
  },

  Mutation: {
    createArticle: async (_, args) => {
      const { article } = args;

      const record = new Article(article);
      await record.save();

      return record;
    },

    updateArticle: async (_, args) => {
      const { id, article } = args;

      await Article.updateOne(
        {
          _id: id,
          deleted: false,
        },
        article
      );
      const record = await Article.findOne({
        _id: id,
        deleted: false,
      });

      return record;
    },

    deleteArticle: async (_, args) => {
      const { id } = args;

      await Article.updateOne(
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
        code: 200,
        message: "Xoá thành công",
      };
    },
  },
};
