import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Element } from "fpl-api"

type MostTransferredInCardProps = {
  mostTransferredElement: Element
}

const MostTransferredInCard = ({
  mostTransferredElement,
}: MostTransferredInCardProps) => {
  return (
    <div className='bg-white rounded-md p-4 my-2'>
      <div className='flex justify-between'>
        <div>
          <div className='text-xs text-gray-400'>Most Transferred In</div>
          <div className='font-semibold'>
            {mostTransferredElement.first_name}{" "}
            {mostTransferredElement.second_name}
          </div>
        </div>
        <div>
          <Avatar>
            <AvatarImage
              src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${mostTransferredElement?.photo
                .split(".")
                .at(0)}.png`}
            />
            <AvatarFallback>
              {mostTransferredElement.first_name.charAt(0).toUpperCase()}{" "}
              {mostTransferredElement.second_name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}

export default MostTransferredInCard
