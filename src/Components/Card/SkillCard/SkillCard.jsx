import './SkillCard.css';

const SkillCard = ({logo, title}) => {
    return (
        <div className="skill-card m-3">
            <div> {logo} </div>
            <div className="text-content">
                <span className="card-title"><strong>{ title }</strong></span>
            </div>
        </div>
    )
}

export default SkillCard;
