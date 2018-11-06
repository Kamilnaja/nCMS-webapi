import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSettings } from '../../../actions/settingActions';
import { InfoBox } from '../../utilsComponents/InfoBox';

class ChangeSettings extends Component {

    handleSubmit(e) {
        var submitPayload = {
            title: this.title.value,
            subtitle: this.subtitle.value,
            footer: this.footer.value
        }
        e.preventDefault();
        setSettings(submitPayload);
    }

    render() {
        if (this.props.statusInfo === "success") {
            var info = <InfoBox title="You have successfully changed the settings" />
        }
        return (
            <div>
                <div>{info}</div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <h2 className="form-title">
                        Change the website title
                        </h2>
                    <div>
                        <div>
                            <div className="input-wrap">
                                <label>New website name</label>
                                <input
                                    type="text"
                                    required
                                    ref={(input) => this.title = input}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="input-wrap">
                                <label>New website slogan</label>
                                <input
                                    type="text"
                                    required
                                    ref={(input) => this.subtitle = input}
                                />
                            </div>
                            <div className="input-wrap">
                                <label>Text for footer</label>
                                <input
                                    type="text"
                                    required
                                    ref={(input) => this.footer = input}
                                />
                            </div>
                        </div>
                        <input type="submit" value="Save" className="btn btn-default" />
                    </div>
                </form>
            </div>
        )
    };
}

const mapStateToProps = (state) => ({
    settings: state.settings,
    statusInfo: state.settings.statusInfo
})

const mapDispatchToProps = (dispatch) => ({
    setSettings: (data) => {
        dispatch(setSettings(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeSettings)