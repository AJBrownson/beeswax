import { RxDashboard, RxAvatar } from "react-icons/rx";
import { AiOutlineHome } from "react-icons/ai"
import { BsBriefcase, BsPeople } from "react-icons/bs"

export const SidebarLinks = [
    {
        icon: RxDashboard,
        title: "Dashboard",
        path: "/"
    },
    {
        icon: AiOutlineHome,
        title: "Home",
        path: "/home"
    },
    {
        icon: BsBriefcase,
        title: "Portfolio",
        path: "/my-portfolio"
    },
    {
        icon: RxAvatar,
        title: "About",
        path: "/about-me"
    },
    {
        icon: BsPeople,
        title: "Guest",
        path: "/guestbook"
    },
]