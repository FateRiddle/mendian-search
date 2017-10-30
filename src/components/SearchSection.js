import React from 'react'
import { cities } from '../data'

class SearchSection extends React.Component {
  state = { dropdownHidden: true }

  toggleDropdown = () => {
    this.setState({ dropdownHidden: !this.state.dropdownHidden })
    if (!this.state.dropdownHidden) {
      this.props.selectCity('')
    }
  }

  handleSelectCity(city) {
    this.setState({ dropdownHidden: true })
    this.props.selectCity(city)
  }

  render() {
    const { currentCity } = this.props
    const content = currentCity === '' ? '请选择城市' : currentCity

    return (
      <div className="searchSection">
        <div className="searchbar" onClick={this.toggleDropdown}>
          {content}
        </div>
        {this.state.dropdownHidden ? null : (
          <ul className="dropdown">
            {cities.map((city, index) => (
              <li key={index} onClick={() => this.handleSelectCity(city)}>
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

SearchSection.propTypes = {
  currentCity: React.PropTypes.string.isRequired,
  selectCity: React.PropTypes.func.isRequired,
}

export default SearchSection
