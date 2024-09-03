"use-client";

// import { Compass, Layout } from "lucide-react";
import { SidebarItem } from "./sidebar-items"; 

type IconType = "Layout" | "Compass";

const guestRoutes: { icon: IconType; label: string; href: string}[]=[
    {
    icon:"Layout",
    label:"Dashboard",
    href:"/",
},{
    icon:"Compass",
    label:"Browse",
    href:"/search",
},
];

export const SidebarRoutes=()=>{
    const routes=guestRoutes;
    return (
        
        <div className="flex flex-col w-full">
            
             {routes.map((route)=>(
                <SidebarItem 
                    key={route.href}
                    icon={route.icon} // Passing the icon component itself
                    label={route.label}
                    href={route.href}
                />
            ))} 

        </div>
    )
}

