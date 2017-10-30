import React from 'react'
import { mendians } from '../data'
import Map from './Map'

class Display extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showMap:false}
  }

  render() {
    const { name,ename,address,openTime,tel,position } = mendians.byId[this.props.id]
    return <div className='shopDisplay'>
      <h2>{name}</h2>
      <img src={require(`../image/mendian/${ename}.jpg`)} alt='mengdian' />
      <ul>
        <li><p>门店地址：</p><p>{address}</p></li>
        <li>营业时间：{openTime}</li>
        <li><a href={`tel:${tel}`}>联系电话：<span>{tel}</span></a></li>
        <li><span className='daohang' onClick={()=>{
          this.setState({showMap:!this.state.showMap})
        }}>导航</span></li>
      </ul>
      <div>
        {
          this.state.showMap?<Map name={ename} position={position} />:
          null
        }
      </div>
    </div>
  }
}

Display.propTypes = {
  id: React.PropTypes.string,
}

export default Display
