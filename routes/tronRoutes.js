const express = require('express');
const { getAllTransactionsController } = require('../services/blockchain/Tron/transaction');
const {getAllTransactionsControllers, getOutgoingTransactions} = require('../controllers/trx/transactionController');
// const {getTxHashDetails} = require('../controllers/trx/txHashController');
// const {getDetailsController} = require('../controllers/trx/addressController');
const router = express.Router();

// router.get('/address/:address/details', getDetailsController);
router.get('/address/:address', getAllTransactionsController);
router.get('/stream/transactions/:address', getAllTransactionsControllers);
// router.get('/txhash/:txhash', getTxHashDetails );
router.get('/address/:address/outgoing', getOutgoingTransactions);


module.exports = router;