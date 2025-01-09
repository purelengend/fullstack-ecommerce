import { Text } from "@/components/ui/text";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "@/api/product";
import { ActivityIndicator } from "react-native";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProduct(Number(id)),
  });

  if (isLoading) return <ActivityIndicator />;

  if (error) return <Text>Product not found</Text>;

  const { image, name, description, price } = product || {};
  return (
    <SafeAreaView className="p-3">
      <Stack.Screen options={{ title: product.name }} />
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
        <Text
          numberOfLines={1}
          className="text-sm font-normal mb-2 text-typography-700"
        >
          {name}
        </Text>
        <VStack className="mb-6">
          <Heading size="md" className="mb-4">
            ${price}
          </Heading>
          <Text className="h-10" size="sm" numberOfLines={2}>
            {description}
          </Text>
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
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;
