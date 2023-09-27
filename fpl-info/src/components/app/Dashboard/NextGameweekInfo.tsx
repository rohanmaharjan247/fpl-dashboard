// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useNextGameweek } from "@/lib/app-utils/hook"
import { format } from "date-fns"
import Countdown, { CountdownRenderProps } from "react-countdown"

const NextGameweekInfo = () => {
  const nextGameweek = useNextGameweek()

  const countdownRender = ({
    days,
    hours,
    minutes,
    seconds,
  }: CountdownRenderProps) => {
    return (
      <>
        <div className='flex flex-col items-center'>
          <span className='text-primary text-3xl font-bold'>
            {days < 10 ? `0${days}` : days}
          </span>
          <span className='text-xs text-gray-400'>Days</span>
        </div>
        <div className='text-primary text-3xl font-bold'>:</div>
        <div className='flex flex-col items-center'>
          <span className='text-primary text-3xl font-bold'>
            {hours < 10 ? `0${hours}` : hours}
          </span>
          <span className='text-xs text-gray-400'>Hours</span>
        </div>
        <div className='text-primary text-3xl font-bold'>:</div>
        <div className='flex flex-col items-center'>
          <span className='text-primary text-3xl font-bold'>
            {minutes < 10 ? `0${minutes}` : minutes}
          </span>
          <span className='text-xs text-gray-400'>Minutes</span>
        </div>
        <div className='text-primary text-3xl font-bold'>:</div>
        <div className='flex flex-col items-center'>
          <span className='text-primary text-3xl font-bold'>
            {seconds < 10 ? `0${seconds}` : seconds}
          </span>
          <span className='text-xs text-gray-400'>Seconds</span>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='rounded-md bg-white p-4 mb-2'>
        <div className='font-semibold mb-4'>
          {nextGameweek?.name}'s Deadline
        </div>
        <div className='flex gap-4 mb-4'>
          {nextGameweek && (
            <Countdown
              date={nextGameweek.deadline_time}
              renderer={countdownRender}
            />
          )}
        </div>

        <div className='text-xs text-gray-400'>
          Until{" "}
          <span className='text-black'>
            {nextGameweek &&
              format(
                new Date(nextGameweek.deadline_time),
                "EEEE, d MMMM yyyy, hh:mm a"
              )}
          </span>
        </div>
      </div>
      {/* <div className='rounded-b-md bg-gray-300 p-4'>
        <div className='text-gray-500 font-semibold text-sm'>
          You have 3 Injured Players:
        </div>
        <div className='flex gap-4 my-4'>
          <Avatar>
            <AvatarImage src='https://i.pravatar.cc/500' />
            <AvatarFallback>HK</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src='https://i.pravatar.cc/500' />
            <AvatarFallback>HK</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src='https://i.pravatar.cc/500' />
            <AvatarFallback>HK</AvatarFallback>
          </Avatar>
        </div>
        <div className='text-gray-500 text-sm font-semibold'>Go To My Team</div>
      </div> */}
    </>
  )
}

export default NextGameweekInfo
