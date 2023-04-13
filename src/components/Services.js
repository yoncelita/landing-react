import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import { ButtonCta } from './ButtonCta';

export const Services = () => {

    const data = useContext(DataContext);

    return (
        <section id='services-component'>
            <div className='services-wrapper'>
                <div className='services-header'>
                    <h3>{data.services.title}</h3>
                    <p>{data.services.description}</p>
                </div>
                <div className='services-content'>
                    {data.services.items.map(item => (
                        <div className='services-box'>
                            <div className='services-box-header'>
                                <img src={item.icon} alt='benefit' />
                                <h3>{item.title}</h3>
                            </div>
                            <div className='symbol-container'>
                                <img src='../images/icons/chromeye_assignment_plus_v1.svg' alt='plus' />
                            </div>
                            <p className='services-box-content'>{item.description}</p>
                        </div>
                    ))}
                </div>
                <ButtonCta url={data.services.buttonUrl} label={data.services.buttonLabel} />
            </div>
        </section>
    )
}