import React, {Component} from 'react'
import DishDetail from "./DishDetailComponent"
import {DISHES} from '../shared/dishes'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dishes: DISHES
        }
    }

      render() {
          const {dishes} = this.state;
            return (
                <div style={{margin: '80px 0px'}}>
                    <DishDetail dishes={dishes} />
                </div>
            );
      }
}

export default Main