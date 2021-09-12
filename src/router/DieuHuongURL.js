import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from '../component/Contact';
import Home from '../component/Home';
import News from '../component/News';
import NewsDetail from '../component/NewsDetail';
class DieuHuongURL extends Component {
    render() {
        return (
            <div>                                                            
                <Route exact path="/home"><Home /></Route>
                <Route exact path="/tin-tuc"><News /></Route>                                 
                <Route exact path="/tin-chi-tiet"><NewsDetail /></Route>                                 
                <Route exact path="/lien-he"><Contact /></Route>                                 
            </div>
        );
    }
}

export default DieuHuongURL;