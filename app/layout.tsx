import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Navbar from "@/app/ui/navbar/navbar";

import PageTransitionOverlay from "./components/PageTransitionOverlay";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <PageTransitionOverlay>
          <Navbar />
          {children}
        </PageTransitionOverlay>
      </body>
    </html>
  );
}
