import { SignedIn } from '@clerk/nextjs'
import React from 'react'

export default function AboutPage() {
  return (
    <SignedIn>
      <div>
        <h1>About Page</h1>
      </div>
    </SignedIn>
  )
}
