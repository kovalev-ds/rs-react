import React from 'react';

const SEARCH_KEY = 'search-key-value';

interface SearchBarProps {
  onSearch: (value: string) => void;
}

interface SearchBarState {
  value: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = { value: localStorage.getItem(SEARCH_KEY) ?? '' };
  }

  componentWillUnmount() {
    localStorage.setItem(SEARCH_KEY, this.state.value);
  }

  componentDidUpdate(): void {
    this.props.onSearch(this.state.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Quick search"
          value={this.state.value}
          onChange={(e) => this.setState((state) => ({ ...state, value: e.target.value }))}
        />
      </div>
    );
  }
}

export default SearchBar;
