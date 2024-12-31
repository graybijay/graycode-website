import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import About from '../components/about';
import htmlcontentservice from '../service/htmlcontentservice';
import Seo from '../common/seo';

export default function index(meta, url){
    return (
      <>
          <Seo meta={meta} url={"about"} /> 
        <Wrapper>
            <About />
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