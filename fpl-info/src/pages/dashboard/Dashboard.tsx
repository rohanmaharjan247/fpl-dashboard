// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEntryEvent, usePageTitle } from "@/lib/app-utils/hook"
import {
  CurrentGameweekStats,
  NextGameweekInfo,
  FeaturedPlayers,
  GameweekPointsChart,
  NextFixtures,
  CurrentFixtures,
  UserLeagues,
  MVPCard,
} from "@/components/app/Dashboard"
import { useFPLContext } from "@/lib/app-utils/context/fpl-context"
import { useMemo } from "react"

const Dashboard = () => {
  usePageTitle("Dashboard")
  const { entry } = useFPLContext()
  const { entryPickElement } = useEntryEvent(entry?.id, entry?.current_event)

  const entryGameweekMVP = useMemo(() => {
    if (entryPickElement) {
      const mvp = entryPickElement.reduce((acc, curr) => {
        return acc &&
          acc.element_detail!.total_points > curr!.element_detail!.total_points
          ? acc
          : curr
      })
      return mvp
    }
  }, [entryPickElement])

  return (
    <section id='dashboard' className='px-8 py-12'>
      <CurrentGameweekStats
        entryGWPoint={entry?.summary_event_points ?? 0}
        entryGWRank={entry?.summary_event_rank ?? 0}
      />
      <div className='grid grid-cols-3 gap-4 my-8'>
        <div className='col-span-2'>
          <div className='bg-white rounded-md p-4 h-full'>
            <div className='flex gap-8'>
              <div className='font-bold text-sm'>
                {entry?.player_first_name} {entry?.player_last_name}'s Gameweek
                Point History
              </div>
            </div>
            <div className='w-full h-full'>
              <GameweekPointsChart entryId={entry?.id} />
            </div>
          </div>
        </div>
        <div>
          <MVPCard entryGameweekMVP={entryGameweekMVP} />
          <div className='rounded-md bg-white p-4 my-4'>
            <div>{entry && <UserLeagues entry={entry} />}</div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div>
          <CurrentFixtures />
        </div>
        <div>
          <NextGameweekInfo />
          <FeaturedPlayers />
        </div>
        <div>
          <NextFixtures />
        </div>
      </div>
    </section>
  )
}

export default Dashboard
