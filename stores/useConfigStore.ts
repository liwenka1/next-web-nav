import { NavData as DefaultNavConfig } from "@/config/site"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

// Export initial data for reset functionality
export const initialNavData = DefaultNavConfig

// 类型命名优化：使用更明确的命名
export interface NavLinkItem {
  icon: string
  title: string
  desc: string
  link: string
}

export interface NavCategory {
  title: string
  items: NavLinkItem[]
}

interface NavConfigState {
  // 状态属性改为小驼峰
  categories: NavCategory[]
  // 操作方法命名优化：移除冗余的Nav前缀
  setCategories: (data: NavCategory[]) => void
  addCategory: (category: NavCategory) => void
  updateCategory: (index: number, category: NavCategory) => void
  removeCategory: (index: number) => void
  addLink: (categoryIndex: number, link: NavLinkItem) => void
  updateLink: (categoryIndex: number, linkIndex: number, link: NavLinkItem) => void
  removeLink: (categoryIndex: number, linkIndex: number) => void
}

export const useConfigStore = create<NavConfigState>()(
  persist(
    (set) => ({
      // 使用更明确的初始值命名
      categories: initialNavData, // Use the exported initialNavData here
      setCategories: (data) => set({ categories: data }),
      addCategory: (category) => set((state) => ({ categories: [...state.categories, category] })),
      updateCategory: (index, category) =>
        set((state) => {
          const updated = [...state.categories]
          updated[index] = category
          return { categories: updated }
        }),
      removeCategory: (index) =>
        set((state) => ({
          categories: state.categories.filter((_, i) => i !== index)
        })),
      addLink: (categoryIndex, link) =>
        set((state) => {
          const updated = [...state.categories]
          updated[categoryIndex] = {
            ...updated[categoryIndex],
            items: [...updated[categoryIndex].items, link]
          }
          return { categories: updated }
        }),
      updateLink: (categoryIndex, linkIndex, link) =>
        set((state) => {
          const updated = [...state.categories]
          updated[categoryIndex] = {
            ...updated[categoryIndex],
            items: updated[categoryIndex].items.map((item, i) => (i === linkIndex ? link : item))
          }
          return { categories: updated }
        }),
      removeLink: (categoryIndex, linkIndex) =>
        set((state) => {
          const updated = [...state.categories]
          updated[categoryIndex] = {
            ...updated[categoryIndex],
            items: updated[categoryIndex].items.filter((_, i) => i !== linkIndex)
          }
          return { categories: updated }
        })
    }),
    {
      name: "nav-config-store",
      storage: createJSONStorage(() => localStorage)
    }
  )
)
