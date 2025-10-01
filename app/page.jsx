import React from 'react'
import { Button } from '@/components/ui/button'
import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
const Page = () => {
  return (
    <>
    <main>
      <h1 >Popular Companions</h1>
      <section className='home-section'>
      <CompanionCard 
      id = "1"
      name = "Neura the Brainy Explorer"
      topic = " Neural Network of the Brain"
      duration = {45}
      subject='Science'
      color= "#e4d1ff"
      />
       <CompanionCard 
      id = "2"
      name = "Countsy the Number Wizard"
      topic = " Derivatives & Integrals"
      duration = {30}
      subject='Maths'
      color= "#ffdb6f"
      />
       <CompanionCard 
      id = "3"
      name = "Verba the Vocabulary Builder"
      topic = " English Literature "
      duration = {30}
      subject ='English literature'
      color= "#bde7ff"
      />
      </section>
      <div className='home-section'>
      <CompanionList
      title = "Recently Completed Sessions"
      companions = {recentSessions}
      classNames = "w-2/3 max-lg:w-full"
      />
      <CTA />
      </div>
    </main>
    
    </>
  )
}

export default Page