import Link from "next/link"
import { Button } from "./ui/button"
import { Heart, MessageSquare, Repeat2 } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

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
      <div className="flex gap-3 text-neutral-600 dark:text-neutral-400">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" className="flex gap-2">
                <Heart size={20} />
                <span className="text-lg">4k</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Like this post</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={`/${username}/${id}?tab=comments`}>
                <Button variant="ghost" className="flex gap-2">
                  <MessageSquare size={20} />
                  <span className="text-lg">2k</span>
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Comment this post</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" className="flex gap-2">
                <Repeat2 size={20} />
                <span className="text-lg">1k</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share this post</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
