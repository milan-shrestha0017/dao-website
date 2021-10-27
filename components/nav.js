import Link from 'next/link'

export default function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/ff-daily">
            <a>FF Daily</a>
          </Link>
        </li>
        <li>
          <Link href="/bounty-list">
            <a>Bounty List</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
