import React from "react";
import { Product } from "@/types";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { Pressable } from "react-native";

const ProductListItem = ({
  product: { id, image, name, description, price },
  className,
}: {
  product: Product;
  className?: string;
}) => {
  return (
    <Link href={`/product/${id}`} asChild>
      <Pressable className={`rounded-lg ${className}`}>
        <Card>
          <Image
            size="2xl"
            source={{
              uri: image,
            }}
            className="mb-6 w-full rounded-md"
            alt={`${name} image`}
            resizeMode="contain"
          />
          <Text
            numberOfLines={1}
            className="text-sm font-normal mb-2 text-typography-700"
          >
            {name}
          </Text>

          <Heading size="md" className="mb-4">
            ${price}
          </Heading>
        </Card>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;
