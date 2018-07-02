import React from 'react';
import ImagePalette from 'react-image-palette'

const Palette = ({ image }) =>{
    return (
    <ImagePalette key={image} image={image}>
        {({ backgroundColor, color, alternativeColor }) => (
        <div style={styles.container}>
            <div style={{...styles.subDiv, backgroundColor}}>
            <p>Background Color:</p>
            <p>{backgroundColor}</p>
            </div>
            <div style={{...styles.subDiv, backgroundColor: color}} ><p>Text Color:</p>
            <p>{color}</p>
            </div>
        </div>
        )}
    </ImagePalette>
    )

}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    subDiv: {
        flex:1,
        padding: 10
    }
};

export default Palette;