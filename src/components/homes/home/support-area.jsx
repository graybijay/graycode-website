import React, { useState } from 'react';


const SupportArea = () => {
    const[itContent,setItContent]=useState("")
    return (
        <>
          
           {/* <div  dangerouslySetInnerHTML={{__html:itContent}}></div> */}
           <section className="tp-support-feature-area pb-100">
            {/* <div className="container container-large">
               <div className="row">
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
               </div>
            </div> */}
            
           <div  dangerouslySetInnerHTML={{__html:itContent}}></div>
         </section>
        </>
    );
};

export default SupportArea;

