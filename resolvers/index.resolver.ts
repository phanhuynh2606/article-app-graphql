import { resolversArticles } from "./article.resolver";
import { resolversCategories } from "./category.resolver";
import { resolversUser } from "./user.resolver";

export const resolvers = [resolversArticles,resolversCategories,resolversUser];