import React from 'react';
import dateFormat from 'dateformat';

const LoadComments = props => {


    return (
        props.comments.map(item => {
            return (
                <div key={item.id}>
                    <h5>{item.author}</h5>
                    <p>{item.comment}</p>
                    <p className="font-italic">{dateFormat(item.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                    <hr />
                </div>
            )
        })

    );
}

export default LoadComments;