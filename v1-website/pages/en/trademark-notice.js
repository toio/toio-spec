/**
 * Copyright (c) 2019-present, Sony Interactive Entertainment Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const Container = CompLibrary.Container

class TrademarkNotice extends React.Component {
  render() {
    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer">
          <div className="post">
            <header className="postHeader">
              <h1>知的財産権表記 / Trademark Notice</h1>
            </header>
            <p>
              ”toio”は、株式会社ソニー・インタラクティブエンタテインメントの登録商標または商標です。
            </p>
            <p>
              Bluetooth®のワードマークおよびロゴは、Bluetooth SIG,
              Inc.が所有する商標であり、株式会社ソニー・インタラクティブエンタテインメントはこれらのマークをライセンスに基づいて使用しています。
            </p>
            <p>その他商標およびトレードネームはそれぞれの所有者に帰属します。</p>
          </div>
        </Container>
      </div>
    )
  }
}

module.exports = TrademarkNotice
