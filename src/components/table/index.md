---
title: Table · Components
description: Delightful datatables.
---

<script setup>
  import pTable from './Table.vue'
  import pAvatar from '../avatar/Avatar.vue'
  import pLabel from '../label/Label.vue'
  import pHeading from '../heading/Heading.vue'
  import pText from '../text/Text.vue'
  import { defineTable } from '.'
  import { ref } from 'vue-demi'

  const fields = defineTable([
    'id',
    'name',
    'status',
  ])

  const fields2 = defineTable([
    {
      key  : 'id',
      label: 'PrivyID',
    },
    {
      key  : 'name',
      label: 'Name',
    },
    {
      key      : 'status',
      label    : 'Is Active',
      formatter: (value) => value ? 'Active': 'Deactive',
    },
  ])

  const items = ref([
    {
      id    : 1,
      name  : 'Tarjono',
      status: true,
    },
    {
      id    : 2,
      name  : 'Renatta',
      status: false,
    },
    {
      id    : 3,
      name  : 'Jonathan Smith',
      status: true,
    },
    {
      id    : 4,
      name  : 'Arch Brown',
      status: true,
    },
  ])

  const itemsB = ref([
    {
      id    : 1,
      name  : 'Tarjono',
      status: true,
    },
    {
      id    : 2,
      name  : 'Tarjono',
      status: false,
    },
    {
      id    : 3,
      name  : 'Tarjono',
      status: true,
    },
    {
      id         : 4,
      name       : 'Can\'t be selected',
      status     : true,
      _selectable: false,
    },
  ])

  const itemsC = ref([])

  const selected = ref([])
  const selectedA = ref([])
</script>

# Table

> Delightful datatables.

## Usage

### Simple Usage

<preview class="flex-col space-y-2">
  <p-table :fields="fields" :items="items" />
</preview>

```vue
<template class="flex-col space-y-2">
  <p-table :fields="fields" :items="items" />
</template>

<script setup>
import { defineTable } from '@privyid/persona/core'

const fields = defineTable([
  'id',
  'name',
  'status',
])

const items = ref([
  {
    id    : 1,
    name  : 'Tarjono',
    status: true,
  },
  {
    id    : 2,
    name  : 'Tarjono',
    status: false,
  },
  {
    id    : 3,
    name  : 'Tarjono',
    status: true,
  },
  {
    id    : 4,
    name  : 'Tarjono',
    status: true,
  },
])
</script>
```

### Custom Label + Formatter

<preview class="flex-col space-y-2">
  <p-table :fields="fields2" :items="items" />
</preview>

```vue
<template class="flex-col space-y-2">
  <p-table :fields="fields" :items="items" />
</template>

<script setup>
import { defineTable } from '@privyid/persona'

const fields = defineTable([
  {
    key  : 'id',
    label: 'PrivyID',
  },
  {
    key  : 'name',
    label: 'Name',
  },
  {
    key      : 'status',
    label    : 'Is Active',
    formatter: (value) => value ? 'Active': 'Deactive',
  },
])

const items = ref([
  {
    id    : 1,
    name  : 'Tarjono',
    status: true,
  },
  {
    id    : 2,
    name  : 'Tarjono',
    status: false,
  },
  {
    id    : 3,
    name  : 'Tarjono',
    status: true,
  },
  {
    id    : 4,
    name  : 'Tarjono',
    status: true,
  },
])
</script>
```

### Custom Empty Label
Empty state label customization can be done through the `empty-label` prop.
#### Default
<preview class="flex-col space-y-2">
  <p-table :fields="fields" :items="itemsC" />
</preview>

```vue
<template>
  <p-table :fields="fields" :items="items" />
</template>
```

#### Custom
<preview class="flex-col space-y-2">
  <p-table :fields="fields" :items="itemsC" empty-label="There’s nothing to show here" />
</preview>

```vue
<template>
  <p-table 
    :fields="fields" :items="items" 
    empty-label="There’s nothing to show here" />
</template>
```

## Variants

There are 2 variants: `flexible` and `static`, default is `flexible`

<preview class="flex-col space-y-2">
  <p-table variant="flexible" :fields="fields" :items="items" />
  <p-table variant="static" :fields="fields" :items="items" />
</preview>

```vue
<template>
  <p-table variant="flexible" :fields="fields" :items="items" />
  <p-table variant="static" :fields="fields" :items="items" />
</template>
```

## Selectable

Add prop `selectable` to enable checkbox inside table

<preview class="flex-col space-y-2">
  <p-table selectable :fields="fields" :items="items" />
</preview>

```vue
<template>
  <p-table selectable :fields="fields" :items="items" />
</template>
```

### Binding v-model

The result of selected item is bind inside `v-model`

<preview class="flex-col space-y-2">
  <p-table v-model="selected" selectable :fields="fields" :items="items" />
</preview>

