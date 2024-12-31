import Count from '@/src/common/count';
import htmlcontentservice from '@/src/service/htmlcontentservice';
import React, { useEffect, useState } from 'react';

const SupportArea = () => {
    const [supportContent, setSupportContent] = useState([]);
const GetSupportContent = async () => {
    var response = await htmlcontentservice.GetHtmlContentListbyKey(1,99,"gray-supportarea","en");
    if (response.Code == 200) {
        setSupportContent(response.Data?.HtmlContentVM[0]?.ContentHtml);
    }
};
    useEffect(() => {GetSupportContent()}, []);
    return (
        <>
            <section className="tp-support-feature-area pb-100">
            <div className="container container-large">
               {/* <div className="row">
                {support_content.map((item, i) =>
                    <div key={i} className="col-lg-4">
                        <div className="tp-support-feature-item d-flex p-relative fadeRight">
                        <div className="tp-support-feature-counter">
                            <div className="tp-support-feature-thumb">
                                <img src="/assets/img/brand/shape-2.png" alt="theme-pure" />
                            </div>
                            <h3 className="support-feature-title"><span data-purecounter-duration="4" className="purecounter">
                                <Count number={item.count}  text={item.symbol}  />
                            </span></h3>
                        </div>
                        <div className="tp-support-feature-content">
                            <h4 className="tp-support-feature-content-title">{item.title}</h4>
                            <p>{item.info}</p>
                        </div>
                        </div>
                    </div>                
                )}  
               </div> */}
                <div  dangerouslySetInnerHTML={{__html:supportContent}}></div>
         
            </div>
         </section>
        </>
    );
};

export default SupportArea;

