import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Settings, Trash2, PlusCircle, RotateCcw } from "lucide-react" // Import RotateCcw
import { useConfigStore, NavCategory, NavLinkItem, initialNavData } from "@/stores" // Import initialNavData
import { useState, useEffect } from "react" // Import useEffect
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area" // Import ScrollArea

const SettingDialog = () => {
  const categories = useConfigStore((state) => state.categories)
  // State to control dialog visibility
  const [open, setOpen] = useState(false)

  // Local state to manage edits before saving
  const [localCategories, setLocalCategories] = useState<NavCategory[]>([])

  // Effect to sync local state when dialog opens or categories change
  useEffect(() => {
    if (open) {
      // Deep copy categories to local state when dialog opens
      setLocalCategories(JSON.parse(JSON.stringify(categories)))
    } else {
      // Optionally reset local state when dialog closes, though resetting on cancel might be enough
      // setLocalCategories([]);
    }
  }, [open, categories])

  // Remove the redundant useState for syncing
  // useState(() => {
  //   setLocalCategories(JSON.parse(JSON.stringify(categories)));
  // }, [categories]);

  const handleCategoryChange = (index: number, field: keyof NavCategory, value: string) => {
    const updated = [...localCategories]
    updated[index] = { ...updated[index], [field]: value }
    setLocalCategories(updated)
  }

  const handleLinkChange = (catIndex: number, linkIndex: number, field: keyof NavLinkItem, value: string) => {
    const updated = [...localCategories]
    const updatedItems = [...updated[catIndex].items]
    updatedItems[linkIndex] = { ...updatedItems[linkIndex], [field]: value }
    updated[catIndex] = { ...updated[catIndex], items: updatedItems }
    setLocalCategories(updated)
  }

  const handleAddCategory = () => {
    setLocalCategories([...localCategories, { title: "新分类", items: [] }])
  }

  const handleRemoveCategory = (index: number) => {
    setLocalCategories(localCategories.filter((_, i) => i !== index))
  }

  const handleAddLink = (catIndex: number) => {
    const updated = [...localCategories]
    updated[catIndex] = {
      ...updated[catIndex],
      items: [...updated[catIndex].items, { icon: "", title: "新链接", desc: "", link: "" }]
    }
    setLocalCategories(updated)
  }

  const handleRemoveLink = (catIndex: number, linkIndex: number) => {
    const updated = [...localCategories]
    updated[catIndex] = {
      ...updated[catIndex],
      items: updated[catIndex].items.filter((_, i) => i !== linkIndex)
    }
    setLocalCategories(updated)
  }

  const handleSave = () => {
    // Update the store with the local changes
    useConfigStore.setState({ categories: localCategories })
    console.log("数据已保存!")
    setOpen(false) // Close the dialog after saving
  }

  const handleCancel = () => {
    // Reset local changes to match the store state
    setLocalCategories(JSON.parse(JSON.stringify(categories)))
    setOpen(false) // Close the dialog
  }

  // Add handleReset function
  const handleReset = () => {
    // Reset local state to initial data
    setLocalCategories(JSON.parse(JSON.stringify(initialNavData)))
    // Optionally, update the store immediately or wait for save
    // useConfigStore.setState({ categories: JSON.parse(JSON.stringify(initialNavData)) });
    console.log("数据已重置为初始状态!")
    // Keep the dialog open after reset to allow saving or further edits
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Settings className="h-5 w-5" /> {/* Slightly larger icon */}
        </Button>
      </DialogTrigger>
      {/* Adjust DialogContent for flex layout and height, use theme colors */}
      <DialogContent className="flex h-[80vh] max-h-[80vh] flex-col border-border bg-card text-card-foreground sm:max-w-[600px]">
        {/* Header remains fixed */}
        <DialogHeader className="flex-shrink-0 border-b border-border pb-4">
          <DialogTitle className="text-xl font-semibold">编辑网站数据</DialogTitle> {/* Larger title */}
          <DialogDescription className="text-muted-foreground">
            在这里修改网站导航的数据。点击保存以应用更改。
          </DialogDescription>
        </DialogHeader>
        {/* Make the middle section scrollable with ScrollArea */}
        <ScrollArea className="flex-grow py-4 pr-4">
          {" "}
          {/* Use ScrollArea and adjust padding */}
          <Accordion type="multiple" className="w-full">
            {localCategories.map((category, catIndex) => (
              <AccordionItem
                value={`item-${catIndex}`}
                key={catIndex}
                className="border-b border-border last:border-b-0"
              >
                <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">
                  <div className="flex w-full items-center justify-between pr-2">
                    <Input
                      value={category.title}
                      onChange={(e) => handleCategoryChange(catIndex, "title", e.target.value)}
                      className="mr-2 h-8 flex-grow border-none bg-transparent p-0 text-base font-medium shadow-none focus-visible:ring-0"
                      onClick={(e) => e.stopPropagation()} // Prevent accordion toggle when clicking input
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation() // Prevent accordion toggle
                        handleRemoveCategory(catIndex)
                      }}
                      className="h-7 w-7 text-destructive hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pl-6 pr-2 pt-2">
                  {" "}
                  {/* Adjusted padding */}
                  <div className="space-y-3">
                    {category.items.map((item, linkIndex) => (
                      <div
                        key={linkIndex}
                        className="relative grid grid-cols-1 gap-3 rounded-md border border-border bg-muted/50 p-3"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveLink(catIndex, linkIndex)}
                          className="absolute right-1 top-1 h-6 w-6 text-destructive hover:bg-destructive/10 hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <div className="grid grid-cols-4 items-center gap-3">
                          <Label className="text-right text-sm text-muted-foreground">图标 URL</Label>
                          <Input
                            value={item.icon}
                            onChange={(e) => handleLinkChange(catIndex, linkIndex, "icon", e.target.value)}
                            className="col-span-3 h-8 text-sm"
                            placeholder="https://.../icon.png"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-3">
                          <Label className="text-right text-sm text-muted-foreground">标题</Label>
                          <Input
                            value={item.title}
                            onChange={(e) => handleLinkChange(catIndex, linkIndex, "title", e.target.value)}
                            className="col-span-3 h-8 text-sm"
                            placeholder="网站标题"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-3">
                          <Label className="text-right text-sm text-muted-foreground">描述</Label>
                          <Input
                            value={item.desc}
                            onChange={(e) => handleLinkChange(catIndex, linkIndex, "desc", e.target.value)}
                            className="col-span-3 h-8 text-sm"
                            placeholder="网站描述"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-3">
                          <Label className="text-right text-sm text-muted-foreground">链接 URL</Label>
                          <Input
                            value={item.link}
                            onChange={(e) => handleLinkChange(catIndex, linkIndex, "link", e.target.value)}
                            className="col-span-3 h-8 text-sm"
                            placeholder="https://example.com"
                          />
                        </div>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAddLink(catIndex)}
                      className="mt-2 h-8 text-sm"
                    >
                      <PlusCircle className="mr-1.5 h-4 w-4" />
                      添加链接
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Button variant="outline" onClick={handleAddCategory} className="mt-4 h-9 text-sm">
            <PlusCircle className="mr-1.5 h-4 w-4" />
            添加分类
          </Button>
        </ScrollArea>
        {/* Footer remains fixed, use theme colors */}
        <DialogFooter className="flex-shrink-0 border-t border-border pt-4">
          {/* Add Reset button */}
          <Button variant="destructive" onClick={handleReset} className="mr-auto h-9 text-sm">
            <RotateCcw className="mr-1.5 h-4 w-4" />
            重置数据
          </Button>
          {/* Cancel button now closes the dialog and resets local state */}
          <Button variant="outline" onClick={handleCancel} className="h-9 text-sm">
            取消
          </Button>
          <Button type="submit" onClick={handleSave} className="h-9 text-sm">
            保存更改
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default SettingDialog
