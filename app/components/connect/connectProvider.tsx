import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React from "react";
import { AuthKitProvider } from "@farcaster/auth-kit";

export default function ConnectProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  const config = getDefaultConfig({
    appName: "Morpheus App",
    projectId: "8271a5dee2c5981640ad5d12b20132af",
    chains: [base],
    ssr: true,
  });
  const authConfig = {
    rpcUrl: "https://mainnet.optimism.io",
  };
  return (
    <AuthKitProvider config={authConfig}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>{children}</RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </AuthKitProvider>
  );
}
