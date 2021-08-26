import Link from '@docusaurus/Link'
import Translate, { translate } from '@docusaurus/Translate'
import React from 'react'
import styles from './HomepageFeatures.module.css'

const FeatureList = [
  {
    title: translate({ message: 'ハードウェア仕様', id: 'homepage.feature.hardware.title' }),
    Svg: require('../../static/img/top_hardware.svg').default,
    description: (
      <Translate id="homepage.feature.hardware.description">
        各コンポーネントの説明、形状やサイズ、キューブの基本性能などのハードウェア関連の情報を公開しています。キューブに取り付ける工作物を制作する際の情報としてご参照下さい。
      </Translate>
    ),
    linkText: translate({ message: 'ハードウェア仕様', id: 'homepage.feature.hardware.linkText' }),
    link: '/docs/hardware_components',
  },
  {
    title: translate({ message: '通信仕様', id: 'homepage.feature.software.title' }),
    Svg: require('../../static/img/top_software.svg').default,
    description: (
      <Translate id="homepage.feature.software.description">
        キューブを制御するための通信プロトコルの仕様を公開しています。キューブを走らせる、ランプを光らせる、音を鳴らすといったプログラムを制作する際の情報としてご参照下さい。
      </Translate>
    ),
    linkText: translate({ message: '通信仕様', id: 'homepage.feature.software.linkText' }),
    link: '/docs/ble_communication_overview',
  },
]

function Feature({ Svg, title, description, linkText, link }) {
  return (
    <div className="col col--6">
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="button button--secondary button--lg" to={link}>
          {linkText}
        </Link>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
