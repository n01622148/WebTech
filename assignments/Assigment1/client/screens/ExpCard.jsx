import "./Styles.css"
const ExpCard = (props) => {
    return(
        <div className='card'>
            <p>{props.info.startDate} - {props.info.endDate} - {props.info.name}
                <br/>{props.info.position}: {props.info.desc}</p>
        </div>
    )
}

export default ExpCard