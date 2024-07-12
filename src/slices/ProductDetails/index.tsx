import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

export type ProductDetailsProps =
  SliceComponentProps<Content.ProductDetailsSlice>;

const components: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className="text-lg my-4 [&>.center-align]:block [&>.center-align]:text-center [&>.center-align]:italic [&>.right-align]:block [&>.right-align]:text-right">
      {children}
    </p>
  ),
  strong: ({ children }) => <strong className="font-bold">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  list: ({ children }) => <ul className="list-disc pl-6 my-4">{children}</ul>,
  listItem: ({ children }) => <li className="text-lg">{children}</li>,
  oList: ({ children }) => (
    <ol className="list-decimal pl-6 my-4">{children}</ol>
  ),
  oListItem: ({ children }) => <li className="text-lg">{children}</li>,
};

const ProductDetails = ({ slice }: ProductDetailsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="p-10"
    >
      <div className="flex gap-10 items-start max-w-[1200px] mx-auto">
        <div className="flex-1">
          <PrismicNextImage
            field={slice.primary.image}
            className="w-96 object-contain mx-auto"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-6xl">{slice.primary.title}</h1>
          <p className="text-4xl my-4">£{slice.primary.price}</p>
          <div className="flex items-center my-4">
            <p>colour options:</p>
            <ul className="flex px-1 gap-2">
              {slice.primary.colourOptions.map((item) => (
                <li
                  key={item.colour}
                  className="bg-slate-200 py-1 px-2 rounded-md hover:bg-slate-300"
                >
                  {item.colour}
                </li>
              ))}
            </ul>
          </div>
          <h2 className="my-4">Description:</h2>
          <PrismicRichText
            field={slice.primary.description}
            components={components}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
