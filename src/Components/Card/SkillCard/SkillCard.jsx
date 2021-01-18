import './SkillCard.css';

const SkillCard = ({logo, title, color}) => {

    const filter = {
        filter: `drop-shadow(0 0 0.25rem ${color})`
    }

    return (
        <div style={filter} className="skill-card m-3">
            <div>{ logo }</div>
            <div className="text-content">
                <span className="card-title">{ title }</span>
            </div>
        </div>
    )
}

export default SkillCard;
