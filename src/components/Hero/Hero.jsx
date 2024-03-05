import { LuMoveRight } from 'react-icons/lu';
import hero from '../../assets/images/hero/hero_img.png'
import frem1 from '../../assets/images/hero/Frame1.png'
import frem2 from '../../assets/images/hero/Frame2.png'
import frem3 from '../../assets/images/hero/Frame3.png'
import { FaRegStarHalfStroke, FaStar } from 'react-icons/fa6';

const Hero = () => {
    return (
        <div className='containerWidth mx-auto lg:my-20 my-10'>
            <div className='flex lg:flex-row flex-col-reverse justify-center xl:mx-0 mx-5'>
                <div className='max-w-2xl mx-auto lg:px-5 xl:mt-0 mt-10'>
                    <h3 className='text-4xl font-bold text-[#050038]'>Take ideas from better to best</h3>
                    <p className='my-5'>In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                    <form action="" className='flex flex-col gap-3'>
                        <input type="email" placeholder='Enter your work email' className='w-full py-3 px-8 rounded-full border border-[#9B99AF] text-[#5F5C80]' />
                        {/* <input type="submit" value={'Sign up free'} placeholder='Enter your work email' className='w-full py-3 px-8 rounded-full border border-[#9B99AF] text-[#5F5C80]' /> */}
                        <button type='submit' className='w-full flex items-center justify-center gap-2 bg-[#4262FF] hover:bg-[#F1F3FD] hover:text-[#4262FF] text-white px-8 py-3 rounded-full hover_transition'>Sign Up free <LuMoveRight /></button>
                    </form>
                    <p className='text-[#050038] opacity-40 mt-3 mb-10'>Collaborate with your team within minutes</p>
                    <div className='bg-[#F5F5F7] p-5 flex gap-5 items-center '>
                        <div className=''>
                            <div className='flex gap-2 mb-1'>
                                <FaStar className='text-[#FF9D48] text-lg' />
                                <FaStar className='text-[#FF9D48] text-lg' />
                                <FaStar className='text-[#FF9D48] text-lg' />
                                <FaStar className='text-[#FF9D48] text-lg' />
                                <FaRegStarHalfStroke className='text-[#FF9D48] text-lg' />
                            </div>
                            <span className='text-[#050038]'>Based on 5149+ reviews:</span>
                        </div>
                        <div className='flex gap-5'>
                            <img src={frem1} className='w-full' alt="" />
                            <img src={frem2} className='w-full' alt="" />
                            <img src={frem3} className='w-full' alt="" />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <img src={hero} className='' alt="miro" />
                </div>
            </div>
        </div>
    );
};

export default Hero;