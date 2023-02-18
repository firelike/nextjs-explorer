import Link from "next/link";

export default function Home() {
  return (
    <main>
        <h1>NextJs Explorer</h1>
        <Link href={'/countries'}>List of Countries</Link>
    </main>
  )
}
