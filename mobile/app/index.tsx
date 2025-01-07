import { FlatList } from "react-native";
import products from "@/assets/products.json";
import ProductListItem from "@/components/ProductListItem";
export default function HomeScreen() {
  return (
    <FlatList
      horizontal={false}
      numColumns={2}
      contentContainerClassName="gap-2"
      columnWrapperClassName="gap-2"
      data={products}
      renderItem={({ item }) => (
        <ProductListItem className="flex-[1/2]" product={item} />
      )}
    />
  );
}
