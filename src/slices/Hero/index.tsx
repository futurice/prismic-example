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
      className="px-10"
    >
      <div className="py-10 max-w-[1200px] mx-auto flex flex-col items-center justify-center md:flex-row gap-10">
        <PrismicNextImage
          className="max-h-96 object-cover m-auto"
          field={slice.primary.image}
        />
        <div className="flex flex-col justify-center max-w-[600px]">
          <h1 className="text-6xl">{slice.primary.title}</h1>
          <PrismicRichText field={slice.primary.body} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
