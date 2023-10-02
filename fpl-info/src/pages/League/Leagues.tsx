import { H2HTable, LeagueTable } from "@/components/app/Leagues"
import {
  useEntryClassicLeagues,
  useEntryH2HLeague,
  usePageTitle,
} from "@/lib/app-utils/hook"

const Leagues = () => {
  usePageTitle("Leagues")
  const leagues = useEntryClassicLeagues()
  const h2h = useEntryH2HLeague()
  return (
    <div className='grid grid-cols-2 gap-4 p-4'>
      <div className='card'>
        <h1 className='text-lg font-bold mb-4'>Invitational Classic Leagues</h1>
        <LeagueTable leagues={leagues} />
      </div>
      <div className='card'>
        <h1 className='text-lg font-bold mb-4'>
          Invitational Head-to-Head Leagues
        </h1>
        <H2HTable h2h={h2h} />
      </div>
    </div>
  )
}

export default Leagues
