import React from 'react'
import BlogSingle from '../BlogSingle';

const Index_1 = () => {
    const heading=["", "", ""];
    const imgPath = [
        ["/blogImages/Index_1/img1.1.png", /*"/blogImages/Index_1/img1.2.png"*/], 
        ["/blogImages/Index_1/img2.1.png", "/blogImages/Index_1/img2.2.png"], 
        ["/blogImages/Index_1/img3.1.png", "/blogImages/Index_1/img3.2.png"]
    ];
    const content = [
        "Stella McCartney and Sacai presented collections at Paris Fashion Week dedicated to sustainability and activism. McCartney showcased responsible luxury, while Sacai focused on emotional protection through hybrid garments blurring fashion and function.",
        "MIT graduate Sasha McKinlay collaborated with the Ministry of Supply to design the 4D Knit Dress, using heat-activated yarn for personalized fit and style. This innovation challenges the fast fashion model by offering enduring clothing adaptable to changing trends and body shapes.",
        "Kyocera's inkjet textile printer, 'FOREARTH,' collaborated with designer Kunihiko Morinaga to showcase a sustainable artwork at Paris Fashion Week. Morinaga's collection explores non-human-centric designs, envisioning fashion for the 22nd century, while 'FOREARTH' reduces water usage, addressing textile industry challenges."
      ];
      
    return (
    <div>
        {heading.map((title, index) => (
            <BlogSingle key={index} title={heading[index]} images={imgPath[index]} content={content[index]}/>
        ))}
    </div>
  )
}

export default Index_1