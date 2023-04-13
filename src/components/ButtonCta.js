export const ButtonCta = ({
    label,
    url,
}) => {

    return (
        <a href={url} id="button-component">{label}</a>
    )
}