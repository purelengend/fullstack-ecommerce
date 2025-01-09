import { ActivityIndicator, FlatList, Text } from "react-native";
import ProductListItem from "@/components/ProductListItem";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
import { useQuery } from "@tanstack/react-query";
import { listProduct } from "@/api/product";
export default function HomeScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: listProduct,
  });

  const numColumns = useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 4,
  });

  if (isLoading) return <ActivityIndicator />;

  if (error) return <Text>Error when fetching product</Text>;

  return (
    <FlatList
      key={numColumns}
      horizontal={false}
      numColumns={numColumns}
      contentContainerClassName="gap-2"
      columnWrapperClassName="gap-2 px-3 max-w-[960px] w-full mx-auto items-center"
      data={data}
      renderItem={({ item }) => (
        <ProductListItem className="flex-1" product={item} />
      )}
    />
  );
}
