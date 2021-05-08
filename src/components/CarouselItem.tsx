import { Flex, Text, Heading, Image, FlexProps } from "@chakra-ui/react";

interface ICarouselItem extends FlexProps
{
    title: string;
    text: string;
    imageSrc: string;
}

export function CarouselItem ({text, title, imageSrc, ...rest}: ICarouselItem): JSX.Element
{
    return (
        <Flex
            width="100%"
            h="100%"
            align="center"
            justify="center"
            position="relative"
            {...rest}
        >
            <Flex
                position="absolute"
                top={["60px","78px", "84px", "136px","244px"]}
                align="center"
                justify="center"
                direction="column"
            >
                <Heading
                    color="gray.50"
                    fontSize={["1rem", "1.2rem", "1.5rem","1.6rem", "3rem"]}
                >
                    {title}
                </Heading>
                <Text
                    color="gray.200"
                    fontSize={["0.875rem","1rem","1.2rem", "1.5rem"]}
                >
                    {text}
                </Text>
            </Flex>
            <Image
                src={imageSrc}
            />
        </Flex>
    );
}