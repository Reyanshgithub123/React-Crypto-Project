import React from 'react'
import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";

import Sidenav from "./Sidenav";
import TopNav from "./Topnav";
import SideDrawer from "./SideDrawer";
const Layout = ({ title, children }) => {
    const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex>
    <Box
      display={{
        base: "none",
        lg: "flex",
      }}
    >
      <Sidenav />
    </Box>
    <SideDrawer isOpen={isOpen} onClose={onClose} />
    <Box flexGrow={1}>
      <TopNav title={title} onOpen={onOpen} />
      <Container
        overflowX="hidden"
        overflowY="auto"
        h="calc(100vh - 88px)"
        mt="6"
        maxW="70rem"
        
      >
        

        {children}
      </Container>
    </Box>
  </Flex>
  )
}

export default Layout
