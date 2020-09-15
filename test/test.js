/*
 * Copyright 2020, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
