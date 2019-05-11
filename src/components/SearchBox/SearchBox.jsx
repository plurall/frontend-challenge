import React, { Component } from 'react'
import { Text } from 'plurall-ui'
import { func, string, arrayOf, shape } from 'prop-types'
import styles from './SearchBox.module.css'

class SearchBox extends Component {
  state = { value: '', inputClicked: false }

  handleClick = id => () => {
    const { showArtist } = this.props
    showArtist(id)
  }

  handleOnFocus = () => {
    this.setState({ inputClicked: true })
  }

  handleOnBlur = () => {
    setTimeout(() => this.setState({ inputClicked: false }), 150)
  }

  handleChange = ({ target: { value } }) => {
    const { onChange } = this.props
    if (onChange) {
      onChange(value)
    }

    this.setState({ value })
  }

  renderSuggestions = () => {
    const { suggestions } = this.props
    const { value } = this.state
    const {
      'not-found': notFound,
      'suggestion-wrapper': suggestionWrapper,
      item,
      'small-image': smallImage,
    } = styles

    if (suggestions.length && value.length > 4) {
      return (
        <div className={suggestionWrapper}>
          {suggestions.map(suggestion => (
            <div
              onClick={this.handleClick(suggestion.id)}
              className={item}
              key={suggestion.id}
            >
              {suggestion.image && (
                <img
                  className={smallImage}
                  src={suggestion.image}
                  alt={suggestion.name}
                />
              )}
              <span>{suggestion.name}</span>
            </div>
          ))}
        </div>
      )
    }

    return (
      <div className={notFound}>
        <Text element="span">Nenhum resultado encontrado!</Text>
      </div>
    )
  }

  render() {
    const { placeholder } = this.props
    const { inputClicked, value } = this.state

    const {
      'suggestion-output': suggestionOutput,
      'search-box-wrapper': wrapper,
      'search-input': input,
    } = styles

    return (
      <div className={wrapper}>
        <input
          className={input}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          onChange={this.handleChange}
          placeholder={placeholder}
          value={value}
        />
        {inputClicked && (
          <div className={suggestionOutput}>{this.renderSuggestions()}</div>
        )}
      </div>
    )
  }
}

SearchBox.propTypes = {
  onChange: func,
  placeholder: string,
  suggestions: arrayOf(shape({
    image: string,
    name: string,
    id: string,
  })),
  showArtist: func,
}

SearchBox.defaultProps = {
  showArtist: () => null,
}

export default SearchBox
