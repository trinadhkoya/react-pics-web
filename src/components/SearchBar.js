import React from 'react';

class SearchBar extends React.Component {
    state = {searchTerm: ''}

    onChangeInput = e => {
        this.setState({searchTerm: e.target.value})
    };

    onFormSubmit=e=>{
        e.preventDefault();
        this.props.onSearchTerm(this.state.searchTerm)
    }

    render() {
        const {searchTerm} = this.state;
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type={'text'} value={searchTerm} onChange={this.onChangeInput}/>
                </form>
            </div>
        );
    }
}

SearchBar.propTypes = {};

export default SearchBar;
