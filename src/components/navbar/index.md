<script setup>
  import { ref } from 'vue-demi'
  import pNavbar from './Navbar.vue'
  import pNavbarBrand from './NavbarBrand.vue'
  import pNavbarNav from './NavbarNav.vue'
  import pNavbarToggle from './NavbarToggle.vue'
  import pNavItem from '../nav/NavItem.vue'
  import pNavItemDropdown from '../nav/NavItemDropdown.vue'
  import pDropdownItem from '../dropdown/DropdownItem.vue'
  import pNavForm from '../nav/NavForm.vue'
  import pInput from '../input/Input.vue'
  import pInputGroup from '../input/InputGroup.vue'
  import pButton from '../button/Button.vue'
  import pCollapse from '../collapse/Collapse.vue'
  import IconBee from '@carbon/icons-vue/lib/bee/20'
  import IconView from '@carbon/icons-vue/lib/view/20'

  const menu = ref(false)
</script>

<style scoped>
  .preview {
    @apply block relative;

    &--fixed {
      @apply h-36 overflow-hidden;

      .navbar--fixed {
        @apply absolute z-10;
      }
    }
  }
</style>

# Navbar

## Usage

### Simple Navbar


<preview class="flex-grow">
  <p-navbar>
    <p-navbar-brand>
      <img src="../../public/assets/images/icon-privy.svg" />
    </p-navbar-brand>
    <p-navbar-nav>
      <p-nav-item>Label</p-nav-item>
    </p-navbar-nav>
  </p-navbar>
</preview>

```vue
<template>
  <p-navbar>
    <p-navbar-brand>
      <img src="assets/images/icon-privy.svg" />
    </p-navbar-brand>
    <p-navbar-nav>
      <p-nav-item>Label</p-nav-item>
    </p-navbar-nav>
  </p-navbar>
</template>
```

### Navbar Brand
Navbar brand is used for company, product, or project name. You can add permalink in navbar brand by prop `href`. Navbar brand can be an image or text and combination of both.

#### Text
<preview class="flex-grow">
  <p-navbar>
    <p-navbar-brand>
      Persona
    </p-navbar-brand>
  </p-navbar>
</preview>

```vue
<template>
  <p-navbar>
    <p-navbar-brand>
      Persona
    </p-navbar-brand>
  </p-navbar>
</template>
```

#### Image and Text
<preview class="flex-grow">
  <p-navbar>
    <p-navbar-brand>
      <img src="../../public/assets/images/logo.svg" /> Persona
    </p-navbar-brand>
  </p-navbar>
</preview>

```vue
<template>
  <p-navbar>
    <p-navbar-brand>
      <img src="assets/images/logo.svg" /> Persona
    </p-navbar-brand>
  </p-navbar>
</template>
```

## Fixed Navbar
<preview class="flex-grow preview--fixed">
  <p-navbar fixed>
    <p-navbar-brand>
      <img src="../../public/assets/images/logo.svg" />
    </p-navbar-brand>
    <p-navbar-nav>
      <p-nav-item active>Label</p-nav-item>
    </p-navbar-nav>
  </p-navbar>
</preview>

```vue
<template>
  <p-navbar fixed>
    <p-navbar-brand>
      <img src="assets/images/logo.svg" />
    </p-navbar-brand>
    <p-navbar-nav>
      <p-nav-item active>Label</p-nav-item>
    </p-navbar-nav>
  </p-navbar>
</template>
```

## Variants
Navbar has 2 variant of nav type: `pills` and `lines`.

<preview class="flex-grow">
  <p-navbar variant="pills" class="mb-5">
    <p-navbar-brand>
      <img src="../../public/assets/images/logo.svg" />
    </p-navbar-brand>
    <p-navbar-nav>
      <p-nav-item active>Label</p-nav-item>
    </p-navbar-nav>
  </p-navbar>
  <p-navbar variant="lines">
    <p-navbar-brand>
      <img src="../../public/assets/images/logo.svg" />
    </p-navbar-brand>
    <p-navbar-nav>
      <p-nav-item active>Label</p-nav-item>
    </p-navbar-nav>
  </p-navbar>
</preview>

```vue
<template>
  <p-navbar variant="pills">
    <p-navbar-brand>
      <img src="assets/images/logo.svg" />
    </p-navbar-brand>
    <p-navbar-nav>
      <p-nav-item active>Label</p-nav-item>
    </p-navbar-nav>
  </p-navbar>
  <p-navbar variant="lines">
    <p-navbar-brand>
      <img src="assets/images/logo.svg" />
    </p-navbar-brand>
    <p-navbar-nav>
      <p-nav-item active>Label</p-nav-item>
    </p-navbar-nav>
  </p-navbar>
</template>
```

## Colors
Navbar has 2 colors, `light` and `dark`.

