import marked from 'marked';
import React from 'react';

class ResumeEditor extends React.PureComponent {
  static propTypes = {
    isMarked: React.PropTypes.bool,
    content: React.PropTypes.string,
  };

  render() {
    const { content, isMarked } = this.props;
    return (
      <pre
        id="resume-editor"
        dangerouslySetInnerHTML={{ __html: isMarked ? marked(content) : content }}
      >
      </pre>
    );
  }
}

export default ResumeEditor;