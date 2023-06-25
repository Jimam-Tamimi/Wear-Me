import React from 'react'
import ContentLoader from "react-content-loader";

export default function ProductLoader() {
    return (
        <ContentLoader viewBox="0 0 380 70" >
            <rect x="0" y="0" rx="5" ry="3" width="110" height="100" />
            <rect x="125" y="10" rx="4" ry="4" width="300" height="13" />
            <rect x="125" y="40" rx="3" ry="3" width="150" height="8" />
            <rect x="125" y="60" rx="3" ry="3" width="95" height="8" />
            <rect x="125" y="80" rx="3" ry="3" width="70" height="8" />
        </ContentLoader>
    )
}
