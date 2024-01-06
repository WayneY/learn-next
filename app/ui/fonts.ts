import { Inter, Lusitana } from 'next/font/google';
import localFont from 'next/font/local'

export const recursive = localFont({
  src: '../fonts/RecMonoCasual.ttf'
})

export const inter = Inter({ subsets: ['latin']});
export const lusitana = Lusitana({ subsets: ['latin'], weight : ['400', '700']});
