import { LitElement, html } from '@polymer/lit-element';
import { until } from 'lit-html/lib/until';

class UntilDirective extends LitElement {

  static get properties() {
    return {
      messageRequest: String,
    };
  }

  constructor() {
    super();
    this._fetchMessage();
  }

  _render({ messageRequest }) {
    return html`
      <div>
        <!--
          When rendering promises, it can be useful to display placeholder content during loading.
          You can use the until directive for this. The first paramter should be the promise to render,
          the second parameter is the template that is rendered during loading.
        -->
        ${until(messageRequest, html`Loading...`)}

        <button on-click="${() => this._fetchMessage()}">
          Fetch message
        </button>
      </div>
    `;
  }

  // Fake fetching something from an API, returns after 2sec
  _fetchMessage() {
    this.messageRequest = new Promise((resolve) => {
      setTimeout(() => resolve('Hello world'), 2000);
    });
  }

}

customElements.define('x-until-directive', UntilDirective);