import React from "react";
import styled from "styled-components";
import { useWallet, UseWalletProvider } from "use-wallet";

const ButtonStyled = styled.button`
  background: #faad5e;
  border-radius: 30px;
  border-width: 0px 0px 2px !important;
  border: solid #344161;
  height: 2.5rem;
  color: #344161;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
`;

function MetamaskTwo() {
  const wallet = useWallet();
  const blockNumber = wallet.getBlockNumber();

  return (
    <>
      <ButtonStyled onClick={() => wallet.connect()}>Swap now</ButtonStyled>
    </>
  );
}

export default () => (
  <UseWalletProvider chainId={1}>
    <MetamaskTwo />
  </UseWalletProvider>
);
