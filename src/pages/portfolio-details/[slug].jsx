"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HeaderOne from "@/src/layout/headers/header";
import Footer from "@/src/layout/footers/footer";
import htmlcontentservice from "@/src/service/htmlcontentservice";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import RecentPost from "@/src/components/blog/recent-post";
import Tags from "@/src/components/blog/tags";
import Seo from "@/src/common/seo";

export default function PortfolioDetail(meta,url) {
  const router = useRouter();
  const pathname = usePathname();
  let slug = pathname?.replace("/service-details/", "").split("?")[0];
  const [data, setData] = useState();
  const [noPage, setNoPage] = useState(false);
  const getPortfolio = async () => {
    if (slug == "" || slug == undefined) {
      return;
      
    }

    var response = await htmlcontentservice.GetNewsDetail(slug);
    if (response.Code == 200) {
      setData(response.Data);
      setNoPage(false);
    } else {
      setNoPage(true);
    }
  };

  

  useEffect(() => {
    getPortfolio();
  }, [router.isReady, slug]);

  // const [blogContent,setBlogContent]=useState("")
  return (
    <>
    <Seo meta={meta} url={url} />
      <HeaderOne />
      <main>
      <Breadcrumb top_title="IT Advisor" page_title="Portfolio Details" />

      
      <div dangerouslySetInnerHTML={{ __html: data?.NewsContent }}>

      </div>
        
      </main>

      <Footer />
    </>
  );
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
