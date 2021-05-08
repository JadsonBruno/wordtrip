import {Button, Flex, Image} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

interface IHeaderProps
{
    shouldShowBackButton?: boolean;
}

export function Header ({shouldShowBackButton = false}: IHeaderProps): JSX.Element
{
    const router = useRouter();

    return (
        <Flex
            as="header"
            align="center"
            justify="center"
            w="100%"
            margin="0 auto"
            h={["3.125rem","4.5rem","5.25rem"]}
            minH="3.125rem"
            position="relative"
        >
            {shouldShowBackButton &&
            <Button
                onClick={() => router.back()}
                position="absolute"
                left={["1.5rem","2.5rem", "3.5rem", "9.5rem"]}
                background="none"
                _hover={{
                    filter: 'brightness(2)',
                    background: "none"
                }}
            >
                <Image
                    src="/back.svg"
                    w={["0.6rem","0.8rem","1rem","1.4rem"]}
                    h={["0.6rem","0.8rem","1rem","1.4rem"]}
                    color="gray.700"
                    alignSelf="center"
                    cursor="pointer"
                />
            </Button>
            }
            <Image
                src="/images/Logo.svg"
                alt="Logo"
                w={["5.0625rem","7.2rem","11.5rem"]}
                h={["1.25rem","1.8rem", "2.8125rem"]}
                alignSelf={'center'}
            />
        </Flex>
    );
}
