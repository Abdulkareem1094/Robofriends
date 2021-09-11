import React from "react";

const card = ({name , email}) => {
    return (
        <div className='tc bg-light-green dib brs pa3 ma2 grow bw2 shadow-5'>
            <img src={"https://robohash.org/${ props.id }?200x200"} alt="robopics"  />
            <div>
                <h2>{name}</h2>
                <p>{email} </p>
            </div>
        </div>
    )
};

export default card;