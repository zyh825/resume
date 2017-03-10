import Prism from 'prismjs';
import React from 'react';

import getCustomCSSHighLightMatchRules from './utils/getCustomCSSHighLightMatchRules';

class StyleEditor extends React.PureComponent {
  static propTypes = {
    isHighlight: React.PropTypes.bool,
    code: React.PropTypes.string,
    onCodeContentChange: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = { edit: false };
  }

  componentDidUpdate() {
    const el = this.editor;
    // stay scrolled to the bottom.
    el.scrollTop = el.scrollHeight;
  }

  startEdit = () => this.setState({ edit: true });

  saveContent = () => {
    this.props.onCodeContentChange(this.editor.innerText);
    this.setState({ edit: false });
  };

  render() {
    const { edit } = this.state;
    const { code, isHighlight } = this.props;
    const content = isHighlight && (!edit) ? Prism.highlight(code, getCustomCSSHighLightMatchRules()) : code;
    const mode = isHighlight && (!edit) ? '阅读模式' : '编辑模式';
    return (
      <div data-mode={mode} className="edit-mode">
        <pre
          className="style-editor"
          ref={c => this.editor = c}
          dangerouslySetInnerHTML={{ __html: content }}
          contentEditable
          onFocus={this.startEdit}
          onBlur={this.saveContent}
        >
        </pre>
      </div>
    );
  }
}

export default StyleEditor;