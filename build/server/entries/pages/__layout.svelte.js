import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, f as escape, g as add_attribute, v as validate_component, m as missing_component, h as subscribe, i as add_classes, j as getContext, k as createEventDispatcher, l as compute_slots } from "../../_app/immutable/chunks/index-b914cc5f.js";
import { w as writable } from "../../_app/immutable/chunks/HeaderSearch.svelte_svelte_type_style_lang-715ea697.js";
import "flatpickr";
import { G as Grid } from "../../_app/immutable/chunks/Grid-18b7f9d5.js";
/* empty css                                         */const Close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"}"></path></svg>`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M4 6H28V8H4zM4 24H28V26H4zM4 12H28V14H4zM4 18H28V20H4z"}"></path></svg>`;
});
const shouldRenderHamburgerMenu = writable(false);
const HamburgerMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ariaLabel", "isOpen", "iconMenu", "iconClose", "ref"]);
  let { ariaLabel = void 0 } = $$props;
  let { isOpen = false } = $$props;
  let { iconMenu = Menu } = $$props;
  let { iconClose = Close } = $$props;
  let { ref = null } = $$props;
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.iconMenu === void 0 && $$bindings.iconMenu && iconMenu !== void 0)
    $$bindings.iconMenu(iconMenu);
  if ($$props.iconClose === void 0 && $$bindings.iconClose && iconClose !== void 0)
    $$bindings.iconClose(iconClose);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<button${spread(
    [
      { type: "button" },
      { title: escape_attribute_value(ariaLabel) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--header__action bx--header__menu-trigger bx--header__menu-toggle"
    }
  )}${add_attribute("this", ref, 0)}>${validate_component((isOpen ? iconClose : iconMenu) || missing_component, "svelte:component").$$render($$result, { size: 20 }, {}, {})}</button>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let $$restProps = compute_rest_props($$props, [
    "expandedByDefault",
    "isSideNavOpen",
    "uiShellAriaLabel",
    "href",
    "company",
    "platformName",
    "persistentHamburgerMenu",
    "expansionBreakpoint",
    "ref",
    "iconMenu",
    "iconClose"
  ]);
  let $shouldRenderHamburgerMenu, $$unsubscribe_shouldRenderHamburgerMenu;
  $$unsubscribe_shouldRenderHamburgerMenu = subscribe(shouldRenderHamburgerMenu, (value) => $shouldRenderHamburgerMenu = value);
  let { expandedByDefault = true } = $$props;
  let { isSideNavOpen = false } = $$props;
  let { uiShellAriaLabel = void 0 } = $$props;
  let { href = void 0 } = $$props;
  let { company = void 0 } = $$props;
  let { platformName = "" } = $$props;
  let { persistentHamburgerMenu = false } = $$props;
  let { expansionBreakpoint = 1056 } = $$props;
  let { ref = null } = $$props;
  let { iconMenu = Menu } = $$props;
  let { iconClose = Close } = $$props;
  let winWidth = void 0;
  if ($$props.expandedByDefault === void 0 && $$bindings.expandedByDefault && expandedByDefault !== void 0)
    $$bindings.expandedByDefault(expandedByDefault);
  if ($$props.isSideNavOpen === void 0 && $$bindings.isSideNavOpen && isSideNavOpen !== void 0)
    $$bindings.isSideNavOpen(isSideNavOpen);
  if ($$props.uiShellAriaLabel === void 0 && $$bindings.uiShellAriaLabel && uiShellAriaLabel !== void 0)
    $$bindings.uiShellAriaLabel(uiShellAriaLabel);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.company === void 0 && $$bindings.company && company !== void 0)
    $$bindings.company(company);
  if ($$props.platformName === void 0 && $$bindings.platformName && platformName !== void 0)
    $$bindings.platformName(platformName);
  if ($$props.persistentHamburgerMenu === void 0 && $$bindings.persistentHamburgerMenu && persistentHamburgerMenu !== void 0)
    $$bindings.persistentHamburgerMenu(persistentHamburgerMenu);
  if ($$props.expansionBreakpoint === void 0 && $$bindings.expansionBreakpoint && expansionBreakpoint !== void 0)
    $$bindings.expansionBreakpoint(expansionBreakpoint);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.iconMenu === void 0 && $$bindings.iconMenu && iconMenu !== void 0)
    $$bindings.iconMenu(iconMenu);
  if ($$props.iconClose === void 0 && $$bindings.iconClose && iconClose !== void 0)
    $$bindings.iconClose(iconClose);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    isSideNavOpen = expandedByDefault && winWidth >= expansionBreakpoint && !persistentHamburgerMenu;
    ariaLabel = company ? `${company} ` : "" + (uiShellAriaLabel || $$props["aria-label"] || platformName);
    $$rendered = `

<header${add_attribute("aria-label", ariaLabel, 0)}${add_classes("bx--header".trim())}>${slots["skip-to-content"] ? slots["skip-to-content"]({}) : ``}
  ${$shouldRenderHamburgerMenu && winWidth < expansionBreakpoint || persistentHamburgerMenu ? `${validate_component(HamburgerMenu, "HamburgerMenu").$$render(
      $$result,
      {
        iconClose,
        iconMenu,
        isOpen: isSideNavOpen
      },
      {
        isOpen: ($$value) => {
          isSideNavOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}
  <a${spread([{ href: escape_attribute_value(href) }, escape_object($$restProps)], { classes: "bx--header__name" })}${add_attribute("this", ref, 0)}>${company ? `<span${add_classes("bx--header__name--prefix".trim())}>${escape(company)}\xA0</span>` : ``}
    ${slots.platform ? slots.platform({}) : `${escape(platformName)}`}</a>
  ${slots.default ? slots.default({}) : ``}</header>`;
  } while (!$$settled);
  $$unsubscribe_shouldRenderHamburgerMenu();
  return $$rendered;
});
const HeaderNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let props;
  let $$restProps = compute_rest_props($$props, []);
  props = {
    "aria-label": $$props["aria-label"],
    "aria-labelledby": $$props["aria-labelledby"]
  };
  return `<nav${spread([escape_object(props), escape_object($$restProps)], { classes: "bx--header__nav" })}><ul${spread([escape_object(props), { role: "menubar" }], {
    classes: "bx--header__menu-bar"
  })}>${slots.default ? slots.default({}) : ``}</ul></nav>`;
});
const HeaderNavItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "text", "isSelected", "ref"]);
  let { href = void 0 } = $$props;
  let { text = void 0 } = $$props;
  let { isSelected = false } = $$props;
  let { ref = null } = $$props;
  const id = "ccs-" + Math.random().toString(36);
  const ctx = getContext("HeaderNavMenu");
  ctx == null ? void 0 : ctx.selectedItems.subscribe((_selectedItems) => {
  });
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    ctx == null ? void 0 : ctx.updateSelectedItems({ id, isSelected });
  }
  return `<li role="${"none"}"><a${spread(
    [
      { role: "menuitem" },
      { tabindex: "0" },
      { href: escape_attribute_value(href) },
      {
        rel: escape_attribute_value($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
      },
      {
        "aria-current": escape_attribute_value(isSelected ? "page" : void 0)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--header__menu-item"
    }
  )}${add_attribute("this", ref, 0)}><span${add_classes("bx--text-truncate--end".trim())}>${escape(text)}</span></a></li>`;
});
const SideNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["fixed", "rail", "ariaLabel", "isOpen", "expansionBreakpoint"]);
  let { fixed = false } = $$props;
  let { rail = false } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { isOpen = false } = $$props;
  let { expansionBreakpoint = 1056 } = $$props;
  const dispatch = createEventDispatcher();
  let winWidth = void 0;
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.rail === void 0 && $$bindings.rail && rail !== void 0)
    $$bindings.rail(rail);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.expansionBreakpoint === void 0 && $$bindings.expansionBreakpoint && expansionBreakpoint !== void 0)
    $$bindings.expansionBreakpoint(expansionBreakpoint);
  {
    dispatch(isOpen ? "open" : "close");
  }
  return `

${!fixed ? `<div${add_attribute("style", isOpen && "z-index: 6000", 0)}${add_classes(("bx--side-nav__overlay " + (isOpen ? "bx--side-nav__overlay-active" : "")).trim())}></div>` : ``}
<nav${spread(
    [
      {
        "aria-hidden": escape_attribute_value(!isOpen)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--side-nav__navigation bx--side-nav bx--side-nav--ux " + ((rail && winWidth >= expansionBreakpoint ? false : isOpen) ? "bx--side-nav--expanded" : "") + " " + (!isOpen && !rail ? "bx--side-nav--collapsed" : "") + " " + (rail ? "bx--side-nav--rail" : "")
    }
  )}>${slots.default ? slots.default({}) : ``}</nav>`;
});
const SideNavItems = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<ul${add_classes("bx--side-nav__items".trim())}>${slots.default ? slots.default({}) : ``}</ul>`;
});
const SideNavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isSelected", "href", "text", "icon", "ref"]);
  let $$slots = compute_slots(slots);
  let { isSelected = false } = $$props;
  let { href = void 0 } = $$props;
  let { text = void 0 } = $$props;
  let { icon = void 0 } = $$props;
  let { ref = null } = $$props;
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<li${add_classes("bx--side-nav__item".trim())}><a${spread(
    [
      {
        "aria-current": escape_attribute_value(isSelected ? "page" : void 0)
      },
      { href: escape_attribute_value(href) },
      {
        rel: escape_attribute_value($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--side-nav__link " + (isSelected ? "bx--side-nav__link--current" : "")
    }
  )}${add_attribute("this", ref, 0)}>${$$slots.icon || icon ? `<div${add_classes("bx--side-nav__icon bx--side-nav__icon--small".trim())}>${slots.icon ? slots.icon({}) : `
          ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
        `}</div>` : ``}
    <span${add_classes("bx--side-nav__link-text".trim())}>${slots.default ? slots.default({}) : `
        ${escape(text)}
      `}</span></a></li>`;
});
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["id"]);
  let { id = "main-content" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<main${spread([{ id: escape_attribute_value(id) }, escape_object($$restProps)], { classes: "bx--content" })}>${slots.default ? slots.default({}) : ``}</main>`;
});
const SkipToContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "tabindex"]);
  let { href = "#main-content" } = $$props;
  let { tabindex = "0" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  return `<a${spread(
    [
      { href: escape_attribute_value(href) },
      {
        tabindex: escape_attribute_value(tabindex)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--skip-to-content"
    }
  )}>${slots.default ? slots.default({}) : `Skip to main content`}</a>`;
});
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid{background-color:rgb(255, 255, 255);margin-left:4rem}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isSideNavOpen = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Header, "Header").$$render(
      $$result,
      {
        persistentHamburgerMenu: true,
        company: "NED",
        platformName: "STUDIO",
        isSideNavOpen
      },
      {
        isSideNavOpen: ($$value) => {
          isSideNavOpen = $$value;
          $$settled = false;
        }
      },
      {
        "skip-to-content": () => {
          return `${validate_component(SkipToContent, "SkipToContent").$$render($$result, {}, {}, {})}
    `;
        },
        default: () => {
          return `${validate_component(HeaderNav, "HeaderNav").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(HeaderNavItem, "HeaderNavItem").$$render($$result, { href: "/gallery", text: "gallery" }, {}, {})}
      ${validate_component(HeaderNavItem, "HeaderNavItem").$$render($$result, { href: "/contact", text: "contact" }, {}, {})}
      ${validate_component(HeaderNavItem, "HeaderNavItem").$$render($$result, { href: "/oldversion", text: "oldversion" }, {}, {})}
      ${validate_component(HeaderNavItem, "HeaderNavItem").$$render($$result, { href: "/", text: "arje" }, {}, {})}
      ${validate_component(HeaderNavItem, "HeaderNavItem").$$render($$result, { href: "/", text: "fotos" }, {}, {})}
      ${validate_component(HeaderNavItem, "HeaderNavItem").$$render($$result, { href: "/musica", text: "musica" }, {}, {})}

      ${validate_component(HeaderNavItem, "HeaderNavItem").$$render($$result, { href: "/", text: "line of thought" }, {}, {})}`;
            }
          })}`;
        }
      }
    )}
  
  ${validate_component(SideNav, "SideNav").$$render(
      $$result,
      { isOpen: isSideNavOpen },
      {
        isOpen: ($$value) => {
          isSideNavOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(SideNavItems, "SideNavItems").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(SideNavLink, "SideNavLink").$$render($$result, { href: "/gallery", text: "gallery" }, {}, {})}
      ${validate_component(SideNavLink, "SideNavLink").$$render($$result, { href: "/contact", text: "contact" }, {}, {})}
      ${validate_component(SideNavLink, "SideNavLink").$$render($$result, { href: "/", text: "home" }, {}, {})}`;
            }
          })}`;
        }
      }
    )}

  ${validate_component(Content, "Content").$$render($$result, { class: "grid" }, {}, {
      default: () => {
        return `${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
          default: () => {
            return `${slots.default ? slots.default({}) : ``}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  _layout as default
};
