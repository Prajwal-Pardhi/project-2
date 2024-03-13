import React from 'react'
import BlogSingle from '../BlogSingle';

const Index_2 = () => {
  const heading=["Stepping into Style: The Quirky Chronicles of Luxury Fashion's Past", 
    "NCT's TEN named global ambassador for French luxury brand Saint Laurent", 
    "Paris Fashion Week Autumn/Winter 2024: Key Takeaways"];
    const imgPath = [
        ["/blogImages/Index_2/img1.1.png"], 
        ["/blogImages/Index_2/img2.1.png", "/blogImages/Index_2/img2.2.png" ], 
        []
    ];
    const content = [
        "Zudio, achieved remarkable success in the Indian fast fashion market by focusing on strategic market penetration rather than heavy advertising. Targeting tier 2 and tier 3 cities, Zudio connected directly with its audience, offering trendy clothing at affordable prices. Unlike international giants like Zara and H&M, Zudio differentiated itself through hyper-localized collections, unbeatable pricing, and rapid response to fashion trends. By maintaining quality while keeping prices low through efficient supply chain management and bulk manufacturing, Zudio attracted a youthful demographic seeking affordable yet stylish fashion options. This success story highlights the importance of understanding local market dynamics and meeting consumer needs effectively.",
        "Shein, a major player in fast fashion, is facing obstacles in its plans for an initial public offering (IPO), including a recent disclosure error in the UK and uncertainties over US approval. The error involved Shein's UK business failing to disclose its ultimate human owner as required by law, which Shein acknowledged and is working to correct. While discussions with UK officials about an IPO in London seem promising, concerns persist over US approval. A potential listing in London could boost the city's financial status, but questions remain about Shein's transparency and ethical practices, particularly regarding labor abuse allegations. As Shein works to address these challenges, its IPO journey remains uncertain, with potential rewards and lingering questions ahead.",
        "MarcoWagon is revolutionizing women's fast fashion sourcing globally, offering trend-forward styles with agility comparable to top global brands. With sourcing offices in fashion hubs like the UK, Italy, Turkey, and China, MarcoWagon curates fashion pieces every two weeks, aligning with ongoing trends. Through collaborations with leading brands like Nykaa Fashion, Reliance Trends, and SAM on Ajio, MarcoWagon solidifies its position as a leading supplier in the fast fashion landscape. With a commitment to innovation and global sourcing capabilities, MarcoWagon aims to elevate Indian brands and private labels to international standards in the fast-paced world of women's fashion."
      ];
      
    return (
    <div>
        {heading.map((title, index) => (
            <BlogSingle key={index} title={heading[index]} images={imgPath[index]} content={content[index]}/>
        ))}
    </div>
  )
}

export default Index_2
