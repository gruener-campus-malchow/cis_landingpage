// this kind of works too for old browsers, but doesn't really feel right...
/*document.addEventListener('DOMContentLoaded', function () {
  let items = document.getElementsByTagName('cisui');
  for (item of items) {
    let containerNode = document.createElement('LABEL');
    let inputNode = document.createElement('INPUT');
    let labelNode = document.createElement('SPAN');
    containerNode.classList.add(`cisui-${item.getAttribute('type')}`);
    labelNode.classList.add('label');

    for (attr of item.attributes) {
      inputNode.setAttribute(attr.name, attr.value);
    }
    labelNode.innerText = item.innerText;

    containerNode.appendChild(inputNode);
    containerNode.appendChild(labelNode);
    item.parentNode.insertBefore(containerNode, item);
    item.style.display = 'none';
  }
});*/

class CISUI extends HTMLElement {

  constructor() {
    super();

    //let shadow = this.attachShadow({mode: 'open'});
    let div = document.createElement('DIV');
    div.innerText = this.getAttribute('type');
    //shadow.appendChild(div);
    console.debug(this.getAttribute('type'));
  }

  connectedCallback() {
    this.elements = {};

    this.elements.container = document.createElement('LABEL');
    this.elements.container.classList.add(`cisui-${this.getAttribute('type')}`);

    this.elements.input = document.createElement('INPUT');
    this.elements.input.type = this.getAttribute('type');
    this.elements.input.name = this.getAttribute('name');

    this.elements.label = document.createElement('SPAN');
    this.elements.label.innerText = this.innerText;
    this.elements.label.classList.add('label');

    this.innerHTML = '';
    this.elements.container.appendChild(this.elements.input);
    this.elements.container.appendChild(this.elements.label);
    this.appendChild(this.elements.container);
  }
}

customElements.define('cis-ui', CISUI);
