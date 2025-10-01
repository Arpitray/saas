import React from 'react'
import Link from 'next/link'
function CTA() {
  return (
    <section className='cta-section'> 
    <div className="cta-badge">Start learning Your way</div>
    <h2 className="text-3xl font-bold">Build and Pesonalize Learning Companion </h2>
    <p>
      Pick a name, subject, voice, & personality — and start learning through voice conversations that feel natural and fun.
    </p>
    <img width={362} height={132} src="/images/cta.svg" alt="" />
    <button className='btn-primary p-4 rounded-lg bg-orange-500'>
      <img height={12} width={12} src="/icons/plus.svg" alt="" />
      <Link href="/companions/new">
      <p>Build a New Companion</p></Link>
      
    </button>
    </section>
  )
}

export default CTA
