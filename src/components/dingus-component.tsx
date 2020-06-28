import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'dingus-component',
})

export class FirstComponent {
  @Prop() name: string

  render(){
    return (
      <p>{this.name} is a dingus</p>
    );
  }
}