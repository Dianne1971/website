import Head from 'next/head'



const SEO = (props) => (
    <Head>
        <title>{props.title}</title>
        <meta name="title" content={props.title} />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=9" />
        <meta name="description" content={props.desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={props.title} />
        <meta name="og:description" property="og:description" content={props.desc} />
        <meta property="og:site_name" content="Proper Noun" />
        <meta property="og:url" content={`${props.canonical}`} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.desc} />
        <meta name="twitter:site" content="@propernounco" />
        <meta name="twitter:creator" content="@propernounco" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="canonical" href={`${props.canonical}`} />
        <meta property="og:image" content={`${props.image}`} />
        <meta name="twitter:image" content={`${props.image}`} />
        {/* {
            props.js &&
            <script type="text/javascript" src={`${props.js}`}></script>
        }
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
            async dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
              page_path: window.location.pathname,
            });
          `
            }}
        /> */}
        
    </Head>
)
export default SEO