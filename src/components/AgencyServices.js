import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';


export const AgencyServices = () => {

    const data = useContext(DataContext);
    const [firstItem] = data.agency_services.items;
    const [, secondItem] = data.agency_services.items;
    const [, , thirdItem] = data.agency_services.items;
    const [, , , fourthItem] = data.agency_services.items;

    return (
        <section id='agencyServices-component'>
            <div className='frame-wrapper'>
                <div className='section-header'>
                    <h3>{data.agency_services.title}</h3>
                </div>
                <div className='main-content'>

                    <div className='half-content'>

                        <div className="work-text-parag">
                            <section className="all-accordion-container">
                                <section className="accordion-container">

                                    <div className="accordion-content">
                                        <input id="accordion-1" name="accordion-1" type="radio" checked />
                                        <label for="accordion-1">{firstItem.title}<img className="arrow-icon" src="../images/icons/chromeye_assignment_arrowdown_v1.svg" alt="arrow" /></label>
                                        <section className="accordion">
                                            <p>
                                                {firstItem.description}
                                            </p>
                                        </section>
                                    </div>

                                    <div className="accordion-content">
                                        <input id="accordion-2" name="accordion-1" type="radio" checked />
                                        <label for="accordion-2">{secondItem.title}<img className="arrow-icon" src="../images/icons/chromeye_assignment_arrowdown_v1.svg" alt="arrow" /></label>
                                        <section className="accordion">
                                            <p>
                                                {secondItem.description}
                                            </p>
                                        </section>
                                    </div>

                                    <div className="accordion-content">
                                        <input id="accordion-3" name="accordion-1" type="radio" checked />
                                        <label for="accordion-3">{thirdItem.title}<img className="arrow-icon" src="../images/icons/chromeye_assignment_arrowdown_v1.svg" alt="arrow" /></label>
                                        <section className="accordion">
                                            <p>
                                                {thirdItem.description}
                                            </p>
                                        </section>
                                    </div>

                                    <div className="accordion-content">
                                        <input id="accordion-4" name="accordion-1" type="radio" checked />
                                        <label for="accordion-4">{fourthItem.title}<img className="arrow-icon" src="../images/icons/chromeye_assignment_arrowdown_v1.svg" alt="arrow" /></label>
                                        <section className="accordion">
                                            <p>
                                                {fourthItem.description}
                                            </p>
                                        </section>
                                    </div>

                                </section>
                            </section>
                        </div>

                        <div className="img-wrapper">
                            <img src={firstItem.image} alt="content" />
                        </div>

                    </div>




                </div>
            </div>
        </section>
    )
}