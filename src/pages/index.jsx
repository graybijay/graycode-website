
import Seo from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";
import UtilsServices from "../service/utils/utils";


export default function Home(meta,url){
  return (
    <>
    <Seo meta={meta} url={"/"}/>
    <Wrapper>
      <HomeOne />
    </Wrapper>
    </>
  );
};
export async function getServerSideProps(context) {
  var url = "/home";
  let meta = await UtilsServices.getSeoByPage(url);
  url = url + context.resolvedUrl
  return {
      props: {
          meta,
          url
      },
  };
}