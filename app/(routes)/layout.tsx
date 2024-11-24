import { inter, moranga } from "_assets/fonts";
import { ThemeProvider } from "_components/ThemeProvider";
import "mapbox-gl/dist/mapbox-gl.css";
import "_styles/gridlayout.css";
import "_styles/globals.scss";
import cn from "classnames";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yanng 的数字生活",
  description: "",
  authors: [
    { name: "Yanng", url: "https://yanng.cn" },
  ],
  openGraph: {
    title: "Yanng 的数字生活",
    description: "",
    url: "https://yanng.cn",
    siteName: "Yanng 的数字生活",
    images: [
      {
        url: "",
        width: 1920,
        height: 1080,
      },
    ],
    type: "website",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={cn(inter.className, moranga.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          {/* <Analytics /> */}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
