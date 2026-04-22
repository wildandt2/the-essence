import "./globals.css";

export const metadata = {
  title: "The Essence",
  description: "Cafe App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}