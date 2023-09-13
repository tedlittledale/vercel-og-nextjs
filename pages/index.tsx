import Head from "next/head";

const groupHash = {
  waterloo: {
    groupname: "Waterloo Community Fridge",
    groupsubname: "Oasis Community Hub : Waterloo",
    image:
      "https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftimetospare-public%2Fo%2FeventImages%2FdXRFzRQ7vrcdZdxXMdoG%2FComFridge.JPG%3Falt%3Dmedia£token%3Db3d4ae3d-f603-4c2d-b5b1-17819e1a3017",
  },
  chelsea: {
    image:
      "https://static.wixstatic.com/media/8b0461_1864699013994bbb9baa8c43bf38946cf000.jpg/v1/fill/w_479,h_271,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/8b0461_1864699013994bbb9baa8c43bf38946cf000.jpg",
    groupname: "Day centre for homeless and vulnerable adults",
    groupsubname: "CHELSEA METHODIST CHURCH AND PASTORAL CENTRE",
  },
};

export default function Page(props) {
  const { groupname, groupsubname, image, codename } = props;
  console.log({ groupname, groupsubname, image });
  return (
    <>
      <Head>
        <meta
          name="description"
          content={`${groupname}`} />
        />

        <meta
          property="og:url"
          content={`https://vercel-og-nextjs-flame-five.vercel.app/?name=${codename}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${groupname}`} />
        />
        <meta
          property="og:description"
          content={`${groupname}`} />
        />
        <meta
          property="og:image"
          content={`https://vercel-og-nextjs-flame-five.vercel.app/api/hubbub?groupname=${groupname}&groupsubname=${groupsubname}&image=${image}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="vercel-og-nextjs-flame-five.vercel.app"
        />
        <meta
          property="twitter:url"
          content={`https://vercel-og-nextjs-flame-five.vercel.app/?name=${codename}`}
        />
        <meta
          name="twitter:title"
          content={`${groupname}`} />
        
        <meta
          name="twitter:description"
          content={`${groupsubname}`} 
        />
        <meta
          name="twitter:image"
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
  const { name } = query;
  console.log("name", name);
  const { groupname, groupsubname, image } = groupHash[name];

  return {
    props: { groupname, groupsubname, image, codename:name },
  };
}
