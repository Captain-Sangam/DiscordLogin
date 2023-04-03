import Image from "next/image";
import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { Flex, Button, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const { data: session } = useSession();

  if (session) {
    const { user } = session;

    return (
      <div>
        <Layout />
        <Flex
          align={"center"}
          justify={"flex-start"}
          direction={"column"}
          w={"100%"}
          py={100}
        >
          {user?.image && (
            <Image
              src={user.image}
              alt=""
              width={38}
              height={38}
              style={{ borderRadius: "50%" }}
            />
          )}
          <Text fontSize={18} align={"center"}>
            Hello, {user?.name}!
          </Text>
          <Button
            w={"30%"}
            fontWeight={"bold"}
            letterSpacing={1}
            borderRadius={"md"}
            bgGradient={"linear(to-r, green.300, green.500)"}
            color={"white"}
            boxShadow={"2xl"}
            disabled={false}
            onClick={() => signOut()}
          >
            Sign out
          </Button>
        </Flex>
      </div>
    );
  }

  return (
    <div>
      <Layout />
      <Flex
        align={"center"}
        justify={"flex-start"}
        direction={"column"}
        w={"100%"}
        py={100}
      >
        <Text fontSize={18} align={"center"}>
          Sign Up with Discord
        </Text>
        <Button
          w={"30%"}
          fontWeight={"bold"}
          letterSpacing={1}
          borderRadius={"md"}
          bgGradient={"linear(to-r, green.300, green.500)"}
          color={"white"}
          boxShadow={"2xl"}
          disabled={false}
          onClick={() => signIn("discord")}
        >
          Sign In
        </Button>
      </Flex>
    </div>
  );
};

export default Home;
