import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = { search: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ search: e.target.value });
    }

    goTo(keyword) {
        return `/search/${keyword}`;
    }

    render() {
        return (
            <div>
                <div className="input-group">
                    <input
                        onChange={this.handleChange}
                        value={this.state.search}
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                    />
                    <Link
                        type="submit"
                        className="input-group-prepend btn btn-dark"
                        to={
                            this.state.search
                                ? this.goTo(this.state.search)
                                : "/"
                        }
                    >
                        Search GIF
                    </Link>
                </div>
            </div>
        );
    }
}

export default SearchInput;
