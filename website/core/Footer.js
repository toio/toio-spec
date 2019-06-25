/**
 * Copyright (c) 2019-present, Sony Interactive Entertainment Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl
    const docsUrl = this.props.config.docsUrl
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    return `${baseUrl}${docsPart}${doc}`
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl
    return baseUrl + (language ? `${language}/` : '') + doc
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('about', this.props.language)}>はじめに</a>
            <a href={this.docUrl('hardware_components', this.props.language)}>
              ハードウェアについて
            </a>
            <a href={this.docUrl('ble_communication_overview', this.props.language)}>
              通信仕様について
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.pageUrl('users.html', this.props.language)}>ユーザー＆ライブラリ</a>
            <a
              href="https://stackoverflow.com/questions/tagged/toio"
              target="_blank"
              rel="noreferrer noopener"
            >
              Stack Overflow
            </a>
            <a
              href="https://ja.stackoverflow.com/questions/tagged/toio"
              target="_blank"
              rel="noreferrer noopener"
            >
              スタック・オーバーフロー
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://toio.io" target="_blank" rel="noreferrer noopener">
              Official Web
            </a>
            <a href="https://toio.io/platform/index.html" target="_blank" rel="noreferrer noopener">
              Official Web | toio 本体セット
            </a>
            <a
              href="https://toio.io/platform/technology.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              Official Web | toio Technology
            </a>
            <a href={this.props.config.repoUrl} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
              rel="noreferrer noopener"
            >
              Star
            </a>
          </div>
        </section>

        <section className="license">
          <p>
            The document is licensed under{' '}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Creative Commons Attribution 4.0 International License
            </a>
            .
          </p>
          <p>
            The image is licensed under{' '}
            <a
              href="https://creativecommons.org/licenses/by-nd/4.0/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Creative Commons Attribution-NoDerivatives 4.0 International License
            </a>
            .
          </p>
        </section>
        <section className="copyright">
          <p>{this.props.config.copyright}</p>
          <p>
            <a href="https://www.sie.com/website.html" target="_blank" rel="noreferrer noopener">
              Cookie Policy
            </a>
          </p>
          <p>
            <a href="https://toio.io/privacy.html" target="_blank" rel="noreferrer noopener">
              Privacy Policy
            </a>
          </p>
          <p>
            <a href="trademark-notice">Trademark Notice</a>
          </p>
        </section>
      </footer>
    )
  }
}

module.exports = Footer
