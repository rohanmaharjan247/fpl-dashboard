import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Fixtures } from "@/lib/app-utils/hook"
import { format } from "date-fns"

type NextFixtureCardProps = {
  fixture: Fixtures
}

const NextFixtureCard = ({ fixture }: NextFixtureCardProps) => {
  return (
    <div className='bg-white rounded-md p-6 my-2'>
      <div className='flex gap-4'>
        <div className='flex gap-1 items-center'>
          <Avatar>
            <AvatarImage
              src={`https://resources.premierleague.com/premierleague/badges/t${fixture.home_team?.code}.png`}
            />
            <AvatarFallback>{fixture.home_team?.short_name}</AvatarFallback>
          </Avatar>
          <div>V</div>
          <Avatar>
            <AvatarImage
              src={`https://resources.premierleague.com/premierleague/badges/t${fixture.away_team?.code}.png`}
            />
            <AvatarFallback>{fixture.away_team?.short_name}</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className='text-primary text-xl font-bold'>
            {format(new Date(fixture.kickoff_time), "hh:mm")}
          </div>
          <div className='text-gray-400 text-xs'>
            {fixture.home_team?.name} V {fixture.away_team?.name}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NextFixtureCard
