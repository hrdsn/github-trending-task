import React from 'react';
import Item from '../Item/Item';

class Itemlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filtered: [],
      sortName: false,
      sortStars: false,
      sortForks: false,
    };
  }

  componentDidMount() {
    fetch('https://ghapi.huchen.dev/')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ items: json });
      });
    this.setState({
      filtered: this.props.items,
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.someValue !== prevState.someValue) {
      return { filtered: nextProps.items };
    } else return null;
  }

  sortNameAZ = () => {
    const { items } = this.state;
    items.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );
    this.setState({ items });
    this.setState({ sortName: true });
  };

  sortNameZA = () => {
    const { items } = this.state;
    items.sort((a, b) =>
      a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
    );
    this.setState({ items });
    this.setState({ sortName: false });
  };

  sortStarsAsc = () => {
    const { items } = this.state;
    items.sort((a, b) => a.stars - b.stars);
    this.setState({ items });
    this.setState({ sortStars: true });
  };

  sortStarsDesc = () => {
    const { items } = this.state;
    items.sort((a, b) => b.stars - a.stars);
    this.setState({ items });
    this.setState({ sortStars: false });
  };

  sortForksAsc = () => {
    const { items } = this.state;
    items.sort((a, b) => a.forks - b.forks);
    this.setState({ items });
    this.setState({ sortForks: true });
  };

  sortForksDesc = () => {
    const { items } = this.state;
    items.sort((a, b) => b.forks - a.forks);
    this.setState({ items });
    this.setState({ sortForks: false });
  };

  handleChange = (e) => {
    let currentList = [];
    let newList = [];

    if (e.target.value !== '') {
      currentList = this.state.items;
      newList = currentList.filter((item) => {
        const lc = item.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.state.items;
    }
    this.setState({
      filtered: newList,
    });
  };

  render() {
    const { items, filtered, sortName, sortStars, sortForks } = this.state;

    return (
      <div className="itemlist">
        <div className="itemlist__title">Trending</div>
        <div className="itemlist__head">
          <div className="itemlist__search">
            <input
              type="text"
              onChange={this.handleChange}
              className="itemlist__searchInput"
            />
          </div>
          <div className="itemlist__sorting">
            {!sortName ? (
              <div className="itemlist__sortName" onClick={this.sortNameAZ}>
                Name
              </div>
            ) : (
              <div className="itemlist__sortName" onClick={this.sortNameZA}>
                Name
              </div>
            )}
            {!sortStars ? (
              <div className="itemlist__sortName" onClick={this.sortStarsAsc}>
                Stars
              </div>
            ) : (
              <div className="itemlist__sortName" onClick={this.sortStarsDesc}>
                Stars
              </div>
            )}
            {!sortForks ? (
              <div className="itemlist__sortName" onClick={this.sortForksAsc}>
                Forks
              </div>
            ) : (
              <div className="itemlist__sortName" onClick={this.sortForksDesc}>
                Forks
              </div>
            )}
          </div>
        </div>
        {filtered === undefined ? (
          <div className="itemlist__list">
            {items.map((item, index) => (
              <Item item={item} key={index} />
            ))}
          </div>
        ) : (
          <div className="itemlist__list">
            {filtered.map((item, index) => (
              <Item item={item} key={index} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Itemlist;