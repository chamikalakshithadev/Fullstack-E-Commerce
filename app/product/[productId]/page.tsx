import React from "react";
interface Iparams {
  productId?: string;
}

const Product = ({ params }: { params: Iparams }) => {
  console.log("params", params);

  return <div>Product Page</div>;
};

export default Product;
