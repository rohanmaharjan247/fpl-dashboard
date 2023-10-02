import { Entry } from "fpl-api"

type EntryBasicStatsProps = {
  entry?: Entry
}

const EntryBasicStats = ({ entry }: EntryBasicStatsProps) => {
  return (
    <div className='card'>
      <div className='font-bold text-xl mb-4'>
        Gameweek {entry?.current_event}
      </div>
      <div className='flex justify-between gap-4 text-center'>
        <div>
          <div>Total Points</div>
          <div className='text-lg font-bold'>
            {entry?.summary_overall_points}
          </div>
        </div>
        <div>
          <div>GW Points</div>
          <div className='text-lg font-bold'>{entry?.summary_event_points}</div>
        </div>
        <div>
          <div>Value</div>
          <div className='text-lg font-bold'>
            {`$${(entry?.last_deadline_value ?? 0) / 10}m`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EntryBasicStats
