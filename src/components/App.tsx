import * as React from "react";
import Container from "./Container";
export interface IProps{ }

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
      </Container>
    )
  }
}