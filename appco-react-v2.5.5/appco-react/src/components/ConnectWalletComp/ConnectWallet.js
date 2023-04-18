import React, { useEffect, useState } from "react";
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {getDefaultWallets,RainbowKitProvider,} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import './ConnectWallet.css'

const { chains, provider } = configureChains(
    [mainnet, polygon, optimism, arbitrum],
    [
      alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
  });
  
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  })
  

const ConnectWallet = () => {
  return (
    <div>
         <WagmiConfig client={wagmiClient}>
                        <RainbowKitProvider chains={chains} >
                          {/* <ConnectButton/> */}
                          <ConnectButton.Custom>
                          {({ account,chain,openAccountModal,openChainModal,openConnectModal,authenticationStatus,mounted,}) => 
                          {
                            const ready = mounted && authenticationStatus !== 'loading';
                            const connected =ready && account && chain && (!authenticationStatus ||authenticationStatus === 'authenticated');

                            return (
                              <div {...(!ready && {'aria-hidden': true,'style': {opacity: 0,pointerEvents: 'none',userSelect: 'none',},})}>
                                {(() => {
                                  if (!connected) {
                                    return (
                                      <button onClick={openConnectModal} type="button" className="btn btn-primary cnctWltBtnClass">Connect Wallet</button>
                                    );
                                  }

                                  if (chain.unsupported) {
                                    return (
                                      <button onClick={openChainModal} type="button" className="btn btn-primary cnctWltBtnClass">Wrong network</button>
                                    );
                                  }

                                  return (
                                    <div style={{ display: 'flex', gap: 12 }}>
                                      {/* <button
                                        onClick={openChainModal}
                                        style={{ display: 'flex', alignItems: 'center' }}
                                        type="button"
                                        className="btn btn-primary cnctWltBtnClass"
                                      >
                                        {chain.hasIcon && (
                                          <div
                                            style={{
                                              background: chain.iconBackground,
                                              width: 12,
                                              height: 12,
                                              borderRadius: 999,
                                              overflow: 'hidden',
                                              marginRight: 4,
                                            }}
                                          >
                                            {chain.iconUrl && (
                                              <img
                                                alt={chain.name ?? 'Chain icon'}
                                                src={chain.iconUrl}
                                                style={{ width: 12, height: 12 }}
                                              />
                                            )}
                                          </div>
                                        )}
                                        {chain.name}
                                      </button> */}

                                      <button onClick={openAccountModal} type="button" className="btn btn-primary cnctWltBtnClass">
                                        {account.displayName}{account.displayBalance? ` (${account.displayBalance})`: ''}
                                      </button>
                                    </div>
                                  );
                                })()}
                              </div>
                            );
                          }}
                          </ConnectButton.Custom>
                        </RainbowKitProvider>
                        </WagmiConfig>
    </div>
  )
}

export default ConnectWallet