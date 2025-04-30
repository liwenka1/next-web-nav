import { NavData } from "@/config/site"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface NavLink {
  icon: string
  title: string
  desc: string
  link: string
}

type NavData = {
  title: string
  items: NavLink[]
}

interface ConfigStore {
  NavData: NavData[]
  setNavData: (data: NavData[]) => void
  addNavGroup: (group: NavData) => void
  updateNavGroup: (index: number, group: NavData) => void
  removeNavGroup: (index: number) => void
  addNavLink: (groupIndex: number, link: NavLink) => void
  updateNavLink: (groupIndex: number, linkIndex: number, link: NavLink) => void
  removeNavLink: (groupIndex: number, linkIndex: number) => void
}

export const useConfigStore = create<ConfigStore>()(
  persist(
    (set) => ({
      NavData: NavData,
      setNavData: (data) => set({ NavData: data }),
      addNavGroup: (group) => set((state) => ({ NavData: [...state.NavData, group] })),
      updateNavGroup: (index, group) =>
        set((state) => {
          const NavData = [...state.NavData]
          NavData[index] = group
          return { NavData }
        }),
      removeNavGroup: (index) =>
        set((state) => {
          const NavData = [...state.NavData]
          NavData.splice(index, 1)
          return { NavData }
        }),
      addNavLink: (groupIndex, link) =>
        set((state) => {
          const NavData = [...state.NavData]
          NavData[groupIndex] = {
            ...NavData[groupIndex],
            items: [...NavData[groupIndex].items, link]
          }
          return { NavData }
        }),
      updateNavLink: (groupIndex, linkIndex, link) =>
        set((state) => {
          const NavData = [...state.NavData]
          const items = [...NavData[groupIndex].items]
          items[linkIndex] = link
          NavData[groupIndex] = {
            ...NavData[groupIndex],
            items
          }
          return { NavData }
        }),
      removeNavLink: (groupIndex, linkIndex) =>
        set((state) => {
          const NavData = [...state.NavData]
          const items = [...NavData[groupIndex].items]
          items.splice(linkIndex, 1)
          NavData[groupIndex] = {
            ...NavData[groupIndex],
            items
          }
          return { NavData }
        })
    }),
    {
      name: "nav-config-store"
    }
  )
)
