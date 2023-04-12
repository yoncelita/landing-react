import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

export const ButtonCta = () => {
    const data = useContext(DataContext);
    return (
        <a href={data.hero.buttonUrl} id="button-component">{data.hero.buttonLabel}</a>
    )
}