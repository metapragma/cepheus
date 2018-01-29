# cepheus

[![build status](https://secure.travis-ci.org/escapace/cepheus.png)](https://travis-ci.org/escapace/cepheus)
[![Greenkeeper badge](https://badges.greenkeeper.io/escapace/cepheus.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/badge/license-Mozilla%20Public%20License%20Version%202.0-blue.svg)]()

#### Work in progress 
### Cepheus — functional CSS utility class generator

## Overview

We had a problem. We found ourselves writing the same piece of CSS over and over. Handwriting it is very time-consuming, repetitive and results in lots of duplication. “Zombie code” is plenty and nobody risks removing it. This, in turn, results in much more CSS shipped than you really need. 

The idea of functional CSS deals with all of these issues.  It ensures that the UI is totally predictable and free of side-effects. Functional CSS ensures consistency: it’s easy to compose consistent spacing and typography rules which give your layout beautiful horizontal and vertical rhythm. Each class has a very limited responsibility, hence the risk of mutation — changing a property somewhere and breaking code elsewhere — is eliminated.  After reading the class names applied to an element, it becomes immediately obvious what it looks like. UI is updated in only one place — single utility classes. Thanks to this, development time is reduced significantly which makes it very useful for rapid prototyping. Maintenance becomes much easier. 

Cepheus is inspired by these ideas. It utilizes modules from tachyons.io. The type-scale module is modified. Modules providing default baseline rhythm and flexible debug options are added. These 53 modules adhere to the principles of atomic, functional design. Every module is self-contained and responsible for its own little, encapsulated functionality. They cover the whole CSS spectrum — typography to spacing, theming to elements. Built mobile-first to ensure it works with all devices — big, small and in-between, Cepheus is lightweight and contains minimal code. It can be used to create modular, reusable UI components, providing the base building blocks. A wide range of Sass variables gives it flexibility and loose coupling. An important thing to note is that users are able to add custom values whenever they need it. Cepheus is built with independent modules, which means you can import only the parts you’re going to use, decreasing import size. The built-in debug grid helps you catch and solve spacing and layout issues. 


## Usage Example

Applying these principles, we construct a simple button using Cepheus utility classes

``` html
<div class="w4 h2 br4 bg-light-red flex justify-center items-center">
  <div class="white-90">Button</div>
</div>
```


- w4 — width: 8rem
- h3 —  height: 3rem
- br4 — border-radius, 1rem
- bg-light-red — background-color, #ff725c
- flex — display: flex
- justify-center — justify-content: center
- iterms-center — align-items: center
- white-90 — color: rgba(255, 255, 255, 0.9)

![Button created with Cepheus](https://d2mxuefqeaa7sj.cloudfront.net/s_F6609529F3546F0A4C73ACCCF1F64CA88C1057BEFBE7EAE75895C6B6E4901828_1516572402623_Screenshot+from+2018-01-22+02-04-17.png)


## Installation Instructions

cepheus-cli


## Configuration

partial imports options, debug=true : debug=false
