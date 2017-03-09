import React from 'react';
import ResumeEditor from './ResumeEditor';
import StyleEditor from './StyleEditor';
import Wisecrack from './utils/Wisecrack';

class ResumeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleCode: '',
      resumeContent: '',
      isMarked: false,
      isHighlight: true
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

  showStyleEditor(step) {
    const content = Wisecrack[step] || '';
    const contentLen = content.length;

    return new Promise((f, r) => {
      let pos = 0;
      const intId = setInterval(() => {
        if (pos >= contentLen - 1 || !content[pos]) {
          clearInterval(intId);
          f();
        }
        this.addToStyle(content[pos++]);
      }, this.interval);
    });
  }

  async letsParty() {
    await this.showStyleEditor(0);
    // await this.editRawMarkdown();
    await this.showStyleEditor(1);
  }

  render() {
    const { styleCode, resumeContent, isMarked, isHighlight } = this.state;
    return (
      <div className="resume-container">
        <ResumeEditor content={resumeContent} isMarked={isMarked}/>
        <StyleEditor code={styleCode} isHighlight={isHighlight}/>
        <style>
          {styleCode}
        </style>
      </div>
    );
  }
}

export default ResumeContainer;