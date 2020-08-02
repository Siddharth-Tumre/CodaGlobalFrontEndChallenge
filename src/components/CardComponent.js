import React from 'react'
import "./CardStyles.scss"

const CardComponent = ({dish}) => {
    return (
        <article className="card">
          <CardHeader image={dish.image} label={dish.label}/>
          <CardBody title={dish.name} text={dish.description}/>
        </article>
    )
}

class CardHeader extends React.Component {
    render() {
      const {label, image } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
          width: 'auto'
      };
      return (
        <header style={style} id={image} className="card-header">
          <h4 className="card-header--title">{label}</h4>
        </header>
      )
    }
  }
  
  class Button extends React.Component {
    render() {
      return (
        <button className="button button-primary">Find out more</button>
      )
    }
  }
  
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          
          <h2>{this.props.title}</h2>
          
          <p className="body-content">{this.props.text}</p>
          
          <Button />
        </div>
      )
    }
  }


export default CardComponent