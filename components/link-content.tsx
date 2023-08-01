import Image from "next/image"
import Link from "next/link"

export function LinkItem() {
  return (
    <Link href="www.baidu.com" target="_blank">
      <div className="relative mb-6 flex min-h-[122px] min-w-0 cursor-pointer flex-col break-words rounded-lg border border-gray-200 p-4 shadow-md transition-all hover:-translate-y-1 hover:scale-105 hover:bg-border hover:shadow-lg  xl:mb-0">
        <div className="flex items-center">
          <div className="mr-3 flex h-10 w-10 overflow-hidden rounded-full">
            <span className="h-full w-full rounded-full bg-purple-500 text-center font-bold leading-10">
              111
            </span>
          </div>
          <span className="text-xl font-bold text-primary">baidu</span>
        </div>
        <div className="mt-2 line-clamp-2 text-sm text-primary">Next generation web framework for node.jsNext generation web framework for node.jsNext generation web framework for node.js</div>
      </div>
    </Link>
  )
}

export function LinkContent() {
  return (
    <div className="w-full pt-4">
      <div className="mx-auto w-full px-4 md:px-6">
        <div className="mb-12">
          <div className="my-4">
            <h1 className="mb-2 text-2xl font-bold text-primary/80 sm:text-3xl">
              123
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            <LinkItem />
            <LinkItem />
            <LinkItem />
            <LinkItem />
            <LinkItem />
            <LinkItem />
          </div>
        </div>
      </div>
    </div>
  )
}
