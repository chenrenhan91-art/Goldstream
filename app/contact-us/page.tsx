import Link from "next/link";

export default function ContactUsPage() {
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
        <Link href="/">Home</Link> / <Link href="/contact-us">Contact Us</Link>
      </nav>
      <h1>Contact Us</h1>
      <p>Get in touch with SnackPlot for support, content inquiries, or partnership questions.</p>
    </main>
  );
}
