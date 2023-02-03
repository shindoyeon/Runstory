function SliderImg({runningCrew}) {
    return (
        <>
            {
                runningCrew.map((crew, idx) => {
                    {console.log(crew)}
                    return(
                            <img className='img' src={crew.imgFilePath} />
                        );
                      })
                }
        </>
    )
}
export default SliderImg;