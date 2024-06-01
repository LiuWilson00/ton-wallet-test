import { useState, useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import { WebAppInitData } from "@twa-dev/types";
const InitData = () => {
  const [initData, setInitData] = useState<string>();
  const [unsafeInitData, setUnsafeInitData] = useState<WebAppInitData>();
  useEffect(() => {
    setInitData(WebApp.initData);
    setUnsafeInitData(WebApp.initDataUnsafe);
  }, []);

  return (
    <div>
      <h1>Init Data</h1>
      <p>{initData}</p>

      <h2>Unsafe Init Data</h2>
      <pre>{JSON.stringify(unsafeInitData, null, 2)}</pre>
    </div>
  );
};

export default InitData;
