<script>
    import {
      Header,
      HeaderNav,
      HeaderNavItem,
      HeaderNavMenu,
      SideNav,
      SideNavItems,
      SideNavMenu,
      SideNavMenuItem,
      SideNavLink,
      SkipToContent,
      Content,
      Grid,
      Row,
      Column,
    } from "carbon-components-svelte";
    import "carbon-components-svelte/css/g100.css";
  
    let isSideNavOpen = false;
  </script>
  
  <Header
    persistentHamburgerMenu={true}
    company="NED"
    platformName="STUDIO"
    bind:isSideNavOpen
  >
    <svelte:fragment slot="skip-to-content">
      <SkipToContent />
    </svelte:fragment>
    <HeaderNav>
      <HeaderNavItem href="/gallery" text="gallery" />
      <HeaderNavItem href="/contact" text="contact" />
      <HeaderNavItem href="/oldversion" text="oldversion" />
      <HeaderNavItem href="/" text="arje" />
      <HeaderNavItem href="/" text="fotos" />
      <HeaderNavItem href="/musica" text="musica" />

      <HeaderNavItem href="/" text="line of thought" />
  
    </HeaderNav>
  </Header>
  
  <SideNav  bind:isOpen={isSideNavOpen}>
    <SideNavItems>
      <SideNavLink href="/gallery" text="gallery" />
      <SideNavLink href="/contact" text="contact" />
      <SideNavLink href="/" text="home" />

    </SideNavItems>
  </SideNav>

<slot></slot>


