import React from 'react';
import Images from './Images';

function Cards(props){
    return(

        <>
        <div className="cards">
            <div className="card">
            <Images imgsrc={props.imgsrc}></Images>
            <div className="card__info">
                <span className="card__category"> {props.sname} </span>
                <h3 className="cart__title">{props.title}</h3>
                <a href={props.link} target="_blank">
                    <button>Watch Now</button>
                </a>
            </div>
            </div>
        </div>

    </>
    )
}
export default Cards;