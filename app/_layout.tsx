import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "../global.css";
import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <GluestackUIProvider>
      <Stack />
    </GluestackUIProvider>
  );
};

export default RootLayout;
