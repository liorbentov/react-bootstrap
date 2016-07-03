import classNames from 'classnames';
import React from 'react';

import { getClassSet } from './utils/bootstrapUtils';

import Button from './Button';

const ButtonToolbar = React.createClass({

  propTypes: {
    bsSize: Button.propTypes.bsSize
  },

  getDefaultProps() {
    return {
      bsClass: 'btn-toolbar'
    };
  },

  render() {
    let classes = getClassSet(this.props);
    const { bsClass, bsSize, className, ...rest } = this.props;

    return (
      <div
        {...rest}
        role="toolbar"
        className={classNames(this.props.className, classes)}
      >
        {this.props.children}
      </div>
    );
  }
});

export default ButtonToolbar;
