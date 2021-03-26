# React components and hooks

## Overview
<ul>
  <li>Created the project with aim to separate presentational components from hooks.</li>
  <li>Hooks will contain stateful logic and UI components are pure presentational stateless components.</li>
  <li>Props will be passed to UI components to render and hooks will handle the UI stateful logic.</li>
</ul>

## Source

<ul>
  <li>Presentational/Stateless components present are in folder - <strong>src/components</strong>.</li>
  <li>Trying to following <a href="https://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</a> principles.</li>
  <li>Components are divided into <strong>atoms</strong>, <strong>molecules</strong>, <strong>organisms</strong>.</li>
  <li>Hooks are present in folder - <strong>src/hooks</strong>.</li>
  <li>Examples of combining hooks and components are present in folder - <strong>src/examples</strong>.</li>
</ul>

## Hooks and applicable components

| Hooks      | Applicable Components | Description     |
| :---        |    :----:   |          ---: |
| useToggle      | Modal Dialog       | As these components has two states true or false   |
| useToggleList   | Accordion, Tabs   | As it has collection of states each on and off and we have to make one of them true rest are off |

