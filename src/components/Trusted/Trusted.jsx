import cisco from '../../assets/images/trusted/cisco.svg.png'
import deloitte from '../../assets/images/trusted/deloitte.svg.png'
import okta from '../../assets/images/trusted/okta.svg.png'
import volvo from '../../assets/images/trusted/Volvo_Index_Only.svg.png'
import walmart from '../../assets/images/trusted/Walmart_Index_Only.svg.png'

const Trusted = () => {

    const trusted = [
        { _id: 1, image: walmart },
        { _id: 2, image: cisco },
        { _id: 3, image: volvo },
        { _id: 4, image: deloitte },
        { _id: 5, image: okta },
    ]

    return (
        <div className="containerWidth mx-auto lg:my-32 my-20">
            <h4 className='text-center text-[#050038] opacity-60'>Trusted by 45M+ users</h4>
            <div className='flex lg:flex-row flex-col lg:gap-28 gap-5 justify-center items-center lg:mt-14 mt-5 xl:mx-0 mx-5'>
                {trusted.map((item, idx) => (
                    <div key={idx}>
                        <img src={item.image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trusted;