import _ from "lodash"
import { useFPLContext } from "@/lib/app-utils/context/fpl-context"
import {
  EntryPickElement,
  useElements,
  useElementsType,
  usePageTitle,
  useTeams,
} from "@/lib/app-utils/hook"
import { useCallback, useEffect, useMemo, useState } from "react"
import { ElementPitch, EntryBasicStats } from "@/components/app/MyTeam"
import { TEAM_IMG_URL } from "@/lib/app-utils/constants"
import { MVPCard } from "@/components/app/Dashboard"
import { getEntryEvent } from "@/services/fpl-service"
import {
  GroupedManagerTeam,
  GroupedSubTeam,
} from "@/lib/app-utils/interface/fpl-user"

export const MyTeamPage = () => {
  const { entry } = useFPLContext()

  const elements = useElements()
  const elementTypes = useElementsType()
  const [groupedRegularTeam, setGroupedRegularTeam] =
    useState<GroupedManagerTeam>()
  const [groupedSubTeam, setGroupedSubTeam] = useState<GroupedSubTeam>()
  const [entryPickElement, setEntryPickElement] =
    useState<Array<EntryPickElement>>()
  const teams = useTeams()

  usePageTitle(`${entry?.player_first_name} ${entry?.player_last_name}'s Team`)

  const entryElement = useCallback(async () => {
    if (entry) {
      const entryEvent = await getEntryEvent(entry?.id, entry?.current_event)
      const pickElement: Array<EntryPickElement> | undefined =
        entryEvent?.picks.map((pick) => {
          const picked_element = elements?.find((x) => x.id === pick.element)
          const picked_element_position = elementTypes?.find(
            (x) => x.id === picked_element?.element_type
          )

          return {
            ...pick,
            element_detail: picked_element,
            position_detail: picked_element_position,
            in_team: pick.multiplier === 0 ? "sub" : "regular",
          }
        })

      const regularTeam = _(pickElement)
        .filter((item) => item.in_team === "regular")
        .groupBy("in_team")
        .mapValues((items) => {
          // console.log("grouped item", items)
          return _(items)
            .groupBy((group) => group.position_detail?.singular_name_short)
            .mapValues((items) => {
              // console.log("element group", items)
              return _(items)
                .flatMap((item) => item)
                .value()
            })
            .value()
        })
        .value()

      const subTeam = _(pickElement)
        .filter((item) => item.in_team === "sub")
        .groupBy("in_team")
        .mapValues((items) => items)
        .value()

      setEntryPickElement(pickElement)
      setGroupedRegularTeam(regularTeam)
      setGroupedSubTeam(subTeam)
    }
  }, [elementTypes, elements, entry])

  useEffect(() => {
    if (entry) {
      entryElement()
    }
  }, [entryElement, entry])

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
      const mvp = entryPickElement.reduce(
        (acc: EntryPickElement, curr: EntryPickElement) => {
          return acc &&
            (acc.element_detail?.event_points ?? 0) <
              (curr?.element_detail?.event_points ?? 0)
            ? acc
            : curr
        }
      )
      return mvp
    }
  }, [entryPickElement])

  return (
    <div className='flex gap-4 m-4'>
      <div className='basis-2/3'>
        {groupedRegularTeam && groupedSubTeam && (
          <ElementPitch team={groupedRegularTeam} subTeam={groupedSubTeam} />
        )}
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
