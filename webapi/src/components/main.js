import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles } from './../actions/articlesActions';
import { DataFetcher } from './../utils/DataFetcher';
import { localUrl } from './../utils/AppConfig';

class Main extends Component {

    componentDidMount() {
        let secondFetcher = new DataFetcher(`${localUrl}/api/posts`)
        this.props.getArticles(secondFetcher.getDataFromApi());
    }

    render() {
        if (this.props.articles.data) {
            var data = this.props.articles.data.map((item) =>
                <li key={item._id} className="single-post-wrapper">
                    <h2 className="single-post-title">{item.title}</h2>
                    <p className="single-post-body">{item.content}</p>
                    <h3>{item.author}</h3>
                    <hr />
                </li >
            )
        }

        return (
            <ul>
                {data}
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArticles: (data) => {
            dispatch(getArticles(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);