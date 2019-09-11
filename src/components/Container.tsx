import * as React from "react";
export interface IProps {
  initialText?: string;
}
export interface IState {
  text: string | undefined;
  prevPropText: string | undefined;
}

export default class Container extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      text: props.initialText,
      prevPropText: props.initialText
    };
  }

  static defaultProps = {
    initialText: "初始值"
  };

  static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    console.log(
      nextProps.initialText,
      prevState.prevPropText,
      "Container getDerivedStateFromProps"
    );
    if ("initialText" in nextProps) {
      if (nextProps.initialText !== prevState.prevPropText) {
        return {
          text: nextProps.initialText,
          prevPropText: nextProps.initialText
        };
      }
    }
    return null;
  }

  // getSnapshotBeforeUpdate(prevProps: IProps, prevState: IState){
  //   console.log(prevProps, prevState, "Container getSnapshotBeforeUpdate")
  //   return "snapsot"
  // }

  // componentDidMount() {
  //   console.log("Container componentDidMount");
  // }

  // componentDidUpdate(prevProps: IProps, prevState: IState, snapsot: any) {
  //   console.log(snapsot, "Container componentDidUpdate");
  // }

  handleClick = () => {
    this.setState({
      text: "改变文字"
    });
  };

  render() {
    console.log("Container render");
    const { text } = this.state;
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>Container按钮</button>
        {text}
        {this.props.children}
      </React.Fragment>
    );
  }
}
