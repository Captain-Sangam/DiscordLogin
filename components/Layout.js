import Head from "next/head";
import {
  Flex,
  IconButton,
  Image,
  Link,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import LOGO from "../public/icon.png";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Layout = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Flex
        direction={"column"}
        align={"center"}
        justify={"space-between"}
        w={"100%"}
      >
        {
          <Head>
            <title>Discord Login</title>
            <meta name="description" content="Login with Discord" />
            <link
              rel="shortcut icon"
              type="image/x-icon"
              href="icon.png"
            ></link>
          </Head>
        }

        <Flex
          align={"center"}
          justify={"space-between"}
          w={"100%"}
          p={5}
          px={20}
        >
          <Flex w={"50%"}>
            <Flex align={"center"} justify={"space-between"} marginRight={10}>
              <Link href="/">
                <Image src={LOGO.src} alt="WebContract" w={7} h={7} />
              </Link>
              <Text
                paddingLeft={5}
                fontSize={20}
                fontWeight={"bold"}
                letterSpacing={1}
              >
                Discord Login
              </Text>
            </Flex>
          </Flex>

          <Tooltip
            hasArrow
            label={"Change theme"}
            bg={"gray.900"}
            color={"white"}
          >
            <IconButton
              mx={5}
              _hover={{
                cursor: "pointer",
                color: "green.100",
              }}
              onClick={toggleColorMode}
              icon={
                colorMode === "light" ? (
                  <MoonIcon w={5} h={5} />
                ) : (
                  <SunIcon w={5} h={5} />
                )
              }
            />
          </Tooltip>
        </Flex>
      </Flex>
    </div>
  );
};

export default Layout;
