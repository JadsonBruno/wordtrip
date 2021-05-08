import {Flex, Heading, Image, Text, useBreakpointValue} from '@chakra-ui/react';
export function Banner (): JSX.Element
{
    const isWideVersion = useBreakpointValue({
        base: false,
        xl: true
    });

    return (
        <Flex
            as="main"
            align="center"
            justify="flex-start"
            w="100%"
            h={["40", "80"]}
            background="url(/images/Background.svg)"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            position="relative"
            pl={["1rem", "2rem", "3rem", "8.75rem"]}
        >
            <Flex
                as="div"
                direction="column"
                maxW="100%"
                wrap="wrap"
            >
                <Heading
                    color="gray.50"
                    fontWeight="500"
                    fontStyle="normal"
                    fontSize={["1.25rem", "2.25rem"]}
                    lineHeight={["1.875rem", "3.375rem"]}
                    w={["22rem", "26.625rem"]}
                    maxW="100%"
                >
                    5 Continentes,
                    infinitas possibilidades.
                </Heading>
                <Text
                    color="gray.200"
                    fontWeight="400"
                    fontStyle="normal"
                    fontSize={["0.875rem", "1.25rem"]}
                    w="32.75rem"
                    marginTop={["0.5rem", "1.25rem"]}
                    maxW="100%"
                >
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
                </Text>
            </Flex>

            {isWideVersion &&

                <Image
                    src="/images/Airplane.svg"
                    alt="Airplane"
                    position="absolute"
                    right="8.75rem"
                    top="4.75rem"
                />
            }
        </Flex>
    );
}
