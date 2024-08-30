import type { Metadata } from "next";
import "./scss/_globals.scss"

export const metadata: Metadata = {
  title: "GDSC Certification Portal",
  description: "it's certification portal of GDSC where event attendess can download their certificates of the events they attended and participated in.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      {children}
      </body>
    </html>
  );
}
