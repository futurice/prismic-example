import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

interface ProductParams {
  params: {
    slug: string;
  };
}

export default async function Product({ params: { slug } }: ProductParams) {
  const client = createClient();

  const { data } = await client.getByUID("product", slug);

  return (
    <main>
      <SliceZone slices={data.slices} components={components} />
    </main>
  );
}
