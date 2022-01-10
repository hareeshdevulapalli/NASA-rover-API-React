import React from 'react';
import Cards from '../Cards/Cards';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }
    componentDidMount() {
        fetch("https://api.nasa.gov/planetary/apod?count=100&api_key=PgjdawAcipiZxvO2L79mOuEqRSBOc0FBJmmS7ZGv")
            .then(res => res.json())
            .then(r => r.map(c => {
                c.isLike = false
                return c
            }))
            .then(result => {

                this.setState({
                    cards: [...result]
                })
                console.log(result)
            })
    }

    likeHandlerStateParent = index => {
        let tempState = [...this.state.cards];
        tempState[index].isLike = !tempState[index].isLike

        this.setState({
            cards: [...tempState]
        })
    }

    render() {
        return <React.Fragment>
            {
                this.state.cards.length > 0 ? <Cards cards={this.state.cards} likeHandlerState={this.likeHandlerStateParent} />
                    : <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                        <LinearProgress color="secondary" />
                        <LinearProgress color="success" />
                        <LinearProgress color="inherit" />
                    </Stack>
            }
        </React.Fragment>
    }
}

export default Homepage;