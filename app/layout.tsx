import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';


// root layout, you can modify head and body html

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}