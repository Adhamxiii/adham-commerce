"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIP_KEY as string}
      currency="USD"
      successUrl={`https://adham-commerce.vercel.app/stripe/success`}
      cancelUrl={`https://adham-commerce.vercel.app/stripe/error`}
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
};

export default CartProvider;
