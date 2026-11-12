import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_MOVIES, getMovieByPathOrSlug } from "@/lib/snackplot-data";

export function generateStaticParams() {
  return ALL_MOVIES.map((mv) => ({ slug: mv.full_slug }));
}

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mv = getMovieByPathOrSlug(slug);
  if (!mv) notFound();

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
        <Link href="/">Home</Link> / <Link href={mv.path}>{mv.title}</Link>
      </nav>
      <h1>{mv.title}</h1>
      <p>{mv.description}</p>
      <section>
        <h2>SERIES DETAILS</h2>
        <div className="seo-grid">
          <Link href={`/episodes/episode-1-${mv.full_slug}`}>
            <img src={mv.image} alt={mv.title} loading="lazy" decoding="async" />
            <span>{mv.title}</span>
            <span>{mv.genres?.join(", ")}</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
