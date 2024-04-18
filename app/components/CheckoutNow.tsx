"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToBag";

const CheckoutNow = ({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) => {
  const { checkoutSingleItem } = useShoppingCart();

  const buyNow = (priceId: string) => {
    checkoutSingleItem(priceId);
  };

  const product = {
    name,
    price,
    image: urlFor(image).url(),
    description,
    currency,
    price_id,
  };

  return (
    <Button variant={"secondary"} onClick={() => buyNow(product.price_id)}>
      Checkout Now
    </Button>
  );
};

export default CheckoutNow;
