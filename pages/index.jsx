import Head from 'next/head'
import { withTranslation } from '../i18n'
import { jsx, css } from '@emotion/react'
import { useEffect, useRef, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const Body = ({ children }) => {
  return (
    <div
      className="border-solid rounded-lg border-black border-0
      py-2"
    >
      {children}
    </div>
  )
}

const Title = ({ children, textSize = 'text-2xl' }) => {
  return (
    <div className="flex items-start text-lg">
      <div
        className={`border-solid rounded-full border-black border-0
        py-2 flex-initial flex flex-row
        font-serif ${textSize} text-emphasis`}
      >
        {children}
      </div>
    </div>
  )
}

const style = css`
  background: rgb(174, 12, 6);
  background: linear-gradient(
    90deg,
    var(--color-border-primary) 0%,
    var(--color-border-second) 100%
  );
  padding: 3px;
`

const Pill = ({ children, onClick, active }) => {
  return (
    <button onClick={onClick} className="rounded-full " css={style}>
      <div
        className={`bg-primary rounded-full p-2 border-2 border-primary
              ${active && 'bg-highlight'}`}
      >
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
    </div>
  )
}

const OSSBody = ({ pr, repo, desc }) => (
  <Body>
    <a className="anchor" href={`https://github.com/${repo}/pull/${pr}`}>
      <b>{repo}</b>
    </a>
    <p>{desc}</p>
  </Body>
)

const FourGrid = ({ children }) => {
  return <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">{children}</div>
}

const Horizontal = ({ children }) => (
  <div className="flex flex-1 flex-row space-x-2">{children}</div>
)

function Home({ t, i18n }) {
  const [theme, setTheme] = useLocalStorage('theme', 'theme-light')
  const [lang, setLang] = useLocalStorage('lang', i18n.language)
  useEffect(() => {
    i18n.changeLanguage(lang)
    document.documentElement.lang = lang
  }, [lang])
  return (
    <div
      className={`${theme}
        bg-primary
        flex flex-col
        text-body px-2`}
    >
      <div className=" mx-auto my-2 max-w-md space-y-6 mx-2">
        <Head>
          <title>Jose Vargas</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className=" space-y-6 flex flex-col">
          <FourGrid>
            <Pill active={lang == 'es'} onClick={() => setLang('es')}>
              <p>Español</p>
            </Pill>
            <Pill active={lang == 'en'} onClick={() => setLang('en')}>
              <p>English</p>
            </Pill>
            <Pill
              active={theme == 'theme-light'}
              onClick={() => setTheme('theme-light')}
            >
              <p>{t('light')}</p>
            </Pill>
            <Pill
              active={theme == 'theme-dark'}
              onClick={() => setTheme('theme-dark')}
            >
              <p>{t('dark')}</p>
            </Pill>
          </FourGrid>
          <h1 className="bg-primary font-serif text-4xl text-emphasis">
            {t('header')}
          </h1>
          <Section>
            <Title>
              <h2>{t('subheader')}</h2>
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
              <a className="anchor" href="https://bloggeroo.dev">
                <b>{t('bloggeroo_title')}</b>
              </a>{' '}
              <p>
                {t('bloggeroo_desc')}{' '}
                <a
                  className="anchor"
                  href="https://github.com/Sleepful/Bloggeroo"
                >
                  GitHub.
                </a>
              </p>
            </Body>

            <Body>
              <a className="anchor" href="https://lsat.fly.dev/">
                <b>{t('lsat_title')}</b>
              </a>{' '}
              <p>
                {t('lsat_desc')}{' '}
              </p>
            </Body>
            <Body>
              <a
                className="anchor"
                href="https://movie-searcher-site.netlify.app"
              >
                <b>{t('p1title')}</b>
              </a>{' '}
              <p>
                {t('p1desc')}{' '}
                <a
                  className="anchor"
                  href="https://github.com/Sleepful/movie_searcher"
                >
                  GitHub.
                </a>
              </p>
            </Body>
            <Body>
              <a
                className="anchor"
                href="/static/YingYangTunnel_output_Spin.mov"
              >
                <b> {t('yinyang_title')} </b>
              </a>{' '}
              <p>
                {t('yinyang_description')}{' '}
                <a
                  className="anchor"
                  href="https://github.com/Sleepful/Visuals"
                >
                  GitHub.
                </a>
              </p>
            </Body>
            <Body>
              <a className="anchor" href="https://josecodea.com">
                <b>{t('p3title')}</b>
              </a>
              <p>
                {t('p3desc')}{' '}
                <a
                  className="anchor"
                  href="https://github.com/Sleepful/portfolio"
                >
                  GitHub.
                </a>
              </p>
            </Body>
          </Section>
          {
            // TODO embed yinyang with loop
            // - make it a video that can be
            //   unfolded
            // - need to replace mov with better
            //   one that loops nicely, or make
            //   high qual gif (eh)
          }
          <Section>
            <Title>
              <a name="openSource">{t('open_source')}</a>
            </Title>
            <Title textSize="text-lg">
              <a name="elixir">Elixir</a>
            </Title>
            <Body>
              <a
                className="anchor"
                href="https://github.com/livebook-dev/livebook/pull/1911"
              >
                <b>livebook-dev/livebook</b>
              </a>
              <p>
                Add doctest decorations to Monaco editor per result.
              </p>
            </Body>
            <Body>
              <a
                className="anchor"
                href="https://github.com/elixir-ecto/ecto/pull/3967"
              >
                <b>elixir-ecto/ecto</b>
              </a>
              <p>
                Support preloading associations in embedded schemas from the
                parent schema.
              </p>
            </Body>
            <Body>
              <a
                className="anchor"
                href="https://github.com/phoenixframework/phoenix_live_view/pull/2340"
              >
                <b>phoenixframework/phoenix_live_view</b>
              </a>
              <p>
                Docs: Explain sockets as a server-only data struct{' '}
                <a
                  className="anchor"
                  href="https://github.com/phoenixframework/phoenix_live_view/commit/41d5ab8f7ff3beaaaca53f1c9b68983c3da77a00"
                >
                  (merge commit)
                </a>
              </p>
            </Body>
            <Body>
              <a
                className="anchor"
                href="https://github.com/phoenixframework/phoenix_live_view/pull/2336"
              >
                <b>phoenixframework/phoenix_live_view</b>
              </a>
              <p>Update sample code for on_mount authentication.</p>
            </Body>
            <Body>
              <a
                className="anchor"
                href="https://github.com/elixir-ecto/ecto/pull/4051"
              >
                <b>elixir-ecto/ecto</b>
              </a>
              <p>Add small clarification to Ecto.Query docs.</p>
            </Body>
            <Body>
              <a
                className="anchor"
                href="https://github.com/livebook-dev/livebook/pull/1682"
              >
                <b>livebook-dev/livebook</b>
              </a>
              <p>
                Small clarification to running Livebook inside a Mix project.
              </p>
            </Body>
            <Title textSize="text-lg">
              <p>TailwindCSS</p>
            </Title>
            <Body>
              <a
                className="anchor"
                href="https://github.com/tailwindlabs/tailwindcss.com/pull/1378"
              >
                <b>tailwindlabs/tailwindcss.com</b>
              </a>
              <p>Add arbitrary-variants section in arbitrary-values.</p>
            </Body>
            <Title textSize="text-lg">
              <p>Neovim</p>
            </Title>
            <OSSBody
              pr="268"
              repo="renerocksai/telekasten.nvim"
              desc="Create subdirs when creating new note"
            />
            <OSSBody
              pr="1626"
              repo="hrsh7th/nvim-cmp"
              desc="Expand docs for select_next_item select_prev_item"
            />
            <Title textSize="text-lg">
              <p>Emacs</p>
            </Title>
            <OSSBody
              pr="212"
              repo="lassik/emacs-format-all-the-code"
              desc="Add support for HTML+EEX"
            />
            <OSSBody
              pr="23"
              repo="lassik/emacs-language-id"
              desc="Add HTML+EEX language-id"
            />
            <OSSBody
              pr="6900"
              repo="doomemacs/doomemacs"
              desc="fix(highlight-indent-guides): for terminal users"
            />
            <OSSBody
              pr="409"
              repo="ananthakumaran/tide"
              desc="Fix tide-rename-file bug on new buffer name"
            />
            <OSSBody
              pr="19"
              repo="andre-r/centered-cursor-mode.el"
              desc="Only use mouse-wheel variables when bound"
            />
          </Section>
          <Section>
            <Title>
              <p>{t('technologies')}</p>
            </Title>
            <Body>
              <p>Elixir, Phoenix, Rust, Clojure, TypeScript, Deno, Neovim, Linux.</p>
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
              <a
                className="anchor"
                href="https://www.linkedin.com/in/jose-pablo-vargas-campos-685a4b172/"
              >
                LinkedIn
              </a>
              <a
                className="anchor"
                href="https://stackoverflow.com/users/2446144/jose-v"
              >
                Stack Overflow
              </a>
            </Horizontal>
            <Horizontal>
              <a className="anchor" href="mailto:josepablov@gmail.com">
                josepablov@gmail.com
              </a>
            </Horizontal>
          </Section>
        </main>
        <footer>
          {t('themeby')}{' '}
          <a className="anchor" href="https://github.com/altercation/solarized">
            Solarized
          </a>
        </footer>
      </div>
    </div>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default withTranslation('common')(Home)
