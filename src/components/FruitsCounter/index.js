import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {Mango: 0, Banana: 0}

  OnMango = () => {
    this.setState(prevState => ({Mango: prevState.Mango + 1}))
  }

  OnBanana = () => {
    this.setState(prevState => ({Banana: prevState.Banana + 1}))
  }

  render() {
    const {Mango, Banana} = this.state
    return (
      <div className="FruitsCounterBgContainer">
        <div className="FruitsCounterContainer">
          <h1 className="title">
            Bob ate <span className="FruitCount">{Mango}</span> mangoes
            <span className="FruitCount"> {Banana}</span> bananas
          </h1>
          <div className="FruitsContainer">
            <div className="OneFruitContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="Image"
              />
              <button className="button" onClick={this.OnMango}>
                Eat Mango
              </button>
            </div>
            <div className="OneFruitContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="Image"
              />
              <button className="button" onClick={this.OnBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
