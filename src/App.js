import React from 'react'
import './App.css';
import Top from './components/Top'
import Display from './components/Display'
import SearchSection from './components/SearchSection'
import { getMendianFromCity } from './data'

class App extends React.Component {

  state = { city:'' }

  selectCity = city => this.setState({city})

  render() {
    const mendianIds = getMendianFromCity(this.state.city)
    console.log(mendianIds);
    return <div className="App">
      <Top currentCity={this.state.city} />
      <SearchSection selectCity={this.selectCity} currentCity={this.state.city} />
      {
        this.state.city === ''?
        <img className='bigMap' src={require('./image/background/map.jpg')} alt=""/>:
        null
      }
      <div className='shopPage'>
      {
        mendianIds === []?
        <div className='empty-page'>没有搜索到门店╮(╯▽╰)╭</div>:
        mendianIds.map(id => <Display key={id} id={id} />)
      }
      </div>

    </div>
  }
}

export default App;
