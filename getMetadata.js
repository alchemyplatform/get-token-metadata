// Import necessary modules
const { Alchemy, Network } = require("alchemy-sdk");
require('dotenv').config();

const config = {
  apiKey: process.env.API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

const main = async () => {
  // The token address we want to query for metadata -- replace with desired address
  const tokenAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7"
  
  //Get token metadata with Alchemy API endpoint
  const metadata = await alchemy.core.getTokenMetadata(tokenAddress);

  //Print out token metadata
  console.log("TOKEN METADATA:");
  console.log(metadata);
};

main(); // Run the main function

