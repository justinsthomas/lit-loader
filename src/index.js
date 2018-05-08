import {html} from 'lit-html';

export default function (content) {
  this.cacheable && this.cacheable();
  this.value = content;
  // return content;
  return html`${content}`;
}
