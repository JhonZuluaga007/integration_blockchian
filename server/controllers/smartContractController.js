const { ethers } = require('ethers');
const { connectToBlockchain } = require('../utils/blockchain');
const erc20Abi = require('../utils/abi/erc20.abi.json');

  exports.getTokenBalance = async (req, res) => {
    const { contractAddress, wallet, network } = req.body;

    try {
        const provider = connectToBlockchain(network);
        const contract = new ethers.Contract(contractAddress, erc20Abi, provider);
        const balance = await contract.balanceOf(wallet);
        const decimals = await contract.decimals(); // Obtener los decimales del token
        const formattedBalance = ethers.utils.formatUnits(balance, decimals);

        res.status(200).json({
            success: true,
            balance: formattedBalance
        });
    } catch (error) {
        console.error(`Error fetching token balance:`, error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching the token balance",
            error: error.message
        });
    }
};
