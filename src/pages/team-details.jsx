import React from "react";
import Wrapper from "../layout/wrapper";
import TeamDetails from "../components/team-details";
import htmlcontentservice from "../service/htmlcontentservice";
import Seo from "../common/seo";

export default function index(meta,url){
  return (
    <>
    <Seo meta={meta} url={url}/>
    <Wrapper>
      <TeamDetails />
    </Wrapper>
    </>
  );
};
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
