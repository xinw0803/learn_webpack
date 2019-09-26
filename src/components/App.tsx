import * as React from "react";
import Container from "./Container";
export interface IProps {}

const withMouse = (Component: any) => {
  return class extends React.Component {
    state = {
      x: 0,
      y: 0
    };

    private handleMouseMove = (e: React.MouseEvent) => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      });
    };

    render() {
      return (
        <div style={{ height: "100%" }} onMouseMove={this.handleMouseMove}>
          <Component {...this.props} mouse={this.state} />
        </div>
      );
    }
  };
};

const Content = (props: any) => {
  const { x, y } = props.mouse;
  return (
    <div>
      <h1>
        鼠标坐标({x}, {y})
      </h1>
    </div>
  );
};

const ComponentWithMouse = withMouse(Content);

export default class App extends React.Component<IProps, {}> {
  // constructor(props: IProps){
  //   super(props);
  //   console.log("App constructor");
  // }

  // componentDidMount(){
  //   console.log("App componentDidMount");
  // }

  // componentDidUpdate(){
  //   console.log("App componentDidUpdate");
  // }

  public render() {
    return (
      <Container>
        <div>内容</div>
        <ComponentWithMouse />
      </Container>
    );
  }
}
