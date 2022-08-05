import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, f as escape, p as each, i as add_classes, v as validate_component, s as setContext, j as getContext, g as add_attribute } from "../../_app/immutable/chunks/index-b914cc5f.js";
import { w as writable } from "../../_app/immutable/chunks/HeaderSearch.svelte_svelte_type_style_lang-715ea697.js";
import { B as Button } from "../../_app/immutable/chunks/Button-b5fc43a9.js";
import "flatpickr";
import { G as Grid } from "../../_app/immutable/chunks/Grid-18b7f9d5.js";
import { R as Row } from "../../_app/immutable/chunks/Row-48bf43f3.js";
/* empty css                                         */const ChevronRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M22 16L12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z"}"></path></svg>`;
});
const SkeletonText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rows;
  let widthNum;
  let widthPx;
  let $$restProps = compute_rest_props($$props, ["lines", "heading", "paragraph", "width"]);
  let { lines = 3 } = $$props;
  let { heading = false } = $$props;
  let { paragraph = false } = $$props;
  let { width = "100%" } = $$props;
  const RANDOM = [0.973, 0.153, 0.567];
  if ($$props.lines === void 0 && $$bindings.lines && lines !== void 0)
    $$bindings.lines(lines);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.paragraph === void 0 && $$bindings.paragraph && paragraph !== void 0)
    $$bindings.paragraph(paragraph);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  rows = [];
  widthNum = parseInt(width, 10);
  widthPx = width.includes("px");
  {
    if (paragraph) {
      for (let i = 0; i < lines; i++) {
        const min = widthPx ? widthNum - 75 : 0;
        const max = widthPx ? widthNum : 75;
        const rand = Math.floor(RANDOM[i % 3] * (max - min + 1)) + min + "px";
        rows = [
          ...rows,
          {
            width: widthPx ? rand : `calc(${width} - ${rand})`
          }
        ];
      }
    }
  }
  return `
${paragraph ? `<div${spread([escape_object($$restProps)], {})}>${each(rows, ({ width: width2 }) => {
    return `<p style="${"width: " + escape(width2, true)}"${add_classes(("bx--skeleton__text " + (heading ? "bx--skeleton__heading" : "")).trim())}></p>`;
  })}</div>` : `<p${spread(
    [
      escape_object($$restProps),
      {
        style: "width: " + escape(width, true) + ";" + escape($$restProps.style, true)
      }
    ],
    {
      classes: "bx--skeleton__text " + (heading ? "bx--skeleton__heading" : "")
    }
  )}></p>`}`;
});
const AccordionSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["count", "align", "size", "open"]);
  let { count = 4 } = $$props;
  let { align = "end" } = $$props;
  let { size = void 0 } = $$props;
  let { open = true } = $$props;
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  return `
<ul${spread([escape_object($$restProps)], {
    classes: "bx--skeleton bx--accordion " + (align === "start" ? "bx--accordion--start" : "") + " " + (align === "end" ? "bx--accordion--end" : "") + " " + (size === "sm" ? "bx--accordion--sm" : "") + " " + (size === "xl" ? "bx--accordion--xl" : "")
  })}>${open ? `<li${add_classes("bx--accordion__item bx--accordion__item--active".trim())}><span${add_classes("bx--accordion__heading".trim())}>${validate_component(ChevronRight, "ChevronRight").$$render($$result, { class: "bx--accordion__arrow" }, {}, {})}
        ${validate_component(SkeletonText, "SkeletonText").$$render($$result, { class: "bx--accordion__title" }, {}, {})}</span>
      <div${add_classes("bx--accordion__content".trim())}>${validate_component(SkeletonText, "SkeletonText").$$render($$result, { width: "90%" }, {}, {})}
        ${validate_component(SkeletonText, "SkeletonText").$$render($$result, { width: "80%" }, {}, {})}
        ${validate_component(SkeletonText, "SkeletonText").$$render($$result, { width: "95%" }, {}, {})}</div></li>` : ``}
  ${each(Array.from({ length: open ? count - 1 : count }, (_, i) => i), (item) => {
    return `<li${add_classes("bx--accordion__item".trim())}><span${add_classes("bx--accordion__heading".trim())}>${validate_component(ChevronRight, "ChevronRight").$$render($$result, { class: "bx--accordion__arrow" }, {}, {})}
        ${validate_component(SkeletonText, "SkeletonText").$$render($$result, { class: "bx--accordion__title" }, {}, {})}</span>
    </li>`;
  })}</ul>`;
});
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["align", "size", "disabled", "skeleton"]);
  let { align = "end" } = $$props;
  let { size = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { skeleton = false } = $$props;
  const disableItems = writable(disabled);
  setContext("Accordion", { disableItems });
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  {
    disableItems.set(disabled);
  }
  return `
