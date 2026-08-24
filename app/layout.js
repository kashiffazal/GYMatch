import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "GYMatch - Find Gyms Near You & Match Workout Partners in Real-Time",
  description:
    "GYMatch is a real-time location-based gym discovery and workout partner platform. Locate nearby gyms instantly and find spotters, trainers, and training partners.",
  keywords: [
    "gym partner app",
    "find workout spotter",
    "nearby gym finder",
    "fitness matching app",
    "GYMatch",
    "gym app SaaS",
    "fighting training partners",
  ],
  icons: {
    icon: "/fav.webp",
    shortcut: "/fav.webp",
    apple: "/fav.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} dark h-full antialiased`}
      data-theme="dark"
    >
      <body className="min-h-full flex flex-col selection:bg-[var(--color-accent)] selection:text-black">
        <ThemeProvider>
          <SmoothScroll>
            <Header />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
