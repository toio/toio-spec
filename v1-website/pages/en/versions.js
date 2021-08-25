/**
 * Copyright (c) 2019-present, Sony Interactive Entertainment Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary')

const Container = CompLibrary.Container

const CWD = process.cwd()

const versions = require(`${CWD}/versions.json`)

function Versions(props) {
  const { config: siteConfig } = props
  const latestVersion = versions[0]
  const docUrl = (version) =>
    version !== latestVersion
      ? `${siteConfig.baseUrl}${siteConfig.docsUrl}/${version}/about`
      : `${siteConfig.baseUrl}${siteConfig.docsUrl}/about`
  const summaryUrl = `${siteConfig.baseUrl}${siteConfig.docsUrl}/how_to_update_cube#主なアップデート内容`
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer versionsContainer">
        <div className="post">
          <header className="postHeader">
            <h1>バージョン一覧</h1>
          </header>
          <p>本サイトではキューブの BLE プロトコルバージョン毎にドキュメントを公開しています。</p>
          <p>
            バージョンごとの更新内容については<a href={`${summaryUrl}`}>主なアップデート内容</a>
            でご確認ください。 また、本サイトの更新履歴については{' '}
            <a href={`${siteConfig.repoUrl}`}>GitHub</a> でご確認ください。
          </p>
          <table className="versions">
            <thead>
              <tr>
                <th>BLE プロトコルバージョン</th>
                <td>ドキュメントへのリンク</td>
              </tr>
            </thead>
            <tbody>
              {versions.map((version) => (
                <tr key={version}>
                  <th>{version}</th>
                  <td>
                    <a href={`${docUrl(version)}`}>Documentation</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  )
}

module.exports = Versions
