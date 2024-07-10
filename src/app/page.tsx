import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Home() {
  const client = createClient();

  const { data } = await client.getSingle("homepage");

  return (
    <main>
      <SliceZone slices={data.slices} components={components} />
    </main>
  );
}
