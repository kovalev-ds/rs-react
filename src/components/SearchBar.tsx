import React from 'react';

interface SearchBarProps {
  onSearch: (value: string) => void;
}

interface SearchBarState {
  value: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = { value: '' };
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
