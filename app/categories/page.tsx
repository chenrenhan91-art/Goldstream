import Link from "next/link";
import { ALL_MOVIES } from "@/lib/snackplot-data";

export default function CategoriesPage() {
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
        <Link href="/">Home</Link> / <Link href="/categories">Genres</Link>
      </nav>
      <h1>Short Drama Genres</h1>
      <p>
        Explore short dramas by genre on SnackPlot. Browse romance, werewolf, revenge, marriage,
        fantasy, and billionaire mini series online.
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
