import { Link } from "react-router-dom";
import SectionTitel from "../SectionTitel/SectionTitel";
import { LuMoveRight } from "react-icons/lu";

const Feature = () => {
    return (
        <div className="containerWidth mx-auto py-20">
            <div className="text-4xl font-bold text-center">
                <SectionTitel section={'Collaborate without constraints'} />
            </div>
            <div className="grid lg:grid-cols-3 xl:text-left text-center place-items-center mt-10">
                <div className="p-5 w-80">
                    <h3 className="font-bold text-[#050038] text-xl mb-4">Free forever</h3>
                    <p className="text-clip">
                        Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. <br /> See our
                        <Link className="text-[#4262FF]"> pricing plans</Link> for more features.
                    </p>
                </div>
                <div className="p-5 w-80">
                    <h3 className="font-bold text-[#050038] text-xl mb-4">Easy integrations</h3>
                    <p className="text-clip">
                        Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our
                        <Link className="text-[#4262FF]"> Marketplace</Link>.
                    </p>
                </div>
                <div className="p-5 w-80">
                    <h3 className="font-bold text-[#050038] text-xl mb-4">Free forever</h3>
                    <p className="text-clip">
                        We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more
                        at our
                        <Link className="text-[#4262FF]"> Trust Center</Link>.
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <Link className="flex items-center gap-2 bg-[#4262FF] hover:bg-[#F1F3FD] hover:text-[#4262FF] text-white px-8 py-3 rounded-full hover_transition">
                    Sign Up free
                    <LuMoveRight className="text-xl" />
                </Link>
            </div>
        </div>
    );
};

export default Feature;