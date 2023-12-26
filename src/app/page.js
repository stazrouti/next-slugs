"use client";
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <p>Blogs using files name</p>
      <div>
        <Link href="/Blogs/Blog1">
          Go to Blog1
        </Link>
      </div>
      <div>
        <Link href="/Blogs/Blog2">
          Go to Blog2
        </Link>
      </div>
      <div>
        <Link href="/Blogs/Blog3">
          Go to Blog3
        </Link>
      </div>

      <p>Blogs using slugs name</p>
      <div>
        <Link href="/Blogs/Blog1">
          Go to Blog1
        </Link>
      </div>
      <div>
        <Link href="/Blogs/Blog2">
          Go to Blog2
        </Link>
      </div>
      <div>
        <Link href="/Blogs/Blog3">
          Go to Blog3
        </Link>
      </div>
    </>
  )
}
