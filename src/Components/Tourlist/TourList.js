import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData
    // delete: 0
  };

  removeTour = id => {
    // const { tours } = this.state.tours;

    const selectedTour = this.state.tours.filter(tour => {
      return tour.id === id;
    });

    const checkDelete = window.confirm(
      `Do you really want'a delete ${selectedTour[0].name} from the page`
    );

    // this.setState({
    //   delete: ff
    // });
    // console.log(ff);

    if (checkDelete) {
      const sortedTours = this.state.tours.filter(tour => {
        return tour.id !== id;
      });
      this.setState({
        tours: sortedTours
      });
    }
  };

  render() {
    const { tours } = this.state;

    return (
      <section className="tourList">
        {tours.map(tour => {
          return (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
          );
        })}
      </section>
    );
  }
}
