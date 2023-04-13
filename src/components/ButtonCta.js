import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

export const ButtonCta = ({
        label,
        url,
}) => {
    
    const data = useContext(DataContext);

    return (
        <a href={url} id="button-component">{label}</a>
    )
}