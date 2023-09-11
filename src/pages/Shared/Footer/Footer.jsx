
import { MdOutlineLocationOn,MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { RiStarHalfFill } from "react-icons/ri";
import './Footer.css'

const Footer = () => {
    return (
        <footer >
            <div className="footer p-10 bg-gray-950 text-white">
        
                <div className="footer-menu">
                    <span className="footer-title border-bottom-x ">ফুটার মেনু </span>
                    
                   <span className="border-list-bottom-x"> +<a className="link link-hover"> প্রতিষ্ঠানের ইতিহাস</a></span>
                    <span className="border-list-bottom-x">+ <a className="link link-hover">একাডেমিক ক্যালেন্ডার</a></span>
                    <span className="border-list-bottom-x">+ <a className="link link-hover"> যোগাযোগ</a></span>
                    <span className="border-list-bottom-x">+ <a className="link link-hover">ছুটির দিন</a></span>
                    <span className="border-list-bottom-x">+ <a className="link link-hover">কৃতি শিক্ষার্থী</a></span>
                    <span className="border-list-bottom-x">+ <a className="link link-hover">নোটিশ</a></span>
                </div>
                <div className="">
                    <span className="footer-title border-bottom-x ">ফুটার মেনু </span>
                    
                   <span className="border-list-bottom-x"> +<a className="link link-hover"> পরীক্ষার ফলাফল</a></span>
                    <span className="border-list-bottom-x">+ <a className="link link-hover">ব্লগ</a></span>
                    <span className="border-list-bottom-x">+ <a className="link link-hover"> ডাউনলোড</a></span>
                    <span className="border-list-bottom-x">+ <a className="link link-hover">পরীক্ষার রুটিন</a></span>
               
                    <span className="border-list-bottom-x">+ <a className="link link-hover">ভর্তি</a></span>
                    <span className="border-list-bottom-x">+ <a className="link link-hover">বাংলা টিউটোরিয়াল</a></span>
                </div>
                <div className="">
                    <span className="footer-title border-bottom-x ">যোগাযোগের ঠিকানা</span>
                    
                   <span className=" flex gap-2"><MdOutlineLocationOn  className="text-2xl"></MdOutlineLocationOn> <p className=""> চুনারুঘাট সদর, উপজেলা : চুনারুঘাট, জেলা : হবিগঞ্জ,<br /> বিভাগ : সিলেট, বাংলাদেশ</p></span>
                   <span className=" flex gap-2"><IoCallOutline className="text-xl"></IoCallOutline> <p className=""> +88020000000</p></span>
                   <span className=" flex gap-2"><MdOutlineEmail className="text-xl"></MdOutlineEmail> <p className=""> info@aboutme.com</p></span>
                   <span className=" flex gap-2"><RiStarHalfFill className="text-xl"></RiStarHalfFill> <p className=""> ইআইআইএন নং : ২৩২৩২৩</p></span>
                   <span className=" flex gap-2"><AiOutlineHome className="text-xl"></AiOutlineHome> <p className=""> কলেজ কোড : ১৩২১২</p></span>
                  
                </div>
           
            </div>
            <div className=" footer-center p-4 bg-gray-800 text-white">
                <div className="flex justify-between">
                    <p>© All rights reserved © E-School</p>
                    <p>Theme Developed BY ThemesBazar.Com</p>
                </div>
            </div>
         
        </footer>
    );
};

export default Footer;