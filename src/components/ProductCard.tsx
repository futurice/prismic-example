import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

interface ProductCardProps {
  image: ImageField<never>;
  title: string;
  price: number | null;
  uid: string;
}

const ProductCard = ({ image, title, price, uid }: ProductCardProps) => {
  return (
    <li className="max-w-72 p-10 shadow-lg hover:scale-105 transition-transform">
      <Link href={`/product/${uid}`}>
        <PrismicNextImage
          // className="w-96 h-96 object-cover m-auto"
          field={image}
        />
        <p className="my-4">{title}</p>
        {price && <p className="text-right">£{price}</p>}
        {/* {JSON.stringify(image)} */}
      </Link>
    </li>
  );
};

export default ProductCard;
