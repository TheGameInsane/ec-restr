import { useState } from "react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { CloseButton, Drawer, Portal } from "@chakra-ui/react"
import { ColorModeButton, useColorMode } from './ui/color-mode'

function Navbar() {
    const [open, setOpen] = useState(false)

    const { colorMode } = useColorMode();

    return (
        <>
            <div style={{ padding: '10px' }} className={`flex w-full justify-between items-center fixed top-0 z-1000 ${colorMode == 'light' ? 'bg-light/75' : 'bg-dark/75'}`}>
                <h1 style={{ fontSize: '34px', fontFamily: "Playwrite IN Guides", padding: '10px', fontWeight: 'bolder' }}>SaffronSpoon</h1>
                <div className="flex items-center justify-between">
                    <div className="md:hidden block">
                        <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
                            <Drawer.Trigger asChild>
                                <Button variant="outline" size="sm">
                                    <svg id="openMenu" class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 6h16M4 12h16m-7 6h7"></path>
                                    </svg>
                                </Button>
                            </Drawer.Trigger>
                            <Portal>
                                <Drawer.Backdrop />
                                <Drawer.Positioner>
                                    <Drawer.Content>
                                        <ButtonGroup variant='outline'>
                                            <div className="flex flex-col items-center justify-center h-[75vh]" style={{marginTop: '20px'}}>
                                                <Button margin={'1rem'} fontSize='xl' onClick={() => window.location.href = '#home'}>Home</Button>
                                                <Button margin={'1rem'} fontSize='xl' onClick={() => window.location.href = '#menu'}>Menu</Button>
                                                <ColorModeButton />
                                            </div>
                                        </ButtonGroup>
                                        <Drawer.CloseTrigger asChild>
                                            <CloseButton size="sm" />
                                        </Drawer.CloseTrigger>
                                    </Drawer.Content>
                                </Drawer.Positioner>
                            </Portal>
                        </Drawer.Root>
                    </div>
                    <div className="hidden md:block">
                        <ButtonGroup variant='ghost'>
                            <Button fontSize='xl' onClick={() => window.location.href = '#home'}>Home</Button>
                            <Button fontSize='xl' onClick={() => window.location.href = '#menu'}>Menu</Button>
                            <ColorModeButton />
                        </ButtonGroup>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar