import React, { useState } from 'react'

const Progress = () => {

    const [progress1, setProgress1] = useState('white')
    const [progress2, setProgress2] = useState('none')
    const [progress3, setProgress3] = useState('none')

    const updateProgress = () => {
        const target = window.scrollY / 2

        // setProgress(target)

        if (target === 0) {
            setProgress1('white')
            setProgress2('none')
            setProgress3('none')
        }

        if (target === (document.documentElement.clientHeight) * .5) {
            setProgress1('none')
            setProgress2('white')
            setProgress3('none')
        }

        if (target === (document.documentElement.clientHeight)) {
            setProgress1('none')
            setProgress2('none')
            setProgress3('white')
        }

        return () => window.removeEventListener('scroll', updateProgress)
    }


    window.addEventListener("scroll", updateProgress)




    const scrollSection1 = () => {
        window.scrollTo(0, 0)
    }
    const scrollSection2 = () => {
        window.scrollTo(0, (document.documentElement.clientHeight * 0.66))
    }
    const scrollSection3 = () => {
        window.scrollTo(0, `${document.documentElement.clientHeight}`)
    }




    return (
        <div className='progress-wrapper'>
            <div className="progress-bar" name='sec1' onClick={scrollSection1}>
                <div className="progress-section" style={{ background: `${progress1}` }} ></div>
            </div>
            <div className="progress-bar" onClick={scrollSection2}>
                <div className="progress-section" style={{ background: `${progress2}` }} ></div>
            </div>
            <div className="progress-bar" onClick={scrollSection3}>
                <div className="progress-section" style={{ background: `${progress3}` }} name='sec3' ></div>
            </div>
        </div>
    )
}

export default Progress