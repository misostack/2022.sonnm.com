// https://developers.google.com/search/docs/advanced/robots/robots_meta_tag?hl=vi#multiple-meta-tags
// https://ogp.me/
// https://schema.org/Article
// export const OG_TYPES = ["website", "article"] as const;
// export type OGType = typeof OG_TYPES[number];
export interface SeoMetaModel {
  // meta
  title: string;
  metaKeywords: string[];
  metaDescription: string;
  metaRobots: string[];
}
