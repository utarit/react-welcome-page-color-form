import React from 'react';
import Palette from './Palette';

class FormCard extends React.Component {
    state= {
        otoColor: false,
        loaded: false
    }

    radioChange = (e) => {
        const val = Number(e.target.value);

        this.setState({otoColor: val})

        console.log( typeof val);
        
    }

    render(){
        let props = this.props;

        const formId = `form-${props.id}`;

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
        <div>
            <input onChange={this.radioChange} type='radio' name='otoColor' value={1} /> Smart Color
            <input onChange={this.radioChange} type='radio' name='otoColor' value={0} /> I will set colors
        </div>

        {
            this.state.otoColor ? <Palette image={props.images[formId]} /> :
            <div>
            <input name='b-color' placeholder='Background Color' onChange={props.onInputChange} type='text' />
            <input name='t-color' placeholder='Text Color' onChange={props.onInputChange} type='text' />
            </div>
            
        }
         
        <input name='text' placeholder='Text'onChange={props.onInputChange} type='text' />
        <input name='i-animation' placeholder='Image Animation' onChange={props.onInputChange} type='text' />
        <input name='t-animation' placeholder='Text Animation'onChange={props.onInputChange} type='text' />
      </div>
    )
    }
}

export default FormCard;