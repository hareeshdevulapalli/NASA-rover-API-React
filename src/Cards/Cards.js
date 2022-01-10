import React from 'react';
import CardItem from '../CardItem/CardItem';
import './Cards.css';

class Cards extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        // console.log("Inside cards: ", this.props.cards)

        return <div className="cards">
            {
                this.props.cards.map((c, i) => <CardItem
                    key={i}
                    title={c.title}
                    copyright={c.copyright ? c.copyright : 'No Author Found'}
                    description={c.explanation}
                    date={c.date}
                    imageUrl={c.url}
                    isLiked={c.isLike}
                    likeHandler={() => this.props.likeHandlerState(i)}
                />)
            }
        </div>
    }
}

export default Cards;