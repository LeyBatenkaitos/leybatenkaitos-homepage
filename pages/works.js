import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/sections'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/gridItem'

import thumbTicketSale from '/public/images/simbolos de diagrama de flujo.png'
const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="ticketSaleSite"
              title="ticket Sale"
              thumbnail={thumbTicketSale}
            >
              A Music Event Ticket Sales Site
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
