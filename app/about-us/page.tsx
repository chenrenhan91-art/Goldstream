import Link from "next/link";

export default function AboutUsPage() {
  return (
    <main id="seo-content" className="seo-content">
      <nav>
        <Link href="/">SnackPlot</Link>{" "}
        <Link href="/source/">Platforms</Link>{" "}
        <Link href="/categories">Genres</Link>{" "}
        <Link href="/about-us">About Us</Link>{" "}
        <Link href="/contact-us">Contact Us</Link>
      </nav>
      <nav className="seo-breadcrumbs">
        <Link href="/">Home</Link> / <Link href="/about-us">About Us</Link>
      </nav>
      <h1>About Us</h1>
      <p>
        Discover short dramas on SnackPlot. Explore romance, werewolf, revenge, and billionaire
        stories, find your next favorite series, and start watching online.
      </p>
    </main>
  );
}
