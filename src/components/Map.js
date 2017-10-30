import React from 'react'

class NewMap extends React.Component {
  componentDidMount() {
    const { name, position } = this.props
    const map = new window.BMap.Map(`map-${name}`)
    const point = new window.BMap.Point(...position)
    map.centerAndZoom(point, 16)
    const marker = new window.BMap.Marker(point)
    map.addOverlay(marker)
    marker.disableDragging()
  }

  render() {
    const { name } = this.props
    return <div id={`map-${name}`} className="map" />
  }
}

NewMap.propTypes = {
  name: React.PropTypes.string,
  position: React.PropTypes.array,
}

export default NewMap
