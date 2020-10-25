import Head from 'next/head'
import { withTranslation } from '../i18n'
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

const Pill = ({ children, onClick, active }) => {
  return (
    <button onClick={onClick} className="rounded-full "
      css={style}>
      <div className={`bg-primary rounded-full p-2
              ${active && 'bg-highlight'}`}>
        {children}
      </div>
    </button>
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

const FourGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {children}
    </div>
  )
}

const Horizontal = ({ children }) => (
  <div className="flex flex-1 flex-row space-x-2">{children}</div>
)

function Home({ t, i18n }) {
  const [theme, setTheme] = useState('theme-light')
  const [lang, setLang] = useState('es')
  return (
    <div className={`${theme}
        bg-primary
        flex flex-col
        text-body px-2`}>
      <div className=" mx-auto my-2 max-w-md space-y-6 mx-2">
        <Head>
          <title>Jose Vargas</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className=" space-y-6 flex flex-col">
          <FourGrid>
            <Pill active={i18n.language == 'es'} onClick={() =>
              i18n.changeLanguage('es')
            }>
              <p>Español</p>
            </Pill>
            <Pill active={i18n.language == 'en'} onClick={() =>
              i18n.changeLanguage('en')
            }>
              <p >English</p>
            </Pill>
            <Pill active={theme == 'theme-light'}
              onClick={() => setTheme('theme-light')}>
              <p>
                {t('light')}
              </p>
            </Pill>
            <Pill active={theme == 'theme-dark'}
              onClick={() => setTheme('theme-dark')}>
              <p>
                {t('dark')}
              </p>
            </Pill>
          </FourGrid>
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
              <a className="anchor"
                href="https://movie-searcher-site.netlify.app" >
                {t('p1title')}
              </a>
              {' '}
              <p>{t('p1desc')} {' '}
                <a className="anchor"
                  href="https://github.com/Sleepful/movie_searcher" >
                  GitHub.
                </a>
              </p>
            </Body>
            <Body>
              <a className="anchor"
                href="https://chinesenotes.netlify.app/" >
                {t('p2title')}
              </a>
              {' '}
              <p>{t('p2desc')} {' '}
                <a className="anchor"
                  href="https://github.com/Sleepful/chinese" >
                  GitHub.
                </a>
              </p>
            </Body>
            <Body>
              <a className="anchor"
                href="https://josecodea.com">
                {t('p3title')}</a>
              <p>{t('p3desc')} {' '}
                <a className="anchor"
                  href="https://github.com/Sleepful/portfolio" >
                  GitHub.
                </a>
              </p>
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
            <Horizontal className="flex-center">
              <a className="anchor" href="https://github.com/Sleepful">
                GitHub
              </a>
              <a className="anchor" href="https://www.linkedin.com/in/jose-pablo-vargas-campos-685a4b172/">
                LinkedIn
              </a>
              <a className="anchor" href="https://stackoverflow.com/users/2446144/jose-v">
                Stack Overflow
              </a>
            </Horizontal>
          </Section>
        </main >
        <footer>
          {t('themeby')}{' '}
          <a className="anchor"
            href="https://github.com/altercation/solarized">
            Solarized
          </a>
        </footer>
      </div >
    </div >
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})


export default withTranslation('common')(Home)
