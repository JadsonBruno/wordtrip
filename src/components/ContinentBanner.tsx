import { Flex, Heading, Image, FlexProps } from "@chakra-ui/react";

interface ICarouselItem extends FlexProps
{
    title: string;
    imageSrc: string;
}

export function ContinentBanner ({title, imageSrc, ...rest}: ICarouselItem): JSX.Element
{
    return (
        <Flex
            width="100%"
            maxH="31.25rem"
            h="100%"
            align="center"
            justify="center"
            position="relative"
            {...rest}
        >
            <Heading
                position="absolute"
                top={["60px","78px", "84px", "136px","369px"]}
                left={["8.75rem"]}
                color="gray.50"
                fontSize={["1rem", "1.2rem", "1.5rem","1.6rem", "3rem"]}
            >
                {title}
            </Heading>
            <Image
                src={imageSrc}
                w="100%"
                height="100%"
            />
        </Flex>
    );
}
