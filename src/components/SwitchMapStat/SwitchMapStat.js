import React, { Component } from 'react';
import './SwitchMapStat.scss';

import {Link} from 'react-router-dom';

class SwitchMapStat extends Component {
  render() {
    return (
      <div className="SwitchMapStat">
        <Link to="/map" className="linktag"><div>Map</div></Link>
        <Link to="/stats" className="linktag"><div>Stat</div></Link>
      </div>
    )
  }
}

export default SwitchMapStat;