import { AppSidebar } from "@/components/layout/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { BookOpen, FileText, HelpCircle, LayoutDashboard, Settings, TrendingUp } from "lucide-react"
// import { AppSidebar } from "@/components/app-sidebar"
const items = [
    { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard/student" },
    { title: "My Courses", icon: BookOpen, href: "/dashboard/student/courses" },
    { title: "Assignments", icon: FileText, href: "/dashboard/student/assignments" },
    { title: "Quizzes", icon: HelpCircle, href: "/dashboard/student/quizzes" },
    { title: "Progress", icon: TrendingUp, href: "/dashboard/student/progress" },
    { title: "Settings", icon: Settings, href: "/dashboard/student/settings" }
]
// type SidebarItem = {
//   title: string;
//   icon: string;
//   href: string;
// };
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar items={items} />
            <SidebarInset>
                {/* <SiteHeader /> */}
                <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
                    <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mx-2 data-[orientation=vertical]:h-4"
                        />
                        <h1 className="text-base font-medium">Documents</h1>
                    </div>
                </header>
                {/* <SidebarTrigger /> */}
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                            {/* <SectionCards /> */}
                            {children}
                            <div className="px-4 lg:px-6">
                                {/* <ChartAreaInteractive /> */}
                            </div>
                            {/* <DataTable data={data} /> */}
                        </div>
                    </div>
                </div>
            </SidebarInset>
            {/* <main>
                {children}
            </main> */}
        </SidebarProvider>
    )
}
