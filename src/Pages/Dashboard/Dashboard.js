import React from 'react'

import Layout from '../../components/Layout'
import Portfolio from './components/Portfolio'
import PriceSection from './components/PriceSection'
import Transactions from './components/Transactions'
import { Flex } from '@chakra-ui/react'
import InfoCard from './components/InfoCard'

const Dashboard = () => {
  return (
    <>
   <Layout title={'Dashboard'}>

   <Portfolio></Portfolio>
   <Flex>
   <PriceSection></PriceSection>
   <Transactions></Transactions>
   </Flex>
   <Flex gap={'10px'}>
   <InfoCard
            imgUrl="/dot_bg.svg"
            text=" Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it"
            tagText="Loan"
            inverted={true}
          />
   <InfoCard  inverted={true}
            tagText="Contact"
          
            text="Learn more about our real estate, mortgage, and  corporate account services"></InfoCard>
   </Flex>
  
   
   </Layout>
  
    </>
  )
}

export default Dashboard
