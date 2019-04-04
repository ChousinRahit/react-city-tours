import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  state = {
    tourInfo: false
  };

  infoClick = () => {
    this.setState({
      tourInfo: !this.state.tourInfo
    });
  };

  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="imageContainer">
          <img src={img} alt="" />
          <span className="close-btn" onClick={() => removeTour(id)}>
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span onClick={this.infoClick}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.tourInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
