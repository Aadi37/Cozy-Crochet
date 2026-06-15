import gloves from "../Images/gloves.png"
import clothes from "../Images/clothes.png"
import accessories from "../Images/accessories.png"
import light from "../Images/light.png"
const Service = ({SectionTitle}) => {
    return (
        <>
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="row">
               <div className="collectionWrapper">
                  <h4 className="FontArt text-center SectionTitle">{SectionTitle}</h4>
                 <ul className="grid grid-cols-1 md:grid-cols-4 gap-[15px] items-center mt-10">
                    <li>
                        <div className="CollectionCard">
                            <div className="CollectionWrap">
                                <div className="CollectionImage">
                                    <img src={gloves} className="Images" alt="WinterWear" loading="lazy"/>
                                </div>
                                <div className="CollectionName">
                                   <h4>Winter Wear</h4>
                                </div>
                            </div>
                        </div>
                    </li>
                                        <li>
                        <div className="CollectionCard">
                            <div className="CollectionWrap">
                                <div className="CollectionImage">
                                    <img src={light} className="Images" alt="light" loading="lazy"/>
                                </div>
                                <div className="CollectionName">
                                   <h4>Home Decor</h4>
                                </div>
                            </div>
                        </div>
                    </li>
                                        <li>
                        <div className="CollectionCard">
                            <div className="CollectionWrap">
                                <div className="CollectionImage">
                                    <img src={clothes} className="Images" alt="clothes" loading="lazy"/>
                                </div>
                                <div className="CollectionName">
                                   <h4>Apparel Collection</h4>
                                </div>
                            </div>
                        </div>
                    </li>
                                        <li>
                        <div className="CollectionCard">
                            <div className="CollectionWrap">
                                <div className="CollectionImage">
                                    <img src={accessories} className="Images" alt="accessories" loading="lazy"/>
                                </div>
                                <div className="CollectionName">
                                   <h4>Kids Collection</h4>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                 </ul>
               </div>
            </div>
         </div>
        </>
    )
}
export default Service;