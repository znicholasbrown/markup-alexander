import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid, Row, Col } from 'react-bootstrap';
var marked = require('marked');

class MarkDown extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      value: 'Eloisa to Abelard\n=======\n\nby Alexender Pope\n-----------\n \n### 	&copy;1717\n \nHow happy is the blameless vestal\'s lot! \nThe world forgetting---by the world forgot.\n\nEternal sunshine of the   \nspotless mind!\n\nEach *pray\'r accepted*, each **wish resign\'d**, \n`Labour`, and ~~rest~~ .\n\nThat equal periods keep:\n\n  * Obedient\n  * Slumbers\n  * Wake\n  * Weep\n\nNumbered Lists:\n\n  1. Desires\n  2. Composed\n  3. Affections\n  4. Ev\'n\n\nTears that delight,\nAnd sighs that waft to heav\'n\n\n *[Alexander Pope](https://www.poetryfoundation.org/poems/44892/eloisa-to-abelard)*'
    };

  }
  handleChange (event) {
    this.setState({output: {__html: marked(event.target.value)}});
  }
  componentWillMount () {
    this.setState({output: {__html: marked(this.state.value)}});
  }
  render() {
    return (
      <div>
        <div className="title"><h1>Markdown Previewer</h1></div>
        <Grid className="main">
          <Row>
            <Col sm={12} lg={6} id="inputCode">
              <textarea rows="30" disabled={false} defaultValue={this.state.value} onChange={this.handleChange.bind(this)}></textarea>
            </Col>
            <Col sm={12} lg={6} id="outputCode">
              <div dangerouslySetInnerHTML={this.state.output}></div>
            </Col>
          </Row>
        </Grid>
        <div className="copyright">
          <p>
            &#169;2017
            <a href="https://znicholasbrown.github.io" rel="noopener noreferrer" target="_blank"> Z Nicholas Brown</a>
          </p>
        </div>
      </div>
    );
  }
};

export default MarkDown;
