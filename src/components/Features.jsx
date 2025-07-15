import Card from "./Card"
import data from '../assets/data.json'
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { useColorMode } from './ui/color-mode'
import { Text } from "@chakra-ui/react";

function Features() {
    const { colorMode } = useColorMode();
    const containerRef = useRef(null);

    // Get vertical scroll progress within this section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"], // from top to bottom of section
    });

    // Map vertical scroll to horizontal movement (e.g., -1000px)
    const x = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]), {
        stiffness: 50,
        damping: 10,
        restDelta: 0.0001
    })

    return (
        <>
            <section id="menu" ref={containerRef} className={` h-[400vh] relative z-100 bg-linear-to-b ${colorMode == 'light' ? 'from-light to-light/0' : 'from-dark to-light/0'}`}>
                <div className="overflow-hidden sticky top-0 h-[95vh]" style={{ zIndex: 2 }}>
                    <div className="flex flex-col items-start justify-start h-full w-full">
                        <div className={`bg-linear-to-r shadow-2xl ${colorMode == 'light' ? 'from-light/0 via-light/50 to-light/0' : 'from-light/0 via-dark/50 to-light/0'}`} style={{marginLeft: '7.5rem', marginTop: '5.5rem', marginBottom: '100px', zIndex: 100, borderRadius: '500px', padding: '20px', width: 'fit-content' }}>
                            <h1 >~ <Text fontFamily={"Playwrite IN Guides"} display={"inline"} fontSize={{base: "3xl", md: "4xl"}} fontWeight={"bold"}>Menu</Text> ~</h1>
                        </div>
                        <motion.div
                            initial={{ translateX: "5%" }}
                            style={{ x }}
                        >
                            <div className="flex gap-10 w-full justify-between">
                                {data.map(({ desc, image, name, type }, index) => {
                                    return (
                                        <Card desc={desc} image={image} name={name} type={type} i={index} key={index} />
                                    )
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Features