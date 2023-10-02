import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TEAM_IMG_URL } from "@/lib/app-utils/constants"
import { Fixtures } from "@/lib/app-utils/hook"

type CurrentFixtureCardProps = {
  fixture: Fixtures
}

const CurrentFixtureCard = ({ fixture }: CurrentFixtureCardProps) => {
  return (
    <div className='card my-2'>
      <div className='flex justify-center items-center gap-4'>
        <div className='basis-1/3 flex gap-2 justify-end items-center'>
          <div className='text-sm text-right'>
            <div>{fixture.home_team?.name}</div>
          </div>
          <div>
            <Avatar className='w-[32px] h-[32px]'>
              <AvatarImage
                src={TEAM_IMG_URL + `t${fixture.home_team?.code}.png`}
              />
              <AvatarFallback>{fixture.home_team?.short_name}</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className='basis-1/3 text-center px-2 py-3 rounded-md'>
          <div className='bg-primary text-primary-foreground rounded-md'>
            <span className='text-2xl font-bold'>{fixture.team_h_score}</span>
            <span className='text-2xl font-bold mx-2'>-</span>
            <span className='text-2xl font-bold'>{fixture.team_a_score}</span>
          </div>
        </div>
        <div className='basis-1/3 flex gap-2 justify-start items-center'>
          <div>
            <Avatar className='w-[32px] h-[32px]'>
              <AvatarImage
                src={TEAM_IMG_URL + `t${fixture.away_team?.code}.png`}
              />
              <AvatarFallback>{fixture.away_team?.short_name}</AvatarFallback>
            </Avatar>
          </div>
          <div className='text-sm'>
            <div className='hyphens-auto break-all'>
              {fixture.away_team?.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentFixtureCard
