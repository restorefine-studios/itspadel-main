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
          "/*.json$",
          "/*.ico$",
          "/*.svg$",
          "/*.png$",
          "/*.jpg$",
          "/*.jpeg$",
          "/*.gif$",
          "/*.webp$",
          "/*.woff$",
          "/*.woff2$",
          "/*.ttf$",
          "/*.eot$",
          "/*.css$",
          "/*.js$",
          "/*.map$",
          "/*.ts$",
          "/*.tsx$",
        ],
      },
    ],
    sitemap: "https://www.itspadel.co.uk/sitemap.xml",
  };
}
