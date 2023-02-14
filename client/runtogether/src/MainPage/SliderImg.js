import {NavLink} from "react-router-dom";
function SliderImg({runningCrew}) {
    return (
        <>
            {
                runningCrew.map((crew, idx) => {
                    return(
                        <NavLink className='aNav' to={"/running/detail/" + crew.runningId}>
                            <img className='img' src={`https://i8a806.p.ssafy.io/runstory/running/`+crew.imgFileName} />
                        </NavLink>
                        );
                      })
                }
        </>
    )
}
export default SliderImg;