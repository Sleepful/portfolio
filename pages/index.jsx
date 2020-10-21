import Head from 'next/head'
import { i18n, withTranslation } from '../i18n'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState } from 'react'


const Body = ({ children }) => {
  return (
    <div className="border-solid rounded-lg border-black border-0
      py-2">
      {children}
    </div>
  )
}

const Title = ({ children }) => {
  return (
    <div className="flex items-start text-lg">
      <div className="border-solid rounded-full border-black border-0
        py-2 flex-initial flex flex-row
        font-serif text-2xl text-emphasis">
        {children}
      </div>
    </div>
  )
}

const style = css`
  background: rgb(174,12,6);
  background: linear-gradient(90deg, var(--color-border-primary) 0%, var(--color-border-second) 100%);
  padding: 3px;
`

const Pill = ({ children }) => {
  return (
    <div className="rounded-full
        flex-initial flex flex-row "
      css={style}>
      <div className="bg-primary rounded-full p-2">
        {children}
      </div>
    </div>
  )
}

const Section = ({ children }) => {
  return (
    // <div className="sideburns -mx-4">
    <div className="sideburns">
      <section className="px-4">{children}</section>
    </div >
  )
}

const Horizontal = ({ children }) => (
  <div className="flex flex-row space-x-2">{children}</div>
)

function Home({ t }) {
  const [theme, setTheme] = useState('theme-light')
  const [lang, setLang] = useState('es')
  return (
    <div className={`${theme}
        bg-primary
        flex flex-col`}>
      <div className=" mx-auto my-2 max-w-md">
        <Head>
          <title>Jose Vargas</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="text-body
          space-y-6 flex flex-col">
          <Horizontal>
            <Pill>
              <p onClick={() =>
                i18n.changeLanguage('es')
              }>Español</p>
            </Pill>
            <Pill>
              <p onClick={() =>
                i18n.changeLanguage('en')
              }>English</p>
            </Pill>
            <Pill>
              <p onClick={() => setTheme('theme-light')}>
                Light
              </p>
            </Pill>
            <Pill>
              <p onClick={() => setTheme('theme-dark')}>
                Dark
              </p>
            </Pill>
          </Horizontal>
          <h1 className="bg-primary font-serif text-4xl text-emphasis">
            {t('header')}
          </h1>
          <Section>
            <Title>
              <h2>
                {t('subheader')}
              </h2>
            </Title>
            <Body>
              <p>{t('aboutme')}</p>
            </Body>
          </Section>
          <Section>
            <Title>
              <p>{t('personal')}</p>
            </Title>
            <Body>
              <p>{t('p1title')}</p>
              <p>{t('p1desc')}</p>
            </Body>
            <Body>
              <p>{t('p2title')}</p>
              <p>{t('p2desc')}</p>
            </Body>
            <Body>
              <p>{t('p3title')}</p>
              <p>{t('p3desc')}</p>
            </Body>
          </Section>
          <Section>
            <Title>
              <p>{t('technologies')}</p>
            </Title>
            <Body>
              <p>TypeScript, ReactJs, TailwindCSS, NextJs, NodeJs, GraphQl, CSS,
                Emacs, Linux </p>
            </Body>
          </Section>
          <Section>
            <Title>
              <p>{t('wouldlike')}</p>
            </Title>
            <Body>
              <p>Rust, Elixir, Deno, WebAssembly, Go</p>
            </Body>
          </Section>
          <Section>
            <Title>
              <p>{t('work')}</p>
            </Title>
            <Body>
              <p>{t('workdesc')}</p>
            </Body>
          </Section>
          <Section>
            <Title>
              <p>{t('contact')}</p>
            </Title>
            <div>github</div>
            <div>linkedin</div>
            <div>stack overflow</div>
          </Section>
        </main>
      </div>
    </div>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})


export default withTranslation('common')(Home)
