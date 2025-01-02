import React from "react";
import { Product } from "@/types";
import { Card } from "@/components/ui/card";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
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
      <Pressable className={`w-[48%] h-[520px] rounded-lg ${className}`}>
        <Card className="p-5">
          <Image
            size="2xl"
            source={{
              uri: image,
            }}
            className="mb-6 w-full rounded-md"
            alt={`${name} image`}
            resizeMode="contain"
          />
          <Text className="text-sm font-normal mb-2 text-typography-700">
            {name}
          </Text>
          <VStack className="mb-6">
            <Heading size="md" className="mb-4">
              ${price}
            </Heading>
            <Text size="sm">{description}</Text>
          </VStack>
          <Box className="flex-col sm:flex-row">
            <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
              <ButtonText size="sm">Add to cart</ButtonText>
            </Button>
            <Button
              variant="outline"
              className="px-4 py-2 border-outline-300 sm:flex-1"
            >
              <ButtonText size="sm" className="text-typography-600">
                Wishlist
              </ButtonText>
            </Button>
          </Box>
        </Card>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;
