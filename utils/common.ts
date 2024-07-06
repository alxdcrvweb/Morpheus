export const addressSlice = (address: string | undefined) => {
  if (!address) return "0000...0000";
  return (
    address.slice(0, 4) +
    "..." +
    address.slice(address.length - 4, address.length)
  );
};

export const ipfsGatewayById = (id: string) => {
  // console.log(cid)
  let com = "img-quality=80&img-width=640&img-height=700&";
  const token = process.env.PINATA_GATEWAY;
  // let modifiedId = Number(id) > 400 ? Number(id) - 400 : id
  let cid =
    Number(id) > 400 && Number(id) <= 702
      ? "QmeQrA41fYPhrSV22VLnLoix5r5ptWXmtr9jqTaWWDPg56"
      : Number(id) <= 400
      ? "QmWV3QZSVgQH6udJL7WweYGSyg2DN8rsuJFFaaFHuziRen"
      : "";
  console.log(
    cid,
    `https://loot.mypinata.cloud/ipfs/${cid}/${id}.png?${com}pinataGatewayToken=${token}`
  );
  if (id) {
    return `https://loot.mypinata.cloud/ipfs/${cid}/${id}.png?${com}pinataGatewayToken=${token}`;
  } else return "";
};
