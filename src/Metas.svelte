<script>
  import { config } from "./data/homepage";
  const { url, share_title, description, pub_date, promo } = config;
</script>

<link rel="canonical" href={url} />
<meta name="author" content="Science" />
<meta name="description" content={description} />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-touch-fullscreen" content="yes" />
<meta property="fb:app_id" content="1478542162442556" />
<meta property="og:type" content="article" />
<meta property="og:url" content={url} />
<meta property="og:title" content={share_title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={promo} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:creator" content="@NewsfromScience" />
<meta name="twitter:site" content="@newsfromscience" />
<meta name="twitter:creator:id" content="17089636" />
<meta name="twitter:site:id" content="17089636" />
<meta name="twitter:url" content={url} />
<meta name="twitter:title" content={share_title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={promo} />
<meta
  property="article:publisher"
  content="https://www.facebook.com/ScienceMagazine/" />
<meta property="article:published_time" content={pub_date} />
