import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const articles = [
    {
      title: "Global Markets Rally Amid Economic Optimism",
      description: "Stocks around the world surged today as investors grew more optimistic about the global economic outlook.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Tech Giants Report Record Earnings",
      description: "Leading technology companies have reported record earnings for the last quarter, driven by strong demand for digital services.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "New Regulations Impact Financial Sector",
      description: "The financial sector is adjusting to new regulations aimed at increasing transparency and reducing risk.",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  const marketData = [
    { name: "S&P 500", value: "4,500.50", change: "+1.25%" },
    { name: "Dow Jones", value: "35,000.75", change: "+0.85%" },
    { name: "Nasdaq", value: "14,000.20", change: "+1.75%" },
  ];

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/markets">Markets</Link>
          <Link as={RouterLink} to="/companies">Companies</Link>
          <Link as={RouterLink} to="/tech">Tech</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
        </HStack>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} my={4}>
        <Box as="main" gridColumn={{ md: "span 2" }}>
          {articles.map((article, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" mb={4}>
              <Image src={article.imageUrl} alt={article.title} mb={4} />
              <Heading as="h2" size="md" mb={2}>{article.title}</Heading>
              <Text>{article.description}</Text>
            </Box>
          ))}
        </Box>

        <Box as="aside" p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="md" mb={4}>Market Data</Heading>
          {marketData.map((data, index) => (
            <Box key={index} mb={2}>
              <Text fontWeight="bold">{data.name}</Text>
              <Text>{data.value} <Text as="span" color={data.change.startsWith("+") ? "green.500" : "red.500"}>{data.change}</Text></Text>
            </Box>
          ))}
        </Box>
      </SimpleGrid>

      <Flex as="footer" bg="gray.800" color="white" p={4} justifyContent="space-between" mt={4}>
        <Text>&copy; 2023 Financial Times</Text>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/contact">Contact</Link>
          <Link as={RouterLink} to="/privacy">Privacy Policy</Link>
          <Link as={RouterLink} to="/terms">Terms of Service</Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;