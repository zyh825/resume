import React from 'react';
import ResumeEditor from './ResumeEditor';
import StyleEditor from './StyleEditor';

import ResumeContent from './utils/resumeContnet';
import Wisecrack from './utils/Wisecrack';

// todo: reduce window flash
class ResumeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleCode: '',
      resumeContent: '',
      isMarked: false,
      isHighlight: true,
      active: 'style'
    };
    this.interval = 0;
  }

  componentDidMount() {
    this.letsParty().then(() => {
      console.log('It seems already done!!!');
    });
  }

  addToStyle(char) {
    this.setState({ styleCode: this.state.styleCode + char });
  }

  addToContent(char) {
    this.setState({ resumeContent: this.state.resumeContent + char });
  }

  showStyleEditor(step) {
    const content = Wisecrack[step] || '';
    const contentLen = content.length;
    return new Promise((f, r) => {
      let pos = 0;
      const intId = setInterval(() => {
        const char = content[pos];
        if (pos >= contentLen - 1 || !char) {
          clearInterval(intId);
          f();
        }
        this.addToStyle(char);
        pos++;
      }, this.interval);
    });
  }

  editRawMarkdown() {
    const content = ResumeContent || '';
    const contentLen = content.length;

    return new Promise((f, r) => {
      let pos = 0;
      const intId = setInterval(() => {
        const char = content[pos];
        if (pos >= contentLen - 1 || !char) {
          clearInterval(intId);
          f();
        }
        this.addToContent(char);
        pos++;
      }, this.interval);
    });
  }

  setMarked() {
    this.setState({ isMarked: true });
  }

  purify = html => html.split('').filter(char => char !== '\n').join('');

  async letsParty() {
    // thanks god, no chain any more
    try {
      await this.showStyleEditor(0);  // initial global style
      await this.showStyleEditor(1);  // customized style-editor
      await this.showStyleEditor(2);  // add monokai theme
      await this.showStyleEditor(3);  // customized resume-editor
      await this.editRawMarkdown();
      await this.setMarked();
    } catch (err) {
      console.error(`oops, is seems something get wrong here!`, err.message);
    }
  }

  replaceCode = styleCode => this.setState({ styleCode });

  componentDidUpdate() {
    const { styleCode } = this.state;
    const el = document.getElementsByTagName('style')[1];
    // some browser plugins will cover those styles in body, so...
    if (el) {
      el.innerText = this.purify(styleCode);  // minimize
    }
  }

  activeResume = () => this.setState({ active: 'resume' });

  activeStyle = () => this.setState({ active: 'style' });

  render() {
    const { styleCode, resumeContent, isMarked, isHighlight, active } = this.state;
    return (
      <div className="resume-container">
        <div onClick={this.activeResume} className={`${active === 'resume' ? 'active' : ''}`}>
          <ResumeEditor
            content={resumeContent}
            isMarked={isMarked}
          />
        </div>
        <div onClick={this.activeStyle} className={`${active === 'style' ? 'active' : ''}`}>
          <StyleEditor
            code={styleCode}
            isHighlight={isHighlight}
            onCodeContentChange={this.replaceCode}
          />
        </div>
      </div>
    );
  }
}

export default ResumeContainer;