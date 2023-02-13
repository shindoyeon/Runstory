function SliderImg({runningCrew}) {
    return (
        <>
            {
                runningCrew.map((crew, idx) => {
                    return(
                            <img className='img' src={crew.imgFilePath} />
                        );
                      })
                }
        </>
    )
}
export default SliderImg;