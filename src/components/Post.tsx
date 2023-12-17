import Link from "next/link"
import { Button } from "./ui/button"
import { Heart, MessageSquare, Repeat2 } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import PostTools from "./PostTools"

export default function Post({
  id,
  username,
  name,
  content,
  timestamp
}: {
  id: number
  username: string
  name: string
  content: string
  timestamp: number
}) {
  return (
      <div className="flex flex-col gap-2 transition-colors rounded px-3 break-words">
        <Link href={`/${username}/${id}`}>
          <div className="flex gap-2 items-center">
            <span className="text-lg font-semibold">{name}</span>
            <span className="text-neutral-400">5m ago</span>
          </div>
          <span className="w-full">
            {content.length > 400 ? (
              <span>
                {content.slice(0, 400)}
                ...<span className="text-neutral-400 font-semibold"> Read more</span>
              </span>
            ) : content}
          </span>
        </Link>
        <PostTools />
      </div>
  )
}
