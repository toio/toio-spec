/**
 * Copyright (c) 2019-present, Sony Interactive Entertainment Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props
    const { baseUrl, docsUrl } = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    )

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    )

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button buttonDark" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    )

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    )

    return (
      <SplashContainer>
        <ProjectTitle siteConfig={siteConfig} />
        <PromoSection>
          <Button href={docUrl('about.html')}>はじめに</Button>
          <Button href={docUrl('hardware_components.html')}>ハードウェア仕様</Button>
          <Button href={docUrl('ble_communication_overview.html')}>通信仕様</Button>
        </PromoSection>
      </SplashContainer>
    )
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props
    const { baseUrl, docsUrl } = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

    const Block = props => (
      <Container padding={['bottom', 'top']} id={props.id} background={props.background}>
        <GridBlock align="center" contents={props.children} layout={props.layout} />
      </Container>
    )

    const Features = () => (
      <Container padding={['bottom', 'top']}>
        <GridBlock
          align="center"
          contents={[
            {
              content: `各コンポーネントの説明、形状やサイズ、キューブの基本性能などのハードウェア関連の情報を公開しています。キューブに取り付ける工作物を制作する際の情報としてご参照下さい。\n\n[ハードウェア仕様](${docUrl(
                'hardware_components.html'
              )})`,
              image: `${siteConfig.baseUrl}img/top_hardware.svg`,
              imageAlign: 'top',
              imageAlt: 'ハードウェア仕様',
              title: 'ハードウェア仕様',
            },
            {
              content: `キューブを制御するための通信プロトコルの仕様を公開しています。キューブを走らせる、ランプを光らせる、音を鳴らすといったプログラムを制作する際の情報としてご参照下さい。\n\n[通信仕様](${docUrl(
                'ble_communication_overview.html'
              )})`,
              image: `${siteConfig.baseUrl}img/top_software.svg`,
              imageAlign: 'top',
              imageAlt: '通信仕様',
              title: '通信仕様',
            },
          ]}
          layout="twoColumn"
        />
      </Container>
    )

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer homeMainContainer">
          <Features />
        </div>
      </div>
    )
  }
}

module.exports = Index
