import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BoxValet',
  description:
    "BoxValet offers hassle-free, door-to-door storage solutions in Las Vegas, NV. Our services include pickup, secure, climate-controlled storage, and delivery back to your doorstep. Perfect for decluttering, moving, or any storage needs. Simplify your life with BoxValet's flexible storage options.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
