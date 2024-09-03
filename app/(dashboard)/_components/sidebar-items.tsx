"use client";

import { cn } from "@/lib/utils";
import { Layout, Compass } from "lucide-react";
import { usePathname,useRouter } from "next/navigation";

interface SidebarItemsProps{
    // icon: React.ElementType;
    // icon:LucideIcon;
    icon:IconType;
    label:string;
    href:string;
};

type IconType = "Layout" | "Compass";

const iconMap:Record<IconType, React.ElementType>  = {
    Layout, // Maps string identifier to actual component
    Compass,
  };
  

export const SidebarItem=({
    icon,
    label,
    href,
}:SidebarItemsProps)=>{
    const Icon = iconMap[icon];
    const pathname=usePathname();
    const router=useRouter();

    const isActive=
        (pathname === "/"&& href ==="/")||pathname===href||pathname?.startsWith(`${href}/`);

    const onClick = () =>{
        router.push(href);
    };

    return(
        
        <button
            onClick={onClick}
            type="button"
            className={cn(
                "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
            )}
            
        >
            <div className="flex items-center gap-x-2 py-4">
                <Icon
                    size={22}
                    className={cn (
                        "text-slate-500",
                        isActive && "text-sky-700"
                    )}
                />
                {label}
            </div>
            <div 
            className={cn(
                "ml-auto opacity-0 border-2  border-sky-700 h-full transition-all",
                isActive && "opacity-100"
            )}
            />
        </button>
    );
};