<preview class="flex-grow">
  <p-navbar color="light" class="mb-5">
    <p-navbar-brand>
      <img src="../../public/assets/images/logo.svg" />
    </p-navbar-brand>
    <!-- <p-navbar-nav>
      <p-nav-item active>Label</p-nav-item>
    </p-navbar-nav> -->
  </p-navbar>
  <p-navbar color="dark">
    <p-navbar-brand>
      <img src="../../public/assets/images/logo.svg" />
    </p-navbar-brand>
    <p-navbar-nav>
      <p-nav-item active>Label</p-nav-item>
    </p-navbar-nav>
  </p-navbar>
</preview>

```vue
<template>
  <p-navbar color="light">
    <p-navbar-brand>
      <img src="assets/images/logo.svg" />
    </p-navbar-brand>
    <p-navbar-nav>
      <p-nav-item active>Label</p-nav-item>
    </p-navbar-nav>
  </p-navbar>
  <p-navbar color="dark">
    <p-navbar-brand>
      <img src="assets/images/logo.svg" />
    </p-navbar-brand>
    <p-navbar-nav>
      <p-nav-item active>Label</p-nav-item>
    </p-navbar-nav>
  </p-navbar>
</template>
```

## Alignment
To align Navigation, use align prop in `<p-navbar-nav>`. Available value are `left`, `right` and `center`

<preview class="flex-grow">
  <p-navbar class="mb-5">
    <p-navbar-nav align="left">
      <p-nav-item active>Label</p-nav-item>
      <p-nav-item>Label</p-nav-item>
    </p-navbar-nav>
  </p-navbar>
  <p-navbar class="mb-5">
    <p-navbar-nav align="center">
      <p-nav-item active>Label</p-nav-item>
      <p-nav-item>Label</p-nav-item>
    </p-navbar-nav>
  </p-navbar>
  <p-navbar>
    <p-navbar-nav align="right">
      <p-nav-item>Label</p-nav-item>
      <p-nav-item active>Label</p-nav-item>
    </p-navbar-nav>
  </p-navbar>
</preview>

```vue
<template>
  <p-navbar>
    <p-navbar-nav align="left">
      <p-nav-item active>Label</p-nav-item>
      <p-nav-item>Label</p-nav-item>
    </p-navbar-nav>
  </p-navbar>
  <p-navbar>
    <p-navbar-nav align="center">
      <p-nav-item active>Label</p-nav-item>
      <p-nav-item>Label</p-nav-item>
    </p-navbar-nav>
  </p-navbar>
  <p-navbar>
    <p-navbar-nav align="right">
      <p-nav-item>Label</p-nav-item>
      <p-nav-item active>Label</p-nav-item>
    </p-navbar-nav>
  </p-navbar>
</template>
```

## With Icon
<preview class="flex-grow">
  <p-navbar class="mb-5">
    <p-navbar-nav>
      <p-nav-item active>
        <template #icon>
          <IconBee />
        </template>
        Label
      </p-nav-item>
      <p-nav-item>
        <template #icon>
          <IconBee />
        </template>
        Label
      </p-nav-item>
    </p-navbar-nav>
  </p-navbar>
</preview>

```vue
<template>
  <p-navbar class="mb-5">
    <p-navbar-nav>
      <p-nav-item active>
        <template #icon>
          <IconBee />
        </template>
        Label
      </p-nav-item>
      <p-nav-item>
        <template #icon>
          <IconBee />
        </template>
        Label
      </p-nav-item>
    </p-navbar-nav>
  </p-navbar>
</template>
```

## With Form
<preview class="flex-grow">
  <p-navbar>
    <p-navbar-brand>
      <img src="../../public/assets/images/logo.svg" />
    </p-navbar-brand>
    <p-navbar-nav>
      <p-nav-form>
        <p-input-group>
          <p-input placeholder="Input Here" />
          <p-button variant="input" color="secondary">Search</p-button>
        </p-input-group>
      </p-nav-form>
    </p-navbar-nav>
  </p-navbar>
</preview>

```vue
<template>
  <p-navbar>
    <p-navbar-brand>
      <img src="assets/images/logo.svg" />
    </p-navbar-brand>
    <p-navbar-nav>
      <p-nav-form>
        <p-input-group>
          <p-input placeholder="Input Here" />
          <p-button variant="input" color="secondary">Search</p-button>
        </p-input-group>
      </p-nav-form>
    </p-navbar-nav>
  </p-navbar>
</template>
```

## Condensed Navigation
<preview class="flex-grow">
  <p-navbar>
    <p-navbar-nav condensed>
      <p-nav-item active>Label</p-nav-item>
      <p-nav-item>Label</p-nav-item>
      <p-nav-item>Label</p-nav-item>
    </p-navbar-nav>
  </p-navbar>
</preview>

```vue
<template>
  <p-navbar>
    <p-navbar-nav condensed>
      <p-nav-item active>Label</p-nav-item>
      <p-nav-item>Label</p-nav-item>
      <p-nav-item>Label</p-nav-item>
    </p-navbar-nav>
  </p-navbar>
</template>
```

