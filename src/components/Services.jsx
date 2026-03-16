import assets from "../assets/assets"
import ServiceCard from "./ServiceCard"
import Title from "./Title"

function Services() {
    let servicesData = [
        {
            title: "Advertising",
            desc: "We turn bold ideas into powerful digital solutions that connect , engage...",
            icon: assets.ads_icon
        },
        {
            title: "Content marketing",
            desc: "We help you execute your plan and deliver results.",
            icon: assets.marketing_icon
        },
        {
            title: "Content writing",
            desc: "We help you create a marketing strategy that drives results.",
            icon: assets.content_icon
        },
        {
            title: "Social media",
            desc: "We help you build a strong social media presence and engage with your audience",
            icon: assets.social_icon
        },

    ]

    return (
        <div id="services" className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">

            <Title title="How can we help?" desc={"From strategy to execution, we craft digital solutions that move your business forward."} />

            <div className="flex flex-col md:grid grid-cols-2">
                {servicesData.map(((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                )))}
            </div>

        </div>
    )
}

export default Services