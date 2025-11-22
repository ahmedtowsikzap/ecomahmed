"use client"

import { cn } from "@/lib/utils"
import { Badge } from "../ui/badge"
import { useRouter, useSearchParams } from "next/navigation"

export default function ProductTags() {
  const router = useRouter()
  const params = useSearchParams()
  const tag = params.get("tag")

  const setFilter = (tag: string) => {
    if (tag) {
      router.push(`?tag=${tag}`)
    }
    if (!tag) {
      router.push("/")
    }
  }

  return (
    <div className="my-4 flex gap-4 items-center justify-center">
      <Badge
        onClick={() => setFilter("")}
        className={cn(
          "cursor-pointer bg-black hover:bg-black/75 hover:opacity-100",
          !tag ? "opacity-100" : "opacity-50"
        )}
      >
        All
      </Badge>
    </div>
  )
}
