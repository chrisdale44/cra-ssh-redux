import React, { Component } from "react";
import Filters from "./Filters";
import Accordion from "../Accordion";
import Tags from "./Tags";

class Refinements extends Component {
  render() {
    return (
      <div>
        <Accordion label={"Filters"}>
          <Filters
            filterOptions={this.filterOptions}
            updateFilters={this.updateFilters}
          />
        </Accordion>
        <Accordion label={"Tags"}>
          <Tags />
        </Accordion>
      </div>
    );
  }
}

export default Refinements;
