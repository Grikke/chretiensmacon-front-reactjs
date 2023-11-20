import { GetStaticProps } from 'next'

import { addApolloState, initializeApollo } from '../lib/appolo'
import { useState, useEffect } from 'react'
import { useAtomValue } from 'jotai'
import { parish } from '../lib/atom'
import { getSchedules, IScheduleItem } from '../lib/informations'
import ScheduleCalendar from '../components/app-components/ScheduleCalendar/ScheduleCalendar'
import CustomHead from '../components/app-components/CustomHead'

type ISchedulesPage = {
  schedules: IScheduleItem[]
}


export default function NewsPage({schedules} : ISchedulesPage) {
  const activeParish = useAtomValue(parish)
  const [mainSchedules] = useState(schedules.filter(schedule => !schedule?.schedulePost?.seasonal))
  const [seasonalSchedules] = useState(schedules.filter(schedule => schedule?.schedulePost?.seasonal))

  return (
    <div>
      <CustomHead title={"Horaires"} description="Horaires des messes et offices de la paroisse."/>
      <div className="section-container main-schedule">
        {mainSchedules.map((schedule, index) => (<div key={index} className="schedule-item">
          <h2 className="schedule-title">{schedule.title}</h2>
          <pre className="schedule-description">{schedule.schedulePost.description}</pre>
          {(activeParish === 'vincent' || activeParish === 'estienne') && <ScheduleCalendar calendar={schedule.schedulePost?.[activeParish]}/>}
        </div>))}
      </div>
      <div className="section-container seasonal-schedule">
        {seasonalSchedules.map((schedule, index) => (<div key={index} className="schedule-item">
          <h2 className="schedule-title">{schedule.title}</h2>
          <pre className="schedule-description">{schedule.schedulePost.description}</pre>
          {(activeParish === 'vincent' || activeParish === 'estienne') && <ScheduleCalendar calendar={schedule.schedulePost?.[activeParish]}/>}
        </div>))}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    //Initialize Apollo Client for SSR
    const client = initializeApollo()
    const { data } = await client.query({ query: getSchedules })

    if (!data?.schedules?.nodes)
      return { notFound: true }
    return addApolloState(client, {
      props: { pageType: 'schedules', schedules: data?.schedules?.nodes },
      revalidate: 30,
    })
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}
