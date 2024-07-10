import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="p-10 flex gap-10 justify-center"
    >
      <div className="w-[600px]">
        <PrismicNextImage
          className="w-96 h-96 object-cover m-auto"
          field={slice.primary.image}
        />
      </div>
      <div className="flex flex-col justify-center w-[600px]">
        <h1 className="text-6xl">{slice.primary.title}</h1>
        <PrismicRichText field={slice.primary.body} />
      </div>
    </section>
  );
};

export default Hero;
