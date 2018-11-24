import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Modal, Button } from "react-bootstrap";

import './videoCard.scss';

class VideoCard extends Component {
    constructor(props) {
        super(props);
        this.onVideoCardClick = this.onVideoCardClick.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            showModal: false
        }
    }

    onVideoCardClick(){
        this.setState({
            showModal: true
        })
    }

    handleClose() {
        this.setState({
            showModal: false
        })
    }

  render() {
    const { details } = this.props;
    const { showModal } = this.state;

    return (
        <div className="video-card-wrapper" >

            <Modal show={showModal} size={"lg"} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{details.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe width="560" height="315" 
                src={details.videoUrl} 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
                </Modal.Body>
            </Modal>
            <div className="video-thumbnail-wrapper" onClick={this.onVideoCardClick}>
                <img className="video-thumbnail" src={details.thumbnailUrl} />
            </div>

            <div className="video-meta-data">
                <div className="title">
                    {details.title}
                </div>
                <div className="description">
                    {details.description}
                </div>
            </div>
        </div>

    );
  }
}

VideoCard.propTypes = {
    details: PropTypes.object
}

VideoCard.defaultProps = {
    details: {
        title: "Video Title",
        description: "This is the description of the video",
        videoUrl: "https://www.youtube.com/embed/NybHckSEQBI?autoplay=1",
        thumbnailUrl: "https://img.youtube.com/vi/YtjpOwg0824/maxresdefault.jpg",
        tags : ["primary1", "primary2"]
    }
}

export default VideoCard;
