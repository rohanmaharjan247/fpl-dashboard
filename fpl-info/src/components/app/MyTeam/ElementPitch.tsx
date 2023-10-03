import {
  GroupedManagerTeam,
  GroupedSubTeam,
} from "@/lib/app-utils/interface/fpl-user"
import ElementDetail from "./ElementDetail"

type ElementPitchProps = {
  team: GroupedManagerTeam
  subTeam: GroupedSubTeam
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pitchGrid: any = {
  0: "grid grid-cols-0 place-items-center gap-4 py-6",
  1: "grid grid-cols-1 place-items-center gap-4 py-6",
  2: "grid grid-cols-2 place-items-center gap-4 py-6",
  3: "grid grid-cols-3 place-items-center gap-4 py-6",
  4: "grid grid-cols-4 place-items-center gap-4 py-6",
  5: "grid grid-cols-5 place-items-center gap-4 py-6",
}

const ElementPitch = ({ team, subTeam }: ElementPitchProps) => {
  return (
    <>
      <div className='image'>
        <div className={pitchGrid[team.regular?.GKP?.length]}>
          {team.regular?.GKP?.map((t, i) => (
            <ElementDetail key={i} element={t} />
          ))}
        </div>
        <div className={pitchGrid[team.regular?.DEF?.length]}>
          {team.regular?.DEF?.map((t, i) => (
            <ElementDetail key={i} element={t} />
          ))}
        </div>
        <div className={pitchGrid[team.regular?.MID?.length]}>
          {team.regular?.MID?.map((t, i) => (
            <ElementDetail key={i} element={t} />
          ))}
        </div>
        <div className={pitchGrid[team.regular?.FWD?.length]}>
          {team.regular?.FWD?.map((t, i) => (
            <ElementDetail key={i} element={t} />
          ))}
        </div>
      </div>
      <div className='h-1 bg-gray-100 w-full'></div>
      <div className='bg-green-400/20 rounded'>
        <div className='grid grid-cols-4 gap-4 py-6'>
          {subTeam.sub?.map((team, i) => (
            <ElementDetail key={i} element={team} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ElementPitch
