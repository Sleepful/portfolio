import Link from 'next/link'

export default function Greeting() {
  return (
    <>
      <main>
        <h1 className="title">
          Hello
        </h1>
        <h1>I'm Jose</h1>
        <h1>Welcome to my page! </h1>
        <Link href="/home"><a>Continue</a></Link>
      </main>

      <footer>
          The footer
      </footer>
    </>
  )
}
