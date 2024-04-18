export default {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of the product",
    },
    {
      name: "images",
      type: "array",
      title: "Product Images",
      of: [{ type: "image" }],
    },
    {
      name: "description",
      type: "text",
      title: "Description of the product",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug of the product",
      options: {
        source: "name",
      },
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "price_id",
      title: "Strip Price ID",
      type: "string",
    },
    {
      name: "category",
      type: "reference",
      title: "Category",
      to: [{ type: "category" }],
    },
  ],
};
