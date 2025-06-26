import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export const HoverEffect = ({
  items,
  className
}: {
  items: {
    title: string
    description: string
    link: string
    icon: string
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item, idx) => (
        <motion.div
          key={item.link}
          initial={{ opacity: 0, y: 20 }} // 完全透明，并且在 Y 轴上向下偏移 20px
          whileInView={{ opacity: 1, y: 0 }} // 完全不透明，Y 轴位置回归原位
          viewport={{ once: false, amount: 0.1 }} // `once: true` 保证动画只播放一次。 `amount: 0.1` 表示元素可见10%时就触发动画
          transition={{ duration: 0.3, delay: idx * 0.05 }} // 动画持续0.5秒，并根据索引值(idx)创建交错延迟效果
        >
        <Link
          href={item?.link}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          target="_blank"
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-xl bg-accent"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 }
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2}
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>
              <Image
                src={item.icon}
                className="overflow-hidden rounded-full object-fill"
                alt=""
                width={40}
                height={40}
                unoptimized
              />
              {item.title}
            </CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
        </motion.div>
      ))}
    </div>
  )
}

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-lg border bg-background p-2 shadow-md",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}
export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn("mt-2 flex items-center gap-3 font-bold tracking-wide", className)}>{children}</h4>
}
export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn("mt-4 text-sm leading-relaxed tracking-wide", className)}>{children}</p>
}
