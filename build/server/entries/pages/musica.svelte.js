import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-b914cc5f.js";
import "../../_app/immutable/chunks/HeaderSearch.svelte_svelte_type_style_lang-715ea697.js";
import { B as Button } from "../../_app/immutable/chunks/Button-b5fc43a9.js";
import "flatpickr";
/* empty css                                         */const musica_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1y91s5j{color:white}",
  map: null
};
const Musica = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="${"svelte-1y91s5j"}">hello from musica</h1>
${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `hee`;
    }
  })}
<img src="${"./images/writing.svg"}" alt="${"imagen"}">`;
});
export {
  Musica as default
};
