// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice = ProductListSlice | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type ProductDocumentDataSlicesSlice = ProductDetailsSlice | ProductListSlice;

/**
 * Content for Product documents
 */
interface ProductDocumentData {
  /**
   * Slice Zone field in *Product*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: product.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProductDocumentDataSlicesSlice> /**
   * Meta Title field in *Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: product.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: product.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Product*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Product document from Prismic
 *
 * - **API ID**: `product`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProductDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProductDocumentData>,
    "product",
    Lang
  >;

export type AllDocumentTypes = HomepageDocument | ProductDocument;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Title field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Body field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *ProductDetails → Default → Primary → Colour Options*
 */
export interface ProductDetailsSliceDefaultPrimaryColourOptionsItem {
  /**
   * colour field in *ProductDetails → Default → Primary → Colour Options*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_details.default.primary.colourOptions[].colour
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  colour: prismic.KeyTextField;
}

/**
 * Primary content in *ProductDetails → Default → Primary*
 */
export interface ProductDetailsSliceDefaultPrimary {
  /**
   * Image field in *ProductDetails → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product_details.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *ProductDetails → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_details.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Price field in *ProductDetails → Default → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: product_details.default.primary.price
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price: prismic.NumberField;

  /**
   * Colour Options field in *ProductDetails → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: product_details.default.primary.colourOptions[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  colourOptions: prismic.GroupField<
    Simplify<ProductDetailsSliceDefaultPrimaryColourOptionsItem>
  >;

  /**
   * description field in *ProductDetails → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_details.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for ProductDetails Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductDetailsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProductDetailsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProductDetails*
 */
type ProductDetailsSliceVariation = ProductDetailsSliceDefault;

/**
 * ProductDetails Shared Slice
 *
 * - **API ID**: `product_details`
 * - **Description**: ProductDetails
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductDetailsSlice = prismic.SharedSlice<
  "product_details",
  ProductDetailsSliceVariation
>;

/**
 * Item in *ProductListSection → Default → Primary → Products*
 */
export interface ProductListSliceDefaultPrimaryProductsItem {
  /**
   * product field in *ProductListSection → Default → Primary → Products*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: product_list.default.primary.products[].product
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  product: prismic.ContentRelationshipField<"product">;
}

/**
 * Primary content in *ProductListSection → Default → Primary*
 */
export interface ProductListSliceDefaultPrimary {
  /**
   * Title field in *ProductListSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_list.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *ProductListSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_list.default.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Products field in *ProductListSection → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: product_list.default.primary.products[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  products: prismic.GroupField<
    Simplify<ProductListSliceDefaultPrimaryProductsItem>
  >;
}

/**
 * Default variation for ProductListSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProductListSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProductListSection*
 */
type ProductListSliceVariation = ProductListSliceDefault;

/**
 * ProductListSection Shared Slice
 *
 * - **API ID**: `product_list`
 * - **Description**: ProductList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductListSlice = prismic.SharedSlice<
  "product_list",
  ProductListSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      ProductDocument,
      ProductDocumentData,
      ProductDocumentDataSlicesSlice,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ProductDetailsSlice,
      ProductDetailsSliceDefaultPrimaryColourOptionsItem,
      ProductDetailsSliceDefaultPrimary,
      ProductDetailsSliceVariation,
      ProductDetailsSliceDefault,
      ProductListSlice,
      ProductListSliceDefaultPrimaryProductsItem,
      ProductListSliceDefaultPrimary,
      ProductListSliceVariation,
      ProductListSliceDefault,
    };
  }
}
