import { Link } from "react-router-dom";
import SectionTitel from "../SectionTitel/SectionTitel";
import { LuMoveRight } from "react-icons/lu";

const Feature = () => {
    return (
        <div className="relative containerWidth mx-auto py-20">
            <div className="text-4xl max-w-lg mx-auto font-bold text-center">
                <SectionTitel section={'Collaborate without constraints'} />
            </div>
            <p className="absolute top-10 lg:right-96 right-0 rotate-12 bg-[#FFD02F] text-[#090909] px-3 py-1 font-semibold rounded-full uppercase text-sm">Your Idea Starts Here</p>
            <div className="flex items-center justify-center">
                <div className="grid lg:grid-cols-3 lg:justify-normal justify-center lg:text-left text-center gap-4 p-4 max-w-7xl border-gray-300">
                    <div className="p-5">
                        <h3 className="font-bold text-[#050038] text-xl mb-5">Free forever</h3>
                        <p className="text-clip">
                            Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. <br /> See our
                            <Link className="text-[#4262FF]"> pricing plans</Link> for more features.
                        </p>
                    </div>
                    <div className="p-5">
                        <h3 className="font-bold text-[#050038] text-xl mb-5">Easy integrations</h3>
                        <p className="text-clip">
                            Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our
                            <Link className="text-[#4262FF]"> Marketplace</Link>.
                        </p>
                    </div>
                    <div className="p-5">
                        <h3 className="font-bold text-[#050038] text-xl mb-5">Free forever</h3>
                        <p className="text-clip">
                            We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more
                            at our
                            <Link className="text-[#4262FF]"> Trust Center</Link>.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Link className="flex items-center gap-2 bg-[#4262FF] hover:bg-[#F1F3FD] hover:text-[#4262FF] text-white px-8 py-3 rounded-full hover_transition">
                    Sign Up free
                    <LuMoveRight className="text-xl" />
                </Link>
            </div>
        </div>
    );
};

export default Feature;