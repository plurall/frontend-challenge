import React from 'react';
import ConvertDate from '../utils/convert-date';

export const Card = (props) => {
    const converterData = new ConvertDate();
    return(
        props.albuns && props.albuns.map((element, index) => {
            return (index < 10 ?  
                <div className="album-content">
            <div className="row">
                    <div className="album-item col-9">
                        <div>
                            <img src={element.images[2] && element.images[2].url} alt=""/>
                        </div>
                        <div className="album-name">{element.name}</div>
                        <div className="album-date">{converterData.setDate(element.release_date)}</div>
                    </div>
                </div>
            </div> : '')
            })
    )
}

export default Card;

