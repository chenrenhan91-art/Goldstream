import Link from "next/link";
import { ALL_MOVIES } from "@/lib/snackplot-data";

export default function SourcePage() {
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
        <Link href="/">Home</Link> / <Link href="/source/">Platforms</Link>
      </nav>
      <h1>Browse Short Dramas by Platform</h1>
      <p>
        Browse short drama platforms on SnackPlot. Explore series from popular platforms and find
        your next short drama to watch online.
      </p>
      <section>
        <h2>ALL SERIES</h2>
        <div className="seo-grid">
          {ALL_MOVIES.map((mv) => (
            <Link key={mv.id} href={mv.path}>
              <img src={mv.image} alt={mv.title} loading="lazy" decoding="async" />
              <span>{mv.title}</span>
              <span>{mv.genres?.[0]}</span>
              <p>{mv.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