${skeleton ? `${validate_component(AccordionSkeleton, "AccordionSkeleton").$$render($$result, Object.assign($$restProps, { align }, { size }), {}, {})}` : `<ul${spread([escape_object($$restProps)], {
    classes: "bx--accordion " + (align === "start" ? "bx--accordion--start" : "") + " " + (align === "end" ? "bx--accordion--end" : "") + " " + (size === "sm" ? "bx--accordion--sm" : "") + " " + (size === "xl" ? "bx--accordion--xl" : "")
  })}>${slots.default ? slots.default({}) : ``}</ul>`}`;
});
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["title", "open", "disabled", "iconDescription"]);
  let { title = "title" } = $$props;
  let { open = false } = $$props;
  let { disabled = false } = $$props;
  let { iconDescription = "Expand/Collapse" } = $$props;
  let initialDisabled = disabled;
  const ctx = getContext("Accordion");
  ctx.disableItems.subscribe((value) => {
    if (!value && initialDisabled)
      return;
    disabled = value;
  });
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  return `
<li${spread([escape_object($$restProps)], {
    classes: "bx--accordion__item " + (open ? "bx--accordion__item--active" : "") + " " + (disabled ? "bx--accordion__item--disabled" : "") + "  "
  })}><button type="${"button"}"${add_attribute("title", iconDescription, 0)}${add_attribute("aria-expanded", open, 0)} ${disabled ? "disabled" : ""}${add_classes("bx--accordion__heading".trim())}>${validate_component(ChevronRight, "ChevronRight").$$render(
    $$result,
    {
      class: "bx--accordion__arrow",
      "aria-label": iconDescription
    },
    {},
    {}
  )}
    <div${add_classes("bx--accordion__title".trim())}>${slots.title ? slots.title({}) : `${escape(title)}`}</div></button>
  <div${add_classes("bx--accordion__content".trim())}>${slots.default ? slots.default({}) : ``}</div></li>`;
});
const Column = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let columnClass;
  let props;
  let $$restProps = compute_rest_props($$props, [
    "as",
    "noGutter",
    "noGutterLeft",
    "noGutterRight",
    "padding",
    "aspectRatio",
    "sm",
    "md",
    "lg",
    "xlg",
    "max"
  ]);
  let { as = false } = $$props;
  let { noGutter = false } = $$props;
  let { noGutterLeft = false } = $$props;
  let { noGutterRight = false } = $$props;
  let { padding = false } = $$props;
  let { aspectRatio = void 0 } = $$props;
  let { sm = void 0 } = $$props;
  let { md = void 0 } = $$props;
  let { lg = void 0 } = $$props;
  let { xlg = void 0 } = $$props;
  let { max = void 0 } = $$props;
  const breakpoints = ["sm", "md", "lg", "xlg", "max"];
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.noGutter === void 0 && $$bindings.noGutter && noGutter !== void 0)
    $$bindings.noGutter(noGutter);
  if ($$props.noGutterLeft === void 0 && $$bindings.noGutterLeft && noGutterLeft !== void 0)
    $$bindings.noGutterLeft(noGutterLeft);
  if ($$props.noGutterRight === void 0 && $$bindings.noGutterRight && noGutterRight !== void 0)
    $$bindings.noGutterRight(noGutterRight);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0)
    $$bindings.aspectRatio(aspectRatio);
  if ($$props.sm === void 0 && $$bindings.sm && sm !== void 0)
    $$bindings.sm(sm);
  if ($$props.md === void 0 && $$bindings.md && md !== void 0)
    $$bindings.md(md);
  if ($$props.lg === void 0 && $$bindings.lg && lg !== void 0)
    $$bindings.lg(lg);
  if ($$props.xlg === void 0 && $$bindings.xlg && xlg !== void 0)
    $$bindings.xlg(xlg);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  columnClass = [sm, md, lg, xlg, max].map((breakpoint, i) => {
    const name = breakpoints[i];
    if (breakpoint === true) {
      return `bx--col-${name}`;
    } else if (typeof breakpoint === "number") {
      return `bx--col-${name}-${breakpoint}`;
    } else if (typeof breakpoint === "object") {
      let bp = [];
      if (typeof breakpoint.span === "number") {
        bp = [...bp, `bx--col-${name}-${breakpoint.span}`];
      } else if (breakpoint.span === true) {
        bp = [...bp, `bx--col-${name}`];
      }
      if (typeof breakpoint.offset === "number") {
        bp = [...bp, `bx--offset-${name}-${breakpoint.offset}`];
      }
      return bp.join(" ");
    }
  }).filter(Boolean).join(" ");
  props = {
    ...$$restProps,
    class: [
      $$restProps.class,
      columnClass,
      !columnClass && "bx--col",
      noGutter && "bx--no-gutter",
      noGutterLeft && "bx--no-gutter--left",
      noGutterRight && "bx--no-gutter--right",
      aspectRatio && `bx--aspect-ratio bx--aspect-ratio--${aspectRatio}`,
      padding && "bx--col-padding"
    ].filter(Boolean).join(" ")
  };
  return `${as ? `${slots.default ? slots.default({ props }) : ``}` : `<div${spread([escape_object(props)], {})}>${slots.default ? slots.default({}) : ``}</div>`}`;
});
let img = "src/images/5friends.svg";
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
    default: () => {
      return `<img${add_attribute("src", img, 0)} height="${"300px"}" alt="${"ima"}">
    ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { title: "Natural Language Classifier" }, {}, {
                    default: () => {
                      return `<p>Natural Language Classifier uses advanced natural language processing and
                    machine learning techniques to create custom classification models. Users
                    train their data and the service predicts the appropriate category for the
                    inputted text.
                  </p>`;
                    }
                  })}
                ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { title: "Natural Language Understanding" }, {}, {
                    default: () => {
                      return `<p>Analyze text to extract meta-data from content such as concepts, entities,
                    emotion, relations, sentiment and more.
                  </p>`;
                    }
                  })}
                ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { title: "Language Translator" }, {}, {
                    default: () => {
                      return `<p>Translate text, documents, and websites from one language to another.
                    Create industry or region-specific translations via the service&#39;s
                    customization capability.
                  </p>`;
                    }
                  })}
                ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { title: "Language Translator" }, {}, {
                    default: () => {
                      return `<p>Translate text, documents, and websites from one language to another.
                      Create industry or region-specific translations via the service&#39;s
                      customization capability.
                    </p>`;
                    }
                  })}
                  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { title: "Language Translator" }, {}, {
                    default: () => {
                      return `<p>Translate text, documents, and websites from one language to another.
                      Create industry or region-specific translations via the service&#39;s
                      customization capability.
                    </p>`;
                    }
                  })}
                  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { title: "Language Translator" }, {}, {
                    default: () => {
                      return `<p>Translate text, documents, and websites from one language to another.
                      Create industry or region-specific translations via the service&#39;s
                      customization capability.
                    </p>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
        ${validate_component(Column, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `<h1>hello from contact</h1>
${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `mira ddquien llego el capi capi del barco`;
                }
              })}
<a href="${"/"}">home</a>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export {
  Contact as default
};
