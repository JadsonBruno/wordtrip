import {Box, Flex, Image, Text, useBreakpointValue} from '@chakra-ui/react';

interface ITravelTypeProps {
    src: string;
    text: string;
}

export function TravelType ({src, text}: ITravelTypeProps): JSX.Element
{
    const isWideVersion = useBreakpointValue({
        base: false,
        xl: true
    });

    return (
        <Flex
            direction="column"
            align="center"
            maxW="100%"
        >
            {isWideVersion &&
                <Image
                    src={src}
                    alt="Cocktail"
                    w="5.3125rem"
                    h="5.3125rem"
                    mb="1.5rem"
                />
            }
            <Flex
                alignItems="center"
            >
                {!isWideVersion &&
                    <Box
                        borderRadius="50%"
                        background="yellow.500"
                        w="8px"
                        h="8px"
                        mr="8px"
                    />
                }
                <Text
                    fontWeight="semibold"
                    fontSize={["1.125rem", "1.3rem","1.5rem"]}
                    color="gray.700"
                >
                    {text}
                </Text>
            </Flex>
        </Flex>
    );
}
