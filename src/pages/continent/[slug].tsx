import { GetStaticPaths, GetStaticProps } from 'next';
import { Flex, Text } from "@chakra-ui/react";
import { api } from '../../services/api';
import { Header } from '../../components/Header';
import { ContinentBanner } from '../../components/ContinentBanner';

interface ICity
{
    id: number;
    name: string;
    country: string;
    image: string;
}

interface IContinent
{
    id: string;
    continent: string;
    resume: string;
    resumeImage: string;
    text: string;
    countries: number;
    languages: number;
    citiesNumber: number;
    cities: ICity[];
}

interface IContinentProps {
    continent: IContinent;
}

export default function Continent ({continent}: IContinentProps) {
    return (
        <Flex
            direction={'column'}
            h="100vh"
        >
            <Header shouldShowBackButton={true} />
            <ContinentBanner
                imageSrc={continent.resumeImage}
                title={continent.continent}
            />
            <Flex
                maxW="82.5rem"
                margin={["5rem auto"]}
                w="100%"
                direction="column"
            >
                <Flex
                    w="100%"
                    justify="space-between"
                    direction={['column', 'column', 'row']}
                    alignItems="center"
                >
                    <Text
                      textAlign="justify"
                      maxW={["21.4375rem", "24rem","37.5rem"]}
                      width="100%"
                      margin={["1.5rem 1rem","1.5rem 1.2rem"]}
                    >
                        {continent.text}
                    </Text>
                    <Flex
                        align="center"
                        justify="space-around"
                        w="100%"
                        maxW="30.625rem"
                    >
                        <Flex
                            direction="column"
                            align="center"
                        >
                            <Text
                                color="yellow.500"
                                fontSize="3rem"
                                fontWeight="600"
                                fontStyle="normal"
                                lineHeight="4.5rem"
                            >
                                {continent.countries}
                            </Text>
                            <Text
                                fontWeight="600"
                                fontSize="1.5rem"
                                lineHeight="2.25rem"
                                color="gray.700"
                            >
                                países
                            </Text>
                        </Flex>
                        <Flex
                            direction="column"
                            align="center"
                        >
                            <Text
                                color="yellow.500"
                                fontSize="3rem"
                                fontWeight="600"
                                fontStyle="normal"
                                lineHeight="4.5rem"
                            >
                                {continent.languages}
                            </Text>
                            <Text
                                fontWeight="600"
                                fontSize="1.5rem"
                                lineHeight="2.25rem"
                                color="gray.700"
                            >
                                línguas
                            </Text>
                        </Flex>
                        <Flex
                            direction="column"
                            align="center"
                        >
                            <Text
                                color="yellow.500"
                                fontSize="3rem"
                                fontWeight="600"
                                fontStyle="normal"
                                lineHeight="4.5rem"
                            >
                                {continent.citiesNumber}
                            </Text>
                            <Text
                                fontWeight="600"
                                fontSize="1.5rem"
                                lineHeight="2.25rem"
                                color="gray.700"
                            >
                                cidades
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const {data} = await api.get<IContinent[]>('/');

    // get the paths we want to pre-render based on continents
    const paths = data.map(continent => ({
        params: { slug: continent.id },
    }));

    return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {slug} = params;
    const {data} = await api.get<IContinent[]>('/');

    const continent = data.find(continent => continent.id === slug);

    return {
      props: {
        continent
      },
      revalidate: 60 * 60 * 1000, //  1000 hours
    };
};
