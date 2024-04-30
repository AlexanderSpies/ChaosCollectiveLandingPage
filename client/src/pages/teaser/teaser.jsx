import React from "react";
import { Box, Center, Heading, Text, Button, Link } from "@chakra-ui/react";
import WildWestVideo from "./imgs/kidWithBat.mp4";

function TeaserPage() {
  return (
    <Box
      position="relative"
      overflow="hidden"
      minHeight="100vh"
      backgroundColor="#191970"
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.8,
          filter: "grayscale(100%) blur(3px)",
        }}
      >
        <source src={WildWestVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Center
        position="relative"
        zIndex="100"
        width="55%"
        flexDirection="column"
        textAlign="center"
        p="20px"
        mx="auto"
        my="auto"
        h="100vh"
      >
        <Heading as="h2" size="xl" fontFamily="Montserrat" fontStyle="italic" >
          Welcome to
        </Heading>
        <Heading as="h1" size="3xl" fontFamily="BebasNeue" mt='3'>
          Chaos Collective
        </Heading>
        <Text fontSize="xl" mt="4" width='50%' color='#FFFFFF' fontFamily='Lato'>
          Hang tight as we tame the insane. <br/> Although we may be under construction head over to our <Link href='https://www.etsy.com/shop/ChaosCollectiveCoUS'isExternal color='#F1641E'>Etsy</Link> store to
          see our current collection, and be sure to subscribe below for promotions and give aways.
        </Text>
        <Text fontSize="xl" mt="4">
          
        </Text>
        <Button mt="4" colorScheme="green">
          Sign up for updates
        </Button>
      </Center>
    </Box>
  );
}

export default TeaserPage;
