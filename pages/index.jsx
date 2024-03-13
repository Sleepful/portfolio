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

const BulletList = ({children}) => {
  return (
    <ul className="list-disc pl-6 pb-8">
      {children}
    </ul>
  )
}

const PricingTr = ({children, classes}) => 
  (<tr className={ "p-2 ${ classes }" }>
    {children}
  </tr>)

const PricingTh = ({children, center = true}) =>
  (<th className="p-2 px-4">
    <div className={ center && "flex justify-around" || "" } >
    {children}
    </div >
  </th>)

const PricingTd = ({children, center = true}) => (
  <td className="p-1 px-4">
    <div className={ center && "flex justify-around" || "" } >
    {children}
    </div >
  </td>)

const PricingBox = ({disabled = false, active = false, onClick}) => 
  <input 
    disabled={disabled} defaultChecked={active && true}
    onClick={onClick}
    className="checkbox border-2 border-primary" type="checkbox"/>

const PricingTable = ({t}) => {
  const [oss, setOss] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [daily, setDaily] = useState(false);
  const [manager, setManager] = useState(false);
  const prices = {
    oss: -10,
    fixed: 10,
    daily: 10,
    manager: 20,
  }
  const total = 60 
  + (oss && prices.oss || 0)
  + (fixed && prices.fixed + 0)
  + (daily && prices.daily + 0)
  + (manager && prices.manager + 0)

  return (
    <div className="overflow-x-auto flex justify-around">
      <table className="table">
        <thead>
          <tr className="bg-highlight text-body">
            <PricingTh>Quality</PricingTh>
            <PricingTh>Included</PricingTh>
            <PricingTh>Hourly cost</PricingTh>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <PricingTd center={ false }>Baseline</PricingTd>
            <PricingTd><PricingBox disabled active/></PricingTd>
            <PricingTd>60 USD</PricingTd>
          </tr>
          <tr className="bg-highlight">
            <PricingTd center={ false }>Open Source</PricingTd>
            <PricingTd><PricingBox onClick={() => setOss(!oss)}/></PricingTd>
            <PricingTd>{prices.oss} USD</PricingTd>
          </tr>
          <tr className="">
            <PricingTd center={ false }>Fixed Schedule</PricingTd>
            <PricingTd><PricingBox onClick={() => setFixed(!fixed)}/></PricingTd>
            <PricingTd>{prices.fixed} USD</PricingTd>
          </tr>
          <tr className="bg-highlight">
            <PricingTd center={ false }>Daily meetings</PricingTd>
            <PricingTd><PricingBox onClick={() => setDaily(!daily)}/></PricingTd>
            <PricingTd>{prices.daily} USD</PricingTd>
          </tr>
          <tr className="">
            <PricingTd center={ false }>Managerial role</PricingTd>
            <PricingTd><PricingBox onClick={() => setManager(!manager)}/></PricingTd>
            <PricingTd>{prices.manager} USD</PricingTd>
          </tr>
          <tr className="bg-highlight">
            <PricingTd center={ false }></PricingTd>
            <PricingTd>Total hourly cost:</PricingTd>
            <PricingTd><b>{total} USD</b></PricingTd>
          </tr>
        </tbody>
      </table>
    </div>)
}

  const Alert = () =>
    <div className="p-2 pt-4">
      <div role="alert" className="alert bg-highlight text-body">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span>I offer a free 30 minutes consultation for your project</span>
      <div>
        <a className="btn btn-sm border-primary border-2 bg-highlight hover:bg-primary hover:border-primary text-body" href="https://calendly.com/josepablov/meeting">Schedule</a>
      </div>
      </div>
      </div>


const LinkTitle = ({ title, href }) => 
  (<p className="pb-2 flex justify-between">
    <b>{ title }</b>
    <a className="anchor" href={href} >[link]</a>
  </p>)

const LinkDescription = ({ children }) => (
  <p className="p-2">
    {children}{' '}
  </p>
)

const hobbySection = ({t}) => { 
  return ( 
    <Section>
      <Title>
        <a name="this" />
        <p >{t('personal')}</p>
      </Title>
      <BulletList>
        <BodyListItem>
          <LinkTitle 
            title={ t('bloggeroo_title') }
            href="https://bloggeroo.dev"/>
          <LinkDescription>
            {t('bloggeroo_desc')}{' '}
            <a
              className="anchor"
              href="https://bloggeroo.dev/articles/202307301408"
            >
              How I did it
            </a>
            {" & "}
            <a
              className="anchor"
              href="https://github.com/Sleepful/Bloggeroo"
            >
              GitHub
            </a>.
          </LinkDescription>
        </BodyListItem>

        <BodyListItem>
          <LinkTitle 
             title={t('lsat_title')}
             href="https://lsat.fly.dev/"/>
          <LinkDescription>
            {t('lsat_desc')}{' '}
          </LinkDescription>
        </BodyListItem>
        <BodyListItem>
          <LinkTitle 
             title={t('p1title')}
             href="https://movie-searcher-site.netlify.app"/>
          <LinkDescription>
            {t('p1desc')}{' '}
            <a
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
             href="/static/YingYangTunnel_output_Spin.mov"/>
          <LinkDescription>
            {t('yinyang_description')}{' '}
            <a
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
             href="#this"/>
          <LinkDescription>
            {t('p3desc')}{' '}
            <a
              className="anchor"
              href="https://github.com/Sleepful/portfolio"
            >
              GitHub
            </a>.
          </LinkDescription>
        </BodyListItem>
      </BulletList>
    </Section> ) }

