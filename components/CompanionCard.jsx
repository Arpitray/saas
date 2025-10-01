import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
/**
 * @typedef {Object} CompanionCardProps
 * @property {string} id
 * @property {string} name
 * @property {string} topic
 * @property {number} duration
 * @property {string} color
 * @property {string} subject
 */

/**
 * @param {CompanionCardProps} props
 */
function CompanionCard({ id, name, topic,subject, duration, color }) {
  return (
    <div
      className="companion-card flex"
      style={color ? { backgroundColor: color } : undefined}
      data-id={id}
    >
        <div className='flex justify-between items-center'>
            <div className='subject-badge'>{subject}</div>
            <button className="companion-bookmark">
          <img width={12.5} height={15} src="/icons/bookmark.svg" alt="" />
            </button>
        </div>
      <div className="companion-card-header">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-sm">{topic}</p>
      </div>
      <div className="companion-card-footer">
        <div className='flex items-center gap-2'>
            <img width={13.5} height={13.5} src="/icons/clock.svg" alt="" />
            <span className="text-xs">{duration} min duration</span>
        </div>
        
      </div>
      <Link  href ={`/companions/${id}`}>
      <Button className="launch-lesson-btn cursor-pointer flex justify-center w-full bg-amber-600">
        Launch lesson
        </Button>
        </Link>
    </div>
  )
}

export default CompanionCard
