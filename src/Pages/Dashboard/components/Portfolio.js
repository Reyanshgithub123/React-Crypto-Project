import { Button, HStack, Icon, Stack,Tag,Text } from '@chakra-ui/react'
import React from 'react'

import { AiOutlineInfoCircle } from "react-icons/ai";
const Portfolio = () => {
  return (
    <HStack bg={'white'} borderRadius={'xl'} spacing={'16'} >
        <Stack>
            <HStack  color={'blackAlpha.800'}>
                <Text>Total Portfolio Value</Text>
                <Icon as={AiOutlineInfoCircle}></Icon>
            </HStack>
            <Text fontSize={'24px'}>$112,312.24 </Text>
            
        </Stack> 
        <Stack>
            <HStack  color={'blackAlpha.800'}>
                <Text>Wallet Balance</Text>
              
            </HStack>
           <HStack spacing={'16'}>
             <HStack>
               <Text fontSize={'24px'}>22.39494900</Text> <Tag>BTC</Tag>
            </HStack>
           
            <HStack>
               <Text fontSize={'24px'}>1300.00</Text> <Tag>INR</Tag>
            </HStack>
           </HStack>
           
            
        </Stack> 

        <HStack>
          <Button backgroundColor={'purple'} color={'white.200'}>Deposit</Button>
          <Button backgroundColor={'purple'} color={'white.200'}>Withdrawl</Button>
        </HStack>
    </HStack>
  )
}

export default Portfolio
