
import {extendTheme} from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#181B23",
            "800": "#1F2029",
            "700": "#47585B",
            "600": "#4B4D63",
            "500": "#616480",
            "400": "#999999",
            "300": "#9699B0",
            "200": "#DADADA",
            "100": "#D1D2DC",
            "50": "#F5F8FA"
        },
        yellow: {
            "500": "#FFBA08"
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.50',
                color: 'gray.700'
            }
        }
    }
});
