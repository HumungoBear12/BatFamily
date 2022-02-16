import React from 'react'


const Slideshow = ({Header,ImageOne,ImageTwo,ImageThree,ImageFour,ImageFive,ImageSix,ImageSeven,ImageEight,ImageNine}) => {
    
    return (
        <div>
            {/* <!-- 3D Slideshow Section -->  */}
            <section id="slideshow">
                <h1>{Header}</h1>
                <div class="entire-content">
                    <div class="content-carrousel">
                        <figure class="shadow"><img class="IMAGE_MOVIE" src={ImageOne}/></figure>
                        <figure class="shadow"><img class="IMAGE_MOVIE" src={ImageTwo}/></figure>
                        <figure class="shadow"><img class="IMAGE_MOVIE" src={ImageThree}/></figure>
                        <figure class="shadow"><img class="IMAGE_MOVIE" src={ImageFour}/></figure>
                        <figure class="shadow"><img class="IMAGE_MOVIE" src={ImageFive}/></figure>
                        <figure class="shadow"><img class="IMAGE_MOVIE" src={ImageSix}/></figure>
                        <figure class="shadow"><img class="IMAGE_MOVIE" src={ImageSeven}/></figure>
                        <figure class="shadow"><img class="IMAGE_MOVIE" src={ImageEight}/></figure>
                        <figure class="shadow"><img class="IMAGE_MOVIE" src={ImageNine}/></figure>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Slideshow
