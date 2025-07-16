import { Urbanist, Unbounded, Syne } from 'next/font/google';
import localFont from 'next/font/local';

export const urbanist = Urbanist({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-urbanist',
    display: 'swap',
});

export const intergralCF_Bold = localFont({
    src: './Demo_Fonts/integralcf-bold.otf',
    variable: '--font-intergralcf-bold',
    display: 'swap',

})

export const unbounded = Unbounded({
    subsets: ['latin'],
    weight: ['700', '800'],
    variable: '--font-unbounded',
    display: 'swap',
});

export const syne = Syne({
    subsets: ['latin'],
    weight: ['600', '700'],
    variable: '--font-syne',
    display: 'swap',
});
