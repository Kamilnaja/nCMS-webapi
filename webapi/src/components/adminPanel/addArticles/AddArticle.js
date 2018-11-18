import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddNewArticle } from './../../../actions/articlesActions';
import { InfoBox } from '../../utilsComponents/InfoBox';
import Editor from '../../editor/Editor';

class AddArticles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentText: '',
        }
    }

    handleSubmit(e) {
        var submitPayload = {
            articleTitle: this.articleTitle.value,
            articleSubtitle: this.articleSubtitle.value,
            articleMainContent: this.state.currentText,
            articleAuthor: this.props.user
        }

        e.preventDefault();
        AddNewArticle(submitPayload);
    }

    handleChange(e) {
        this.setState({
            currentText: e.target.value
        })
    }

    render() {
        if (this.props.statusInfo === "success") {
            var info = <InfoBox title="You have successfully added new article" />
        }
        return (
            <div className="form-fullwidth">
                {info && <div>{info}</div>}

                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <h2 className="form-title">
                        Add new article
                    </h2>

                    <div className="input-wrap">
                        <label>Tytuł</label>
                        <input
                            name="articleTitle"
                            type="text"
                            required
                            ref={(input) => this.articleTitle = input}
                        >
                        </input>
                    </div>

                    <div className="input-wrap">
                        <label>Podtytuł</label>
                        <input
                            name="articleSubtitle"
                            type="text"
                            ref={(input) => this.articleSubtitle = input}
                        ></input>
                    </div>

                    <div className="input-wrap">
                        <label>Treść artykułu</label>
                        <Editor
                            name="articleMainContent"
                            handleChange={this.handleChange.bind(this)}
                            textLength={this.state.currentText.length}
                        ></Editor>
                    </div>

                    <input type="submit" value="submit" className="btn btn-default"></input>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    statusInfo: state.articles.statusInfo,
    author: state.auth.userName
})

const mapDispatchToProps = (dispatch) => ({
    saveArticle: (data) => {
        dispatch(AddNewArticle(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddArticles);