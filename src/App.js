import React from 'react'
import Reviews from './Reviews'

export default function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Our review</h2>
          <div className='underline'></div>
        </div>
        <Reviews />
      </section>
    </main>
  )
}
