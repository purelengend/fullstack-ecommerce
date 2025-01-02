import React from "react";
import { Text } from "react-native";
import { Product } from "../types";

const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <Text className="text-pink-800" style={{ fontSize: 30 }}>
      {product.name}
    </Text>
  );
};

export default ProductListItem;
