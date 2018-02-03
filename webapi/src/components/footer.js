import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
class Footer extends Component {
    componentDidMount() {
        this.props.fetchData('http://localhost:8080/api/settings')
    }
    render() {
        if (this.props.hasErrored) {
            return <p>Nie można załadować stopki</p>
        }
        if (this.props.isLoading) {
            return <p>Ładowanie stopki</p>
        }
        return (
            <footer>
                <p>
                    {
                        this.props.items.map((item) => (
                            <div key={item._id}>{item.footer}</div>
                        ))
                    }
                    Website footer
                </p>
            </footer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);