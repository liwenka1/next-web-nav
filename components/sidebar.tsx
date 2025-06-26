"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useConfigStore } from "@/stores"

// 定义 Props 接口
interface SidebarProps {
  onLinkClick?: () => void;
}

export function Sidebar({ onLinkClick }: SidebarProps) {
  const [activeTabId, setActiveTabId] = useState(0)

  const scroll = (activeTabId: number) => {
    const ele = document.getElementById(String(activeTabId))
    if (ele) {
      const elePosition = ele.getBoundingClientRect().top
      const offsetPosition = elePosition + window.scrollY - 99
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const scrollUpdate = () => {
    const ele = document.getElementById("main")
    if (ele) {
      const childElements = Array.from(ele.children)
      for (const children of childElements) {
        const top = children.getBoundingClientRect().top
        if (top < 100) {
          setActiveTabId(Number(children.id))
        }
      }
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" as ScrollBehavior
    })
    window.addEventListener("scroll", scrollUpdate)
    return () => {
      // 组件销毁时移除监听事件
      window.removeEventListener("scroll", scrollUpdate)
    }
  }, [])


  const handleCategoryClick = (index: number) => {
    scroll(index);

    // 如果 onLinkClick 在移动端被传入，就调用
    if (onLinkClick) {
      onLinkClick();
    }
  }
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { categories } = useConfigStore()

  return (
    <nav className="after:h-[calc(100vh-65px)] block min-h-screen w-full sm:w-60 flex-row flex-nowrap bg-background font-semibold sm:bg-background px-4 sm:px-6 sm:pb-6 pt-16 sm:pt-0">
      <div className="mx-6 hidden sm:block">
        <h2 className="h-14 leading-[4rem] text-lg font-semibold tracking-tight">
          网址导航
        </h2>
      </div>
      <div className="flex-start relative z-40 flex h-auto w-full flex-1 flex-col overflow-y-auto overflow-x-hidden rounded pt-4 opacity-100">
        <div className="flex list-none flex-col md:min-w-full md:flex-col">
          <div className={"flex-none pb-12"}>
            <div className="space-y-4 pb-4">
              <div className="py-2">
                <div className="space-y-1">
                  {categories.map((category, index) => {
                    return (
                      <div
                        className={`relative block cursor-pointer rounded-lg transition-colors ease-in-out ${activeTabId === index ? "bg-accent" : ""}`}
                        key={index}
                        // 新的处理函数
                        onClick={() => handleCategoryClick(index)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <AnimatePresence>
                          {hoveredIndex === index && (
                            <motion.span
                              className="absolute inset-0 block h-full w-full rounded-lg bg-accent"
                              layoutId="hoverScrollBackground"
                              initial={{ opacity: 0 }}
                              animate={{
                                opacity: 1,
                                transition: { duration: 0.15 }
                              }}
                              exit={{
                                opacity: 0,
                                transition: { duration: 0.15, delay: 0.2 }
                              }}
                            />
                          )}
                        </AnimatePresence>
                        <div className="relative z-10 mb-2 flex items-center gap-2 rounded-r-lg p-2 transition-colors ease-in-out before:transition-colors hover:no-underline sm:border-l-0 sm:pl-6 sm:before:absolute sm:before:left-[-5px] sm:before:top-[2px] sm:before:h-[calc(100%-4px)] sm:before:w-[10px] sm:before:rounded-full sm:before:transition-colors">
                          <span className="truncate text-sm">{category.title}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
                {/* 额外添加“联系我”导航按钮 */}
                <div
                  className="relative block cursor-pointer rounded-lg transition-colors ease-in-out"
                  onClick={() => {
                    const ele = document.getElementById("contact");
                    if (ele) {
                      const elePosition = ele.getBoundingClientRect().top;
                      const offsetPosition = elePosition + window.scrollY - 99;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      });
                    }
                    if (onLinkClick) onLinkClick();
                  }}
                  onMouseEnter={() => setHoveredIndex(-1)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <AnimatePresence>
                    {hoveredIndex === -1 && (
                      <motion.span
                        className="absolute inset-0 block h-full w-full rounded-lg bg-accent"
                        layoutId="hoverScrollBackground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.15 } }}
                        exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                      />
                    )}
                  </AnimatePresence>
                  <div className="relative z-10 mb-2 flex items-center gap-2 rounded-r-lg p-2 transition-colors ease-in-out before:transition-colors hover:no-underline sm:border-l-0 sm:pl-6 sm:before:absolute sm:before:left-[-5px] sm:before:top-[2px] sm:before:h-[calc(100%-4px)] sm:before:w-[10px] sm:before:rounded-full sm:before:transition-colors">
                    <span className="truncate text-sm">联系我</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
