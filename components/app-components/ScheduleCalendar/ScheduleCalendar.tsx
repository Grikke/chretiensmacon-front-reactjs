import clsx from 'clsx';
import { ICalendar } from '../../../lib/informations';

export type IScheduleCalendar = {
  calendar: ICalendar
}
export type IDayElement = {
  name: string
  day?: string
  isToday: boolean
}

const DayElement = ({
 name,
 day,
 isToday
}: IDayElement) => {
  if (!day)
    return (<></>)
  return (
    <div className={clsx("day-item", isToday && "day-today")}>
      <div className="day-name">{name}</div>
      <div className="day-detail">
        <pre>
          {day}
        </pre>
      </div>
    </div>
  )
}

const ScheduleCalendar = (
  (
    {calendar} : IScheduleCalendar
  ) => {
    let translations: {[key: string]: string} = {
      monday: 'Lundi',
      tuesday: 'Mardi',
      wednesday: 'Mercredi',
      thursday: 'Jeudi',
      friday: 'Vendredi',
      saturday: 'Samedi',
      sunday: 'Dimanche'
    }
    let weekDays = [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday'
    ]
    let weekEndDays = [
      'saturday',
      'sunday'
    ]
    let date = new Date()
    console.log(date.getDay())
    return (
      <div className="calendar-schedule">
        <div className="calendar-week">
          {weekDays.map((day, index) => 
            <DayElement 
              name={translations?.[day]} 
              key={index} 
              day={calendar?.[day]} 
              isToday={date.getDay() - 1 === index}
            />
          )}
        </div>
        <div className="calendar-week-end">
          {weekEndDays.map((day, index) => 
            <DayElement 
              name={translations?.[day]} 
              key={index} day={calendar?.[day]} 
              isToday={date.getDay() === 6 && index === 0 || date.getDay() === 0 && index === 1}
            />
          )}
        </div>
        <div>
          <pre className="calendar-description">{calendar.relatedInformations}</pre>
        </div>
      </div>
    )
  }
)

export default ScheduleCalendar
