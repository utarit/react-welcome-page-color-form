import React from 'react';
import ImagePalette from 'react-image-palette'

const Palette = ({ image }) =>{
    console.log(image);

    return (
    <ImagePalette image={image}>
        {({ backgroundColor, color, alternativeColor }) => (
        <div style={{ backgroundColor, color }}>
            This div has been themed based on
            <span style={{ color: alternativeColor }}>OWW YEAAA</span>
        </div>
        )}
    </ImagePalette>
    )

}

export default Palette;