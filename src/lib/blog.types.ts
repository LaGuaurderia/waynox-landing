export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  author: string;
  tags: string[]; // ej: ["IA", "Formación", "Herramientas"]
  category: "IA" | "Formación" | "Herramientas" | "Negocio" | "Automatización";
  coverImage: string; // ruta /blog/xxx.jpg
  readingTime?: string;
}

export type BlogPost = BlogPostMeta & {
  content: string;
  compiledContent?: any; // MDX compiled
}

export type BlogFilters = {
  search: string;
  category: string;
  tags: string[];
  page: number;
}

export type BlogCategory = {
  id: string;
  name: string;
  description: string;
  color: string;
}
