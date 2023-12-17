'use client'

import { Heart, MessageSquare, Repeat2 } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export default function PostTools() {
  return (
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
            <Button variant="ghost" className="flex gap-2">
              <MessageSquare size={20} />
              <span className="text-lg">2k</span>
            </Button>
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
  )
}
