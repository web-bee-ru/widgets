# Виджеты

См. также [гайдлайны по написанию виджетов](guidelines_widgets.md).

## Оверлейные

Виджеты, позволяющие вытащить контент из [нормального потока](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow), как визуально так и физически. Должны поддерживать ленивый рендеринг.

- Portal
    - Для React: из коробки
    - Для Vue 2: из vue-portal
    - Для Vue 3: из коробки
- Modal
    - Должны поддерживаться вложенные модальные окна
    - Для React: из react-bootstrap
    - Для Vue: ???
- Popover
    - Иногда известен как Dropdown, Popup, Popper или Overlay
    - Для React: из react-bootstrap
    - Для Vue: ???

## Декораторы

Виджеты, оборачивающие произвольный контент. Должны поддерживать ленивый рендеринг.

- Tabs
- MaskedArea (затенение контента)

## Элементы форм

- Button
- FormGroup (оборачивание элемента формы в блок с лейблом)

Примитивы:
- Input (см. текстовые типы среди [input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input))
    - `value: string`
- Textarea
    - `value: string`
- Checkbox
    - `value: boolean`
- Radio
    - `value: boolean`
- Range
    - `value: number`
- File
    - Не поддерживает `value`, т.к. оно не может быть указано программно.

Выбор из статического списка:
- Select, RadioGroup
    - `value: OptionKey | null`
    - `options: Option[]`
- MultiSelect, CheckboxGroup
    - `value: OptionKey[]`
    - `options: Option[]`

Выбор из динамического списка с ручным добавлением:
- Combo
    - `value: Option | null`
    - `optionsFn: (input: string) => Option[]`
    - `makeFn?: (input: string) => Option`
- MultiCombo
    - `value: Option[]`
    - `optionsFn: (input: string) => Option[]`
    - `makeFn?: (input: string) => Option`

Специализированные:
- DatePicker
    - `value: string` в формате ISO
- DateRangePicker
    - `value: string` в формате ISO

## @TODO: Продумать виджеты

- Маска для произвольного поля ввода
