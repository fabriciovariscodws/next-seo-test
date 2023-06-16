import { NextSeo, SiteLinksSearchBoxJsonLd } from "next-seo";
import Head from "next/head";

const SiteLinksSearchBox = () => (
  <>
    <SiteLinksSearchBoxJsonLd
      url="https://fabriciovariscodws.github.io/next-seo-test/"
      potentialActions={[
        {
          target: 'https://fabriciovariscodws.github.io/next-seo-test/search?q',
          queryInput: 'search_term_string',
        },
        {
          target: 'android-app://https://fabriciovariscodws.github.io/next-seo-test/search/?q',
          queryInput: 'search_term_string',
        },
      ]}
    />
  </>
);


export default function Home() {
  return (
    <>
      <NextSeo
        description={'Testing'}
        title={'Teste SEO'}
        canonical={'https://fabriciovariscodws.github.io/next-seo-test/'}
        openGraph={{
          title: 'Título para OpenGraph',
          description: 'Descrição para OpenGraph',
          url:'https://fabriciovariscodws.github.io/next-seo-test/',
        }}
      />
      <Head>
      <SiteLinksSearchBox />
      </Head>
      <main>
        <h1>SEO TESTE</h1>
      </main>
    </>
  );
}
