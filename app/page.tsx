import Link from "next/link";
import { SNACKPLOT_BOOTSTRAP } from "@/lib/snackplot-data";

export default function HomePage() {
  const mustModule = SNACKPLOT_BOOTSTRAP.modules.find((m) => m.key === "must")!;
  const newsModule = SNACKPLOT_BOOTSTRAP.modules.find((m) => m.key === "news")!;
  const topModule = SNACKPLOT_BOOTSTRAP.modules.find((m) => m.key === "top")!;

  return (
    <>
      <main id="seo-content" className="seo-content">
        <nav>
          <Link href="/">SnackPlot</Link>{" "}
          <Link href="/source/">Platforms</Link>{" "}
          <Link href="/categories">Genres</Link>{" "}
          <Link href="/about-us">About Us</Link>{" "}
          <Link href="/contact-us">Contact Us</Link>
        </nav>
        <nav className="seo-breadcrumbs">
          <Link href="/">Home</Link>
        </nav>
        <h1>SnackPlot</h1>
        <p>
          Discover short dramas on SnackPlot. Explore romance, werewolf, revenge, and billionaire
          stories, find your next favorite series, and start watching online.
        </p>

        <section>
          <h2>{mustModule.name}</h2>
          <div className="seo-grid">
            {mustModule.items.map((item) => (
              <Link key={item.id} href={item.path}>
                <img
                  src={item.home_card_image || item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
                <span>{item.title}</span>
                <span>{item.home_genre?.[0] || item.genres?.[0]}</span>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2>{newsModule.name}</h2>
          <div className="seo-grid">
            {newsModule.items.map((item) => (
              <Link key={item.id} href={item.path}>
                <img
                  src={item.home_card_image || item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
                <span>{item.title}</span>
                <p>{item.home_description || item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2>{topModule.name}</h2>
          <div className="seo-grid">
            {topModule.items.map((item) => (
              <Link key={item.id} href={item.path}>
                <img
                  src={item.home_card_image || item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
                <span>{item.title}</span>
                <span>{item.home_heat_display}</span>
                <span>{item.home_genre?.[0] || item.genres?.[0]}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <script
        id="seo-bootstrap"
        type="application/json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SNACKPLOT_BOOTSTRAP) }}
      />
      <div id="app" />
    </>
  );
}
