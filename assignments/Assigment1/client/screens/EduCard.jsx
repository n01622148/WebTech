import "./Styles.css"
const EduCard = (props) => {
    return(
        <div className='card' >
            <p>{props.info.startDate} - {props.info.endDate} - {props.info.program}<br/>{props.info.inst}</p>     
        </div>
    )
}

export default EduCard