## Dropdown
<preview class="flex-grow">
  <p-navbar>
    <p-navbar-nav>
      <p-nav-item active>
        <template #icon>
          <IconBee />
        </template>
        Label
      </p-nav-item>
      <p-nav-item-dropdown>
        <template #button-content>
          <IconBee /> Label
        </template>
        <p-dropdown-item>Children 1</p-dropdown-item>
        <p-dropdown-item>Children 2</p-dropdown-item>
        <p-dropdown-item>Children 3</p-dropdown-item>
      </p-nav-item-dropdown>
    </p-navbar-nav>
  </p-navbar>
</preview>

```vue
<template>
  <p-navbar>
    <p-navbar-nav>
      <p-nav-item active>
        <template #icon>
          <IconBee />
        </template>
        Label
      </p-nav-item>
      <p-nav-item-dropdown>
        <template #button-content>
          <IconBee /> Label
        </template>
        <p-dropdown-item>Children 1</p-dropdown-item>
        <p-dropdown-item>Children 2</p-dropdown-item>
        <p-dropdown-item>Children 3</p-dropdown-item>
      </p-nav-item-dropdown>
    </p-navbar-nav>
  </p-navbar>
</template>
```

## Responsive
Navbar support responsive by adding `toggleable` prop in `<p-navbar>` with available value `lg`, `md` and `sm`. Then `<p-navbar-toggle>` used with `<p-collapse is-nav>` component.

<preview class="flex-grow">
  <p-navbar toggleable="lg">
    <p-navbar-brand>
      <img src="../../public/assets/images/logo.svg" />
    </p-navbar-brand>
    <p-navbar-toggle @click="menu =! menu">
      <template #default="{ expanded }">
        <IconBee v-if="expanded" />
        <IconView v-else />
      </template>
    </p-navbar-toggle>
    <p-collapse v-model="menu" is-nav>
      <p-navbar-nav>
        <p-nav-item active>
          Label
        </p-nav-item>
      </p-navbar-nav>
    </p-collapse>
  </p-navbar>
</preview>

```vue
<template>
  <p-navbar toggleable="lg">
    <p-navbar-brand>
      <img src="assets/images/logo.svg" />
    </p-navbar-brand>
    <p-navbar-toggle @click="menu =! menu">
      <template #default="{ expanded }">
        <IconBee v-if="expanded" />
        <IconView v-else />
      </template>
    </p-navbar-toggle>
    <p-collapse v-model="menu" is-nav>
      <p-navbar-nav>
        <p-nav-item active>
          Label
        </p-nav-item>
      </p-navbar-nav>
    </p-collapse>
  </p-navbar>
</template>

<script setup>
  import IconBee from '@carbon/icons-vue/lib/bee/20'
  import IconView from '@carbon/icons-vue/lib/view/20'

  const menu = ref(false)
</script>
```

## API

### Props `<p-navbar>`
| Props            |   Type    | Default     | Description                                                       |
|------------------|:---------:|:-----------:|-------------------------------------------------------------------|
| `variant`        | `String`  | `pills`     | Navbar variant, valid value is `pills` and `lines`                |
| `color`          | `String`  | `light`     | Navbar color, valid value is `light` and `dark`                   |
| `condensed`      | `Boolean` | `false`     | Activate condensed navigation with less space                     |
| `fixed`          | `Boolean` | `false`     | Activate fixed Navbar                                             |
| `toggleable`     | `String`  | -           | Automatically expand navigation with desired breakpoint, valid value is `sm`, `md` and `lg`          |
### Slots `<p-navbar>`

| Name             | Description                                             |
|------------------|---------------------------------------------------------|
| `default`        | Content to place in the Navbar                          |

### Props `<p-navbar-brand>`

| Props          |   Type    | Default     | Description                                                       |
|----------------|:---------:|:-----------:|-------------------------------------------------------------------|
| `href`         | `String`  | `undefined` | Target URL of the Navbar Brand link                               |

### Slots `<p-navbar-brand>`

| Name             | Description                                             |
|------------------|---------------------------------------------------------|
| `default`        | Content to place in the Navbar Brand                    |

### Props `<p-navbar-nav>`

| Props          |   Type    | Default     | Description                                                       |
|----------------|:---------:|:-----------:|-------------------------------------------------------------------|
| `align`        | `String`  | `left`     | Navbar alignment, valid value is `left`, `center` and `right`      |

### Slots `<p-navbar-nav>`

| Name             | Description                                             |
|------------------|---------------------------------------------------------|
| `default`        | Content to place in the Navbar Nav                      |

### Props `<p-navbar-toggle>`

<table>
  <thead>
    <tr>
      <th>Props</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4" class="text-center">There no prop here</td>
    </tr>
  </tbody>
</table>

### Slots `<p-navbar-toggle>`

| Name             | Description                                                            |
|------------------|------------------------------------------------------------------------|
| `default`        | Content to place expanded or collapsed icon in the Navbar Toggle       |

### Events `<p-navbar-toggle>`

| Name    | Arguments               | Description                         |
|---------|-------------------------|-------------------------------------|
| `click` | Native DOM Event object | Event when navbar toggle is clicked |
