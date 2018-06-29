import React from 'react';
import Palette from './Palette';

const FormCard = (props) => {
    const formId = `form-${props.id}`;
    console.log('INSIDE CARD: ', props.images);
    console.log(formId, props.images.hasOwnProperty(formId));
    return(
        <div id={formId} className='form-group'>
        <button className='remove-button' onClick={props.onRemoveButton}>X</button>
        <input 
            required
            id={`form-${props.id}-img-input`} 
            name='image' 
            type='file' 
            value={props.image} 
            accept=".png, .jpg, .jpeg, .svg"
            onChange={props.onImageChange}
        />
        <img id={`form-${props.id}-img`} src='' alt='' />
        {props.images.hasOwnProperty(formId) ? <Palette image={props.images[formId]} />: ''}
        <input name='name' placeholder='Name' value={props.name} onChange={props.onInputChange} type='text' />
        <input name='animation' placeholder='Animation' value={props.animation} onChange={props.onInputChange} type='text' />
      </div>
    )
}

export default FormCard;