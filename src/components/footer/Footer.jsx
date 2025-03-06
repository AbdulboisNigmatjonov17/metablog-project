"use client"
import { useTheme } from "@/context/ThemeContext";
import Logo from "../logo/Logo";
import { MailOutline } from "@mui/icons-material";

export default function Footer() {
    const { theme } = useTheme()
    return (
        <footer className={`${theme === 'dark' ? 'bg-[#141624]' : 'bg-[#F6F6F7]'} py-16 `}>
            <div className="Container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-semibold">About</h3>
                    <p className="text-gray-600 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className="text-gray-600"><strong className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Email:</strong> info@jstemplate.net</p>
                    <p className="text-gray-600"><strong className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Phone:</strong> 880 123 456 789</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Quick Link</h3>
                    <ul className="-2 space-y-2 text-gray-600">
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Archived</li>
                        <li>Author</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Category</h3>
                    <ul className="-2 space-y-2 text-gray-600">
                        <li>Lifestyle</li>
                        <li>Technology</li>
                        <li>Travel</li>
                        <li>Business</li>
                        <li>Economy</li>
                        <li>Sports</li>
                    </ul>
                </div>
                <div className={`${theme === 'dark' ? 'bg-[#242535]' : 'bg-white'} w-[390px] flex flex-col justify-center p-8 gap-3 text-center`}>
                    <h3 className="text-xl font-semibold">Weekly Newsletter</h3>
                    <p className="text-[#696A75]">Get blog articles and offers via email</p>
                    <form className={`outline-1 outline-[#DCDDDF] flex justify-between py-3 px-4 text-[#97989F] rounded-md ${theme === 'dark' ? 'bg-[#181A2A]' : 'bg-white'}`}>
                        <input type="text" placeholder="Your Email" className="outline-none w-full"/>
                        <MailOutline />
                    </form>
                    <button className="w-full bg-blue-600 text-white py-2 cursor-pointer hover:bg-blue-800 rounded">Subscribe</button>
                </div>
            </div>
            <hr className="my-10" />
            <div className="Container w-full flex justify-between">
                <Logo />
                <div className="flex gap-5 items-center">
                    <p className="text-gray-600">Terms of Use</p>
                    <p className="text-gray-600">Privacy Policy</p>
                    <p className="text-gray-600">Cookie Policy</p>
                </div>
            </div>
        </footer>
    );
}