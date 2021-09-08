import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../component/Home';
import News from '../component/News';
class DieuHuongURL extends Component {
    render() {
        return (
            <Router>
                <div>                                                            
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/tintuc"><News /></Route>                                 
                </div>
            </Router>
        );
    }
}

export default DieuHuongURL;