const HMACBlogPost = ({t}) => (
<>
    <LinkTitle 
      title="Verify HMAC signatures in Deno" 
      href="https://bloggeroo.dev/articles/202310212239"/>
    <LinkDescription>
      {t('blog_post_hmac')}
    </LinkDescription>
</>
)

const NixosMCBlogPost = ({t}) => (
<>
  <LinkTitle 
    title="NixOS Minecraft Server" 
    href="https://bloggeroo.dev/articles/202402292320"/>
  <LinkDescription>
    {t('blog_post_nixos_mc')}
  </LinkDescription>
</>
)

const RustSSGBlogPost = ({t}) => (
<>
    <LinkTitle 
      title="Making my Static Blog Generator" 
      href="https://bloggeroo.dev/articles/202307301408"/>
    <LinkDescription>
      {t('blog_post_ssg')}
    </LinkDescription>
</>
)

const OSSList = ({ title,  children }) => (
  <>
    <Title textSize="text-lg">
      <p>{title}</p>
    </Title>
    <BulletList>
      { children }
    </BulletList>
  </>
)

const Title = ({ children, textSize = 'text-2xl', id = undefined }) => {
  return (
    <div id={id} className="flex items-start text-lg">
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
  <BodyListItem>
    <a className="anchor" href={`https://github.com/${repo}/pull/${pr}`}>
      <b>{repo}</b>
    </a>
    <p>{desc}</p>
  </BodyListItem>
)

const FourGrid = ({ children }) => {
  return <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">{children}</div>
}

const Horizontal = ({ children }) => (
  <div className="flex flex-1 flex-row space-x-2">{children}</div>
)

function Home({ t, i18n }) {
  const [theme, setTheme] = useLocalStorage('theme', 'theme-dark')
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
            <div className="pl-6">
              <Body>
                <p>{t('aboutme')}</p>
                <p>{
                  // t('available')
                } <a className="anchor" href="#pricing">[Pricing]</a></p>
              </Body>
            </div>
          </Section>
          <Section>
            <Title>
              <p>{t('blog_post_title')}</p>
            </Title>
            <BulletList>
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
          <Section>
            <Title>
              <a name="openSource">{t('open_source')}</a>
            </Title>
            <OSSList title="Elixir">
            <BodyListItem>
              <a
                className="anchor"
                href="https://github.com/livebook-dev/livebook/pull/1911"
              >
                <b>livebook-dev/livebook</b>
              </a>
              <p>
                Add doctest decorations to Monaco editor per result.
              </p>
            </BodyListItem>
            <BodyListItem>
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
            </BodyListItem>
            <BodyListItem>
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
            </BodyListItem>
            <BodyListItem>
              <a
                className="anchor"
                href="https://github.com/phoenixframework/phoenix_live_view/pull/2336"
              >
                <b>phoenixframework/phoenix_live_view</b>
              </a>
              <p>Update sample code for on_mount authentication.</p>
            </BodyListItem>
            <BodyListItem>
              <a
                className="anchor"
                href="https://github.com/elixir-ecto/ecto/pull/4051"
              >
                <b>elixir-ecto/ecto</b>
              </a>
              <p>Add small clarification to Ecto.Query docs.</p>
            </BodyListItem>
            <BodyListItem>
              <a
                className="anchor"
                href="https://github.com/livebook-dev/livebook/pull/1682"
              >
                <b>livebook-dev/livebook</b>
              </a>
              <p>
                Small clarification to running Livebook inside a Mix project.
              </p>
            </BodyListItem>
            </OSSList>
            <OSSList title="TailwindCSS">
            <BodyListItem>
              <a
                className="anchor"
                href="https://github.com/tailwindlabs/tailwindcss.com/pull/1378"
              >
                <b>tailwindlabs/tailwindcss.com</b>
              </a>
              <p>Add arbitrary-variants section in arbitrary-values.</p>
            </BodyListItem>
            </OSSList>
            <OSSList title="Neovim">
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
            </OSSList>
            <OSSList title="Emacs">
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
            </OSSList>
          </Section>
          { hobbySection({t}) }
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
              <p>{t('work')}</p>
            </Title>
            <div className="pl-6">
              <Body>
                <p>{t('workdesc')}</p>
              </Body>
            </div>
          </Section>
          <Section>
            <Title id="pricing">
              <p>Pricing</p>
            </Title>
            <Body>
              <div className="pl-6 pb-2">
                  <p>I am currently available to work with new clients. The pricing depends on the characteristics of the job, you can calculate the hourly charge by selecting the qualities of the job.</p>
              </div>
              <PricingTable t={t}/>
              <Alert/>
            </Body>
          </Section>
          <Section>
            <Title>
              <p>{t('contact')}</p>
            </Title>
            <div className="pl-6">
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
            </div>
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
