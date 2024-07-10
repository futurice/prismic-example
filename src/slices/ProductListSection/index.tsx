import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProductList`.
 */
export type ProductListProps = SliceComponentProps<Content.ProductListSlice>;

/**
 * Component for "ProductList" Slices.
 */
const ProductList = ({ slice }: ProductListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.title && <h2>{slice.primary.title}</h2>}
    </section>
  );
};

export default ProductList;
