import React from 'react'
import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import {API_URL} from '@/config/index'
import Link from 'next/link'

export default function HomePage({events}) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {
        !events.length && <h3>No events to show</h3>
      }
      {
        events.map(evt => (
          <EventItem key={evt.id} evt={evt}/>
        ))
      }
      {
        events.length && <Link href='/events'>
          <a className='btn-secondary'>View All Events</a>
        </Link>
      }
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`)
  const events = await res.json()

  return {
    props: {events: events},
    revalidate: 1
  }
}