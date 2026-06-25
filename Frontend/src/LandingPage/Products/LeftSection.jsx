import React from 'react'

export default function LeftSection({
    imageUrl,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className='col-6'>
                    <img src={imageUrl} />
                </div>
                <div className='col-6 mt-5 p-5'>
                    <h1>{productDescription}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo}> Try Demo</a>
                        <a href={learnMore} style={{ marginLeft: "50px" }}> Learn More</a>
                    </div>
                    <div>
                        <a href={googlePlay}>
                            <img src="/media/googlePlayBadge.svg" />
                        </a>
                        <a href={appStore}>
                            <img src="/media/appstoreBadge.svg" />
                        </a>
                    </div>
                </div>


            </div>

        </div>
    )
}
