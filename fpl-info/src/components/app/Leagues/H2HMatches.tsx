import { H2HMatch } from "fpl-api"

type H2HMatchesProps = {
  h2h: H2HMatch
}

const H2HMatches = ({ h2h }: H2HMatchesProps) => {
  return (
    <div className='flex items-center gap-4'>
      <div className='basis-1/2 py-2'>
        <div className='flex justify-end items-center gap-4'>
          <div className='text-right'>
            <div className='text-sm font-semibold'>{h2h.entry_1_name}</div>
            <div className='text-xs'>{h2h.entry_1_player_name}</div>
          </div>
          <div className='bg-primary text-primary-foreground text-sm font-semibold px-1 rounded-md'>
            {h2h.entry_1_points}
          </div>
        </div>
      </div>
      <div className='basis-1/2 py-2'>
        <div className='flex items-center gap-4'>
          <div className='bg-primary text-primary-foreground text-sm font-semibold px-1 rounded-md'>
            {h2h.entry_2_points}
          </div>
          <div>
            <div className='text-sm font-semibold'>{h2h.entry_2_name}</div>
            <div className='text-xs'>{h2h.entry_2_player_name}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default H2HMatches
