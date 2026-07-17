import { useRef } from "react"
import { cards } from "../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const TEstimonialSection = () => {

    const vdRef = useRef([])

    const handlePlay = (index) => {
       const video = vdRef.current[index];
       video.play();
    }

    const handlePause = (index) => {
       const video = vdRef.current[index];
       video.pause();
    }

    useGSAP(() => {
        gsap.set(".testimonial-section", {
            marginTop: "-140vh",
        })
    })

    return <section className="testimonial-section">
        <div className="absolute size-full flex flex-col items-center pt-[5vw]">
            <h1 className="text-black frist-title">What's</h1>
            <h1 className="text-light-brown sec-title">Cooking</h1>
            <h1 className="text-black third-title">Good Looking</h1>
        </div>

        <div className="pin-box">
            {
                cards.map((card, index) => (
                    <div key={index} className={`vd-card ${card.translation} ${card.rotation}`}
                    onMouseEnter={() => handlePlay(index)}
                    onMouseLeave={() => handlePause(index)}>
                        <video ref={(el) => {vdRef.current[index] = el}} src={card.src} playsInline muted loop className="size-full object-cover"></video>
                    </div>
                ))
            }
        </div>
    </section>
}

export default TEstimonialSection