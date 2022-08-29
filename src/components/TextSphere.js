import React from 'react'

const TextSphere = () => {

    const TagCloud = require('TagCloud');
    const container = '.tagcloud';
    const options = {};
    const texts = [
        '3D', 'TagCloud', 'JavaScript',
        'CSS3', 'Animation', 'Interactive',
        'Mouse', 'Rolling', 'Sphere',
        '6KB', 'v2.x',
    ];

    TagCloud(container, texts, options);



    return (<>
        <div className='tagcloud' style={{ color: 'white' }}>
        </div>
        <h1>Texx</h1>
    </>
    )
}

export default TextSphere