import Head from "next/head";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { groupname, groupsubname, image } = router.query;
  return (
    <div>
      <Head>
        <meta name="og:title" content="Vercel Edge Network" />
        <meta name="og:description" content="Vercel Edge Network" />
        <meta
          name="og:image"
          content={`https://vercel-og-nextjs-flame-five.vercel.app/api/hubbub?groupname=${groupname}&groupsubname=${groupsubname}&image=${image}`}
        />
      </Head>
      <h1>Demoing Dynamic Open Graph Images</h1>
      <h2>{groupname}</h2>
      <h3>{groupsubname}</h3>

      <img
        src={`/api/hubbub?groupname=${groupname}&groupsubname=${groupsubname}&image=${image}`}
        alt="Vercel Edge Network"
      />
    </div>
  );
}
