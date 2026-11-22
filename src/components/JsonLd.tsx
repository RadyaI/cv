import cv from "@/data/cv.json";

export default function JsonLd() {
  const { site, profile, socials, education } = cv;

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.nickname,
    url: site.url,
    email: `mailto:${profile.email}`,
    jobTitle: profile.role,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Malang",
      addressRegion: "East Java",
      addressCountry: "ID",
    },
    alumniOf: education.map((e) => ({
      "@type": "EducationalOrganization",
      name: e.school,
    })),
    knowsAbout: cv.skills.flatMap((g) => g.items),
    sameAs: socials.map((s) => s.url),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
