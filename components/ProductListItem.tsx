import React from "react";
import { Text } from "react-native";
import { Product } from "../types";

const ProductListItem = ({ product }: { product: Product }) => {
  return <Text style={{ fontSize: 30 }}>{product.name}</Text>;
};

export default ProductListItem;
