import { useCurrentGameweek, useEventStatus } from "@/lib/app-utils/hook"
import { format } from "date-fns"

type CurrentGameweekStatsProps = {
  entryGWPoint: number
  entryGWRank: number
}

const CurrentGameweekStats = ({
  entryGWPoint,
  entryGWRank,
}: CurrentGameweekStatsProps) => {
  const currentGameweek = useCurrentGameweek()
  const { data: eventStatus } = useEventStatus()
  return (
    <div className='flex gap-32'>
      <div>
        <h1 className='font-bold text-2xl'>{currentGameweek?.name}</h1>
        <div className='text-gray-600'>{`${
          eventStatus &&
          format(new Date(eventStatus.status.at(0)!.date), "d MMM yyy")
        } - ${
          eventStatus &&
          format(new Date(eventStatus.status.at(-1)!.date), "d MMM yyy")
        }`}</div>
      </div>
      <div className='flex justify-evenly items-end gap-8'>
        <div>
          <span className='bg-primary rounded-sm text-white px-2 font-bold text-lg'>
            {entryGWPoint}
          </span>
          <div className='text-xs text-gray-400 mt-1 font-semibold'>
            Your GW point
          </div>
        </div>
        <div>
          <div className='font-bold text-lg'>
            {currentGameweek?.average_entry_score}
          </div>
          <div className='text-xs text-gray-400 mt-1 font-semibold'>
            Avg. Point
          </div>
        </div>
        <div>
          <div className='font-bold text-lg'>
            {currentGameweek?.highest_score}
          </div>
          <div className='text-xs text-gray-400 mt-1 font-semibold'>
            Highest Point
          </div>
        </div>
        <div>
          <div className='font-bold text-lg'>
            {entryGWRank.toLocaleString()}
          </div>
          <div className='text-xs text-gray-400 mt-1 font-semibold'>
            Gameweek Rank
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentGameweekStats
