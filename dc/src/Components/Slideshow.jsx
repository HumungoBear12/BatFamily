import React from 'react'


const Slideshow = ({Header,ImageOne,ImageTwo,ImageThree,ImageFour,ImageFive,ImageSix,ImageSeven,ImageEight,ImageNine}) => {
    
    return (
        <div>
            {/* <!-- 3D Slideshow Section -->  */}
            <section id="slideshow">
                <h1>{Header}</h1>
                <div class="entire-content">
                    <div class="content-carrousel">
                        <figure class="shadow"><img src={ImageOne}/></figure>
                        <figure class="shadow"><img src={ImageTwo}/></figure>
                        <figure class="shadow"><img src={ImageThree}/></figure>
                        <figure class="shadow"><img src={ImageFour}/></figure>
                        <figure class="shadow"><img src={ImageFive}/></figure>
                        <figure class="shadow"><img src={ImageSix}/></figure>
                        <figure class="shadow"><img src={ImageSeven}/></figure>
                        <figure class="shadow"><img src={ImageEight}/></figure>
                        <figure class="shadow"><img src={ImageNine}/></figure>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Slideshow
