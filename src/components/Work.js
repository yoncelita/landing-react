import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import { ButtonCta } from '../components/ButtonCta';


export const Work = () => {

    const data = useContext(DataContext);
    const [firstItem] = data.portfolio.items;
    const [, secondItem] = data.portfolio.items;

    return (
        <section id='work-component'>
            <div className='work-wrapper'>
                <div className='services-header'>
                    <h3>{data.portfolio.title}</h3>
                    <p>{data.portfolio.description}</p>
                </div>
                <div className='work-content'>


                    <div className='work-upper-half-content'>
                        <div className="work-text-parag firstPart">
                            <h3>{firstItem.title}</h3>
                            <p>{firstItem.description}</p>
                            <ButtonCta url={firstItem.buttonUrl} label={firstItem.buttonLabel} />
                        </div>
                        <div className="work-img-wrapper">
                            <img src={firstItem.image} alt="work-image" />
                        </div>
                    </div>


                    <div className='work-bottom-half-content'>
                        <div className="work-text-parag secondPart">
                            <h3>{secondItem.title}</h3>
                            <p>{secondItem.description}</p>
                            <ButtonCta url={secondItem.buttonUrl} label={secondItem.buttonLabel} />
                        </div>
                        <div className="work-img-wrapper">
                            <img src={secondItem.image} alt="work-image" />
                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}