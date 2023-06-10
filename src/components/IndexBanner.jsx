import React from 'react'
import IndexBannerForm from './IndexBannerForm'

function IndexBanner() {
    return (
        <div className="index-banner-container">
            <span dangerouslySetInnerHTML={{ __html: `<!-- https://www.videvo.net/video/close-up-view-of-cleaning-man-hands-carrying-cleaning-cart-inside-an-office-building/1115152/ -->` }}></span>
            <div id="index-banner" dangerouslySetInnerHTML={{
                __html:
                    `<video autoPlay loop defaultMuted>`
                    + `<source src="/videos/index-banner.mp4" type="video/mp4" />`
                    + `</video>`

            }}>
            </div>
            <div className="content">
                <div className="container">
                    <h1>Expert cleaning for NYC homes and offices, comfortable and spotless</h1>
                    <h3>Spotless spaces, happy faces!</h3>
                    <IndexBannerForm/>
                </div>
            </div>
        </div>
    )
}

export default IndexBanner