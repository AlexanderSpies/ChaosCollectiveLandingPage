import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Link,
  Button,
  Input,
  Image,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import WildWestVideo from "./imgs/kidWithBat.mp4";
import Logo from './imgs/logo1.png'

function TeaserPage() {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const showSignUp = () => {
    setIsSignUpVisible(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(true); // Reset the validation state on change
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      // Handle valid email submission (e.g., send to server)
      alert("Email is valid and submitted!");
      setIsSignUpVisible(false);
    } else {
      setIsEmailValid(false);
    }
  };

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
          filter: "grayscale(100%)",
        }}
      >
        <source src={WildWestVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        backgroundImage="url('your-background-image.jpg')" // Add your background image here
        backgroundSize="cover"
      >
        <Box
          position="relative"
          zIndex="100"
          width="55%"
          flexDirection="column"
          textAlign="center"
          p="20px"
          borderWidth="1.6px"
          borderStyle="solid"
          borderColor="white"
          height="60vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backdropFilter="blur(7px)" // Apply backdrop filter for blur effect
          bg="rgba(0, 0, 0, .2)" // Semi-transparent background for better text readability
        >
          {!isSignUpVisible ? (
            <>
            <Image src={Logo} height='125px'/>
              <Heading as="h2" size="xl" fontFamily="Montserrat" color="white">
                Welcome to
              </Heading>
              <Heading
                as="h1"
                size="3xl"
                fontFamily="BebasNeue"
                mt="3"
                color="white"
              >
                Chaos Collective
              </Heading>
              <Text
                fontSize="xl"
                mt="4"
                width="50%"
                color="#FFFFFF"
                fontFamily="Lato"
              >
                Hang tight as we tame the insane. <br /> Although we may be
                under construction, head over to our{" "}
                <Link
                  href="https://www.etsy.com/shop/ChaosCollectiveCoUS"
                  isExternal
                  color="#F1641E"
                >
                  Etsy
                </Link>{" "}
                store to see our current collection, and be sure to subscribe
                below for promotions and giveaways.
              </Text>
              <Button mt="4" colorScheme="teal" onClick={showSignUp}>
                Sign up for updates
              </Button>
            </>
          ) : (
            <>
              <Heading
                as="h2"
                size="2xl"
                fontFamily="BebasNeue"
                color="white"
                mb="4"
              >
                Sign up for updates
              </Heading>
              <Box width='60%'>
                <Input marginTop='15px' color='white' placeholder="First Name"></Input>
                <Input marginTop='15px' color='white' placeholder="Last Name"></Input>
                <Input marginTop='15px' color='white' placeholder="Phone Number"></Input>
                <FormControl isInvalid={!isEmailValid}>
                  <Input
                  marginTop='15px'
                    placeholder="Enter your email"
                    mb="4"
                    color="white"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {!isEmailValid && (
                    <FormErrorMessage>Invalid email address.</FormErrorMessage>
                  )}
                </FormControl>
                <Button colorScheme="teal" onClick={handleSubmit}>
                  Submit
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default TeaserPage;
