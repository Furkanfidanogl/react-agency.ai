import { useState } from "react"
import assets from "../assets/assets.js"
import ThemeToggleBtn from "./ThemeToggleBtn.jsx"
import { motion } from "motion/react"

function Navbar({ theme, setTheme }) {
    let [sidebarOpen, setsidebarOpen] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky 
    top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70 text-gray-900 dark:text-white">

            <a href="#home">
                <img
                    src={theme === "dark" ? assets.logo_dark : assets.logo}
                    alt="Logo"
                    className="w-32 sm:w-40"
                />
            </a>

            <div className={`sm:text-sm ${sidebarOpen ? "max-sm:w-60 max-sm:pl-10" : "max-sm:w-0 overflow-hidden"} 
      max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:flex-col
      max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

                <img src={assets.close_icon} alt="" className="cursor-pointer w-5 absolute right-4 top-4 sm:hidden" onClick={() => setsidebarOpen(false)} />

                <a onClick={() => setsidebarOpen(false)} href="#home" className="hover:border-b">Home</a>
                <a onClick={() => setsidebarOpen(false)} href="#services" className="hover:border-b">Services</a>
                <a onClick={() => setsidebarOpen(false)} href="#our-work" className="hover:border-b">Our Work</a>
                <a onClick={() => setsidebarOpen(false)} href="#contact-us" className="hover:border-b">Contact Us</a>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                <ThemeToggleBtn theme={theme} setTheme={setTheme} />

                <img src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
                    onClick={() => setsidebarOpen(true)}
                    className="w-8 sm:hidden cursor-pointer"
                />

                <a
                    href="#contact-us"
                    className="text-sm max-sm:hidden flex items-center
          gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"
                >
                    Connect <img src={assets.arrow_icon} width={14} alt="arrow" />
                </a>

            </div>
        </motion.div>
    )
}

export default Navbar
