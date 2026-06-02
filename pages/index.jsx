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

const BodyListItem = ({ children }) => {
  return (
    <li>
      <Body>
        {children}
      </Body>
    </li>
  )
}

const BulletList = ({ children, className = "" }) => {
  return (
    <ul className={"list-disc pl-6 pb-8 " + className}>
      {children}
    </ul>
  )
}



const Alert = () =>
  <div className="p-2 pt-4">
    <div role="alert" className="alert bg-highlight text-body">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span>I offer a free 30 minutes consultation for your project</span>
      <div>
        <a className="btn btn-sm border-primary border-2 bg-highlight hover:bg-primary hover:border-primary text-body" href="https://cal.com/jose-vargas/30min">Schedule</a>
      </div>
    </div>
  </div>


const LinkTitle = ({ title, href }) =>
  (<p className="pb-2 flex justify-between">
    <b>{title}</b>
    <a className="anchor" href={href} target="_blank">[link]</a>
  </p>)

const LinkDescription = ({ children }) => (
  <p className="p-2">
    {children}{' '}
  </p>
)

const hobbySection = ({ t, id }) => {
  return (
    <Section id={id}>
      <Title>
        <a name="this" />
        <p >{t('personal')}</p>
      </Title>
      <BulletList>
        <BodyListItem>
          <LinkTitle
            title={t('bloggeroo_title')}
            href="https://bloggeroo.dev" />
          <LinkDescription>
            {t('bloggeroo_desc')}{' '}
            <a
              target="_blank"
              className="anchor"
              href="https://bloggeroo.dev/articles/202307301408"
            >
              How I did it
            </a>
            {" & "}
            <a
              target="_blank"
              className="anchor"
              href="https://github.com/Sleepful/Bloggeroo"
            >
              GitHub
            </a>.
          </LinkDescription>
        </BodyListItem>

        <BodyListItem>
          <LinkTitle
            title={t('p1title')}
            href="https://movie-searcher-site.netlify.app" />
          <LinkDescription>
            {t('p1desc')}{' '}
            <a
              target="_blank"
              className="anchor"
              href="https://github.com/Sleepful/movie_searcher"
            >
              GitHub
            </a>.
          </LinkDescription>
        </BodyListItem>
        <BodyListItem>
          <LinkTitle
            title={t('yinyang_title')}
            href="/static/YingYangTunnel_output_Spin.mov" />
          <LinkDescription>
            {t('yinyang_description')}{' '}
            <a
              target="_blank"
              className="anchor"
              href="https://github.com/Sleepful/Visuals"
            >
              GitHub
            </a>.
          </LinkDescription>
        </BodyListItem>
        <BodyListItem>
          <LinkTitle
            title={t('p3title')}
            href="#this" />
          <LinkDescription>
            {t('p3desc')}{' '}
            <a
              target="_blank"
              className="anchor"
              href="https://github.com/Sleepful/portfolio"
            >
              GitHub
            </a>.
          </LinkDescription>
        </BodyListItem>
      </BulletList>
    </Section>)
}

const HMACBlogPost = ({ t }) => (
  <>
    <LinkTitle
      title="Verify HMAC signatures in Deno"
      href="https://bloggeroo.dev/articles/202310212239" />
    <div className="ml-2 badge badge-outline">
      TypeScript
    </div>
    <LinkDescription>
      {t('blog_post_hmac')}
    </LinkDescription>
  </>
)

const NixosMCBlogPost = ({ t }) => (
  <>
    <LinkTitle
      title="NixOS Minecraft Server in AWS"
      href="https://bloggeroo.dev/articles/202402292320" />
    <div className="ml-2 badge badge-outline mr-2">
      NixOS
    </div>
    <div className="badge badge-outline">
      Rust
    </div>
    <LinkDescription>
      {t('blog_post_nixos_mc')}
    </LinkDescription>
  </>
)

const RustSSGBlogPost = ({ t }) => (
  <>
    <LinkTitle
      title="Making my Static Blog Generator"
      href="https://bloggeroo.dev/articles/202307301408" />
    <div className="ml-2 badge badge-outline">
      Rust
    </div>
    <LinkDescription>
      {t('blog_post_ssg')}
    </LinkDescription>
  </>
)

