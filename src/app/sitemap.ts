import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.graf-bernstorff-consulting.de";

    return [
        { url: `${baseUrl}/`, lastModified: new Date() },
        { url: `${baseUrl}/about`, lastModified: new Date() },
        { url: `${baseUrl}/services`, lastModified: new Date() },
        { url: `${baseUrl}/photovoltaic-investments`, lastModified: new Date() },
        { url: `${baseUrl}/waruminvestieren`, lastModified: new Date() },
        { url: `${baseUrl}/blog`, lastModified: new Date() },
        { url: `${baseUrl}/contact`, lastModified: new Date() },
        { url: `${baseUrl}/impressum`, lastModified: new Date() },
        { url: `${baseUrl}/datenschutz`, lastModified: new Date() },
    ];
}