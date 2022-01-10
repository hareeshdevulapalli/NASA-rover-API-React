import React from 'react';
import './CardItem.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

class CardItem extends React.Component {
    render() {
        console.log("Item ", this.props.isLiked)
        return (
            <div className="card">
                <div className='card-header'>{this.props.title}</div>
                <img src={this.props.imageUrl} alt="Girl in a jacket"/>
                <div className="card-body">
                    <div className='card-body-desc'>{this.props.description}</div>
                    <span>{this.props.copyright}</span>
                </div>
                <div className='card-actions'>
                    <FavoriteBorderIcon className={this.props.isLiked? 'liked':''} onClick={()=>this.props.likeHandler()}/>
                    <ShareIcon />
                </div>
            </div>
        )
    }
}


export default CardItem;  