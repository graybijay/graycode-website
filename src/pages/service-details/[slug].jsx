"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HeaderOne from "@/src/layout/headers/header";
import Footer from "@/src/layout/footers/footer";
import htmlcontentservice from "@/src/service/htmlcontentservice";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import Seo from "@/src/common/seo";

export default function ServiceDetail(meta,url) {
  const router = useRouter();
  const pathname = usePathname();
  let slug = pathname?.replace("/service-details/", "").split("?")[0];
  const [isloading, setIsloading] = useState(false);
  const [data, setData] = useState();
  const [noPage, setNoPage] = useState(false);
  const getService = async () => {
    setData('')
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
    getService();
  }, [router.isReady, slug]);
  
  console.log(data,"fata");
  return (
    <>
    <Seo meta={meta} url={url} />
      <HeaderOne />
      <main>
      <Breadcrumb top_title="Machine Learning" page_title="Service Details" />
      <div style={{
        width:"90%",
         margin:"5rem auto 5rem auto",  
      }}>
      <div dangerouslySetInnerHTML={{ __html: data?.NewsContent }}>
      </div> 
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

