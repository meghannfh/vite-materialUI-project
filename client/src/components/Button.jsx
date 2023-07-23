import React from 'react';

export default function Button({text, textColor, bgColor}) {
    return (
         <button
            style={{
                color: textColor || 'seashell',
                backgroundColor: bgColor || '#a8ceb4'
            }} 
            className='button'
        >
                {text}
         </button>
    )
}