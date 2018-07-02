import React from 'react';
import Palette from './Palette';

class FormCard extends React.Component {
    state= {
        otoColor: true,
        loaded: false
    }

    radioChange = (e) => {
        const val = Number(e.target.value);

        this.setState({otoColor: val})
        
    }

    onImageLoad = () => {
        this.setState({loaded: true})
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
        <img id={`form-${props.id}-img`} src='' alt='' onLoad={this.onImageLoad} />
        <div key={props.images[formId]}>
            <input onChange={this.radioChange} type='radio' name='otoColor' value={1} /> Smart Color
            <input onChange={this.radioChange} type='radio' name='otoColor' value={0} /> I will set colors
        </div>

        {
            this.state.otoColor ? 
            <Palette id={formId} onLoad={this.props.onLoadPalette} image={props.images[formId]} /> 
            :
            <div>
                <input name='backgroundColor' placeholder='Background Color' onChange={props.onInputChange} type='text' />
                <input name='textColor' placeholder='Text Color' onChange={props.onInputChange} type='text' />
            </div>
            
        }
         
        <input name='text' placeholder='Text'onChange={props.onInputChange} type='text' />
        <input name='imageAnimation' placeholder='Image Animation' onChange={props.onInputChange} type='text' />
        <input name='textAnimation' placeholder='Text Animation'onChange={props.onInputChange} type='text' />
      </div>
    )
    }
}

export default FormCard;