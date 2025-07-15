import TCards from "./TCards"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { useColorMode } from './ui/color-mode'
import { Text } from "@chakra-ui/react";

function Testimoanials() {
    const [width, setWidth] = useState(0);
    const { colorMode } = useColorMode();

    const trackRef = useRef(null);

    useEffect(() => {
        if (trackRef.current) {
            setWidth(trackRef.current.scrollWidth / 2); // since we're duplicating
        }
    }, []);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <div className={`flex flex-col items-start justify-evenly h-screen overflow-hidden bg-linear-to-b ${colorMode == 'light' ? 'from-light/0 to-light' : 'from-light/0 to-dark'}`}>
                    <div className={`bg-linear-to-r shadow-2xl ${colorMode == 'light' ? 'from-light/0 via-light/50 to-light/0' : 'from-light/0 via-dark/50 to-light/0'}`} style={{ marginLeft: '7.5rem', marginBottom: '100px', zIndex: 100, borderRadius: '500px', padding: '20px', width: 'fit-content' }}>
                        <h1 >~ <Text fontFamily={"Playwrite IN Guides"} display={"inline"} fontSize={{base: "3xl", md: "4xl"}} fontWeight={"bold"}>Testimonials</Text> ~</h1>
                    </div>
                    <motion.div
                        ref={trackRef}
                        animate={{ x: [-0, -width / 2, 0] }}
                        transition={{
                            duration: 20, // adjust speed here
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        <div className="h-[10%] flex items-start">
                            {[...testimonials, ...testimonials].map(({ content, author }, index) => {
                                const isEven = index % 2 === 0;
                                return (
                                    <div
                                        key={index}
                                        style={{
                                            margin: '20px',
                                            padding: '0',
                                            width: '300px',
                                            alignSelf: isEven ? 'flex-start' : 'flex-end',
                                            transition: 'align-self 0.3s'
                                        }}
                                    >
                                        <TCards
                                            content={content}
                                            author={author}
                                            style={{
                                                padding: '20px',
                                                width: '100%'
                                            }}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div >
            </motion.div >
        </>
    )
}

const testimonials = [
    {
        content: 'The food was absolutely amazing! The flavors were rich and the presentation was beautiful. I will definitely be coming back for more.',
        author: 'John Doe'
    },
    {
        content: 'The food was absolutely amazing! The flavors were rich and the presentation was beautiful. I will definitely be coming back for more.',
        author: 'John Doe'
    },
    {
        content: 'The food was absolutely amazing! The flavors were rich and the presentation was beautiful. I will definitely be coming back for more.',
        author: 'John Doe'
    },
    {
        content: 'The food was absolutely amazing! The flavors were rich and the presentation was beautiful. I will definitely be coming back for more.',
        author: 'John Doe'
    },
    {
        content: 'The food was absolutely amazing! The flavors were rich and the presentation was beautiful. I will definitely be coming back for more.',
        author: 'John Doe'
    },
    {
        content: 'The food was absolutely amazing! The flavors were rich and the presentation was beautiful. I will definitely be coming back for more.',
        author: 'John Doe'
    },
    {
        content: 'The food was absolutely amazing! The flavors were rich and the presentation was beautiful. I will definitely be coming back for more.',
        author: 'John Doe'
    },
    {
        content: 'The food was absolutely amazing! The flavors were rich and the presentation was beautiful. I will definitely be coming back for more.',
        author: 'John Doe'
    }
]

export default Testimoanials