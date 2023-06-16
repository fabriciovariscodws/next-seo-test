import Head from "next/head";

export default function Home() {
  return (
    <>
      <NextSeo
        noindex={contentRobots === "all" || !contentRobots ? false : true}
        description={description}
        title={title + titleSuffix}
        canonical={canonical}
        openGraph={{
          description: og.description,
          locale: og.locale,
          site_name: og.site_name,
          url: og.url,
          title: og.title,
          type: og.type,
        }}
        additionalMetaTags={[
          ...Object.entries(twitter).map((twitter) => {
            const [name, content] = twitter;

            return {
              property: `twitter:${name}`,
              content: content,
            };
          }),
          {
            property: "viewport",
            content: "width=device-width, initial-scale=1, maximum-scale=1",
          },
          {
            property: "msapplication-TileColor",
            content: "#ffffff",
          },
          {
            property: "msapplication-TileImage",
            content: getAssetURL("ms-icon-144x144-1.png"),
          },
          {
            property: "theme-color",
            content: "#022656",
          },
          {
            name: "google-site-verification",
            content: "tBzDeI61uHw9eFCbSSutReY9IaNpmULOZp5yv8emPRE",
          },
        ]}
        additionalLinkTags={[
          ...FAVICONS,
          { rel: "preconnect", href: process.env.NEXT_PUBLIC_ASSETS_URL },
          { rel: "dns-prefetch", href: process.env.NEXT_PUBLIC_ASSETS_URL },
        ]}
      />
      <Head>
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <main>
        <h1>SEO TESTE</h1>
      </main>
    </>
  );
}
