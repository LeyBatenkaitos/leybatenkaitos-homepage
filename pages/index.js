import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () => {
  return (
      <Container>
        <Box borderRadius="lg" bg="lightblue" p={3} mb={6} align="center">
          Hola, Soy un Desarrollador Full-Stack Basado en Javascript
        </Box>

        <Box display={{md:"flex"}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
             Gabriel Hernandez
            </Heading>
        <p>Product Builder ( Developer / UX/UI Designer )</p>
          </Box>          
        </Box>
      </Container>
  )
}

export default Page;