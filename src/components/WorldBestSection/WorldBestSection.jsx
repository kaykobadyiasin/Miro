import { Link } from "react-router-dom";
import SectionTitel from "../SectionTitel/SectionTitel";
import { LuMoveRight } from "react-icons/lu";
import vmware from '../../assets/images/worlBest/vmware.svg.png'
import docsign from '../../assets/images/worlBest/Docusign-Testimonials-280-60-Baseline.svg.png'
import frog from '../../assets/images/worlBest/div.png'
import pic1 from '../../assets/images/worlBest/div1.png'
import pic2 from '../../assets/images/worlBest/div2.png'
import pic3 from '../../assets/images/worlBest/div3.png'

const WorldBestSection = () => {
    return (
        <div className="relative containerWidth mx-auto py-20">
            <div className="text-4xl max-w-xl mx-auto font-bold text-center">
                <SectionTitel section={"Loved by the world's best teams"} />
            </div>
            <div className="flex justify-center mt-5">
                <Link className="flex items-center gap-2 border border-[#4262FF] hover:bg-[#4262FF] bg-transparent hover:text-white text-[#4262FF] px-8 py-2 rounded-full hover_transition">
                    Sign Up free
                    <LuMoveRight className="text-xl" />
                </Link>
            </div>
            <div className="flex items-center justify-center mt-10">
                <div className="grid lg:grid-cols-3 lg:justify-normal justify-center lg:text-left text-center gap-4 p-4 max-w-7xl border-gray-300 text-[#050038]">
                    <div className="p-5 flex flex-col justify-between lg:border-transparent border rounded-md">
                        <div>
                            <img src={vmware} className="w-52 lg:mx-0 mx-auto" alt="" />
                            <p className="text-clip opacity-60 mt-5">
                                “When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”
                            </p>
                        </div>
                        <div className="flex items-center gap-3 mt-8">
                            <img src={pic1} alt="" />
                            <p className="opacity-60 text-sm text-left">Roxanne Mustafa Design Team Lead at VMware</p>
                        </div>
                    </div>
                    <div className="p-5 flex flex-col justify-between lg:border-transparent border rounded-md">
                        <div>
                            <img src={docsign} className="w-52 lg:mx-0 mx-auto" alt="" />
                            <p className="text-clip opacity-60 mt-5 ">
                                “Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”
                            </p>
                        </div>
                        <div className="flex items-center gap-3 mt-8">
                            <img src={pic2} alt="" />
                            <p className="opacity-60 text-sm text-left">Roxanne Mustafa Design Team Lead at VMware</p>
                        </div>
                    </div>
                    <div className="p-5 flex flex-col justify-between lg:border-transparent border rounded-md">
                        <div>
                            <img src={frog} className="w-52 lg:mx-0 mx-auto" alt="" />
                            <p className="text-clip opacity-60 mt-5 ">
                                “As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”
                            </p>
                        </div>
                        <div className="flex items-center gap-3 mt-8">
                            <img src={pic3} alt="" />
                            <p className="opacity-60 text-sm text-left">Roxanne Mustafa Design Team Lead at VMware</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorldBestSection;