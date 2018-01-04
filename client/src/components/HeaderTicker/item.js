import React from "react";
import PropTypes from "prop-types";

class InfoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      change: 0,
      percentChange: 0
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  componentWillMount() {
    const { price, previous } = this.props;

    if (!price || !previous) return;

    const change = price - previous;

    this.setState(() => ({
      change,
      percentChange: change / price * 100
    }));
  }

  componentWillReceiveProps(nextProps) {
    const change = nextProps.price - this.props.price;

    this.setState(() => ({
      change,
      percentChange: change / nextProps.price * 100
    }));
  }

  clickHandler() {
    console.log('click');
    this.props.onClick()
  }

  render() {
    const { price, name } = this.props;
    const { percentChange, change } = this.state;

    return (
      <div className={"widget-ticker-item"} onClick={this.clickHandler}>
        <div className={"widget-ticker-item__head"}>
          <span className={"title"}>{name} / Dollar</span>
          <span className={"last-value"}>{price}</span>
        </div>
        <div className={"widget-ticker-item__body"}>
          <span
            className={`widget-ticker-item__change-direction ${
              percentChange > 0 ? "up" : "down"
            } `}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8">
              <path
                fill="none"
                stroke="currentcolor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m1 6 5-4 5 4"
              />
            </svg>
          </span>

          <span
            className={`widget-ticker-item__change-percent ${
              percentChange > 0 ? "up" : "down"
            } `}
          >
            {percentChange.toFixed(2)}%
          </span>

          <span
            className={`widget-ticker-item__change ${
              change > 0 ? "up" : "down"
            }`}
          >
            {change.toFixed(3)}
          </span>
        </div>
      </div>
    );
  }
}

InfoItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  previous: PropTypes.number.isRequired,
  onClick: PropTypes.function
};

export default InfoItem;
