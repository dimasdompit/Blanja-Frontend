import React from 'react'
import './headline.scss'

const Headline = ({ type, title, ...props }) => {
    return (
        <>
            {type === 'h1' ? (<h1 className='headline__1' {...props}>{title}</h1>)
                : type === 'h2' ? (<h2 className='headline__2' {...props}>{title}</h2>)
                    : type === 'h3' ? (<h3 className='headline__3' {...props}>{title}</h3>)
                        : type === 'subheads' ? (<h4 className='subheads' {...props}>{title}</h4>)
                            : <div></div>
            }
        </>
    )
}

export default Headline
