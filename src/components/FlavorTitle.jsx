import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/all"

const FlavorTitle = () => {

    useGSAP(() => {
        const firstMsgSplit = SplitText.create(".first-text-split h1", {
            type: "chars",
        });

        const secondMsgSplit = SplitText.create(".second-text-split h1", {
            type: "chars",
        });

        gsap.from(firstMsgSplit.chars, {
            yPercent: 200,
            stagger: 0.02,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "top 30%",
            },
        });

        gsap.to(".flavor-text-scroll", {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            ease: "circ.out",
             scrollTrigger: {
                trigger: ".flavor-section",
                start: "top 10%",
            },
        });

        gsap.from(secondMsgSplit.chars, {
            yPercent: 200,
            stagger: 0.02,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "top 1%",
            },
        });
    })

    return (
        <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16 -translate-x-10">
            <div className="overflow-hidden 2xl:py-8 py-3 first-text-split">
                <h1>6 big </h1>
            </div>

            <div style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
            }} className="flavor-text-scroll">
                <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
                    <h2 className="text-milk">Hot</h2>
                </div>

            </div>

            <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
                <h1>sweaty men</h1>
            </div>

        </div>
    )
}

export default FlavorTitle