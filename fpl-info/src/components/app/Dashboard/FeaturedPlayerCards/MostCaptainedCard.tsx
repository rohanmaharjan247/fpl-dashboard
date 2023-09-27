import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Element } from "fpl-api"

type MostCaptainedCardProps = {
  mostCaptainedElement: Element
}

const MostCaptainedCard = ({
  mostCaptainedElement,
}: MostCaptainedCardProps) => {
  return (
    <div className='bg-white rounded-md p-4 my-2'>
      <div className='flex justify-between'>
        <div>
          <div className='text-xs text-gray-400'>Most Captained</div>
          <div className='font-semibold'>
            {mostCaptainedElement.first_name} {mostCaptainedElement.second_name}
          </div>
        </div>
        <div>
          <Avatar>
            <AvatarImage
              src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${mostCaptainedElement.photo
                .split(".")
                .at(0)}.png`}
            />
            <AvatarFallback>
              {mostCaptainedElement.first_name.charAt(0).toUpperCase()}{" "}
              {mostCaptainedElement.second_name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}

export default MostCaptainedCard
