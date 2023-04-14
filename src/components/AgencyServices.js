import { useContext, useState } from 'react';
import { DataContext } from '../contexts/DataContext';


export const AgencyServices = ({ items }) => {

    const data = useContext(DataContext);
    const itemsServices = data.agency_services.items;
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <section id='agencyServices-component'>
            <div className='frame-wrapper'>
                <div className='section-header'>
                    <h3>{data.agency_services.title}</h3>
                </div>
                <div className='main-content'>
                    <div className='half-content'>
                        <div className="services-parag">
                            <section className="all-accordion-container">
                                <section className="accordion-container">
                                    {itemsServices.map((item, index) => (
                                        <div className="accordion-content" key={index}>
                                            <input
                                                id={`accordion-${index}`}
                                                name="accordion-1"
                                                type="radio"
                                                checked={activeIndex === index}
                                                onChange={() => handleAccordionClick(index)}
                                            />
                                            <label htmlFor={`accordion-${index}`}>
                                                {item.title}
                                                <img
                                                    className="arrow-icon"
                                                    src="../images/icons/chromeye_assignment_arrowdown_v1.svg"
                                                    alt="arrow"
                                                />
                                            </label>
                                            <section className="accordion">
                                                <p>{item.description}</p>
                                            </section>
                                            {activeIndex === index && (
                                                <div className="accordion-img-wrapper img-wrapper">
                                                    <img src={item.image} alt="aside-image" />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </section>
                            </section>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}