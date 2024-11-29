"use client"

import Image from "next/image"
import Link from "next/link"

import { NavData, type NavLink } from "@/config/site"

export function LinkItem({ NavLink }: { NavLink: NavLink }) {
  return (
    <Link href={NavLink.link} target="_blank">
      <div className="relative mb-6 flex min-h-[122px] min-w-0 cursor-pointer flex-col break-words rounded-lg border border-gray-200 p-4 shadow-md transition-all hover:-translate-y-1 hover:scale-105 hover:bg-border hover:shadow-lg xl:mb-0">
        <div className="flex items-center">
          <div className="mr-3 flex h-10 w-10 overflow-hidden rounded-full">
            {NavLink.icon ? (
              <Image src={NavLink.icon} className="object-fill" alt="" width={40} height={40} />
            ) : (
              <span className="h-full w-full rounded-full bg-purple-500 text-center font-bold leading-10">
                {NavLink.title}
              </span>
            )}
          </div>
          <span className="text-xl font-bold text-primary">{NavLink.title}</span>
        </div>
        <div className="mt-2 line-clamp-2 text-sm text-primary">{NavLink.desc}</div>
      </div>
    </Link>
  )
}

export function LinkContent() {
  return (
    <div className="w-full pb-96 pt-4">
      <div id="main" className="mx-auto w-full px-4 md:px-6">
        {NavData.map((category, index) => {
          return (
            <div id={String(index)} key={index} className="mb-12">
              <div className="my-4">
                <h1 className="mb-2 text-2xl font-bold text-primary/80 sm:text-3xl">{category.title}</h1>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {category.items.map((item) => (
                  <LinkItem NavLink={item} key={item.title} />
                ))}
              </div>
            </div>
          )
        })}
        <div className="mb-12">
          <div className="my-4">
            <h1 className="mb-2 text-2xl font-bold text-primary/80 sm:text-3xl">联系我</h1>
          </div>
          <div>
            你可以通过
            <Link href="mailto:2020583117@qq.com" target="_blank" rel="noreferrer">
              <span className="px-3 underline decoration-wavy hover:text-purple-500">Email</span>
            </Link>
            或者
            <Link
              href="https://weixin.sogou.com/weixin?type=1&query=kk%E6%83%B3%E5%BD%93%E7%A8%8B%E5%BA%8F%E5%91%98"
              target="_blank"
              rel="noreferrer"
            >
              <span className="px-3 underline decoration-wavy hover:text-purple-500">微信公众号</span>
            </Link>
            联系我
          </div>
          <div>
            <Image src="/weixin.jpg" className="float-left md:w-1/4" alt="kk想当程序员" width={318} height={318} />
          </div>
        </div>
      </div>
    </div>
  )
}
