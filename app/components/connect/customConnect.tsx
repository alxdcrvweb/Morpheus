"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";
import { Button } from "./connectButton";
import { useAccount } from "wagmi";
import { useConnect } from "@/store/useConnect";
import { useRouter, usePathname } from "next/navigation";
import "@/styles/connect.scss";

const CustomConnect = () => {
  const { address, setProvider} = useConnect();
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (pathname.includes("connect") && address) {
      router.push("/");
    }
  }, [address, pathname]);

  return (
    <ConnectButton.Custom>
      {({ account, chain, openChainModal, authenticationStatus, mounted }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { connector } = useAccount();
        const ready = mounted && authenticationStatus !== "loading";
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          if (connector) {
            getProvider();
          }
        }, [connector]);
        const getProvider = async () => {
          try {
            console.log(account.ensName)
            if (!address && connector && account) {
              const res = await connector.getProvider();
              console.log(res);
              setProvider({ address: account.address, ens:account.ensName, provider: res });
            }
          } catch (e) {
            console.log(e);
          }
        };

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (chain?.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="card_wallet_connect"
                  >
                    Change Network
                  </button>
                );
              }

              return <Button />;
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default CustomConnect;
