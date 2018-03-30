import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    saveEditedArticle,
    cancelEdit,
} from './../../../actions/articlesActions';

class EditArticleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleTitle: '',
            articleMainContent: '',
            articleSubtitle: '',
            articleAuthor: '',
            statusInfo: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var editPayload = {
            articleTitle: this.articleTitle.value,
            articleSubtitle: this.articleSubtitle.value,
            articleMainContent: this.articleMainContent.value,
        }

        saveEditedArticle(editPayload, this.props.articles.articleEdited);
    }

    findEditedElementIndex(element) {
        return (
            this.props.articles.data.findIndex((x => x._id === this.props.articles.articleEdited))
        )
    }

    render() {
        return (
            <div>
                {this.props.statusInfo}
                <form onSubmit={(e) => this.handleSubmit(e)} >
                    <h2 className="form-title">
                        Edit an article
                    </h2>
                    <div className="input-wrap">
                        <label>Tytuł</label>
                        <input
                            name="articleTitle"
                            type="text"
                            required
                            defaultValue={
                                this.props.articles.data[
                                    this.findEditedElementIndex()
                                ].title
                            }
                            ref={(input) => this.articleTitle = input}
                        >
                        </input>
                    </div>
                    <div className="input-wrap">
                        <label>Podtytuł</label>
                        <input
                            name="articleSubtitle"
                            type="text"
                            defaultValue={
                                this.props.articles.data[
                                    this.findEditedElementIndex()
                                ].subtitle
                            }
                            ref={(input) => this.articleSubtitle = input}
                        ></input>
                    </div>
                    <div className="input-wrap">
                        <label>Treść artykułu</label>

                        <textarea
                            name="articleMainContent"
                            type="text"
                            defaultValue={
                                this.props.articles.data[
                                    this.findEditedElementIndex()
                                ].content
                            }
                            ref={(input) => this.articleMainContent = input}
                            className="article-content"
                        ></textarea>
                    </div>
                    <input type="submit" value="submit"></input>
                    <input type="button" value="cancel" onClick={() => cancelEdit()}></input>
                </form >
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    articles: state.articles,
    statusInfo: state.statusInfo,
})

const mapDispatchToProps = (dispatch) => ({
    cancelEdit: (data) => {
        dispatch(cancelEdit(data))
    },
    saveEditedArticle: (data) => {
        dispatch(saveEditedArticle(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditArticleForm);