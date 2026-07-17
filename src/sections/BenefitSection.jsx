import { useGSAP } from "@gsap/react"
import ClipPathTitle from "../components/ClipPathTitle"
import gsap from "gsap"
import VideoPinned from "../components/VideoPinned"


const BenefitSection = () => {

    useGSAP(() => {
        const revealTl = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: ".benefit-section",
                start: "top 60%",
                end: "top top",
                scrub: 1.5,
            }
        });

        revealTl.to(".benefit-section .first-title", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            ease: "circ.out",
        }).to(".benefit-section .second-title", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            ease: "circ.out",
        }).to(".benefit-section .third-title", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            ease: "circ.out",
        }).to(".benefit-section .fourth-title", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            ease: "circ.out",
        })
    })

    return <section className="benefit-section">
        <div className="container mx-auto pt-20">
            <div className="col-center">
                <p>Anime Women love:</p>

                <div className="mt-20 col-center">
                    <ClipPathTitle title={"Cock & Ball Torture"} color={"#faeade"} bg={"#c88e64"} className={"first-title"} borderColor={"#222123"}></ClipPathTitle>
                    <ClipPathTitle title={"Say Gex"} color={"#222123"} bg={"#faeade"} className={"second-title"} borderColor={"#222123"}></ClipPathTitle>
                    <ClipPathTitle title={"10 Big Hot Men"} color={"#faeade"} bg={"#7F382D"} className={"third-title"} borderColor={"#222123"}></ClipPathTitle>
                    <ClipPathTitle title={"Bababoey"} color={"#2E2D2F"} bg={"#FED775"} className={"fourth-title"} borderColor={"#222123"}></ClipPathTitle>
                </div>
                <div className="md:mt-0 mt-10">
                    <p>And much more ...</p>
                </div>
            </div>
        </div>

        <div className="relative overlay-box">
            <VideoPinned></VideoPinned>
        </div>

    </section>
}

export default BenefitSection