const KagiBlogPost = ({ t }) => (
  <>
    <LinkTitle
      title="Making a web app that sends and receives emails"
      href="https://bloggeroo.dev/articles/202504031434" />
    <div className="ml-2 badge badge-outline">
      Golang
    </div>
    <div className="ml-2 badge badge-outline">
      AWS ECS + Fargate
    </div>
    <div className="ml-2 badge badge-outline">
      Pulumi
    </div>
    <LinkDescription>
      {t('blog_post_kagi')}
    </LinkDescription>
  </>
)

const OSSList = ({ title, categoryDesc, children }) => (
  <>
    <Title textSize="text-lg">
      <span>{title}</span>
      {categoryDesc && <span className="text-secondary font-sans ml-2" style={{ fontSize: '0.875em' }}>— {categoryDesc}</span>}
    </Title>
    <ul className="list-none pl-0 pb-8">
      {children}
    </ul>
  </>
)

const titleSizeMap = {
  'text-lg': '1.125em',
  'text-xl': '1.25em',
  'text-2xl': '1.5em',
  'text-4xl': '2.25em',
}

const Title = ({ children, textSize = 'text-2xl', id = undefined }) => {
  return (
    <div id={id} className="flex items-start">
      <div
        className="border-solid rounded-full border-black border-0
        py-2 flex-initial flex flex-row items-baseline
        font-serif text-emphasis"
        style={{ fontSize: titleSizeMap[textSize] || '1.5em' }}
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
        className={`rounded-full p-2 border-2 border-primary
              ${active && " bg-highlight" || " bg-primary "}`}
      >
        {children}
      </div>
    </button>
  )
}

const Section = ({ children, id }) => {
  return (
    // <div className="sideburns -mx-4">
    <div className="sideburns">
      <section id={id} className="px-4">{children}</section>
    </div>
  )
}

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-5 h-5 inline-block cursor-help">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
)

const OSSBody = ({ pr, repo, projectDesc, desc }) => {
  const repoName = repo.split('/').pop()
  return (
    <BodyListItem>
      <div className="flex items-baseline gap-2">
        {projectDesc ? (
          <span className="tooltip tooltip-right flex-shrink-0 text-link font-bold" data-tip={projectDesc}>
            <InfoIcon />
          </span>
        ) : (
            <span className="flex-shrink-0 w-4"></span>
          )}
        <div>
          <a className="anchor font-bold" href={`https://github.com/${repo}/pull/${pr}`}
            target="_blank" >
            {repoName}
          </a>
          <p>{desc}</p>
        </div>
      </div>
    </BodyListItem>
  )
}

const FourGrid = ({ children }) => {
  return <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">{children}</div>
}

const Horizontal = ({ children }) => (
  <div className="flex flex-1 flex-row space-x-2">{children}</div>
)

