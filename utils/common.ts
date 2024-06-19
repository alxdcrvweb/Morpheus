export const addressSlice = (address: string | undefined) => {
    if (!address) return "0000...0000";
    return (
      address.slice(0, 4) +
      "..." +
      address.slice(address.length - 4, address.length)
    );
  };