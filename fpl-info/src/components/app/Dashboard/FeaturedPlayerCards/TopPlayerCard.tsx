import { Element, Event, Team } from "fpl-api"

type TopPlayerCardProps = {
  currentGameweek: Event
  topElement?: Element
  teamName?: Team
}

const TopPlayerCard = ({
  currentGameweek,
  topElement,
  teamName,
}: TopPlayerCardProps) => {
  return (
    <div className='rounded-md bg-primary text-primary-foreground px-4 pt-4'>
      <div className='text-sm font-semibold'>
        GW {currentGameweek?.id}'s star player
      </div>
      <div className='flex gap-4 mt-4'>
        <div>
          <img
            src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${topElement?.photo
              .split(".")
              .at(0)}.png`}
            alt={topElement?.web_name}
            className='w-[94px] aspect-[1/1.25]'
          />
        </div>
        <div>
          <div className='text-xs'>{topElement?.first_name}</div>
          <div className='text-lg font-semibold'>{topElement?.second_name}</div>
          <div className='italic text-xs'>{teamName?.name}</div>
          <div className='my-2 text-xl font-bold'>
            {currentGameweek?.top_element_info?.points} points
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopPlayerCard
