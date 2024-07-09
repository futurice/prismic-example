import { createClient } from "@/prismicio";
import Image from "next/image";

export default async function Home() {
  const client = createClient();

  const { data } = await client.getSingle("homepage");

  return (
    <main>
      {data.slices.map((slice) => {
        switch (slice.slice_type) {
          case "hero":
            return slice.primary.image.url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="w-full"
                src={slice.primary.image.url}
                alt={slice.primary.image.alt || ""}
              />
            ) : null;
          case "product_list":
            return <p>product list goes here</p>;
          default:
            return null;
        }
      })}
      <h1>{data.title}</h1>
    </main>
  );
}
