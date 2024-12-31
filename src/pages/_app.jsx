import '@/src/styles/index.scss'
import { SiteInfoProvider } from '../components/siteinfocontext/SiteInfoContext';
import Seo from '../common/seo';

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps,meta }) {
  return (
   <>
   <Seo meta={meta} />
    <SiteInfoProvider>
    <Component {...pageProps}/>
    </SiteInfoProvider>
    </>
  )
 
}
export async function getServerSideProps(context) {
  var url = context.resolvedUrl;
  let meta = await htmlcontentservice.getSeoByPage(url);
  return {
    props: {
      meta,
      url,
    },
  };
}
