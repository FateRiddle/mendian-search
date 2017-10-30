import React from 'react'

const Top = ({ currentCity }) => (
  currentCity === ''?
    <img className="top" src={require('../image/background/top.jpg')} alt=""/>:null
)

Top.propTypes = {
  currentCity: React.PropTypes.string,
}

export default Top
