import { Heading, Text, HStack, Badge, Card, Image, Box } from '@chakra-ui/react'
import { useColorMode } from './ui/color-mode'

function CardElement({ image, name, desc, type }) {
    const { colorMode } = useColorMode();

    return (
        <>
            <div className={`flex flex-col w-fit relative rounded-2xl shadow-lg`} style={{
                backgroundImage: "url('/ec-restr/images/royal.svg')",
                backgroundSize: "150px"
            }}>
                <div className={`absolute backdrop-blur-[1px] w-full h-full top-0 left-0 ${colorMode == 'light' ? 'bg-linear-to-tr from-light via-white/0 to-light' : 'bg-linear-to-tr from-dark via-white/0 to-dark'}`}></div>
                <div className={`z-100 rounded-t-2xl overflow-hidden`} style={{ margin: '10px' }}>
                    <Image marginBottom={'15px'} src={image} maxW={ {base: "300px", md:"500px" }}objectFit="cover" />
                    <div style={{paddingTop: '10px', paddingBottom: '15px'}}>
                        <Heading fontSize={"4xl"}>{name}</Heading>
                        <Text>{desc}</Text>
                        <Badge width={'fit'} bgColor={type == 'Veg' ? 'green.500' : 'red.500'}>{type}</Badge>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardElement;