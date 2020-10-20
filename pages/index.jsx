import Head from 'next/head'
import { withTranslation } from '../i18n'



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
        font-serif text-2xl">
        {children}
      </div>
    </div>
  )
}

const Pill = ({ children }) => {
  return (
    <div className="border-solid rounded-full border-black border-2
        p-2 flex-initial flex flex-row
        ">
      {children}
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
  return (
    <div className="
      h-screen
      theme-default bg-primary
      flex flex-col max-w-md mx-auto my-2">
      <Head>
        <title>Jose Vargas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="theme-default bg-primary
        space-y-6 flex flex-col">
        <Horizontal>
          <Pill>
            <p>Español</p>
          </Pill>
          <Pill>
            <p>English</p>
          </Pill>
          <Pill>
            <p>Theme1</p>
          </Pill>
          <Pill>
            <p>Theme2</p>
          </Pill>
        </Horizontal>
        <h1 className="bg-primary font-serif text-4xl text-gray-800">
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
            <p>TypeScript, ReactJs, TailwindCSS, NextJs, NodeJs, GraphQl, CSS
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
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})


export default withTranslation('common')(Home)
