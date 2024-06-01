import { useTonAddress } from "@tonconnect/ui-react";

const Address = () => {
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);

  return (
    userFriendlyAddress && (
      <div style={{ width: "80vw", overflowWrap: "anywhere" }}>
        <span>User-friendly address: {userFriendlyAddress}</span>
        <span>Raw address: {rawAddress}</span>
      </div>
    )
  );
};
export default Address;
