import { EntryClassicLeague } from "fpl-api"
import { Link } from "react-router-dom"

type UserLeagueCardProps = {
  league: EntryClassicLeague
}

const UserLeagueCard = ({ league }: UserLeagueCardProps) => {
  return (
    <div key={league.id} className='flex justify-between py-2 border-b'>
      <Link
        to={`/league/${league.id}`}
        className='font-semibold hover:underline'
      >
        {league.name}
      </Link>
      <div>{league.entry_rank.toLocaleString()}</div>
    </div>
  )
}

export default UserLeagueCard
