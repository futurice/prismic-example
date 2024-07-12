import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { ProductDocument, Simplify } from "../../../prismicio-types";
import ProductCard from "@/components/ProductCard";

/**
 * Props for `ProductList`.
 */
export type ProductListProps = SliceComponentProps<Content.ProductListSlice>;

/**
 * Component for "ProductList" Slices.
 */
const ProductList = async ({ slice }: ProductListProps) => {
  const client = createClient();

  const productUids = slice.primary.products.map((item) =>
    isFilled.contentRelationship(item.product)
      ? (item.product.uid as string)
      : ""
  );

  const products = await client
    .getByUIDs<ProductDocument>("product", productUids, {
      graphQuery: `{
        product {
          slices {
            ... on product_details {
              variation {
                ... on default {
                  primary {
                    title
                    price
                    image
                  }
                }
              }
            }
          }
        }
      }`,
    })
    .catch(() => {
      return { results: [] };
    });

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`px-10 pb-32 pt-10 ${slice.variation === "highlighted" && "bg-gray-100"}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl">{slice.primary.title}</h2>
        {slice.variation === "highlighted" && slice.primary.subtitle && (
          <p className="text-2xl my-2">{slice.primary.subtitle}</p>
        )}
        <ul className="flex gap-10 mt-10 flex-wrap">
          {products.results.map((product) => {
            const cardDetails = product.data.slices.find(
              (slice) => slice.slice_type === "product_details"
            )?.primary as Simplify<Content.ProductDetailsSliceDefaultPrimary>;
            return (
              <ProductCard
                key={product.uid}
                uid={product.uid}
                title={cardDetails?.title as string}
                price={cardDetails?.price}
                image={cardDetails?.image}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ProductList;
