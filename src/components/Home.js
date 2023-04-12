import { ButtonCta } from '../components/ButtonCta';
import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';


export const Home = () => {

    const data = useContext(DataContext);

    return (
        <section id="home-component">
            <div className="home-info-wrapper">
                <div className="info-col">
                    <h2 className="home-heading">{data.hero.title}</h2>

                    <p>{data.hero.description}</p>
                    <ButtonCta />
                </div>
                <div className="home-img-wrapper">
                </div>
            </div>
        </section>
    )
}