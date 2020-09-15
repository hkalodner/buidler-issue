const { expect, use } = require('chai')
const chaiAsPromised = require("chai-as-promised")
const { solidity } = require('ethereum-waffle')

use(chaiAsPromised)
use(solidity)

describe('Test', () => {
  it('test should succeed', async function () {
    const Test = await ethers.getContractFactory('Test')
    const test = await Test.deploy()
    await test.deployed()
    await expect(test.test()).to.eventually.equal("test")
    await test.shutdown()
  })
})
