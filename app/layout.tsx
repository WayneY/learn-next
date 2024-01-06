
import "@/app/ui/global.css";
import { recursive } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>React Next Web</title>
      <body className = {`${recursive.className} antialiased`}>{children}</body>
    </html>
  );
}
