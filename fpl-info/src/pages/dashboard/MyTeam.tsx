import _ from "lodash"
import { useFPLContext } from "@/lib/app-utils/context/fpl-context"
import { useEntryEvent, usePageTitle, useTeams } from "@/lib/app-utils/hook"
import { useEffect, useMemo, useState } from "react"
import { ElementPitch, EntryBasicStats } from "@/components/app/MyTeam"
import {
  GroupedManagerTeam,
  GroupedSubTeam,
} from "@/lib/app-utils/interface/fpl-user"
import { TEAM_IMG_URL } from "@/lib/app-utils/constants"
import { MVPCard } from "@/components/app/Dashboard"

const MyTeamPage = () => {
  const { entry } = useFPLContext()
  const { entryPickElement } = useEntryEvent(entry?.id, entry?.current_event)
  const teams = useTeams()

  usePageTitle(`${entry?.player_first_name} ${entry?.player_last_name}'s Team`)

  const [team, setTeam] = useState<GroupedManagerTeam>()
  const [subTeam, setSubTeam] = useState<GroupedSubTeam>()

  useEffect(() => {
    const groupedEntryPickTeam = _(entryPickElement)
      .filter((item) => item.in_team === "regular")
      .groupBy("in_team")
      .mapValues((items) => {
        // console.log("grouped item", items)
        return _(items)
          .groupBy((group) => group.position_detail?.singular_name_short)
          .mapValues((items) => {
            console.log("element group", items)
            return _(items)
              .flatMap((item) => item)
              .value()
          })
          .value()
      })
      .value()

    const subs = _(entryPickElement)
      .filter((item) => item.in_team === "sub")
      .groupBy("in_team")
      .mapValues((items) => items)
      .value()

    console.log("group", groupedEntryPickTeam)

    setTeam(groupedEntryPickTeam as GroupedManagerTeam)
    setSubTeam(subs as GroupedSubTeam)
    // console.log("team", team)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const favouriteTeamCode = useMemo(() => {
    const code = teams?.find((x) => x.id === entry?.favourite_team)?.code
    return code
  }, [entry?.favourite_team, teams])

  const entryGameweekMVP = useMemo(() => {
    if (entryPickElement) {
      const mvp = entryPickElement.reduce((acc, curr) => {
        return acc &&
          (acc.element_detail?.event_points ?? 0) >
            (curr?.element_detail?.event_points ?? 0)
          ? acc
          : curr
      })
      return mvp
    }
  }, [entryPickElement])
  const entryGameweekLowestPointPlayer = useMemo(() => {
    if (entryPickElement) {
      const mvp = entryPickElement.reduce((acc, curr) => {
        return acc &&
          (acc.element_detail?.event_points ?? 0) <
            (curr?.element_detail?.event_points ?? 0)
          ? acc
          : curr
      })
      return mvp
    }
  }, [entryPickElement])

  return (
    <div className='flex gap-4 m-4'>
      <div className='basis-2/3'>
        {team && subTeam && <ElementPitch team={team} subTeam={subTeam} />}
      </div>
      <div className='basis-1/3'>
        <EntryBasicStats entry={entry} />
        <div className='my-2 card'>
          <div className='flex flex-col gap-4 items-center'>
            <div className='font-bold text-xl self-start'>Favourite Team</div>
            <div>
              <img src={`${TEAM_IMG_URL}t${favouriteTeamCode}.png`} />
            </div>
          </div>
        </div>
        <MVPCard entryGameweekMVP={entryGameweekMVP} is_gameweek />
        <div className='my-2'>
          <MVPCard
            entryGameweekMVP={entryGameweekLowestPointPlayer}
            is_gameweek
            is_lowest
          />
        </div>
      </div>
    </div>
  )
}

export default MyTeamPage
