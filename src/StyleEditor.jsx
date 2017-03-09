import Prism from 'prismjs';
import React from 'react';

import getCustomCSSRules from './utils/getCustomCSSRules';

class StyleEditor extends React.PureComponent {
  static propTypes = {
    isHighlight: React.PropTypes.bool,
    code: React.PropTypes.string,
  };

  render() {
    const { code, isHighlight } = this.props;
    return (
      <pre
        id="style-editor"
        dangerouslySetInnerHTML={{ __html: isHighlight ? Prism.highlight(code, getCustomCSSRules()) : code }}
      >
      </pre>
    );
  }
}

export default StyleEditor;