import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SnackPlot – Watch Short Dramas & Mini Series Online",
  description:
    "Discover short dramas on SnackPlot. Explore romance, werewolf, revenge, and billionaire stories, find your next favorite series, and start watching online.",
  openGraph: {
    type: "website",
    siteName: "SnackPlot",
    locale: "en_US",
    title: "SnackPlot – Watch Short Dramas & Mini Series Online",
    description:
      "Discover short dramas on SnackPlot. Explore romance, werewolf, revenge, and billionaire stories, find your next favorite series, and start watching online.",
    url: "https://snackplot.com/",
    images: [
      {
        url: "https://snackplot-s3-bucket.s3.us-west-2.amazonaws.com/uploads/20261029/8846d35c51d8e22f8bd157f6bd7341f4.png",
        width: 1254,
        height: 1254,
        alt: "SnackPlot",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body>
        <noscript>
          <strong>Please enable JavaScript to continue.</strong>
        </noscript>
        {children}
      </body>
    </html>
  );
}
