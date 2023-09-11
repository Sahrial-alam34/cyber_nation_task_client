
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return (
        <footer >
            <div className="footer p-10 bg-gray-950 text-white">
        
                <div className="">
                    <span className="footer-title border-bottom-x ">ফুটার মেনু </span>
                    
                   <span className="border-list-bottom-x"> +<a className="link link-hover"> প্রতিষ্ঠানের ইতিহাস</a></span>
                    <span className="border-list-bottom-x">+ <a className="link link-hover">একাডেমিক ক্যালেন্ডার</a></span>
                    <span className="border-list-bottom-x">+ <a className="link link-hover"> যোগাযোগ</a></span>
                    <span className="border-list-bottom-x">+ <a className="link link-hover">ছুটির দিন</a></span>
                    <span className="border-list-bottom-x">+ <a className="link link-hover">কৃতি শিক্ষার্থী</a></span>
                    <span className="border-list-bottom-x">+ <a className="link link-hover">নোটিশ</a></span>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Social Media</span>
                    <a className="link link-hover"><FaFacebook className='h-[20px] w-[60px]' /></a>
                    <a className="link link-hover"><FaInstagram className='h-[20px] w-[60px]' /></a>
                    <a className="link link-hover"><FaTwitter className='h-[20px] w-[60px]' /></a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
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