import htmlcontentservice from '@/src/service/htmlcontentservice';
import React, { createContext, useContext, useEffect, useState } from 'react';


const SiteInfoContext = createContext();

export const SiteInfoProvider = ({ children }) => {
    const [siteInfo, setSiteInfo] = useState(null);

    const fetchSiteInfo = async () => {
        try {
            const response = await htmlcontentservice.GetSiteInfo();
            if (response.Code === 200) {
                setSiteInfo(response.Data);
            }
        } catch (error) {
            console.error("Failed to fetch site info:", error);
        }
    };

    useEffect(() => {
        fetchSiteInfo();
    }, []);

    return (
        <SiteInfoContext.Provider value={siteInfo}>
            {children}
        </SiteInfoContext.Provider>
    );
};

export const useSiteInfo = () => {
    return useContext(SiteInfoContext);
};