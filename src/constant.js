const ADMIN_BLOCKS_CHAIN_ID = '000000000000000000000000000000000000000000000000000000000000000a',
    ENTRY_CREDIT_BLOCKS_CHAIN_ID =
        '000000000000000000000000000000000000000000000000000000000000000c',
    FACTOID_BLOCKS_CHAIN_ID = '000000000000000000000000000000000000000000000000000000000000000f';

const ADMIN_ID_TO_CODE = new Map([
    [1, 'DIRECTORY_BLOCK_SIGNATURE'],
    [2, 'REVEAL_MATRYOSHKA_HASH'],
    [3, 'ADD_REPLACE_MATRYOSHKA_HASH'],
    [4, 'INCREASE_SERVER_COUNT'],
    [5, 'ADD_FEDERATED_SERVER'],
    [6, 'ADD_AUDIT_SERVER'],
    [7, 'REMOVE_FEDERATED_SERVER'],
    [8, 'ADD_FEDERATED_SERVER_SIGNING_KEY'],
    [9, 'ADD_FEDERATED_SERVER_BITCOIN_ANCHOR_KEY'],
    [10, 'SERVER_FAULT_HANDOFF'],
    [11, 'COINBASE_DESCRIPTOR'],
    [12, 'COINBASE_DESCRIPTOR_CANCEL'],
    [13, 'ADD_AUTHORITY_FACTOID_ADDRESS'],
    [14, 'ADD_AUTHORITY_EFFICIENCY']
]);

module.exports = {
    MAX_TRANSACTION_SIZE: 10240,
    MAX_ENTRY_PAYLOAD_SIZE: 10240,
    MAX_ENTRY_SIZE: 10275,
    CHAIN_CREATION_COST: 10,
    NULL_HASH: '0000000000000000000000000000000000000000000000000000000000000000',
    ADMIN_BLOCKS_CHAIN_ID: ADMIN_BLOCKS_CHAIN_ID,
    ENTRY_CREDIT_BLOCKS_CHAIN_ID: ENTRY_CREDIT_BLOCKS_CHAIN_ID,
    FACTOID_BLOCKS_CHAIN_ID: FACTOID_BLOCKS_CHAIN_ID,
    RESERVED_CHAIN_IDS: new Set([
        ADMIN_BLOCKS_CHAIN_ID,
        ENTRY_CREDIT_BLOCKS_CHAIN_ID,
        FACTOID_BLOCKS_CHAIN_ID
    ]),
    VALID_PREFIXES: new Set(['Fs', 'FA', 'EC', 'Es']),
    PUBLIC_ADDRESS_VALID_PREFIXES: new Set(['FA', 'EC']),
    PRIVATE_ADDRESS_VALID_PREFIXES: new Set(['Fs', 'Es']),
    EC_ADDRESS_VALID_PREFIXES: new Set(['EC', 'Es']),
    FCT_ADDRESS_VALID_PREFIXES: new Set(['FA', 'Fs']),
    FACTOID_PUBLIC_PREFIX: Buffer.from('5fb1', 'hex'),
    FACTOID_PRIVATE_PREFIX: Buffer.from('6478', 'hex'),
    ENTRYCREDIT_PUBLIC_PREFIX: Buffer.from('592a', 'hex'),
    ENTRYCREDIT_PRIVATE_PREFIX: Buffer.from('5db6', 'hex'),
    ADMIN_ID_TO_CODE
};
