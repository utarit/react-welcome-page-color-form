import React from 'react';

const Result = ({data}) => {
    const keys = Object.keys(data);
    const shownData = [];
    let str = '';

    keys.forEach((key) => {
        const unit = data[key];
        unit.image = `Put your image source as *require('./example.png')* or *http://image.com/example.png*`
        shownData.push(unit);

         str = JSON.stringify(shownData, null, 2);
    })


    return (
        <textarea rows={20} cols={70} readOnly value={`
        <Welcome 
            data={
                ${str}
            }
        />
        `}>
        
        </textarea>
    )
};


export default Result;