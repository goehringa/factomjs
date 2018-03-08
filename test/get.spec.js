const assert = require('chai').assert,
    get = require('../src/get'),
    factomdjs = require('factomdjs');

const factomd = new factomdjs.Factomd();
factomd.setFactomNode('http://localhost:8088/v2');

describe('Get information from Factom blockchain', function () {

    it('should get entry', async function () {
        const entry = await get.getEntry(factomd, 'ec92aa51b34b992b3472c54ce005a3baf7fbdddd8bb6d786aad19304830559b0');

        assert.equal(entry.extIds[0].toString(), 'PrimeNumbers.txt');
    });

    it('should get all entries', async function () {
        const entries = await get.getAllEntriesOfChain(factomd, 'f48d2160c5d8178720d8c83b89a62599ab6a8b9dbec9fbece5229f787d1e8b44');

        assert.isAtLeast(entries.length, 7);
    });

    it('should get balance', async function () {
        const ecBalance = await get.getBalance(factomd, 'EC2vXWYkAPduo3oo2tPuzA44Tm7W6Cj7SeBr3fBnzswbG5rrkSTD');
        const ecBalance2 = await get.getBalance(factomd, 'Es32PjobTxPTd73dohEFRegMFRLv3X5WZ4FXEwNN8kE2pMDfeMym');
        const fctBalance = await get.getBalance(factomd, 'FA29jNtT88wGjs9YLQch8ur4VFaTDkuiDwWe1YmksPDJuh3tAczG');
        const fctBalance2 = await get.getBalance(factomd, 'Fs2w6VL6cwBqt6SpUyPLvdo9TK834gCr52Y225z8C5aHPAFav36X');

        assert.typeOf(ecBalance, 'number');
        assert.typeOf(ecBalance2, 'number');
        assert.typeOf(fctBalance, 'number');
        assert.typeOf(fctBalance2, 'number');
    });

});