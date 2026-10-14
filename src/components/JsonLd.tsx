import cv from "@/data/cv.json";

const { site, profile, socials, skills, education } = cv;

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.nickname,
    url: site.url,
    jobTitle: profile.role,
    description: site.description,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Malang",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
    alumniOf: education.map((e) => ({
      "@type": "EducationalOrganization",
      name: e.school,
    })),
    knowsAbout: skills.flatMap((group) => group.items),
    sameAs: socials.map((s) => s.url).filter(Boolean),
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
