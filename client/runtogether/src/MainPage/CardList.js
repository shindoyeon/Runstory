import FeedCard from './FeedCard';

function CardList({feeds}) {
    return (
        <>
            {
                feeds.map((feed, idx) =>
                    <FeedCard feed={feed} key={idx}></FeedCard>
                )
            }
        </>
    )
}
export default CardList;