import { FlatList } from "react-native";
import products from "@/assets/products.json";
import ProductListItem from "@/components/ProductListItem";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
export default function HomeScreen() {
  const numColumns = useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 4,
  });
  return (
    <FlatList
      key={numColumns}
      horizontal={false}
      numColumns={numColumns}
      contentContainerClassName="gap-2"
      columnWrapperClassName="gap-2 px-3 max-w-[960px] w-full mx-auto items-center"
      data={products}
      renderItem={({ item }) => (
        <ProductListItem className="flex-1" product={item} />
      )}
    />
  );
}
