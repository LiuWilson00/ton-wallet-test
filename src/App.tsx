import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import WebApp from "@twa-dev/sdk";
import { MainButton } from "@twa-dev/sdk/react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Header from "./components/Header";
import Address from "./components/Address";
import Wallet from "./components/Wallet";
import Settings from "./components/Settings";
import InitData from "./components/InitData";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <TonConnectUIProvider
      manifestUrl="https://liuwilson00.github.io/ton-wallet-test/tonconnect-manifest.json"
      actionsConfiguration={{
        twaReturnUrl: "https://t.me/roytest_bot/tonWalletTest",
      }}
    >
      <InitData></InitData>
      <Header></Header>
      <Address></Address>
      <Wallet></Wallet>
      <Settings></Settings>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="card">
        <button
          onClick={() =>
            WebApp.showAlert(`Hello World! Current count is ${count}`)
          }
        >
          Alert
        </button>
      </div>
      <MainButton text="Submit" onClick={() => alert("submitted")} />
    </TonConnectUIProvider>
  );
}

export default App;
