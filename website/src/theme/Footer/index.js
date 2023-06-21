/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Link from '@docusaurus/Link'
import isInternalUrl from '@docusaurus/isInternalUrl'
import { useThemeConfig } from '@docusaurus/theme-common'
import useBaseUrl from '@docusaurus/useBaseUrl'
import IconExternalLink from '@theme/Icon/ExternalLink'
import ThemedImage from '@theme/ThemedImage'
import clsx from 'clsx'
import React from 'react'
import styles from './styles.module.css'

function FooterLink({ to, href, label, prependBaseUrlToHref, ...props }) {
  const toUrl = useBaseUrl(to)
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  })
  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}
    >
      {href && !isInternalUrl(href) ? (
        <span>
          {label}
          <IconExternalLink />
        </span>
      ) : (
        label
      )}
    </Link>
  )
}

const FooterLogo = ({ sources, alt }) => (
  <ThemedImage className="footer__logo" alt={alt} sources={sources} />
)

function Footer() {
  const { footer } = useThemeConfig()
  const { copyright, links = [], logo = {} } = footer || {}
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  }

  if (!footer) {
    return null
  }

  return (
    <footer
      className={clsx('footer', {
        'footer--dark': footer.style === 'dark',
      })}
    >
      <div className="container">
        {links && links.length > 0 && (
          <div className="row footer__links">
            {links.map((linkItem, i) => (
              <div key={i} className="col footer__col">
                {linkItem.title != null ? (
                  <div className="footer__title">{linkItem.title}</div>
                ) : null}
                {linkItem.items != null &&
                Array.isArray(linkItem.items) &&
                linkItem.items.length > 0 ? (
                  <ul className="footer__items">
                    {linkItem.items.map((item, key) =>
                      item.html ? (
                        <li
                          key={key}
                          className="footer__item" // Developer provided the HTML, so assume it's safe.
                          // eslint-disable-next-line react/no-danger
                          dangerouslySetInnerHTML={{
                            __html: item.html,
                          }}
                        />
                      ) : (
                        <li key={item.href || item.to} className="footer__item">
                          <FooterLink {...item} />
                        </li>
                      )
                    )}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        )}
        {(logo || copyright) && (
          <div className="footer__bottom margin-top--lg">
            {logo && (logo.src || logo.srcDark) && (
              <div className="margin-bottom--sm">
                {logo.href ? (
                  <Link href={logo.href} className={styles.footerLogoLink}>
                    <FooterLogo alt={logo.alt} sources={sources} />
                  </Link>
                ) : (
                  <FooterLogo alt={logo.alt} sources={sources} />
                )}
              </div>
            )}
            <div>
              The document is licensed under{' '}
              <Link
                className="footer__link-item"
                href="https://creativecommons.org/licenses/by/4.0/"
              >
                Creative Commons Attribution 4.0 International License
              </Link>
              .
            </div>
            <div>
              The image and 3D data are licensed under{' '}
              <Link
                className="footer__link-item"
                href="https://creativecommons.org/licenses/by-nd/4.0/"
              >
                Creative Commons Attribution-NoDerivatives 4.0 International License
              </Link>
              .
            </div>
            {copyright ? (
              <div
                className="footer__copyright" // Developer provided the HTML, so assume it's safe.
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: copyright,
                }}
              />
            ) : null}
          </div>
        )}
      </div>
    </footer>
  )
}

export default Footer
