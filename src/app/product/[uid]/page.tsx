import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

interface ProductParams {
  params: {
    uid: string;
  };
}

export default async function Product({ params: { uid } }: ProductParams) {
  const client = createClient();

  const { data } = await client.getByUID("product", uid);

  return <SliceZone slices={data.slices} components={components} />;
}

export async function generateStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("product");

  return pages.map((page) => ({
    uid: page.uid,
  }));
}
