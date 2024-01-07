
import "@/app/ui/global.css";
import { recursive } from '@/app/ui/fonts';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard'
  },
  description: 'The offccccccc',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${recursive.className} antialiased`}>{children}</body>
    </html>
  );
}
