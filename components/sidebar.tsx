"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"

export function Sidebar({ className, navItems }: any) {
  return (
    <nav className="after:h-[calc(100vh - 65px)] block min-h-screen w-60 flex-row flex-nowrap bg-gray-50 font-semibold sm:bg-background sm:px-6 sm:pb-6">
      <a
        href=""
        className="mx-6 hidden h-16 flex-col items-center justify-center sm:flex"
      >
        {/* <Image
          src="https://cos.codefe.top/images/web-nav-icon.png"
          alt=""
          width={200}
          height={60}
        /> */}
      </a>
      <div className="flex-start relative z-40 flex h-auto w-full flex-1 flex-col overflow-y-auto overflow-x-hidden rounded pt-4 opacity-100">
        <div className="flex list-none flex-col md:min-w-full md:flex-col">
          <div className={cn("flex-none pb-12", className)}>
            <div className="space-y-4 pb-4">
              <div className="py-2">
                <div className="space-y-1">123</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
