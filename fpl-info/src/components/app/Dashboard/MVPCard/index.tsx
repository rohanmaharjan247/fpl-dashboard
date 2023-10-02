import { PLAYER_IMG_URL } from "@/lib/app-utils/constants"
import { EntryPickElement } from "@/lib/app-utils/hook"

type MVPCardProps = {
  entryGameweekMVP?: EntryPickElement
  is_gameweek?: boolean
  is_lowest?: boolean
}

const MVPCard = ({
  entryGameweekMVP,
  is_gameweek = false,
  is_lowest,
}: MVPCardProps) => {
  return (
    <div className='card'>
      <div className='flex gap-4'>
        <div className='basis-[94px]'>
          <img
            src={`${PLAYER_IMG_URL}p${entryGameweekMVP?.element_detail?.photo
              .split(".")
              .at(0)}.png`}
            alt='playername'
            className='w-[94px] aspect-[1/1.25]'
          />
        </div>
        <div className='basis-full flex flex-col'>
          <span className='bg-primary text-primary-foreground rounded-md p-1 text-xs self-end'>
            {is_gameweek ? "Gameweek" : "Your"} {is_lowest ? "LVP" : "MVP"}
          </span>
          <div className='italic'>
            <div className='text-gray-400'>
              {entryGameweekMVP?.element_detail?.first_name}
            </div>
            <div className='font-bold'>
              {entryGameweekMVP?.element_detail?.second_name}
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-4 justify-between my-4'>
        <div>
          <div className='text-gray-400'>Position</div>
          <div className='text-lg font-bold'>
            {entryGameweekMVP?.position_detail?.singular_name}
          </div>
        </div>
        <div>
          <div className='text-gray-400'>Minutes</div>
          <div className='text-lg font-bold'>
            {entryGameweekMVP?.element_detail?.minutes}
          </div>
        </div>
        <div>
          <div className='text-gray-400'>Goals</div>
          <div className='text-lg font-bold'>
            {entryGameweekMVP?.element_detail?.goals_scored}
          </div>
        </div>
        <div>
          <div className='text-gray-400'>Assist</div>
          <div className='text-lg font-bold'>
            {entryGameweekMVP?.element_detail?.assists}
          </div>
        </div>
        <div>
          <div className='text-gray-400'>Clean Sheet</div>
          <div className='text-lg font-bold'>
            {entryGameweekMVP?.element_detail?.clean_sheets}
          </div>
        </div>
      </div>
      <div className='border-b h-1'></div>
      <div className='flex gap-8 mt-4'>
        <div>
          <div className='text-gray-400'>Total Points</div>
          <div className='text-lg font-bold'>
            {entryGameweekMVP?.element_detail?.total_points}
          </div>
        </div>
        <div>
          <div className='text-gray-400'>Cost</div>
          <div className='text-lg font-bold'>
            {entryGameweekMVP &&
              entryGameweekMVP.element_detail &&
              `$${entryGameweekMVP.element_detail.now_cost / 10}m`}
          </div>
        </div>
        <div>
          <div className='text-gray-400'>GW Point</div>
          <div className='text-lg font-bold'>
            {entryGameweekMVP &&
              entryGameweekMVP.element_detail &&
              entryGameweekMVP.element_detail.event_points *
                entryGameweekMVP.multiplier}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MVPCard
