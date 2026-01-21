import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://alphachainco.vercel.app",
      lastModified: new Date(),
    }
  ];
}
