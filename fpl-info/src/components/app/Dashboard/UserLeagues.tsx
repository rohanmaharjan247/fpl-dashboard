import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Entry } from "fpl-api"
import UserLeagueCard from "./UserLeagueCard"
import { useEntryClassicLeagues } from "@/lib/app-utils/hook"
import { NavLink } from "react-router-dom"

type UserLeaguesProps = {
  entry: Entry
}

const UserLeagues = ({ entry }: UserLeaguesProps) => {
  const entryLeagues = useEntryClassicLeagues()
  return (
    <>
      <>
        <div className='font-bold mb-4 text-primary'>
          {" "}
          {`${entry?.player_first_name} ${entry?.player_last_name}'s Leagues`}
        </div>
        <div>
          {entryLeagues
            ?.filter((x) => x.league_type === "x")
            .slice(0, 4)
            .map((league) => (
              <UserLeagueCard key={league.id} league={league} />
            ))}
        </div>
        <div className='text-right  mt-2'>
          <NavLink
            to={"/leagues"}
            className='text-sm text-primary hover:underline'
          >
            See More
            <FontAwesomeIcon icon={faArrowRightLong} className='ml-1' />
          </NavLink>
        </div>
      </>
    </>
  )
}

export default UserLeagues
