'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href="/login">Login</Link>
        <br />
        <Link href="/dashboard">Dashboard</Link>
        <br />
        <Link href="/register">Register</Link>
        <br />
        <Link href="/recovery">Recovery</Link>
      </div>
    </div>
  );
}
