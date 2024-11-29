import { LinkContent } from "@/components/link-content"
import { Sidebar } from "@/components/sidebar"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function IndexPage() {
  return (
    <div className="container relative mx-auto min-h-screen w-full px-0">
      <div className="flex">
        <div className="fixed z-20 hidden min-h-screen w-[16rem] transition-all duration-300 ease-in-out sm:block">
          <Sidebar />
        </div>
        <div className="sm:pl-[16rem]">
          <SiteHeader />
          <LinkContent />
          <SiteFooter />
        </div>
      </div>
    </div>
  )
}
