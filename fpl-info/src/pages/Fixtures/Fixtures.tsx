import _ from "lodash"
import NextFixtureCard from "@/components/app/Dashboard/NextFixtureCard/NextFixtureCard"
import {
  useCurrentFixtures,
  useCurrentGameweek,
  useNextFixtures,
  useNextGameweek,
  usePageTitle,
} from "@/lib/app-utils/hook"
import { useMemo } from "react"
import { format } from "date-fns"
import CurrentFixtureCard from "@/components/app/Dashboard/CurrentFixtureCard/CurrentFixtureCard"

const Fixtures = () => {
  usePageTitle("Fixtures")
  const currentGameweek = useCurrentGameweek()
  const nextGameweek = useNextGameweek()
  const { fixtures } = useNextFixtures()
  const { fixtures: currentFixture } = useCurrentFixtures()

  const groupedFixture = useMemo(() => {
    const gFixture = _(fixtures)
      .groupBy((x) => format(new Date(x.kickoff_time), "dd MMM yyyy"))
      .map((value, key) => {
        console.log(key, value)
        return {
          date: key,
          fixtures: value,
        }
      })
      .value()
    return gFixture
  }, [fixtures])

  const groupedCurrentFixture = useMemo(() => {
    const gFixture = _(currentFixture)
      .groupBy((x) => format(new Date(x.kickoff_time), "dd MMM yyyy"))
      .map((value, key) => {
        console.log(key, value)
        return {
          date: key,
          fixtures: value,
        }
      })
      .value()
    return gFixture
  }, [])

  console.log("fixture", groupedFixture)
  return (
    <>
      <div className='text-xl font-bold'>Fixtures</div>
      <div className='grid grid-cols-2 gap-4'>
        <div className='my-4'>
          <div className='font-bold mb-2'>{currentGameweek?.name} Results</div>
          {groupedCurrentFixture?.map((group, i) => (
            <div key={i}>
              <span className='bg-primary text-primary-foreground rounded-tl-md rounded-br-md px-4 font-semibold'>
                {group.date}
              </span>
              <div>
                {group.fixtures.map((fixture) => (
                  <CurrentFixtureCard key={fixture.id} fixture={fixture} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='my-4'>
          <div className='font-bold mb-2'>{nextGameweek?.name} Fixtures</div>
          {groupedFixture?.map((group, i) => (
            <div key={i}>
              <span className='bg-primary text-primary-foreground rounded-tl-md rounded-br-md px-4 font-semibold'>
                {group.date}
              </span>
              <div>
                {group.fixtures.map((fixture) => (
                  <NextFixtureCard key={fixture.id} fixture={fixture} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Fixtures
