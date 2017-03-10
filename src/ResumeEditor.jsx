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
      <pre className="resume-editor">
        <div dangerouslySetInnerHTML={{ __html: isMarked ? marked(content) : content }}>
        </div>
      </pre>
    );
  }
}

export default ResumeEditor;