const Sidebar = ({ items, activeId, onNavigate, t }) => (
  <nav
    className="hidden lg:block lg:w-44 lg:flex-shrink-0 lg:sticky lg:self-start lg:pr-6"
    style={{ top: '50vh', transform: 'translateY(-50%)' }}
  >
    <ul className="space-y-3">
      {items.map(({ id, label }) => (
        <li key={id}>
          <button
            onClick={() => onNavigate(id)}
            className={`text-left text-sm transition-colors duration-150 w-full py-0.5 ${activeId === id
              ? 'text-link font-bold border-l-2 border-link pl-2'
              : 'text-secondary hover:text-body pl-2.5'
              }`}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  </nav>
)

function Home({ t, i18n }) {
  const [theme, setTheme] = useLocalStorage('theme', 'theme-light')
  const [lang, setLang] = useLocalStorage('lang', i18n.language)
  const [fontScale, setFontScale] = useLocalStorage('font-scale', 1)
  useEffect(() => {
    i18n.changeLanguage(lang)
    document.documentElement.lang = lang
  }, [lang])
  const clampedScale = Math.min(Math.max(fontScale, 0.8), 1.4)
  const adjustFont = (delta) => setFontScale(Math.min(Math.max(clampedScale + delta, 0.8), 1.4))

  const [activeSection, setActiveSection] = useState('about')
  const sectionRefs = useRef({})

  const navItems = [
    { id: 'about', label: t('subheader') },
    { id: 'blog', label: t('blog_post_title') },
    { id: 'open-source', label: t('open_source') },
    { id: 'personal', label: t('personal') },
    { id: 'work', label: t('work') },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: t('contact') },
  ]

  const handleNavigate = (id) => {
    setActiveSection(id)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.15
      let current = navItems[0].id
      for (const { id } of navItems) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // initial check
    return () => window.removeEventListener('scroll', onScroll)
  }, [navItems])

  return (
    <div
      className={`${theme}
        bg-primary
        min-h-screen
        text-body`}
    >
      {/* Fixed font-size controls */}
      <div className="fixed top-4 right-4 z-50 flex items-baseline gap-2 text-link bg-primary bg-opacity-90 rounded-lg px-3 py-2 border border-secondary shadow-sm">
        <button onClick={() => adjustFont(-0.1)} className="hover:opacity-70 transition-opacity font-bold text-xl leading-none" aria-label="Decrease font size">A-</button>
        <button onClick={() => adjustFont(0.1)} className="hover:opacity-70 transition-opacity font-bold text-2xl leading-none" aria-label="Increase font size">A+</button>
      </div>

      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row lg:px-4">
        <Sidebar items={navItems} activeId={activeSection} onNavigate={handleNavigate} t={t} />

        <div className="flex-1 mx-auto my-2 space-y-6 px-2"
          style={{
            maxWidth: `calc(clamp(28rem, 45vw, 42rem) * ${Math.min(clampedScale, 1.25)})`,
            fontSize: `calc(clamp(0.9rem, 0.8vw + 0.75rem, 1.05rem) * ${clampedScale})`
          }}
        >
          <Head>
            <title>Jose Vargas</title>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          </Head>

          <main className=" space-y-6 flex flex-col">
            <FourGrid>
              <Pill active={lang == 'en'} onClick={() => setLang('en')}>
                <p>English</p>
              </Pill>
              <Pill active={lang == 'es'} onClick={() => setLang('es')}>
                <p>Español</p>
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
            <h1 className="bg-primary font-serif text-emphasis" style={{ fontSize: '2.25em' }}>
              {t('header')}
            </h1>
            <Section id="about">
              <Title>
                <h2>{t('subheader')}</h2>
              </Title>
              <div className="pl-6">
                <Body>
                  <p>{t('aboutme')}</p>
                  <div className="pt-6" >
                    <p>{t('work_with_me')}</p>
                  </div >
                  <BulletList className="pb-4">
                    <div className="pt-3 space-y-2">
                      <li>{t('aboutme_b_1')}</li>
                      <li>{t('aboutme_b_2')}</li>
                      <li>{t('aboutme_b_3')}</li>
                    </div>
                  </BulletList>
                  <p>{t('aboutme_3')}</p>
                  <BulletList>
                    <div className="pt-3">
                      <li>TypeScript, Elixir, Rust, NixOS, Docker, PostgreSQL, AWS.</li>
                    </div>
                  </BulletList>

                  {
                    // t('available')
                    // <a className="anchor" href="#pricing">[Pricing]</a>
                  }
                </Body>
              </div>
            </Section>
            <Section id="blog">
              <Title>
                <a name="blog">{t('blog_post_title')}</a>
              </Title>
              <BulletList>
                <BodyListItem>
                  {KagiBlogPost({ t })}
                </BodyListItem>
                <BodyListItem>
                  {HMACBlogPost({ t })}
                </BodyListItem>
                <BodyListItem>
                  {NixosMCBlogPost({ t })}
                </BodyListItem>
                <BodyListItem>
                  {RustSSGBlogPost({ t })}
                </BodyListItem>
              </BulletList>
            </Section>
            <Section id="open-source">
              <Title>
                <a name="openSource">{t('open_source')}</a>
              </Title>
              <OSSList title="OpenCode" categoryDesc="AI coding agent ecosystem">
                <OSSBody
                  pr="24725"
                  repo="anomalyco/opencode"
                  projectDesc="Open-source AI coding agent"
                  desc={<><strong>UX improvement:</strong> sort session picker by full updated timestamp while keeping order stable while browsing.</>}
                />
              </OSSList>
              <OSSList title="PowerSync" categoryDesc="Offline-first sync engine for SQLite, PostgreSQL, MongoDB and MySQL">
                <OSSBody
                  pr="554"
                  repo="powersync-ja/powersync-service"
                  projectDesc="Sync engine backend service"
                  desc={<>Detect silent <a className="anchor" href="https://www.postgresql.org/docs/current/warm-standby.html#STREAMING-REPLICATION-SLOTS" target="_blank">Postgres WAL slot</a> failure mid-sync and abort early instead of completing a doomed hours-long snapshot, with budget monitoring and actionable error guidance.{' '}<a className="anchor" href="https://github.com/powersync-ja/powersync-service/pull/554" target="_blank">(20+ review comments)</a></>}
                />
                <OSSBody
                  pr="535"
                  repo="powersync-ja/powersync-service"
                  projectDesc="Sync engine backend service"
                  desc="Railroad diagram generation from EBNF grammars for sync-rules documentation."
                />
                <OSSBody
                  pr="372"
                  repo="powersync-ja/powersync-docs"
                  projectDesc="Official documentation (Mintlify)"
                  desc="Grammar reference with 41 railroad syntax diagrams and cross-linked navigation."
                />
                <OSSBody
                  pr="499"
                  repo="powersync-ja/powersync-service"
                  projectDesc="Sync engine backend service"
                  desc="Redesign Postgres compaction algorithm — replace a fragile unicode sentinel approach for prefix-matching data groups with exact key lookups, eliminating sequential table scans in favor of efficient index access across 12 packages."
                />
              </OSSList>
              <OSSList title="GraphQL" categoryDesc="API query language and tooling">
                <OSSBody
                  pr="2560"
                  repo="graphile/crystal"
                  projectDesc="Auto-generates a performant GraphQL API from a PostgreSQL schema"
                  desc={<>Improve TypeScript's type inference for GraphQL queries within the <a className="anchor" href="https://postgraphile.org/">postgraphile.org</a> project.</>}
                />
              </OSSList>
              <OSSList title="Elixir" categoryDesc="Fault-tolerant real-time web apps">
                <OSSBody
                  pr="1911"
                  repo="livebook-dev/livebook"
                  projectDesc="Interactive notebook environment for Elixir"
                  desc="Add doctest decorations to Monaco editor per result."
                />
                <OSSBody
                  pr="3967"
                  repo="elixir-ecto/ecto"
                  projectDesc="Database wrapper and query generator for Elixir"
                  desc="Support preloading associations in embedded schemas from the parent schema."
                />
                <OSSBody
                  pr="2340"
                  repo="phoenixframework/phoenix_live_view"
                  projectDesc="Real-time user experiences with server-rendered HTML for Elixir"
                  desc={<><strong>Docs:</strong> Explain sockets as a server-only data struct{' '}<a className="anchor" href="https://github.com/phoenixframework/phoenix_live_view/commit/41d5ab8f7ff3beaaaca53f1c9b68983c3da77a00" target="_blank">(merge commit)</a></>}
                />
                <OSSBody
                  pr="2336"
                  repo="phoenixframework/phoenix_live_view"
                  projectDesc="Real-time user experiences with server-rendered HTML for Elixir"
                  desc={<><strong>Docs:</strong> Update sample code for on_mount authentication.</>}
                />
                <OSSBody
                  pr="4051"
                  repo="elixir-ecto/ecto"
                  projectDesc="Database wrapper and query generator for Elixir"
                  desc={<><strong>Docs:</strong> Clarify Ecto.Query filtering behavior.</>}
                />
                <OSSBody
                  pr="1682"
                  repo="livebook-dev/livebook"
                  projectDesc="Interactive notebook environment for Elixir"
                  desc={<><strong>Docs:</strong> Clarify running Livebook inside a Mix project.</>}
                />
              </OSSList>
              <OSSList title="TailwindCSS" categoryDesc="Utility-first CSS framework">
                <OSSBody
                  pr="1378"
                  repo="tailwindlabs/tailwindcss.com"
                  projectDesc="Official website and documentation for Tailwind CSS"
                  desc={<><strong>Docs:</strong> Add arbitrary-variants section in arbitrary-values.</>}
                />
              </OSSList>
              <OSSList title="Neovim" categoryDesc="Modal text editor plugins">
                <OSSBody
                  pr="268"
                  repo="renerocksai/telekasten.nvim"
                  projectDesc="Neovim plugin for Zettelkasten note-taking"
                  desc="Create subdirs when creating new note"
                />
                <OSSBody
                  pr="1626"
                  repo="hrsh7th/nvim-cmp"
                  projectDesc="Autocompletion engine for Neovim"
                  desc={<><strong>Docs:</strong> Expand docs for select_next_item select_prev_item</>}
                />
              </OSSList>
              <OSSList title="Emacs" categoryDesc="Extensible text editor ecosystem">
                <OSSBody
                  pr="212"
                  repo="lassik/emacs-format-all-the-code"
                  projectDesc="Auto-format code in Emacs using external formatters"
                  desc="Add support for HTML+EEX"
                />
                <OSSBody
                  pr="23"
                  repo="lassik/emacs-language-id"
                  projectDesc="Language detection for Emacs formatters"
                  desc="Add HTML+EEX language-id"
                />
                <OSSBody
                  pr="6900"
                  repo="doomemacs/doomemacs"
                  projectDesc="Emacs configuration framework for Vim refugees"
                  desc="fix(highlight-indent-guides): for terminal users"
                />
                <OSSBody
                  pr="409"
                  repo="ananthakumaran/tide"
                  projectDesc="TypeScript IDE features for Emacs"
                  desc="Fix tide-rename-file bug on new buffer name"
                />
                <OSSBody
                  pr="19"
                  repo="andre-r/centered-cursor-mode.el"
                  projectDesc="Keeps cursor vertically centered in Emacs"
                  desc="Only use mouse-wheel variables when bound"
                />
              </OSSList>
            </Section>
            {hobbySection({ t, id: 'personal' })}
            {
              // TODO embed yinyang with loop
              // - make it a video that can be
              //   unfolded
              // - need to replace mov with better
              //   one that loops nicely, or make
              //   high qual gif (eh)
            }
            <Section id="work">
              <Title>
                <p>{t('work')}</p>
              </Title>
              <div className="pl-6">
                <Body>
                  <p>{t('workdesc')}</p>
                </Body>
              </div>
            </Section>
            <Section id="pricing">
              <Title>
                <p>Pricing</p>
              </Title>
              <Body>
                <div className="pl-6">
                  <p>I contribute to the frameworks your stack runs on. The sections above show what I ship to production OSS; I bring the same standard to client work. Flat rate of <b>70 USD/hour</b>, lower at a <a className="anchor" target="_blank" href="https://www.investopedia.com/terms/d/dayrate.asp">day-rate</a> or for full-time engagements.</p>
                </div>
                <Alert />
              </Body>
            </Section>
            <Section id="contact">
              <Title>
                <p>{t('contact')}</p>
              </Title>
              <div className="pl-6">
                <Horizontal className="flex-center">
                  <a target="_blank" className="anchor" href="https://github.com/Sleepful">
                    GitHub
              </a>
                  <a
                    target="_blank"
                    className="anchor"
                    href="https://www.linkedin.com/in/jose-pablo-vargas-campos-685a4b172/"
                  >
                    LinkedIn
              </a>
                  <a
                    target="_blank"
                    className="anchor"
                    href="https://stackoverflow.com/users/2446144/jose-v"
                  >
                    Stack Overflow
              </a>
                </Horizontal>
                <Horizontal>
                  <a target="_blank" className="anchor" href="mailto:josepablov+biz@gmail.com">
                    josepablov+biz@gmail.com
                </a>
                </Horizontal>
              </div>
              <div className="pl-6 pt-6">
                <p >
                  Please, no soliciting for unpaid work. Equity does not count as payment.
                </p>
              </div>
            </Section>
          </main>
          <footer>
            {t('themeby')}{' '}
            <a target="_blank" className="anchor" href="https://github.com/altercation/solarized">
              Solarized
          </a>
          </footer>
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default withTranslation('common')(Home)
