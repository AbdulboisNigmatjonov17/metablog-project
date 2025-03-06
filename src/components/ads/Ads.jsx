"use client"
import { useTheme } from "@/context/ThemeContext"

export default function Ads() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className='w-full flex justify-center items-center my-10'>
      <div className={`w-[750px] h-[100px] ${theme === 'dark' ? 'bg-[#242535]' : 'bg-[#E8E8EA]'} rounded-xl flex justify-center items-center text-center`}>
        <div className='text-[#696A75]'>
          <h5 className=''>Advertisement</h5>
          <h3>You can place ads</h3>
          <h4>750x100</h4>
        </div>
      </div>
    </div>
  )
}