```vue
<template>
  <p-table v-model="selected" selectable :fields="fields" :items="items" />
</template>
```

**Selected :**

<pre><code>{{ selected }}</code></pre>

### Disabling some item

set `_selectable` to `false` in your items to disabled item from selection.

<preview class="flex-col space-y-2">
  <p-table v-model="selectedA" selectable :fields="fields" :items="itemsB" />
</preview>

```vue
<template>
  <p-table v-model="selectedA" selectable :fields="fields" :items="items" />
</template>

<script setup>
  const items = ref([
    {
      id    : 1,
      name  : 'Tarjono',
      status: true,
    },
    {
      id    : 2,
      name  : 'Tarjono',
      status: false,
    },
    {
      id    : 3,
      name  : 'Tarjono',
      status: true,
    },
    {
      id         : 4,
      name       : 'Can\'t be selected',
      status     : true,
      _selectable: false,
    },
  ])
</script>
```

## Draggable

add prop `draggable` to enable drag-to-sort.

<preview class="flex-col space-y-2">
  <p-table :fields="fields" v-model:items="items" draggable />
</preview>

```vue
<template>
  <p-table :fields="fields" v-model:items="items" draggable />
</template>
```
## Customization Slot

### Custom Cell

<preview class="flex-col space-y-2">
  <p-table :fields="fields" :items="items">
    <template #cell(name)="{ item }">
      <div class="flex items-center space-x-2">
        <p-avatar size="sm" :name="item.name" />
        <span>{{ item.name }}</span>
      </div>
    </template>
    <template #cell(status)="{ item }">
      <p-label variant="light" :color="item.status ? 'success' : 'default'" size="sm">
        {{ item.status ? 'active' : 'inactive' }}
      </p-label>
    </template>
  </p-table>
</preview>

```vue
<template>
  <p-table :fields="fields" :items="items">
    <template #cell(name)="{ item }">
      <div class="flex items-center space-x-2">
        <p-avatar size="sm" :name="item.name" />
        <span>{{ item.name }}</span>
      </div>
    </template>
    <template #cell(status)="{ item }">
      <p-label 
        variant="light" :color="item.status ? 'success' : 'default'" 
        size="sm">
        {{ item.status ? 'active' : 'inactive' }}
      </p-label>
    </template>
  </p-table>
</template>
```

### Custom Head

<preview class="flex-col space-y-2">
  <p-table :fields="fields" :items="items">
    <template #head(status)="{ label }">
      {{ label }}<p-label size="xs" class="ml-1">new</p-label>
    </template>
  </p-table>
</preview>

```vue
<template>
  <p-table :fields="fields" :items="items">
    <template #head(status)="{ label }">
      {{ label }}<p-label size="xs" class="ml-1">new</p-label>
    </template>
  </p-table>
</template>
```

### Custom Empty
Table has default empty state, but it's be able to customize by own via slot `empty`.

<preview class="flex-col space-y-2">
  <p-table :fields="fields" :items="itemsC">
    <template #empty>
      <div class="flex flex-col justify-center items-center">
        <img src="../../public/assets/images/img-table-empty-records.svg">
        <p-heading element="h6" class="mt-12">Uh oh, no data</p-heading>
        <p-text variant="body2" class="py-4 text-subtle dark:text-dark-subtle">We’re empty-handed!</p-text>
      </div>
    </template>
  </p-table>
</preview>

```vue
<template>
  <p-table :fields="fields" :items="items">
    <template #empty>
      <div class="flex flex-col justify-center items-center">
        <img src="/assets/images/img-table-empty-records.svg">
        <p-heading element="h6" class="mt-12">Uh oh, no data</p-heading>
        <p-text variant="body2" class="py-4 text-subtle dark:text-dark-subtle">
          We’re empty-handed!
        </p-text>
      </div>
    </template>
  </p-table>
</template>
```

## API

### Props

| Props        |   Type    |  Default   | Description                                              |
|--------------|:---------:|:----------:|----------------------------------------------------------|
| `variant`    | `String`  | `flexible` | Table style variant, valid value is `flexible`, `static` |
| `items`      |  `Array`  |    `-`     | Table items                                              |
| `fields`     |  `Array`  |    `-`     | Table fields                                             |
| `selectable` | `Boolean` |  `false`   | Enable checkbox                                          |
| `draggable`  | `Boolean` |  `false`   | Enable draggable                                         |
| `modelValue` |  `Array`  |    `-`     | `v-model` for selected value                             |
| `empty-label` | `String` |  `There are no records to show`   | Table empty state label            |

### Slots

| Name         | Description                 |
|--------------|-----------------------------|
| `cell(:key)` | Content for checked label   |
| `head(:key)` | Content for unchecked label |
| `empty`      | Content for empty state     |

### Events

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Arguments</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3" class="text-center">There no props here</td>
    </tr>
  </tbody>
</table>
