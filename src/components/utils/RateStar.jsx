import React from 'react';

const RateStar = (props) => {
    return(
        <div className="star-rating" title={props.popularidade+'%'}>
            <div className="back-stars">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i> 
                
                <div className="front-stars" style={{width: props.popularidade+'%'}}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}

export default RateStar;