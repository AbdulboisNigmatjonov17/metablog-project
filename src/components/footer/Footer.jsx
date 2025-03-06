"use client"
import { useTheme } from "@/context/ThemeContext";
import Logo from "../logo/Logo";

export default function Footer() {
    const { theme } = useTheme()
    return (
        <footer className={`${theme === 'dark' ? 'bg-[#141624]' : 'bg-[#F6F6F7]'} py-16 `}>
            <div className="Container grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-semibold">About</h3>
                    <p className="text-gray-600 -2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className="text-gray-600 -2"><strong>Email:</strong> info@jstemplate.net</p>
                    <p className="text-gray-600"><strong>Phone:</strong> 880 123 456 789</p>
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
                <div className={`${theme === 'dark' ? 'bg-[#242535]' : 'bg-white'}`}>
                    <h3 className="text-lg font-semibold">Weekly Newsletter</h3>
                    <p className="text-gray-600 -2">Get blog articles and offers via email</p>
                    <input type="email" placeholder="Your Email" className="w-full -2 p-2 border rounded" />
                    <img src="" alt="" />
                    <button className="w-full bg-blue-600 text-white py-2 -2 rounded">Subscribe</button>
                </div>
            </div>
            <hr className="Container" />
            <div className="Container w-full flex justify-between">
                <Logo />
                <div className="">
                    <p className="text-gray-600">Terms of Use</p>
                    <p className="text-gray-600">Privacy Policy</p>
                    <p className="text-gray-600">Cookie Policy</p>
                </div>
            </div>
        </footer>
    );
}