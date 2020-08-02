import React, {Component} from 'react'
import DishDetail from "./DishDetailComponent"

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            dishes: []
        }
    }

    componentDidMount() {
        fetch("http://starlord.hackerearth.com/recipe")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                error: null,
                isLoaded: true,
                dishes: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

      render() {
          const {error, isLoaded, dishes} = this.state;
          if (error){
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          }
          else {
            return (
                <div style={{margin: '80px 0px'}}>
                    <DishDetail dishes={dishes} />
                </div>
            );
          }
      }
}

export default Main