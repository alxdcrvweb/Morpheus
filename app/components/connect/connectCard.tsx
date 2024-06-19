import * as React from "react";
import '../../../styles/connect.scss'
function ConnectCard() {
  // const { openConnectModal } = useConnectModal();
  return (
    <>
      <div className="card">
        <img loading="lazy" src="/connect/portal.png" className="card_image" />
        <div className="card_content">
          <img
            loading="lazy"
            src="/logo.svg"
            className="card_logo"
          />
          <div className="card_title">Morpheus Portal</div>
          <div className="card_subtitle">Log into your account to start Journey</div>
          <div className="card_wallet">
            <img
              loading="lazy"
              src="/connect/wallet.svg"
              className="wallet_icon"
            />
            <div className="card_connect">Connect wallet</div>
          </div>
          <div className="card_separator">or</div>
          <div className="card_farcaster">
            <img
              loading="lazy"
              src="/connect/frcaster.svg"
              className="farcaster_icon"
            />
            <div className="card_connect">Connect Farcaster</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectCard;
