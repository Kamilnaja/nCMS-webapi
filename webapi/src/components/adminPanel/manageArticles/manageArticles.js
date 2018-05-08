import React, { Component } from 'react';
import {
    getArticles,
    deleteArticle,
    showEditionForm,
} from './../../../actions/articlesActions';
import EditArticleForm from "./editArticleForm";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReturnButtons from './editOptions';
import { InfoBox } from './../../utilsComponents/infoBox';
import SingleArticle from './../../articlesParts/singleArticle';

class ManageArticles extends Component {

    componentDidMount() {
        getArticles();
    }

    render() {
        if (this.props.articles.isOnEdition) {
            var editForm = <EditArticleForm></EditArticleForm>
        }
        else if (this.props.articles.data) {
            var dataLength = this.props.articles.data.length;

            var articlesList = this.props.articles.data.map((item, key) =>
                <div key={key} className="single-post-wrapper">
                    <SingleArticle item={item}></SingleArticle>
                    <ReturnButtons item={item}></ReturnButtons>
                </div>
            )
        }

        return (


            <div className="articles-edit">
                <h2>
                    Chose an item from {dataLength} articles and edit or delete
                </h2>
                {dataLength === 0 && <InfoBox title="No articles in db" infoType="info-box-info"></InfoBox>}

                {this.props.statusInfo === 'deleteSuccess' && <InfoBox
                    title="Articles deleted" infoType="info-box-info">
                </InfoBox>
                }

                <ul>
                    {articlesList}
                </ul>
                {editForm}
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    articles: state.articles,
    statusInfo: state.articles.statusInfo,
})

const mapDispatchToProps = (dispatch) => ({
    getArticles: (data) => {
        dispatch(getArticles(data))
    },
    deleteArticle: (data) => {
        dispatch(deleteArticle(data))
    },
    editArticle: (data) => {
        dispatch(showEditionForm(data))
    },
})

ManageArticles.propTypes = {
    articles: PropTypes.any.isRequired, // todo - remove any
    statusInfo: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageArticles);