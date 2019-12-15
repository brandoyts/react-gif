import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import Spinner from "./Spinner";

const fetchGifs = async props => {
    const { match } = props;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=s5d1F65trv0WVgvxWfYv7agaoUGoHhwW&q=${match.params.keyword}&limit=50&offset=0&rating=G&lang=en`;
    const response = await axios.get(url);
    return response.data.data;
};

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = { results: [], isLoading: true };
    }

    async componentDidMount() {
        const gifs = await fetchGifs(this.props);
        this.setState({ results: gifs });
        this.initializeGifs();
    }

    async componentDidUpdate(prevProps, prevState) {
        if (
            prevProps.match.params.keyword !== this.props.match.params.keyword
        ) {
            const gifs = await fetchGifs(this.props);
            this.setState({ results: gifs });
        }
    }

    componentWillUnmount() {
        this.setState({ results: [] });
    }

    renderGifs() {
        return this.state.results.map(gif => (
            <Card
                key={gif.id}
                onModal={this.props.onModal}
                url={gif.images.fixed_width.url}
            />
        ));
    }

    initializeGifs() {
        setTimeout(
            () => this.setState(state => ({ isLoading: !state.isLoading })),
            5000
        );
    }

    render() {
        const gridStyle = {
            display: "grid",
            alignItems: "start",
            gridGap: "10px",
            gridAutoRow: "40px",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))"
        };

        return (
            <div style={gridStyle}>
                {!this.state.isLoading ? this.renderGifs() : <Spinner />}
            </div>
        );
    }
}

export default SearchResult;
