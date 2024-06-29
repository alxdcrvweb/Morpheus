import { useConnectModal } from "@rainbow-me/rainbowkit";
import "../../../styles/connect.scss";

export const Button = () => {
  const { openConnectModal } = useConnectModal();
  return (
    <button
      onClick={() => {
        openConnectModal && openConnectModal();
      }}
      className="card_wallet_connect"
      type="button"
    >
      Connect wallet
    </button>
  );
};
