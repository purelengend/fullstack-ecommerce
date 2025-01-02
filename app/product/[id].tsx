import { Text } from "@/components/ui/text";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return <Text>Product details: {id}</Text>;
};

export default ProductDetailsScreen;
