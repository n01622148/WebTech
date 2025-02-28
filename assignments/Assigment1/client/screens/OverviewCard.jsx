import "./Styles.css"
const OverviewCard = (props) => {
    return(
        <div className='cardH'>
            {props.overviewData?.skills?.length > 0 ? (
                    props.overviewData.skills.map((skill, index) => (
                    <p key={index}>{skill},&nbsp;</p>
                    ))) : (<p></p>)}
        </div>
    )
}

export default OverviewCard