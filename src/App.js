import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Modal from "./components/Modal";
import Trending from "./components/Trending";
import SearchResult from "./components/SearchResult";

function App() {
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setTimeout(() => setShowModal(true), 0);
        setTimeout(() => setShowModal(false), 1000);
    };

    const renderModal = () => {
        if (showModal) {
            return <Modal />;
        }

        return null;
    };

    return (
        <Router>
            <Nav />
            <div className="container">
                {renderModal()}
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={routeProps => (
                            <Trending {...routeProps} onModal={handleModal} />
                        )}
                    />
                    <Route
                        path="/search/:keyword"
                        render={routeProps => (
                            <SearchResult
                                {...routeProps}
                                onModal={handleModal}
                            />
                        )}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
