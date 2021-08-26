/**
 * Copyright (c) 2019-present, Sony Interactive Entertainment Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Translate from '@docusaurus/Translate'
import Layout from '@theme/Layout'
import React from 'react'

const TrademarkNotice = () => {
  return (
    <div>
      <header>
        <h1>
          <Translate id="trademarkNotice.title" description="title of trademark notice page">
            知的財産権表記
          </Translate>
        </h1>
      </header>
      <p>
        <Translate id="trademarkNotice.trademark.toio" description="trademark of toio">
          ”toio”は、株式会社ソニー・インタラクティブエンタテインメントの登録商標または商標です。
        </Translate>
      </p>
      <p>
        <Translate id="trademarkNotice.trademark.bluetooth" description="trademark of bluetooth">
          Bluetooth®のワードマークおよびロゴは、Bluetooth SIG,
          Inc.が所有する商標であり、株式会社ソニー・インタラクティブエンタテインメントはこれらのマークをライセンスに基づいて使用しています。
        </Translate>
      </p>
      <p>
        <Translate id="trademarkNotice.trademark.others" description="trademark of others">
          その他商標およびトレードネームはそれぞれの所有者に帰属します。
        </Translate>
      </p>
    </div>
  )
}

export default (props) => (
  <Layout>
    <main className="container margin-vert--lg">
      <TrademarkNotice />
    </main>
  </Layout>
)
