"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const article_resolver_1 = require("./article.resolver");
const category_resolver_1 = require("./category.resolver");
const user_resolver_1 = require("./user.resolver");
exports.resolvers = [article_resolver_1.resolversArticles, category_resolver_1.resolversCategories, user_resolver_1.resolversUser];
