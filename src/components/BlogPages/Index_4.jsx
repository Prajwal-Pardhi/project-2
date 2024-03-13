import React from 'react'
import BlogSingle from '../BlogSingle';

const Index_4 = () => {
  const heading=["The Sneaker Resale Market Is Flawed.",
     "Top 20 Sneakers Offering Optimal Comfort in 2024", 
     "New Balance Signs With CAA",
     "Retro Tennis Shoes Are Taking Over in 2024"
    ];
    const imgPath = [
        ["/blogImages/Index_4/img1.1.png"], 
        ["/blogImages/Index_4/img2.1.png"], 
        ["/blogImages/Index_4/img3.1.png"],
        ["/blogImages/Index_4/img4.1.png", "/blogImages/Index_4/img4.2.png"]
    ];
    const content = [
        "Regional sneaker resale platforms like the Netherlands-based Restocks and French company Kikikickz shuttered late last year. Nike and Adidas recently abandoned the scarcity model, while popular newcomers like On and Salomon always made their products available at retail. Resale giants including StockX and GOAT have diversified into other categories, but won’t be immune to further contraction in the market.",
        "A consensus was made to compile a list of the 20 most comfortable sneakers of 2024. The approach involved gathering data from four sources, including Walmart, Amazon, Costco, and BestBuy, and analyzing customer reviews and ratings. Only sne+akers with at least 10,000 reviews and an average rating of 4 or above were considered. The list was then ranked based on the number of reviews and customer ratings. The list includes various brands like Skechers, Keds, Cole Haan, Guess, and Puma, each described briefly along with their key features and ratings.",
        "New Balance has enlisted the services of talent agency CAA for representation as it targets gaming enthusiasts and explores the intersection of athletic wear, sports, and entertainment. This move follows New Balance's collaboration with the Rival online gaming platform to elevate its brand presence through gaming tournaments and marketing ventures. Additionally, New Balance has introduced basketball sneakers infused with 1990s gaming aesthetics.",
        "While some tennis shoes have garnered significant attention and fanbases, particularly those endorsed by top athletes like Roger Federer's The Roger Pro from On, many have transitioned into everyday wear with less hype surrounding them. However, there's been a recent resurgence in interest in retro tennis shoes, sparked by celebrities like LeBron James and Travis Scott wearing vintage pairs. Nike has capitalized on this trend by re-releasing classic models like the Mac Attack and the Air Tech Challenge 2, tapping into nostalgia for 80s and 90s favorites. Additionally, collaborations like the upcoming Social Status x Nike Attack 'Status Symbol' are contributing to the growing hype surrounding retro tennis shoes, signaling a resurgence in their popularity."  
      ];
      
    return (
    <div>
        {heading.map((title, index) => (
            <BlogSingle key={index} title={heading[index]} images={imgPath[index]} content={content[index]}/>
        ))}
    </div>
  )
}

export default Index_4
