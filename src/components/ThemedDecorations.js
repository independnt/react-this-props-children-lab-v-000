import React from 'react'

class ThemedDecorations extends React.Component{
  render(){
    let childrenWithDiv = React.Children.map(this.props.children, child => React.cloneElement(child, {
      className: this.props.theme
    }))
    return(
      <div>
      {childrenWithDiv}
      </div>
    )
  }
}

export default ThemedDecorations;
