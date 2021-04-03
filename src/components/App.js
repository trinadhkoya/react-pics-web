import React, {PureComponent} from 'react';
import FM from "../client";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state={images:[],err:null}
    }
    doSomething = searchTerm => {
        FM.get(`/search/photos?query=${searchTerm}`).then(response => {
            this.setState({images:response.data.results})
        }).catch(err => {
            this.setState({err})

        })
    };

    render() {
        const {images}=this.state;
        return (
            <div>
                <SearchBar onSearchTerm={this.doSomething}/>
                <ImageList images={images}/>
            </div>
        );
    }
}

App.propTypes = {};

export default App;
