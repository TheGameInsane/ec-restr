import { Heading } from "@chakra-ui/react"
import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import { useColorMode } from './ui/color-mode'

function Hero() {
    const { colorMode } = useColorMode();
    const { scrollY } = useScroll()

    const backgroundX = useSpring(useTransform(scrollY, [0, 1000], ["0px", "-2000px"]), {
        stiffness: 50,
        damping: 20,
        restDelta: 0.001
    })
    return (
        <>
            <div id="home" className={`relative h-screen`}>
                <motion.div className="w-full h-full bg-repeat"
                    style={{
                        backgroundImage: "url('/images/royal.svg')",
                        backgroundSize: "500px",
                        backgroundPositionY: "0px", // fixed Y
                        backgroundPositionX: backgroundX,
                        backgroundAttachment: 'fixed'
                    }} >
                    <div className={`w-full h-full ${colorMode == 'light' ? 'bg-linear-to-t from-light via-white/0 to-light' : 'bg-linear-to-t from-dark via-white/0 to-dark'} top-0 left-0`}></div>
                    <div className="top-[40%] absolute w-full flex justify-center"><Heading fontSize={'5rem'}>Taste Authentic</Heading></div>
                </motion.div>
            </div>
        </>
    )
}

export default Hero