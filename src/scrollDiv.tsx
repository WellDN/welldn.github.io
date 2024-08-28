import React, { Component, createRef } from 'react';

interface ScrollToDivProps {
  buttonText: string;
  targetId: string;
  buttonClass: string;
  targetRef: React.RefObject<HTMLDivElement>
}

interface ScrollToDivState {}

class ScrollToDiv extends Component<ScrollToDivProps, ScrollToDivState> {
  private targetRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
    'fullscreen-2616': createRef<HTMLDivElement>(),
    'fullscreen-2617': createRef<HTMLDivElement>(),
    'fullscreen-scroll': createRef<HTMLDivElement>(),
  };

  handleScroll = () => {
    const { targetId } = this.props;
    const targetRef = this.targetRefs[targetId];
    
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
      return (
          <div>
          <button className={`button-default-style ${this.props.buttonClass}`} onClick={this.handleScroll}>
          <span className="custom-span-style">{this.props.buttonText}</span>
          </button>

          <div style={{ height: '1500px', background: '#f0f0f0' }}> {/* Spacer to make scrolling necessary */}
          {/* Target divs */}
          <div
          ref={this.targetRefs['fullscreen-2616']}
          id="fullscreen-2616"
          style={{
              marginTop: '923px',
              padding: '20px',
              backgroundColor: '#e0e0e0',
              border: '1px solid #ccc',
          }}
          >
          {/*       Fullscreen Target Div */}
          </div>
          <div
          ref={this.targetRefs['fullscreen-2617']}
          id="fullscreen-2617"
          style={{
              marginTop: '923px',
              padding: '20px',
              backgroundColor: '#d0d0d0',
              border: '1px solid #bbb',
          }}
          >
          {/* Another Target Div */}
          </div>
          <div
          ref={this.targetRefs['fullscreen-scroll']}
          id="fullscreen-scroll"
          style={{
              marginTop: '923px',
              padding: '20px',
              backgroundColor: '#d0d0d0',
              border: '1px solid #bbb',
          }}
          >
          {/* Another Target Div */}
          </div>
          </div>
          </div>
      );
  }
}

export default ScrollToDiv;

