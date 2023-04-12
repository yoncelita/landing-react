import { ButtonCta } from '../components/ButtonCta'

export const Home = () => {

    return (
        <section id="home-component">
            <div className="home-info-wrapper">
                <div className="info-col">
                    <h2 className="home-heading">Visuals Engineered with Precision</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, amet sit dui quis amet gravida felis nibh. Netus erat id et placerat massa.</p>
                    <ButtonCta />
                </div>
                <div className="home-img-wrapper">
                </div>
            </div>
        </section>
    )
}