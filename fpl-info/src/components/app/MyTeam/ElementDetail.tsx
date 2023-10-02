import { PLAYER_IMG_URL } from "@/lib/app-utils/constants"
import { EntryPickElement } from "@/lib/app-utils/hook"

type ElementDetailProps = {
  element: EntryPickElement
}

const ElementDetail = ({ element }: ElementDetailProps) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img
        src={`${PLAYER_IMG_URL}p${element.element_detail?.photo
          ?.split(".")
          .at(0)}.png`}
        alt={element.element_detail?.web_name ?? ""}
        className='w-20 aspect-[1/1.25]'
      />
      <div className='flex flex-col w-28'>
        <h1 className='text-sm font-bold bg-secondary-foreground text-slate-100 text-center'>
          {element.element_detail?.web_name}{" "}
          {(element.is_captain && (
            <span className='rounded-full bg-slate-200 text-slate-800 px-1 ml-1'>
              C
            </span>
          )) ||
            (element?.is_vice_captain && (
              <span className='rounded-full bg-slate-200 text-slate-800 px-1 ml-1'>
                V
              </span>
            ))}
        </h1>
        <h2 className='text-sm bg-gray-300  text-center'>
          {element.element_detail &&
            element.element_detail.event_points * element.multiplier}
        </h2>
      </div>
    </div>
  )
}

export default ElementDetail
