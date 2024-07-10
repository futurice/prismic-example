import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProductDetails`.
 */
export type ProductDetailsProps =
  SliceComponentProps<Content.ProductDetailsSlice>;

/**
 * Component for "ProductDetails" Slices.
 */
const ProductDetails = ({ slice }: ProductDetailsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage field={slice.primary.image} />
      <h1>{slice.primary.title}</h1>
      <p>{slice.primary.price}</p>
      <p>colour options:</p>
      <ul>
        {slice.primary.colourOptions.map((item) => (
          <li key={item.colour}>{item.colour}</li>
        ))}
      </ul>
      <PrismicRichText field={slice.primary.description} />
    </section>
  );
};

export default ProductDetails;
