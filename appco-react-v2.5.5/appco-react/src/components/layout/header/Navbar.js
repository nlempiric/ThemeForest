import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {getDefaultWallets,RainbowKitProvider,} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import ConnectWallet from "../../ConnectWalletComp/ConnectWallet";


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

const Navbar = ({ darkBg, classOption }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector(".header");
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <>
      <header className={`header ${classOption}`}>
        <nav
          className={`navbar navbar-expand-lg fixed-top ${darkBg ? "bg-transparent" : "custom-nav white-bg"
            } ${scroll > headerTop ? "affix" : "affix"}`}
        >
          <div className="container">
            <Link to="/" className="navbar-brand">
              {darkBg ? (
                <img
                  src="assets/img/logo-white-1x.png"
                  width="120"
                  alt="logo"
                  className="img-fluid"
                />
              ) : (
                <img
                  src="assets/img/logo-color-1x.png"
                  width="120"
                  alt="logo"
                  className="img-fluid"
                />
              )}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="ti-menu"></span>
            </button>
            <div
              className="collapse navbar-collapse main-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item dropdown">
                  <Link
                    to="/"
                    className="nav-link  dropdown-toggle"
                    href="#"
                    id="navbarDropdownHome"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home
                  </Link>
                  <div
                    className="dropdown-menu submenu"
                    aria-labelledby="navbarDropdownHome"
                  >
                    <Link to="/" className="dropdown-item">
                      Demo Template 1
                    </Link>
                    <Link to="/home-two" className="dropdown-item">
                      Demo Template 2
                    </Link>
                    <Link to="/home-three" className="dropdown-item">
                      Demo Template 3
                    </Link>
                    <Link to="/home-four" className="dropdown-item">
                      Demo Template 4
                    </Link>
                    <Link to="/home-five" className="dropdown-item">
                      Demo Template 5
                    </Link>
                    <Link to="/home-six" className="dropdown-item">
                      Demo Template 6
                    </Link>
                    <Link to="/home-seven" className="dropdown-item">
                      Demo Template 7
                    </Link>
                    <Link to="/home-eight" className="dropdown-item">
                      Demo Template 8
                      <span className="badge badge-warning">New</span>
                    </Link>
                  </div>
                </li> */}
                {/* <li className="nav-item">
                  <HashLink className="nav-link" smooth to='#about'>
                    About
                  </HashLink>
                </li> */}
                {/* <li className="nav-item">
                  <HashLink className="nav-link" smooth to="#features">
                    Features
                  </HashLink>
                </li> */}
                {/* <li className="nav-item">
                  <HashLink className="nav-link" smooth to="#pricing">
                    Pricing
                  </HashLink>
                </li> */}
                {/* <li className="nav-item">
                  <HashLink className="nav-link" smooth to='#screenshots'>
                    Screenshots
                  </HashLink>
                </li> */}
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link  dropdown-toggle"
                    href="#/"
                    id="navbarDropdownPage"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <div
                    className="dropdown-menu submenu"
                    aria-labelledby="navbarDropdownPage"
                  >
                    <Link className="dropdown-item" to="/login">
                      Login Page 1
                    </Link>
                    <Link className="dropdown-item" to="/login-two">
                      Login Page 2
                    </Link>
                    <Link className="dropdown-item" to="/basic-signup">
                      Signup Page 1
                    </Link>
                    <Link className="dropdown-item" to="/signup-two">
                      Signup Page 2
                    </Link>
                    <Link className="dropdown-item" to="/reset-password">
                      Password Reset
                    </Link>
                    <Link className="dropdown-item" to="/change-password">
                      Change Password
                    </Link>
                    <Link className="dropdown-item" to="/download">
                      Download Page
                    </Link>
                    <Link className="dropdown-item" to="/review">
                      Review Page
                    </Link>
                    <Link className="dropdown-item" to="/faq">
                      FAQ Page
                    </Link>
                    <Link to="*" className="dropdown-item">
                      404 Page
                    </Link>
                    <Link className="dropdown-item" to="/coming-soon">
                      Coming Soon
                    </Link>
                    <Link className="dropdown-item" to="/thank-you">
                      Thank You
                    </Link>
                    <Link className="dropdown-item" to="/our-team">
                      Team Page
                      <span className="badge badge-danger badge-pill ml-2">
                        New
                      </span>
                    </Link>
                    <Link className="dropdown-item" to="/team-details">
                      Team Single
                      <span className="badge badge-danger badge-pill ml-2">
                        New
                      </span>
                    </Link>
                  </div>
                </li> */}
                {/* <li className="nav-item dropdown">
                  <Link
                    className="nav-link  dropdown-toggle"
                    to="/"
                    id="navbarBlogPage"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                    <span className="custom-nav-badge badge badge-danger badge-pill">
                      New
                    </span>
                  </Link>

                  <div
                    className="dropdown-menu submenu"
                    aria-labelledby="navbarBlogPage"
                  >
                    <Link className="dropdown-item" to="/blog-grid">
                      Blog Grid
                    </Link>
                    <Link className="dropdown-item" to="/blog-sidebar">
                      Blog Left Sidebar
                    </Link>
                    <Link className="dropdown-item" to="/blog-details">
                      Details Right Sidebar
                    </Link>
                  </div>
                </li> */}
                <li className="nav-item">
                  <Link to="/user" className="nav-link" >
                    User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/article" className="nav-link">
                    Article
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" >
                    <div style={{marginTop:'-10px'}}>
                      {/* <WagmiConfig client={wagmiClient}>
                        <RainbowKitProvider chains={chains} >
                          {/* <ConnectButton/> */}
                          {/* <ConnectButton.Custom>
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
                                    <div style={{ display: 'flex', gap: 12 }}> */}
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
{/* 
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
                        </WagmiConfig> */} 
                        <ConnectWallet/>
                    </div>
                  
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
