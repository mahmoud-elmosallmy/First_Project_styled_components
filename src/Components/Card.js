import { StyledCard } from "./Styles/Card.styled";

export default function Card(props) {
    return (
        <StyledCard layout={props.data.id % 2 === 0 ? 'row-reverse' : null}>
            <div>
                <h2>{props.data.title}</h2>
                <p>{props.data.body}</p>
            </div>
            <div>
                <img src={`./images/${props.data.image}`} alt="" />
            </div>
        </StyledCard>
    )
}