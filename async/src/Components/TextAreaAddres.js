import React from 'react';

const refreshTimeout = 20000

class Research {
  constructor() {
    this.mainTitle = undefined
    this.interval = undefined
    this.depth = undefined
  }
}
export class TextAreaAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', depth: 0, interval: null, mainTitle: '', researches: [] };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleDepthChange = this.handleDepthChange.bind(this)
    this.onPlay = this.onPlay.bind(this)
    this.clear = this.clear.bind(this)
  }

  handleValueChange(event) {
    this.setState({ value: event.target.value });
  }

  handleDepthChange(event) {
    this.setState({ depth: event.target.value });
  }


  getPageTitleFromUrl(url) {
    url.trim()
    let urlArray = url.split('/')
    return urlArray[urlArray.length - 1]
  }

  onPlay() {
    let research = new Research()
    this.setState((state) => {
      research.mainTitle = this.getPageTitleFromUrl(state.value)
      research.depth = state.depth
      research.interval = setInterval(() => {
        this.startResearch(research)
      }, refreshTimeout)

      return {researches : [...state.researches, research]}
    }, () => this.startResearch(research))

  }


startResearch(research) {
    this.props.handleSubmitAsync(research.mainTitle, 0, research.depth)
}

clear(){
  window.location.reload(false);

}

render() {
  return (
    <div>
      <label>
        Address:
            <input type="text" value={this.state.value} onChange={this.handleValueChange} />
      </label>
      <label>
        Depth:
            <input size="3" type="number" onChange={this.handleDepthChange} />
      </label>
      <button type="submit" onClick={this.onPlay}>Play</button>
      <button onClick={this.clear}>Clear</button>
    </div>
  )
}
}