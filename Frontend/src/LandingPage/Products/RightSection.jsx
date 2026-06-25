import React from 'react'

export default function RightSection({
    imageUrl,
    productName,
    productDescription,
    learnMore
}) {
    return (
        <div className='container mt-5'>
            <div className="row">

                <div className='col-6 mt-5 p-5'>
                    <h1>{productDescription}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore} style={{ marginLeft: "50px" }}> Learn More</a>
                    </div>
                </div>
                <div className='col-6'>
                    <img src={imageUrl} />
                </div>


            </div>

        </div>
    )
}
