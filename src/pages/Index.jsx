import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/markets">Markets</Link>
          <Link as={RouterLink} to="/companies">Companies</Link>
          <Link as={RouterLink} to="/tech">Tech</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} p={4}>
        {/* Latest News Articles */}
        <Box as="section" gridColumn={{ md: "span 2" }}>
          <Heading as="h2" size="xl" mb={4}>Latest News</Heading>
          <VStack spacing={8} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>News Headline 1</Heading>
                <Text>Brief description of the news article. This is a summary of the content to give readers an idea of what the article is about.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>News Headline 2</Heading>
                <Text>Brief description of the news article. This is a summary of the content to give readers an idea of what the article is about.</Text>
              </Box>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar with Market Data */}
        <Box as="aside">
          <Heading as="h2" size="xl" mb={4}>Market Data</Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <Heading as="h3" size="md" mb={2}>Stock Prices</Heading>
              <Text>Example Stock: $123.45</Text>
              <Text>Example Stock: $67.89</Text>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <Heading as="h3" size="md" mb={2}>Indices</Heading>
              <Text>Index 1: 4567.89</Text>
              <Text>Index 2: 1234.56</Text>
            </Box>
          </VStack>
        </Box>
      </SimpleGrid>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box>
            <Heading as="h3" size="md" mb={2}>Contact Information</Heading>
            <Text>Email: contact@financialtimes.com</Text>
            <Text>Phone: +123 456 7890</Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={2}>Privacy Policy</Heading>
            <Link href="#">Read our privacy policy</Link>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={2}>Terms of Service</Heading>
            <Link href="#">Read our terms of service</Link>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;