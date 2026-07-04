
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap";
import { SplitText } from "gsap/all"



const MessageSection = () => {

    const paragraphRef = useRef(null);

    useGSAP(() => {
        const firstMsgSplit = SplitText.create(".first-message", {
            type: "words",
        });
        const secondMsgSplit = SplitText.create(".second-message", {
            type: "words",
        });
        const paragraphSplit = SplitText.create(".message-content p", {
            type: "words, lines",
            linesClass: "paragraph-line",
        });

        gsap.to(firstMsgSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            scrollTrigger: {
                trigger: ".message-content",
                start: "top center",
                end: "30% center",
                scrub: true,
            }
        });

        gsap.to(secondMsgSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            scrollTrigger: {
                trigger: ".message-content",
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        });

        const revealTl = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: ".msg-text-scroll",
                start: "top 60%",
            },
        });
        revealTl.to(".msg-text-scroll", {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            ease: "circ.inOut",
        });

        const paragraphTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".message-content p",
                start: "top center",
            }
        });
        paragraphTl.from(paragraphSplit.words, {
            yPercent: 300,
            rotate: 3,
            ease: "power1.inOut",
            stagger: 0.01,
            duration: 1,
        })

        const frontSplit = SplitText.create(".p-front", { type: "words" });
        const backSplit = SplitText.create(".p-back", { type: "words" });

        gsap.set(backSplit.words, { rotationX: 90, transformOrigin: "50% 100%" });

        const container = paragraphRef.current;

        const playForward = () => {
            gsap.to(frontSplit.words, {
                rotationX: -90,
                transformOrigin: "50% 0%",
                stagger: 0.04,
                duration: 0.4,
                ease: "power2.in",
                opacity: 0,
            });
            gsap.to(backSplit.words, {
                rotationX: 0,
                stagger: 0.04,
                duration: 0.4,
                ease: "power2.out",
                delay: 0.05,
            });
        };

        const playReverse = () => {
            gsap.to(backSplit.words, {
                rotationX: 90,
                transformOrigin: "50% 100%",
                stagger: 0.04,
                duration: 0.4,
                ease: "power2.in",

            });
            gsap.to(frontSplit.words, {
                rotationX: 0,
                transformOrigin: "50% 0%",
                stagger: 0.04,
                delay: 0.05,
                duration: 0.4,
                ease: "power2.out",
                opacity: 1,
            });
        };

        container.addEventListener("mouseenter", playForward);
        container.addEventListener("mouseleave", playReverse);

        return () => {
            container.removeEventListener("mouseenter", playForward);
            container.removeEventListener("mouseleave", playReverse);
        };
    })

    return (
        <section className='message-content'>
            <div className='container mx-auto flex-center py-28 relative'>
                <div className='w-full h-full'>
                    <div className='msg-wrapper'>
                        <h1 className='first-message'>I hate bad zionists Get rid of them</h1>

                        <div style={{
                            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                        }} className='msg-text-scroll'>
                            <div className='bg-light-brown md:pb-5 pb-3 px-5'>
                                <h2 className='text-red-brown'>Man up</h2>
                            </div>
                        </div>

                        <h1 className='second-message'>Become a man</h1>
                    </div>
                    <div className='flex-center md:mt-20 mt-10'>
                        <div ref={paragraphRef} className='max-w-md px-10 flex-center overflow-hidden' style={{ perspective: "400px" }}>
                            <p className="p-front" style={{ position: "absolute" }}>
                                I Love Women</p>
                            <p className="p-back">I Love Women</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MessageSection