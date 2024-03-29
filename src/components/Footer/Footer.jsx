import { Link } from 'react-router-dom';
import footerIcon from '../../assets/images/certo-dark-yellow.svg.png'
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <div className="bg-[#02033B] text-white py-20 lg:px-0 px-5">
            <div className="max-w-7xl mx-auto">
                <div className="flex lg:flex-row flex-col-reverse gap-24 xl:text-left text-center justify-between">
                    <div>
                        <h4 className="text-xl font-extrabold mb-10">Scan. Detect. Remove.</h4>

                        <div className='flex gap-8 lg:justify-start justify-center'>
                            <FaTwitterSquare className='text-4xl' />
                            <FaFacebookSquare className='text-4xl' />
                            <FaYoutubeSquare className='text-4xl' />
                        </div>
                        <div className='flex gap-5 lg:justify-start justify-center my-10 text-sm'>
                            <Link className='border-b'>Privacy Policy</Link>
                            <Link className='border-b'>Terms of Service</Link>
                        </div>
                        <p className='text-sm'>Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>
                        <p className='text-sm mt-5'>Designed & developed by Bigger Picture</p>
                    </div>
                    <div>
                        <h4 className="text-3xl font-extrabold border-b pb-5 mb-8">Miro.</h4>
                        <div className='flex flex-col  gap-5'>
                            <p className='flex lg:justify-start justify-center items-center gap-3 font-extrabold text-lg text-[#FFC247]'><IoRemoveOutline />iPhone</p>
                            <p className='flex lg:justify-start justify-center items-center gap-3 font-extrabold text-lg text-[#FFC247]'><IoRemoveOutline />Android</p>
                            <p className='flex lg:justify-start justify-center items-center gap-3 font-extrabold text-lg text-[#FFC247]'><IoRemoveOutline />Help</p>
                            <p className='flex lg:justify-start justify-center items-center gap-3 font-extrabold text-lg text-[#FFC247]'><IoRemoveOutline />About</p>
                            <p className='flex lg:justify-start justify-center items-center gap-3 font-extrabold text-lg text-[#FFC247]'><IoRemoveOutline />Insights</p>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-[#FFC247] p-10 rounded-3xl bg-origin-content lg:bg-center bg-left bg-no-repeat text-[#02033B]" style={{ backgroundImage: `url(${footerIcon})` }}>
                            <h4 className='font-extrabold text-xl mb-3'>Sign up to our newsletter</h4>
                            <p>Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>

                            <div className='mt-8 flex items-center'>
                                <input type='email' placeholder='Email address' className='lg:w-auto w-[80%] px-6 py-2 rounded-s-full border-none focus:outline-none' />
                                <button type="button" className="px-8 py-[10px] text-sm font-bold text-white hover:text-[#02033B] border-l rounded-r-full bg-[#02033B] hover:bg-white">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:max-w-2xl max-w-md lg:mx-0 mx-auto lg:text-left text-center mt-10 text-sm'>
                    <p>Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;