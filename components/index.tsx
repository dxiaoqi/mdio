import * as React from 'react';
export interface IHomePageState {
    name: string;
  }
  
  export interface IHomePageProps {
    home: string;
  }
  
  export class HomeComponent extends React.Component<IHomePageProps, IHomePageState> {
    constructor(props: IHomePageProps) {
      super(props);
      this.state = {
        name: "",
      };
    }
  
    public setName = () => {
      this.setState({
        name: "icepy",
      });
    }
    
    public render(){
      const { name } = this.state;
      const { home } = this.props;
      return (
        <div>
           <div onClick={this.setName}> set name </div>
           <div>{name} {home}</div>
        </div>
      )
    }
  }