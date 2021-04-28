import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import * as action from '../../actions/actions';

class ImageGrid extends Component {
    componentDidMount() {
        this.props.onImageLoad();
    }

    render() {
        const { images, err } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                    <a
                        onClick={this.props.onImageLoad}
                        style={{ cursor: 'pointer' }}
                    >
                        Load Images
                    </a>
                </section>
                {err && <div className="error">{JSON.stringify(err)}</div>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        load: state.load,
        images: state.image,
        err: state.err,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onImageLoad: () => dispatch(action.imagesLoad()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
