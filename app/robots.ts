import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/_next/",
          "/api/",
          "/static/",
        ],
      },
    ],
    sitemap: "https://www.itspadel.co.uk/sitemap.xml",
  };
}
