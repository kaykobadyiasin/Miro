import { Link } from 'react-router-dom';
import section1 from '../../assets/images/sections/hybridwork.png.png'
import section2 from '../../assets/images/sections/M3_integrations_all_integrations.png.png'
import section from '../../assets/images/sections/section.png'
import SectionTitel from '../SectionTitel/SectionTitel';
import { LuMoveRight } from 'react-icons/lu';

const Sections = () => {
    return (
        <div className='pb-20'>
            {/* section 1  */}
            <div className='flex lg:flex-row flex-col justify-evenly items-center containerWidth mx-auto'>
                <div className='lg:w-[33%]'>
                    <div className="text-4xl font-bold">
                        <SectionTitel section={'Work together, wherever you work'} />
                    </div>
                    <p className='my-5'>In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                    <div className='inline-block'>
                        <Link className='flex items-center gap-2 text-[#4262FF] border-b hover_transition hover:border-[#4262FF]'>Learn more <LuMoveRight /></Link>
                    </div>
                </div>

                <div className=''>
                    <img src={section1} alt="" />
                </div>
            </div>

            {/* section 2  */}
            <div className='flex lg:flex-row flex-col-reverse justify-evenly items-center lg:gap-0 gap-10 containerWidth  mx-auto xl:mt-0 my-20'>

                <div className=''>
                    <img src={section2} alt="" />
                </div>
                <div className='lg:w-[33%]'>
                    <div className="text-4xl font-bold">
                        <SectionTitel section={'Connect your tools, close your tabs'} />
                    </div>
                    <p className='my-5'>In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                    <div className='inline-block'>
                        <Link className='flex items-center gap-2 text-[#4262FF] border-b hover_transition hover:border-[#4262FF]'>Learn more <LuMoveRight /></Link>
                    </div>
                </div>
            </div>

            {/* section 3  */}
            <div className='containerWidth mx-auto'>
                <div className="lg:bg-origin-content lg:bg-center bg-left relative h-[500px] flex items-center justify-center bg-no-repeat" style={{ backgroundImage: `url(${section})` }}>
                    <div className='w-full'></div>
                    <div className='absolute lg:right-80 text-[#050038] flex flex-col gap-2 text-center'>
                        <h1 className=" text-2xl font-bold">The Ways We Work</h1>
                        <p>How has our relationship with work changed?</p>
                        <div className='flex justify-center'>
                            <Link className='flex items-center justify-center gap-2 bg-[#4262FF] hover:bg-[#F1F3FD] hover:text-[#4262FF] text-white px-8 py-3 rounded-full hover_transition'>View the report <LuMoveRight /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sections;