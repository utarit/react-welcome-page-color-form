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
        <div style={{
            padding: 10
        }} key={props.images[formId]}>
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
        
        <div style={{padding: 20}}>
            <label style ={{paddingRight: 10, fontSize: 13}}>Image Animation: </label>

        <select style={{
            padding: 8
        }} name='imageAnimation' onChange={props.onInputChange} defaultValue='rotateIn'>
        <optgroup label="Attention Seekers">
          <option value="bounce">bounce</option>
          <option value="flash">flash</option>
          <option value="pulse">pulse</option>
          <option value="rubberBand">rubberBand</option>
          <option value="shake">shake</option>
          <option value="swing">swing</option>
          <option value="tada">tada</option>
          <option value="wobble">wobble</option>
          <option value="jello">jello</option>
        </optgroup>

        <optgroup label="Bouncing Entrances">
          <option value="bounceIn">bounceIn</option>
          <option value="bounceInDown">bounceInDown</option>
          <option value="bounceInLeft">bounceInLeft</option>
          <option value="bounceInRight">bounceInRight</option>
          <option value="bounceInUp">bounceInUp</option>
        </optgroup>

        <optgroup label="Bouncing Exits">
          <option value="bounceOut">bounceOut</option>
          <option value="bounceOutDown">bounceOutDown</option>
          <option value="bounceOutLeft">bounceOutLeft</option>
          <option value="bounceOutRight">bounceOutRight</option>
          <option value="bounceOutUp">bounceOutUp</option>
        </optgroup>

        <optgroup label="Fading Entrances">
          <option value="fadeIn">fadeIn</option>
          <option value="fadeInDown">fadeInDown</option>
          <option value="fadeInDownBig">fadeInDownBig</option>
          <option value="fadeInLeft">fadeInLeft</option>
          <option value="fadeInLeftBig">fadeInLeftBig</option>
          <option value="fadeInRight">fadeInRight</option>
          <option value="fadeInRightBig">fadeInRightBig</option>
          <option value="fadeInUp">fadeInUp</option>
          <option value="fadeInUpBig">fadeInUpBig</option>
        </optgroup>

        <optgroup label="Fading Exits">
          <option value="fadeOut">fadeOut</option>
          <option value="fadeOutDown">fadeOutDown</option>
          <option value="fadeOutDownBig">fadeOutDownBig</option>
          <option value="fadeOutLeft">fadeOutLeft</option>
          <option value="fadeOutLeftBig">fadeOutLeftBig</option>
          <option value="fadeOutRight">fadeOutRight</option>
          <option value="fadeOutRightBig">fadeOutRightBig</option>
          <option value="fadeOutUp">fadeOutUp</option>
          <option value="fadeOutUpBig">fadeOutUpBig</option>
        </optgroup>

        <optgroup label="Flippers">
          <option value="flip">flip</option>
          <option value="flipInX">flipInX</option>
          <option value="flipInY">flipInY</option>
          <option value="flipOutX">flipOutX</option>
          <option value="flipOutY">flipOutY</option>
        </optgroup>

        <optgroup label="Lightspeed">
          <option value="lightSpeedIn">lightSpeedIn</option>
          <option value="lightSpeedOut">lightSpeedOut</option>
        </optgroup>

        <optgroup label="Rotating Entrances">
          <option value="rotateIn">rotateIn</option>
          <option value="rotateInDownLeft">rotateInDownLeft</option>
          <option value="rotateInDownRight">rotateInDownRight</option>
          <option value="rotateInUpLeft">rotateInUpLeft</option>
          <option value="rotateInUpRight">rotateInUpRight</option>
        </optgroup>

        <optgroup label="Rotating Exits">
          <option value="rotateOut">rotateOut</option>
          <option value="rotateOutDownLeft">rotateOutDownLeft</option>
          <option value="rotateOutDownRight">rotateOutDownRight</option>
          <option value="rotateOutUpLeft">rotateOutUpLeft</option>
          <option value="rotateOutUpRight">rotateOutUpRight</option>
        </optgroup>

        <optgroup label="Sliding Entrances">
          <option value="slideInUp">slideInUp</option>
          <option value="slideInDown">slideInDown</option>
          <option value="slideInLeft">slideInLeft</option>
          <option value="slideInRight">slideInRight</option>

        </optgroup>
        <optgroup label="Sliding Exits">
          <option value="slideOutUp">slideOutUp</option>
          <option value="slideOutDown">slideOutDown</option>
          <option value="slideOutLeft">slideOutLeft</option>
          <option value="slideOutRight">slideOutRight</option>
          
        </optgroup>
        
        <optgroup label="Zoom Entrances">
          <option value="zoomIn">zoomIn</option>
          <option value="zoomInDown">zoomInDown</option>
          <option value="zoomInLeft">zoomInLeft</option>
          <option value="zoomInRight">zoomInRight</option>
          <option value="zoomInUp">zoomInUp</option>
        </optgroup>
        
        <optgroup label="Zoom Exits">
          <option value="zoomOut">zoomOut</option>
          <option value="zoomOutDown">zoomOutDown</option>
          <option value="zoomOutLeft">zoomOutLeft</option>
          <option value="zoomOutRight">zoomOutRight</option>
          <option value="zoomOutUp">zoomOutUp</option>
        </optgroup>

        <optgroup label="Specials">
          <option value="hinge">hinge</option>
          <option value="jackInTheBox">jackInTheBox</option>
          <option value="rollIn">rollIn</option>
          <option value="rollOut">rollOut</option>
        </optgroup>
      </select>
      </div>

    <div style={{padding: 20}}>
    <label style ={{paddingRight: 10, fontSize: 13}}>Text Animation: </label>

        <select style={{padding: 8}} name='textAnimation' onChange={props.onInputChange} defaultValue='fadeInDown'>
        <optgroup label="Attention Seekers">
        <option value="bounce">bounce</option>
        <option value="flash">flash</option>
        <option value="pulse">pulse</option>
        <option value="rubberBand">rubberBand</option>
        <option value="shake">shake</option>
        <option value="swing">swing</option>
        <option value="tada">tada</option>
        <option value="wobble">wobble</option>
        <option value="jello">jello</option>
        </optgroup>

        <optgroup label="Bouncing Entrances">
        <option value="bounceIn">bounceIn</option>
        <option value="bounceInDown">bounceInDown</option>
        <option value="bounceInLeft">bounceInLeft</option>
        <option value="bounceInRight">bounceInRight</option>
        <option value="bounceInUp">bounceInUp</option>
        </optgroup>

        <optgroup label="Bouncing Exits">
        <option value="bounceOut">bounceOut</option>
        <option value="bounceOutDown">bounceOutDown</option>
        <option value="bounceOutLeft">bounceOutLeft</option>
        <option value="bounceOutRight">bounceOutRight</option>
        <option value="bounceOutUp">bounceOutUp</option>
        </optgroup>

        <optgroup label="Fading Entrances">
        <option value="fadeIn">fadeIn</option>
        <option value="fadeInDown">fadeInDown</option>
        <option value="fadeInDownBig">fadeInDownBig</option>
        <option value="fadeInLeft">fadeInLeft</option>
        <option value="fadeInLeftBig">fadeInLeftBig</option>
        <option value="fadeInRight">fadeInRight</option>
        <option value="fadeInRightBig">fadeInRightBig</option>
        <option value="fadeInUp">fadeInUp</option>
        <option value="fadeInUpBig">fadeInUpBig</option>
        </optgroup>

        <optgroup label="Fading Exits">
        <option value="fadeOut">fadeOut</option>
        <option value="fadeOutDown">fadeOutDown</option>
        <option value="fadeOutDownBig">fadeOutDownBig</option>
        <option value="fadeOutLeft">fadeOutLeft</option>
        <option value="fadeOutLeftBig">fadeOutLeftBig</option>
        <option value="fadeOutRight">fadeOutRight</option>
        <option value="fadeOutRightBig">fadeOutRightBig</option>
        <option value="fadeOutUp">fadeOutUp</option>
        <option value="fadeOutUpBig">fadeOutUpBig</option>
        </optgroup>

        <optgroup label="Flippers">
        <option value="flip">flip</option>
        <option value="flipInX">flipInX</option>
        <option value="flipInY">flipInY</option>
        <option value="flipOutX">flipOutX</option>
        <option value="flipOutY">flipOutY</option>
        </optgroup>

        <optgroup label="Lightspeed">
        <option value="lightSpeedIn">lightSpeedIn</option>
        <option value="lightSpeedOut">lightSpeedOut</option>
        </optgroup>

        <optgroup label="Rotating Entrances">
        <option value="rotateIn">rotateIn</option>
        <option value="rotateInDownLeft">rotateInDownLeft</option>
        <option value="rotateInDownRight">rotateInDownRight</option>
        <option value="rotateInUpLeft">rotateInUpLeft</option>
        <option value="rotateInUpRight">rotateInUpRight</option>
        </optgroup>

        <optgroup label="Rotating Exits">
        <option value="rotateOut">rotateOut</option>
        <option value="rotateOutDownLeft">rotateOutDownLeft</option>
        <option value="rotateOutDownRight">rotateOutDownRight</option>
        <option value="rotateOutUpLeft">rotateOutUpLeft</option>
        <option value="rotateOutUpRight">rotateOutUpRight</option>
        </optgroup>

        <optgroup label="Sliding Entrances">
        <option value="slideInUp">slideInUp</option>
        <option value="slideInDown">slideInDown</option>
        <option value="slideInLeft">slideInLeft</option>
        <option value="slideInRight">slideInRight</option>

        </optgroup>
        <optgroup label="Sliding Exits">
        <option value="slideOutUp">slideOutUp</option>
        <option value="slideOutDown">slideOutDown</option>
        <option value="slideOutLeft">slideOutLeft</option>
        <option value="slideOutRight">slideOutRight</option>
        
        </optgroup>

        <optgroup label="Zoom Entrances">
        <option value="zoomIn">zoomIn</option>
        <option value="zoomInDown">zoomInDown</option>
        <option value="zoomInLeft">zoomInLeft</option>
        <option value="zoomInRight">zoomInRight</option>
        <option value="zoomInUp">zoomInUp</option>
        </optgroup>

        <optgroup label="Zoom Exits">
        <option value="zoomOut">zoomOut</option>
        <option value="zoomOutDown">zoomOutDown</option>
        <option value="zoomOutLeft">zoomOutLeft</option>
        <option value="zoomOutRight">zoomOutRight</option>
        <option value="zoomOutUp">zoomOutUp</option>
        </optgroup>

        <optgroup label="Specials">
        <option value="hinge">hinge</option>
        <option value="jackInTheBox">jackInTheBox</option>
        <option value="rollIn">rollIn</option>
        <option value="rollOut">rollOut</option>
        </optgroup>
        </select>
    </div>
      </div>
    )
    }
}

export default FormCard;