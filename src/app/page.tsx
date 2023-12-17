import Post from "@/components/Post";
import { Separator } from "@/components/ui/separator";
import { Clock4, Loader2, User } from "lucide-react";

export default function Page() {
  return (
    <main className="flex justify-center items-start gap-5 py-5">
      <div className="flex flex-col gap-3 bg-neutral-50 dark:bg-neutral-900 md:rounded-md w-screen md:w-[700px] p-3">
        <span className={`flex justify-center items-center gap-2 font-semibold`}>
          <Clock4 size={20} />
          Latest Posts
        </span>
        <Separator />
        <div className="flex flex-col gap-4">
          <Post timestamp={431413} id={3} username="misterkirill" name="Kirill Siukhin" content="I made Firesnap. Enjoy." />
          {/* <div className="flex justify-center">
            <Loader2 className="animate-spin" />
          </div> */}
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-neutral-50 dark:bg-neutral-900 md:rounded-md w-screen md:w-[400px] p-3">
        <span className={`flex justify-center items-center gap-2 font-semibold`}>
          <User size={20} />
          Friends Activity
        </span>
        <Separator />
        no activity lol
      </div>
    </main>
  )
}
