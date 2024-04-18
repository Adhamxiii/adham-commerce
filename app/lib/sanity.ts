import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ummcmbl9",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);