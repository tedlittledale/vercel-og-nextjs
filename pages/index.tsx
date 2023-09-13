import Head from "next/head";

export default function Page(props) {
  const { groupname, groupsubname, image } = props;

  return (
    <>
      <Head>
        <meta name="og:title" content="Vercel Edge Network" />
        <meta name="og:description" content="Vercel Edge Network" />
        <meta
          name="og:image"
          content={`https://vercel-og-nextjs-flame-five.vercel.app/api/hubbub?groupname=${groupname}&groupsubname=${groupsubname}&image=${image}`}
        />
      </Head>
      <div>
        <h1>Demoing Dynamic Open Graph Images</h1>
        <h2>{groupname}</h2>
        <h3>{groupsubname}</h3>

        <img
          src={`/api/hubbub?groupname=${groupname}&groupsubname=${groupsubname}&image=${image}`}
          alt="Vercel Edge Network"
        />
      </div>
    </>
  );
}
export function getServerSideProps(context) {
  // Retrieve id
  const { query } = context;
  const { groupname, groupsubname, image } = query;
  console.log({ groupname, groupsubname, image });

  return {
    props: { groupname, groupsubname, image },
  };
}
