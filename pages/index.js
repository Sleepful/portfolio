import Head from 'next/head'
import { withTranslation } from '../i18n'

const Card = () => {
  <div className="">

  </div>
}

function Home({t}) {
  return (
    <div className="
      h-screen
      theme-default bg-primary
      flex flex-col flex
      ">
      <Head>
        <title>Jose Vargas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="theme-default bg-primary">
        <div>english or español</div>
        <h1 className="bg-primary">
          {t('header')}
        </h1>
        <h2 className="">
          {t('subheader')}
        </h2>
        <p>{t('aboutme'      )}</p>
        <p>{t('technologies' )}</p>
        <p>{t('personal'     )}</p>
        <p>{t('p1title'      )}</p>
        <p>{t('p1desc'       )}</p>
        <p>{t('p2title'      )}</p>
        <p>{t('p2desc'       )}</p>
        <p>{t('p3title'      )}</p>
        <p>{t('p3desc'       )}</p>
        <p>{t('contact'      )}</p>
      </main>

      <footer>
        My github, my linkedin, my email
      </footer>
    </div>
  )
}


Home.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})


export default withTranslation('common')(Home)
