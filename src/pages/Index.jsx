import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaChartLine, FaBuilding, FaLaptop, FaCommentDots } from "react-icons/fa";

const articles = [
  {
    title: "Market Rally Continues",
    description: "Stocks surged today as investors reacted positively to the latest economic data...",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Tech Giants Release Earnings",
    description: "The major tech companies have released their quarterly earnings, showing mixed results...",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "New Regulations in the Financial Sector",
    description: "The government has introduced new regulations aimed at increasing transparency...",
    image: "https://via.placeholder.com/150",
  },
];

const marketData = [
  { name: "S&P 500", value: "4,500.50", change: "+0.75%" },
  { name: "Dow Jones", value: "35,000.00", change: "+0.50%" },
  { name: "Nasdaq", value: "14,000.00", change: "+1.00%" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">Financial Times</Heading>
        <HStack spacing={4}>
          <Link href="#"><FaHome /> Home</Link>
          <Link href="#"><FaChartLine /> Markets</Link>
          <Link href="#"><FaBuilding /> Companies</Link>
          <Link href="#"><FaLaptop /> Tech</Link>
          <Link href="#"><FaCommentDots /> Opinion</Link>
        </HStack>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mt={4}>
        <Box as="main" colSpan={{ base: 1, md: 2 }}>
          <Heading size="lg" mb={4}>Latest News</Heading>
          {articles.map((article, index) => (
            <Box key={index} mb={4} p={4} borderWidth="1px" borderRadius="md">
              <Image src={article.image} alt={article.title} mb={4} />
              <Heading size="md" mb={2}>{article.title}</Heading>
              <Text>{article.description}</Text>
            </Box>
          ))}
        </Box>

        <Box as="aside" colSpan={{ base: 1, md: 1 }} p={4} borderWidth="1px" borderRadius="md">
          <Heading size="lg" mb={4}>Market Data</Heading>
          {marketData.map((data, index) => (
            <Box key={index} mb={2}>
              <Text fontWeight="bold">{data.name}</Text>
              <Text>{data.value} <Text as="span" color={data.change.startsWith('+') ? 'green.500' : 'red.500'}>{data.change}</Text></Text>
            </Box>
          ))}
        </Box>
      </SimpleGrid>

      <Flex as="footer" bg="gray.800" color="white" p={4} mt={4} justifyContent="space-between">
        <Text>&copy; 2023 Financial Times</Text>
        <HStack spacing={4}>
          <Link href="#">Contact</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;