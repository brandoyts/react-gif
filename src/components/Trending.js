import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import Spinner from "./Spinner";

class Trending extends Component {
    constructor(props) {
        super(props);
        this.state = { gifs: [], isLoading: true };
    }

    async componentDidMount() {
        const url =
            "https://api.giphy.com/v1/gifs/trending?api_key=s5d1F65trv0WVgvxWfYv7agaoUGoHhwW&limit=100&rating=G";
        const trendingGifs = await axios.get(url);
        this.setState({ gifs: trendingGifs.data.data });
        setTimeout(() => this.setState({ isLoading: false }), 5000);
    }

    renderGifs() {
        return this.state.gifs.map(gif => (
            <Card
                key={gif.id}
                onModal={this.props.onModal}
                url={gif.images.fixed_width.url}
            />
        ));
    }

    render() {
        const gridStyle = {
            display: "grid",
            alignItems: "start",
            gridGap: "10px",
            gridAutoRow: "40px",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))"
        };

        return (
            <div style={gridStyle}>
                {!this.state.isLoading ? this.renderGifs() : <Spinner />}
            </div>
        );
    }
}

export default Trending;
