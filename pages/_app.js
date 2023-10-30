import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
// import { artheraTestnet } from "@thirdweb-dev/chains";
// import { useChain } from "@thirdweb-dev/react";
import { ArtheraTestnet } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
const activeChain = ArtheraTestnet;
console.log("activeChain:", activeChain)

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
