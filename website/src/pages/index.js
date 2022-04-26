/**
 * Copyright (c) 2019-present, Sony Interactive Entertainment Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import React from 'react'
import { HeroCubeView } from '../components/HeroCubeView'
import HomepageFeatures from '../components/HomepageFeatures'
import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroBannerContainer)}>
        <div className={styles.heroBannerInfo}>
          <h1 className="hero__title">
            <Translate id="homepage.title" description="title of this site">
              {siteConfig.title}
            </Translate>
          </h1>
          <p className="hero__subtitle">
            <Translate id="homepage.title.tagline" description="tagline of this site">
              {siteConfig.tagline}
            </Translate>
          </p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/about">
              <Translate
                id="homepage.feature.about.linkText"
                description="link text to the about page"
              >
                はじめに
              </Translate>
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/hardware_components">
              <Translate
                id="homepage.feature.hardware.linkText"
                description="link text to the hardware page"
              >
                ハードウェア仕様
              </Translate>
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/ble_communication_overview"
            >
              <Translate
                id="homepage.feature.software.linkText"
                description="link text to the software page"
              >
                通信仕様
              </Translate>
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/hardware_shape">
              <Translate
                id="homepage.feature.3dmodel.linkText"
                description="link text to the 3d model page"
              >
                3Dデータ
              </Translate>
            </Link>
          </div>
        </div>
        <div className={styles.heroCubeView}>
          <HeroCubeView />
        </div>
      </div>
    </header>
  )
}
export default (props) => (
  <Layout>
    <HomepageHeader />
    <main>
      <HomepageFeatures />
    </main>
  </Layout>
)
