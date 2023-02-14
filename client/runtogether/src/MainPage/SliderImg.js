import {NavLink} from "react-router-dom";
function SliderImg({runningCrew}) {
    return (
        <>
            {
                runningCrew.map((crew, idx) => {
                    return(
                        <NavLink to={"/running/detail/" + crew.runningId}>
                            <img className='img' src={crew.imgFilePath} />
                        </NavLink>
                        );
                      })
                }
        </>
    )
}
export default SliderImg;