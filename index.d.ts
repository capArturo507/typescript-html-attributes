type BaseAttribute = string | undefined;

type BooleanAttribute = "" | Boolean;

export type HTMLGlobalAttributes = {
  accesskey: BaseAttribute;
  autocapitalize:
    | "off"
    | "none"
    | "on"
    | "sentences"
    | "words"
    | "characters"
    | undefined;
  autofocus: BooleanAttribute;
  class: BaseAttribute;
  contenteditable: BooleanAttribute;
  [k: `data-${string}`]: BaseAttribute;
  dir: "ltr" | "rtl" | "auto";
  draggable: BooleanAttribute;
  enterkeyhint:
    | "enter"
    | "done"
    | "go"
    | "next"
    | "previous"
    | "search"
    | "send";
  exportparts: BaseAttribute;
  hidden: BooleanAttribute;
  id: BaseAttribute;
  inert: BooleanAttribute;
  inputmode:
    | "none"
    | "text"
    | "decimal"
    | "numeric"
    | "tel"
    | "search"
    | "email"
    | "url";
  is: BaseAttribute;
  itemid: BaseAttribute;
  itemprop: BaseAttribute;
  itemref: BaseAttribute;
  itemscope: BooleanAttribute;
  itemtype: BaseAttribute;
  lang: BaseAttribute;
  nonce: BaseAttribute;
  part: BaseAttribute;
  slot: BaseAttribute;
  spellcheck: BooleanAttribute;
  style: BaseAttribute;
  tabindex: number;
  title: BaseAttribute;
  translate: "" | "yes" | "no";
  virtualkeyboardpolicy: "" | "auto" | "manual";
  role: BaseAttribute;
  [k: `aria-${string}`]: BaseAttribute;
  onabortonautocomplete: BaseAttribute;
  onautocompleteerror: BaseAttribute;
  onblur: BaseAttribute;
  oncancel: BaseAttribute;
  oncanplay: BaseAttribute;
  oncanplaythrough: BaseAttribute;
  onchange: BaseAttribute;
  onclick: BaseAttribute;
  onclose: BaseAttribute;
  oncontextmenu: BaseAttribute;
  oncuechange: BaseAttribute;
  ondblclick: BaseAttribute;
  ondrag: BaseAttribute;
  ondragend: BaseAttribute;
  ondragenter: BaseAttribute;
  ondragleave: BaseAttribute;
  ondragover: BaseAttribute;
  ondragstart: BaseAttribute;
  ondrop: BaseAttribute;
  ondurationchange: BaseAttribute;
  onemptied: BaseAttribute;
  onended: BaseAttribute;
  onerror: BaseAttribute;
  onfocus: BaseAttribute;
  oninput: BaseAttribute;
  oninvalid: BaseAttribute;
  onkeydown: BaseAttribute;
  onkeypress: BaseAttribute;
  onkeyup: BaseAttribute;
  onload: BaseAttribute;
  onloadeddata: BaseAttribute;
  onloadedmetadata: BaseAttribute;
  onloadstart: BaseAttribute;
  onmousedown: BaseAttribute;
  onmouseenter: BaseAttribute;
  onmouseleave: BaseAttribute;
  onmousemove: BaseAttribute;
  onmouseout: BaseAttribute;
  onmouseover: BaseAttribute;
  onmouseup: BaseAttribute;
  onmousewheel: BaseAttribute;
  onpause: BaseAttribute;
  onplay: BaseAttribute;
  onplaying: BaseAttribute;
  onprogress: BaseAttribute;
  onratechange: BaseAttribute;
  onreset: BaseAttribute;
  onresize: BaseAttribute;
  onscroll: BaseAttribute;
  onseeked: BaseAttribute;
  onseeking: BaseAttribute;
  onselect: BaseAttribute;
  onshow: BaseAttribute;
  onsort: BaseAttribute;
  onstalled: BaseAttribute;
  onsubmit: BaseAttribute;
  onsuspend: BaseAttribute;
  ontimeupdate: BaseAttribute;
  ontoggle: BaseAttribute;
  onvolumechange: BaseAttribute;
  onwaiting: BaseAttribute;
  accept: BaseAttribute;
  autocomplete:
    | "off"
    | "on"
    | `${"cc-" | ""}name`
    | "honorific-prefix"
    | `${"cc-" | ""}given-name`
    | `${"cc-" | ""}additional-name`
    | `${"cc-" | ""}family-name`
    | "honorific-sufix"
    | "nickname"
    | "email"
    | "username"
    | "new-password"
    | "current-password"
    | "on-time-code"
    | "organization-title"
    | "street-address"
    | `address-line${1 | 2 | 3}`
    | `address-level${1 | 2 | 3 | 4}`
    | "country"
    | "country-name"
    | "postal-code"
    | "cc-number"
    | "cc-exp"
    | "cc-exp-month"
    | "cc-exp-year"
    | "cc-csc"
    | "cc-type"
    | "transaction-currency"
    | "transaction-amount"
    | "language"
    | "bday"
    | "bday-day"
    | "bday-month"
    | "bday-year"
    | "sex"
    | "tel"
    | "tel-country-code"
    | "tel-national"
    | "tel-area-code"
    | "tel-extension"
    | "impp"
    | "url"
    | "photo";
  capture: "user" | "environment";
  crossorigin: "anonymous" | "use-credentials" | "";
  disabled: BooleanAttribute;
  elementtiming: BaseAttribute;
  for: BaseAttribute;
  max: BaseAttribute;
  maxlength: number;
  min: BaseAttribute;
  minlength: number;
  multiple: BooleanAttribute;
  pattern: BaseAttribute;
  readonly: BooleanAttribute;
  rel: BaseAttribute;
  required: BooleanAttribute;
  size: number;
  step: number;
};

export type HTMLAnchorAttributes = HTMLGlobalAttributes & {
  download: BaseAttribute;
  href: BaseAttribute;
  hreflang: BaseAttribute;
  ping: BaseAttribute;
  referrerpolicy: BaseAttribute;
  target: "_self" | "_blank" | "_parent" | "_top" | string;
  type: BaseAttribute;
};

export type HTMLAbbrAttributes = HTMLGlobalAttributes;

export type HTMLAddressAttributes = HTMLGlobalAttributes;

export type HTMLAreaAttributes = HTMLGlobalAttributes & {
  alt: BaseAttribute;
  coords: BaseAttribute;
  download: BaseAttribute;
  href: BaseAttribute;
  ping: BaseAttribute;
  referrerpolicy: BaseAttribute;
  shape: "rect" | "circle" | "poly" | "default";
  target: "_self" | "_blank" | "_parent" | "_top" | string;
};

export type HTMLArticleAttributes = HTMLGlobalAttributes;

export type HTMLAsideAttributes = HTMLGlobalAttributes;

export type HTMLAudioAttributes = HTMLGlobalAttributes & {
  autoplay: BooleanAttribute;
  controls: BooleanAttribute;
  loop: BooleanAttribute;
  muted: BooleanAttribute;
  preload: "none" | "metadata" | "auto" | "";
  src: BaseAttribute;
};
