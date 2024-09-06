const { ethers } = require('ethers');

const INFURA_NETWORKS = {
    mainnet: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
    sepolia: `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
    arbitrum: `https://arbitrum-mainnet.io/v3/${process.env.INFURA_PROJECT_ID}`,
    avalanche: `https://avalanche.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
    polygon: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
};

/**
 * Función para conectar con la red blockchain seleccionada.
 * @param {string} network - Red blockchain (mainnet, ropsten, etc.).
 * @returns {ethers.providers.JsonRpcProvider} Proveedor de Ethers.js para conectar a la blockchain.
 */
const connectToBlockchain = (network) => {
    if (!INFURA_NETWORKS[network]) {
        throw new Error("Network not supported");
    }
    return new ethers.providers.JsonRpcProvider(INFURA_NETWORKS[network]);
};

module.exports = {
    connectToBlockchain
};
