import { Carousel } from 'react-responsive-carousel';
import { Flex, Grid, Divider, Text, Heading, Box, Image } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelType } from "../components/TravelType";
import { CarouselItem } from '../components/CarouselItem';
import { useRouter } from 'next/dist/client/router';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { api } from '../services/api';
import { useEffect, useState } from 'react';

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

interface IHomeProps
{
  continents: IContinent[];
}

export default function Home() {
  const [continents, setContinents] = useState<IContinent[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function getContinents ()
    {
      const {data} = await api.get<IContinent[]>('/');

      console.log(data);

      setContinents(data);
    }

    getContinents();
  }, []);

  return (
    <Flex
      direction="column"
    >
      <Header />
      <Banner />
      <Flex
        m="3rem auto"
        maxW={["275px","1160px"]}
        width="100%"
      >
       <Grid
        templateColumns={[
          "repeat(auto-fill, minmax(4.875rem, auto))",
          "repeat(auto-fill, minmax(9.875rem, auto))"
        ]}
        autoRows={[
          "minmax(1.3125rem, 1.4125rem)",
          "minmax(7.0625rem, 7.1625rem)",
          "minmax(9.0625rem, 9.1625rem)"
        ]}
        justifyContent="center"
        alignContent="center"
        gap={["1.375rem","4.375rem", "5.125rem"]}
        m={["2.25rem 0 2.25rem 0", "3rem 0 3rem 0","4rem 0 4rem 0","5rem 0 5rem 0"]}
        w="100%"
       >
         <TravelType
            src="/images/cocktail.svg"
            text="vida noturna"
         />
         <TravelType
            src="/images/surf.svg"
            text="praia"
         />
         <TravelType
            src="/images/building.svg"
            text="moderno"
         />
         <TravelType
            src="/images/museum.svg"
            text="clássico"
         />
         <TravelType
            src="/images/earth.svg"
            text="e mais..."
         />
       </Grid>
      </Flex>
      <Divider
        h="0.125rem"
        w="5.625rem"
        orientation="horizontal"
        alignSelf="center"
        background="gray.700"
      />
      <Text
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        textAlign="center"
        margin={[
          "3.25rem 0 3.25rem 0"
        ]}
      >
        <Heading
          fontSize={["1.25rem", "1.5rem", "1.75rem", "1.875rem"]}
        >
          Vamos nessa?
        </Heading>
        <Heading
          fontSize={["1.25rem", "1.5rem", "1.75rem", "1.875rem"]}
        >
          Então escolha seu continente
        </Heading>
      </Text>
      <Flex
        w="100%"
        h="100%"
        align="center"
        justify="center"
      >
        <Flex
          maxW="100%"
          height={["250px","100%"]}
          m={[
            "0",
            "0",
            "3.25rem 6.25rem 1.5rem 6.25rem",
            "3.25rem 6.25rem 2.5rem 6.25rem"
          ]}
          sx={{
            ".carousel .control-dots .dot.selected, .carousel .control-dots .dot:hover": {
              background: '#FFBA08'
            },

            ".carousel .control-next.control-arrow:before": {
              borderLeft: '8px solid #FFBA08'
            },
            ".carousel .control-prev.control-arrow:before": {
              borderRight: '8px solid #FFBA08'
            }
          }}
        >
          <Carousel
            showStatus={false}
            showIndicators={true}
            dynamicHeight={true}
            autoPlay={true}
            infiniteLoop={true}
          >
            {continents.map(continent => (
              <CarouselItem
                key={continent.id}
                imageSrc={continent.resumeImage}
                text={continent.resume}
                title={continent.continent}
                onClick={() => router.push(`/continent/${continent.id}`)}
                cursor="pointer"
              />
            ))}
          </Carousel>
        </Flex>
      </Flex>
    </Flex>
  )
}