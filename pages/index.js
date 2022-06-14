import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import Section from '../components/sections'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { FormationSection, FormationYear } from '../components/formation'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('#D6BCFA', '#9F7AEA')}
          p={3}
          mb={6}
          align="center"
        >
          Hola, Soy un Desarrollador Full-Stack Basado en Javascript
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Gabriel Hernandez
            </Heading>
            <p>Product Builder ( Developer / UX/UI Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/gabriel.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            Gabriel is a full stack developer with a lot of passion to create
            digital services and a desire to constantly learn new technologies.
          </Paragraph>
          <Paragraph>
            I am very curious about how we can design and create super
            interesting things with JavaScript, I am very interested in web page
            design, 3d design and user experience (UX) as well as creating and
            designing databases that have excellent performance.
          </Paragraph>
          <br />
          <Paragraph>
            Presenting as one of my main strengths analysis and problem solving,
            as well as perseverance and kindness. With knowledge in project and
            program management, broad interest in software development, and
            strong programming skills.{' '}
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Formation
          </Heading>
          <FormationSection>
            <FormationYear>2021</FormationYear>
            Coding Dojo MERN Full-Stack Developer Course: I work in a training
            course in the management of programming technologies in websites and
            JavaScript-based applications.
          </FormationSection>
          <FormationSection>
            <FormationYear>2021</FormationYear>
            Udemy MEAN Full-Stack Developer Course.
          </FormationSection>
          <FormationSection>
            <FormationYear>2021</FormationYear>
            Udemy UX/UI Design Course.
          </FormationSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Hobbies ❤
          </Heading>
          <Paragraph>
            🎵Music, 🎴Anime, 🎮Video-Games, 🤖Machine-Learning, <br /> 📚Books,
            🏃Sport-Training
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
