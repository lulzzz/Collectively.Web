define("text!aurelia-materialize-bridge/click-counter.html",["module"],function(e){e.exports='<template>\n  <h2>Click counter</h2>\n\n  <button md-waves class="btn" click.delegate="increment()">Button</button>\n\n  <h2>Button was clicked ${count} times</h2>\n</template>\n'}),define("text!aurelia-materialize-bridge/breadcrumbs/breadcrumbs.css",["module"],function(e){e.exports="md-breadcrumbs a {\n  cursor: pointer;\n}\n"}),define("text!aurelia-materialize-bridge/breadcrumbs/breadcrumbs.html",["module"],function(e){e.exports='<template>\n  <require from="./breadcrumbs.css"></require>\n  <require from="./instructionFilter"></require>\n  <nav class="primary">\n    <div class="nav-wrapper">\n      <div class="col s12">\n        <template repeat.for="instruction of router.currentInstruction.getAllInstructions() | instructionFilter">\n          <a click.delegate="navigate(instruction)" class="breadcrumb">\n            ${instruction.config.title}\n          </a>\n        </template>\n      </div>\n    </div>\n  </nav>\n</template>\n'}),define("text!aurelia-materialize-bridge/card/card.css",["module"],function(e){e.exports="md-card {\n  display: block;\n}\n"}),define("text!aurelia-materialize-bridge/card/card.html",["module"],function(e){e.exports='<template>\n  <require from="./card.css"></require>\n  <div class="card ${ mdHorizontal ? \'horizontal\' : \'\' } ${ mdSize || \'\' }">\n    <div if.bind="mdImage !== null" md-waves="color: light; block: true;" class="card-image">\n      <img class="${ mdReveal === true ? \'activator\' : \'\' }" src.bind="mdImage" />\n      <span if.bind="mdReveal === false" class="card-title">${mdTitle}</span>\n    </div>\n\n    <!-- <div class="${ mdHorizontal ? \'card-stacked\' : \'\'}">\n\n    </div> -->\n    <div class="card-content">\n      <span if.bind="mdReveal === true" class="card-title activator">\n        ${mdTitle}\n        <i class="material-icons right">more_vert</i>\n      </span>\n      <span if.bind="mdImage === null" class="card-title">${mdTitle}</span>\n      <slot></slot>\n    </div>\n\n    <div show.bind="mdReveal" class="${ mdReveal ? \'card-reveal\' : \'\' }">\n      <span class="card-title ${ mdReveal ? \'activator\' : \'\' }">\n        ${mdTitle}\n        <i class="material-icons right">close</i>\n      </span>\n      <slot name="reveal-text"></slot>\n    </div>\n  </div>\n</template>\n'}),define("text!aurelia-materialize-bridge/carousel/carousel.css",["module"],function(e){e.exports="md-carousel {\r\n  display: block;\r\n}\r\n"}),define("text!aurelia-materialize-bridge/carousel/carousel-item.html",["module"],function(e){e.exports='<template class="carousel-item">\n  <a if.bind="mdHref" href.bind="mdHref">\n    <img if.bind="mdImage" src.bind="mdImage" />\n  </a>\n  <img if.bind="!mdHref" src.bind="mdImage" />\n  <slot></slot>\n</template>\n'}),define("text!aurelia-materialize-bridge/carousel/carousel.html",["module"],function(e){e.exports='<template class="carousel">\n  <require from="./carousel.css"></require>\n  <slot></slot>\n</template>\n'}),define("text!aurelia-materialize-bridge/checkbox/checkbox.html",["module"],function(e){e.exports='<template>\n  <input type="checkbox" id="${controlId}" ref="checkbox" blur.trigger="blur()" />\n  <label for="${controlId}">\n    <slot></slot>\n  </label>\n</template>\n'}),define("text!aurelia-materialize-bridge/chip/chip.html",["module"],function(e){e.exports='<template class="chip">\n  <slot></slot>\n  <i show.bind="mdClose" class="material-icons">close</i>\n</template>\n'}),define("text!aurelia-materialize-bridge/collection/collection-header.css",["module"],function(e){e.exports="md-collection-header {\n  display: block;\n}\n"}),define("text!aurelia-materialize-bridge/collection/collection-item.css",["module"],function(e){e.exports="md-collection-item {\n  display: block;\n}\n\nmd-collection-item.collection-item:not(.active):hover {\n  background-color: #ddd;\n}\n"}),define("text!aurelia-materialize-bridge/collection/md-collection-selector.css",["module"],function(e){e.exports="md-collection-selector .md-collection-selector__hover {\n  display: inline-block;\n}\nmd-collection-selector:hover .md-collection-selector__hover, md-collection-item.selected md-collection-selector .md-collection-selector__hover {\n  display: none !important;\n}\nmd-collection-selector .md-collection-selector__checkbox div {\n  margin-left: 5px;\n  display: inline-block;\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  margin-right: 11px;\n  height: 42px;\n  width: 42px;\n  line-height: 42px;\n  text-align: center;\n}\nmd-collection-selector .md-collection-selector__checkbox .md-collection-selector__hover ~ div {\n  display: none;\n}\n\nmd-collection-selector:hover .md-collection-selector__checkbox .md-collection-selector__hover ~ div, md-collection-item.selected md-collection-selector .md-collection-selector__checkbox .md-collection-selector__hover ~ div {\n  display: inline-block;\n}\n\nmd-collection-item.selected {\n  background-color: #eee;\n}\n\nmd-collection-selector md-checkbox {\n  display: inline-block;\n}\nmd-collection-selector md-collection md-checkbox .md-checkbox.is-upgraded {\n  padding-left: 16px;\n}\n"}),define("text!aurelia-materialize-bridge/collection/collection-header.html",["module"],function(e){e.exports='<template class="collection-header">\n  <require from="./collection-header.css"></require>\n  <slot></slot>\n</template>\n'}),define("text!aurelia-materialize-bridge/collection/collection-item.html",["module"],function(e){e.exports='<template class="collection-item">\n  <require from="./collection-item.css"></require>\n  <slot></slot>\n  <!-- <content select=".secondary-content"></content> -->\n</template>\n'}),define("text!aurelia-materialize-bridge/collection/collection.html",["module"],function(e){e.exports='<template>\n  <div class="collection" ref="anchor">\n    <!-- <content select="md-collection-header"></content>\n    <content select="md-collection-item"></content> -->\n    <slot></slot>\n  </div>\n</template>\n'}),define("text!aurelia-materialize-bridge/collection/md-collection-selector.html",["module"],function(e){e.exports='<template>\n  <require from="./md-collection-selector.css"></require>\n  <div class="md-collection-selector__checkbox">\n    <!-- <content select=".md-collection-selector__hover"></content> -->\n    <slot></slot>\n    <div>\n      <md-checkbox md-checked.two-way="isSelected" md-disabled.bind="mdDisabled"></mdl-checkbox>\n    </div>\n</template>\n'}),define("text!aurelia-materialize-bridge/colors/md-colors.html",["module"],function(e){e.exports='<template>\n  <require from="./colorValueConverters"></require>\n\n  <!--\n    According to Material color spec (https://www.google.com/design/spec/style/color.html#color-ui-color-application)\n    and using Materialize terminology (darken/lighten instead of hue numbers)\n    the used palettes here consist of:\n    Primary - lighten-1 (400), lighten-2 (300), lighten-3 (200)\n    Accent  - lighten-1 (400), lighten-3 (200)\n\n    These should optionally be defined by the user. At the moment, they are\n    calculated and even not exact (but close).\n\n    Focused elements are an exception, these use "lighten-0.5" which is\n    not specified anywhere.\n  -->\n\n  <style>\n  .primary {\n    background-color: ${mdPrimaryColor};\n    color: white;\n  }\n\n  .primary-text {\n    /*background-color: white;*/\n    color: ${mdPrimaryColor};\n  }\n\n  .waves-effect.waves-primary .waves-ripple {\n    background-color: ${mdPrimaryColor};\n  }\n\n  .waves-effect.waves-accent .waves-ripple {\n    background-color: ${mdAccentColor};\n  }\n\n  .accent {\n    background-color: ${mdAccentColor};\n    color: white;\n  }\n\n  .accent-text {\n    /*background-color: white;*/\n    color: ${mdAccentColor};\n  }\n\n  .error {\n    background-color: ${mdErrorColor};\n  }\n\n  .error-text {\n    color: ${mdErrorColor}\n  }\n\n  .success {\n    background-color: ${mdAccentColor};\n    color: white;\n  }\n\n  .success-text {\n    color: ${mdAccentColor};\n  }\n\n  /* buttons */\n  .btn.primary, .btn-flat.primary, .btn-large.primary {\n    transition: .2s ease-out;\n  }\n  .btn.primary:hover, .btn-flat.primary:hover, .btn-large.primary:hover {\n    background-color: ${mdPrimaryColor | lighten:1};\n    transition: .2s ease-out;\n  }\n  .btn.primary:focus, .btn-flat.primary:focus, .btn-large.primary:focus {\n    background-color: ${mdPrimaryColor | lighten:0.5};\n    transition: .2s ease-out;\n  }\n  .btn-flat:not(.disabled):hover {\n    /*background-color: ${mdAccentColor | lighten:3};*/\n    background-color: rgba(50, 50, 50, .15);\n    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n    border: none;\n    box-shadow: none;\n    transition: .2s ease-out;\n  }\n  .btn-flat:focus {\n    /*background-color: ${mdAccentColor | lighten:2};*/\n    background-color: transparent;\n    border: none;\n    box-shadow: none;\n    transition: .2s ease-out;\n  }\n\n  .btn.accent, .btn-flat.accent, .btn-large.accent {\n    transition: .2s ease-out;\n  }\n  .btn.accent:hover, .btn-flat.accent:hover, .btn-large.accent:hover, .btn-floating:hover {\n    background-color: ${mdAccentColor | lighten:1};\n    transition: .2s ease-out;\n  }\n  .btn.accent:focus, .btn-flat.accent:focus, .btn-large.accent:focus, .btn-floating:focus {\n    background-color: ${mdAccentColor | lighten:0.5};\n    transition: .2s ease-out;\n  }\n\n  /* checkbox */\n  [type="checkbox"]:checked + label:before {\n    border-right-color: ${mdAccentColor};\n    border-bottom-color: ${mdAccentColor};\n  }\n\n  [type="checkbox"].filled-in:checked + label:after {\n    border-color: ${mdAccentColor};\n    background-color: ${mdAccentColor};\n  }\n\n  [type="checkbox"]:indeterminate + label:before {\n    border-right-color: ${mdAccentColor};\n  }\n\n  /* collection */\n  md-collection .collection md-collection-item.collection-item.active {\n    background-color: ${mdAccentColor};\n    color: white;\n  }\n\n  md-collection .collection md-collection-item.collection-item .secondary-content {\n    color: ${mdAccentColor};\n  }\n\n  md-collection .collection md-collection-item.collection-item.avatar i.circle.primary {\n    background-color: ${mdPrimaryColor};\n  }\n  md-collection .collection md-collection-item.collection-item.avatar i.circle.accent {\n    background-color: ${mdAccentColor};\n  }\n  md-collection .collection md-collection-item.collection-item.avatar i.circle.error {\n    background-color: ${mdErrorColor};\n  }\n  md-collection .collection md-collection-item.collection-item.avatar i.circle.success {\n    background-color: ${mdAccentColor};\n  }\n  md-collection .collection md-collection-item.collection-item.avatar i.circle.primary-text {\n    color: ${mdPrimaryColor};\n    background-color: transparent;\n  }\n  md-collection .collection md-collection-item.collection-item.avatar i.circle.accent-text {\n    color: ${mdAccentColor};\n    background-color: transparent;\n  }\n  md-collection .collection md-collection-item.collection-item.avatar i.circle.error-text {\n    color: ${mdErrorColor};\n    background-color: transparent;\n  }\n  md-collection .collection md-collection-item.collection-item.avatar i.circle.success-text {\n    color: ${mdAccentColor};\n    background-color: transparent;\n  }   \n\n\n  /* datepicker */\n  .picker__date-display {\n    background-color: ${mdAccentColor};\n  }\n  .picker__weekday-display {\n    background-color: ${mdAccentColor | darken:1};\n  }\n  .picker__day--selected, .picker__day--selected:hover, .picker--focused .picker__day--selected {\n    background-color: ${mdAccentColor};\n  }\n  .picker__day.picker__day--today {\n    color: ${mdAccentColor}\n  }\n  .picker__footer button:not(.picker__clear) {\n    color: ${mdAccentColor}\n  }\n  .picker__footer button:focus {\n    background-color: ${mdAccentColor | lighten:2};\n  }\n\n  /* text input */\n  md-input .input-field label {\n    left: 0;\n  }\n  md-input .input-field input[type=text]:focus {\n    border-bottom: 1px solid ${mdAccentColor};\n    box-shadow: 0 1px 0 0 ${mdAccentColor};\n  }\n  md-input .input-field input[type=text]:focus + label {\n    color: ${mdAccentColor};\n  }\n  md-input .input-field input[type=email]:focus {\n    border-bottom: 1px solid ${mdAccentColor};\n    box-shadow: 0 1px 0 0 ${mdAccentColor};\n  }\n  md-input .input-field input[type=email]:focus + label {\n    color: ${mdAccentColor};\n  }\n  md-input .input-field input[type=password]:focus {\n    border-bottom: 1px solid ${mdAccentColor};\n    box-shadow: 0 1px 0 0 ${mdAccentColor};\n  }\n  md-input .input-field input[type=password]:focus + label {\n    color: ${mdAccentColor};\n  }\n  md-input .input-field .prefix.active {\n    color: ${mdAccentColor};\n  }\n  md-input textarea.materialize-textarea:focus:not([readonly]) {\n    border-bottom: 1px solid ${mdAccentColor};\n    box-shadow: 0 1px 0 0 ${mdAccentColor};\n  }\n  md-input textarea.materialize-textarea:focus:not([readonly]) + label {\n    color: ${mdAccentColor}\n  }\n\n  md-input input:not([type]).invalid + label:after,\n  md-input input:not([type]):focus.invalid + label:after,\n  md-input input[type=text].invalid + label:after,\n  md-input input[type=text]:focus.invalid + label:after,\n  md-input input[type=password].invalid + label:after,\n  md-input input[type=password]:focus.invalid + label:after,\n  md-input input[type=email].invalid + label:after,\n  md-input input[type=email]:focus.invalid + label:after,\n  md-input input[type=url].invalid + label:after,\n  md-input input[type=url]:focus.invalid + label:after,\n  md-input input[type=time].invalid + label:after,\n  md-input input[type=time]:focus.invalid + label:after,\n  md-input input[type=date].invalid + label:after,\n  md-input input[type=date]:focus.invalid + label:after,\n  md-input input[type=datetime].invalid + label:after,\n  md-input input[type=datetime]:focus.invalid + label:after,\n  md-input input[type=datetime-local].invalid + label:after,\n  md-input input[type=datetime-local]:focus.invalid + label:after,\n  md-input input[type=tel].invalid + label:after,\n  md-input input[type=tel]:focus.invalid + label:after,\n  md-input input[type=number].invalid + label:after,\n  md-input input[type=number]:focus.invalid + label:after,\n  md-input input[type=search].invalid + label:after,\n  md-input input[type=search]:focus.invalid + label:after,\n  md-input textarea.materialize-textarea.invalid + label:after,\n  md-input textarea.materialize-textarea:focus.invalid + label:after\n  {\n    color: ${mdErrorColor}\n  }\n\n  /* text input aurelia-validation messages */\n  .md-input-validation {\n    left: 0;\n    /*color: #f44336;*/\n    color: ${mdErrorColor};\n    font-size: 0.8rem;\n    transition: opacity .2s ease-out;\n    margin-top: -4px;\n    margin-bottom: 0;\n  }\n  @media only screen and (min-width: 0) {\n    .md-input-validation-first {\n      margin-top: -14px;\n      margin-bottom: -2px;\n    }\n  }\n  @media only screen and (min-width: 992px) {\n    .md-input-validation-first {\n      margin-top: -18px;\n      padding-bottom: 3px;\n    }\n  }\n  @media only screen and (min-width: 1200px) {\n    .md-input-validation-first {\n      margin-top: -19px;\n    }\n  }\n\n  /* pagination */\n  md-pagination .pagination li.active {\n    background-color: ${mdPrimaryColor}\n  }\n\n  /* progress */\n  md-progress .progress {\n    background-color: ${mdAccentColor | lighten:2};\n  }\n\n  md-progress .progress .determinate, md-progress .progress .indeterminate {\n    background-color: ${mdAccentColor};\n  }\n\n  /* radio input */\n  md-radio input[type="radio"]:checked + label:after {\n    border: 2px solid ${mdAccentColor};\n    background-color: ${mdAccentColor};\n  }\n  md-radio [type="radio"].with-gap:checked + label:before {\n    border: 2px solid ${mdAccentColor};\n  }\n  md-radio [type="radio"].with-gap:checked + label:after {\n    border: 2px solid ${mdAccentColor};\n    background-color: ${mdAccentColor};\n  }\n\n  /* range */\n  md-range .range-field input[type="range"]::-webkit-slider-thumb {\n    background: ${mdAccentColor};\n  }\n  md-range .range-field input[type="range"]::-moz-range-thumb {\n    background: ${mdAccentColor};\n  }\n  md-range .range-field input[type="range"]::-ms-thumb {\n    background: ${mdAccentColor};\n  }\n  md-range input[type="range"] + .thumb {\n    background-color: ${mdAccentColor} !important;\n  }\n\n  /* select */\n  .dropdown-content li > a, .dropdown-content li > span {\n    color: ${mdAccentColor};\n  }\n\n  /* side-nav */\n  .side-nav .collapsible-body li.active, .side-nav.fixed .collapsible-body li.active {\n    background-color: ${mdPrimaryColor};\n  }\n\n  /* slider */\n  .slider .indicators .indicator-item.active {\n    background-color: ${mdAccentColor};\n  }\n\n  /* switch */\n  md-switch.switch label input[type=checkbox]:checked + .lever {\n    background-color: ${mdAccentColor | lighten:1};\n  }\n  md-switch.switch label input[type=checkbox]:checked + .lever:after {\n    background-color: ${mdAccentColor};\n  }\n\n  /* tabs */\n\n  .tab.primary-text a {\n    color: ${mdPrimaryColor};\n  }\n  .tab.primary-text a:hover {\n    color: ${mdPrimaryColor | lighten:2};\n  }\n  .tabs .indicator {\n    background-color: ${mdPrimaryColor | lighten:2};\n  }\n\n  /* well */\n  md-well li.active {\n    border-right: 2px solid ${mdPrimaryColor};\n    background-color: ${mdPrimaryColor | lighten:3};\n  }\n\n  /* footer */\n  footer.page-footer {\n    background-color: ${mdPrimaryColor};\n  }\n\n  /* md-select label */\n  .select-wrapper input {\n    // make input fit in div\n    display: inline-block !important;\n    // fix validation border thickness\n    border-bottom: 1px solid #4CAF50;\n  }\n\n  .select-wrapper input.invalid {\n    border-bottom: 1px solid ${mdErrorColor};\n  }\n\n  .select-wrapper + label {\n    color: ${mdAccentColor};\n    width: 100%;\n  }\n  /* position validation label */\n  .select-wrapper + label:after {\n    display: block;\n    content: "";\n    position: absolute;\n    top: 60px;\n    opacity: 0;\n    transition: .2s opacity ease-out, .2s color ease-out;\n    transform: translateY(0) !important;\n  }\n  /* set validation text */\n  .select-wrapper.invalid + label:after {\n    content: attr(data-error);\n    color: ${mdErrorColor};\n    opacity: 1;\n  }\n\n  </style>\n</template>\n'}),define("text!aurelia-materialize-bridge/dropdown/dropdown-element.html",["module"],function(e){e.exports='<template md-button class="dropdown-button" data-activates="${ controlId }">\n  ${mdTitle}\n  <div id="${ controlId }" class=\'dropdown-content\'>\n    <slot></slot>\n  </div>\n</template>\n'}),define("text!aurelia-materialize-bridge/fab/fab.html",["module"],function(e){e.exports='<template>\n  <a if.bind="mdFixed === false" md-button="large.bind: mdLarge;" md-waves="color: light;" class="btn-floating">\n    <slot></slot>\n  </a>\n\n  <div if.bind="mdFixed === true" class="fixed-action-btn" style="bottom: 45px; right: 24px;">\n    <a md-button="large: true;" md-waves="color: light;" class="btn-floating">\n      <slot></slot>\n    </a>\n  </div>\n</template>\n'}),define("text!aurelia-materialize-bridge/file/file.html",["module"],function(e){e.exports='<template>\n    <div class="file-field input-field">\n        <div class="btn accent">\n            <span>${mdCaption}</span>\n            <input type="file" multiple.bind="mdMultiple" files.bind="files" />\n        </div>\n        <div class="file-path-wrapper">\n            <input class="file-path validate" type="text" value.bind="mdLabelValue" ref="filePath" />\n        </div>\n    </div>\n</template>\n'}),define("text!aurelia-materialize-bridge/input/input.css",["module"],function(e){e.exports="/*md-input .input-field label {\n  transform: translateX(-11px);\n}\nmd-input .input-field label.active {\n  transform: translateX(-11px) translateY(-140%);\n}*/\n\nmd-input .input-field label.active {\n  width: 100%;\n}\n"}),define("text!aurelia-materialize-bridge/input/input.html",["module"],function(e){e.exports='<template>\n  <require from="./input.css"></require>\n  <div class="input-field">\n    <!-- <content select="[md-prefix]"></content> -->\n    <slot></slot>\n    <input if.bind="mdTextArea === false" id="${controlId}" type.bind="mdType" step.bind="mdStep" ref="input" value.bind="mdValue" disabled.bind="mdDisabled" blur.trigger="blur()" />\n    <textarea if.bind="mdTextArea === true" id="${controlId}" ref="input" value.bind="mdValue" class="materialize-textarea" disabled.bind="mdDisabled" blur.trigger="blur()"></textarea>\n    <label for="${controlId}" ref="label">${mdLabel}</label>\n  </div>\n</template>\n'}),define("text!aurelia-materialize-bridge/navbar/navbar.css",["module"],function(e){e.exports="md-navbar .primary {\n  transition: all .3s ease-out;\n}\n"}),define("text!aurelia-materialize-bridge/navbar/navbar.html",["module"],function(e){e.exports='<template>\n  <require from="./navbar.css"></require>\n  <div ref="fixedAnchor">\n    <nav class="primary">\n      <div class="nav-wrapper">\n        <slot></slot>\n      </div>\n    </nav>\n  </div>\n</template>\n'}),define("text!aurelia-materialize-bridge/pagination/pagination.html",["module"],function(e){e.exports='<template>\n  <ul class="pagination">\n    <template if.bind="mdShowFirstLast">\n      <li md-waves click.delegate="setFirstPage()" class="${ mdActivePage === 1 ? \'disabled\' : \'\' }"><a><i class="material-icons">first_page</i></a></li>\n    </template>\n    <template if.bind="mdShowPrevNext">\n      <li md-waves click.delegate="setPreviousPage()" class="${ mdActivePage === 1 ? \'disabled\' : \'\' }"><a><i class="material-icons">chevron_left</i></a></li>\n    </template>\n    <template if.bind="mdShowPageLinks">\n      <li md-waves click.delegate="setActivePage(p+1)" repeat.for="p of mdPageLinks" class="${ p+1 === mdActivePage ? \'active\' : \'\'}">\n        <span if.bind="$first && p > 0">...</span>\n        <a>${p+1}</a>\n        <span if.bind="$last && p < pages - 1">...</span>\n      </li>\n    </template>\n    <template if.bind="mdShowPrevNext">\n      <li md-waves click.delegate="setNextPage()" class="${ mdActivePage == pages ? \'disabled\' : \'\' }"><a><i class="material-icons">chevron_right</i></a></li>\n    </template>\n    <template if.bind="mdShowFirstLast">\n      <li md-waves click.delegate="setLastPage()" class="${ mdActivePage == pages ? \'disabled\' : \'\' }"><a><i class="material-icons">last_page</i></a></li>\n    </template>\n  </ul>\n</template>\n'}),define("text!aurelia-materialize-bridge/progress/progress.html",["module"],function(e){e.exports='<template>\n  <template if.bind="mdType === \'linear\'">\n    <div class="progress">\n      <div class="${ mdValue === null ? \'indeterminate\' : \'determinate\' }" css="width: ${ mdValue ? mdValue : 0 }%"></div>\n  </div>\n  </template>\n  <template if.bind="mdType === \'circular\' && mdColor !== \'flashing\'">\n    <div class="preloader-wrapper ${mdSize} active" ref="wrapper">\n      <div class="spinner-layer spinner-${mdColor}-only">\n        <div class="circle-clipper left">\n          <div class="circle"></div>\n        </div><div class="gap-patch">\n          <div class="circle"></div>\n        </div><div class="circle-clipper right">\n          <div class="circle"></div>\n        </div>\n      </div>\n    </div>\n  </template>\n  <template if.bind="mdType === \'circular\' && mdColor === \'flashing\'">\n    <div class="preloader-wrapper ${mdSize} active" ref="wrapper">\n      <div class="spinner-layer spinner-blue">\n        <div class="circle-clipper left">\n          <div class="circle"></div>\n        </div><div class="gap-patch">\n          <div class="circle"></div>\n        </div><div class="circle-clipper right">\n          <div class="circle"></div>\n        </div>\n      </div>\n\n      <div class="spinner-layer spinner-red">\n        <div class="circle-clipper left">\n          <div class="circle"></div>\n        </div><div class="gap-patch">\n          <div class="circle"></div>\n        </div><div class="circle-clipper right">\n          <div class="circle"></div>\n        </div>\n      </div>\n\n      <div class="spinner-layer spinner-yellow">\n        <div class="circle-clipper left">\n          <div class="circle"></div>\n        </div><div class="gap-patch">\n          <div class="circle"></div>\n        </div><div class="circle-clipper right">\n          <div class="circle"></div>\n        </div>\n      </div>\n\n      <div class="spinner-layer spinner-green">\n        <div class="circle-clipper left">\n          <div class="circle"></div>\n        </div><div class="gap-patch">\n          <div class="circle"></div>\n        </div><div class="circle-clipper right">\n          <div class="circle"></div>\n        </div>\n      </div>\n    </div>\n  </template>\n</template>\n'}),define("text!aurelia-materialize-bridge/radio/radio.html",["module"],function(e){e.exports='<template>\n  <input if.bind="!mdModel" type="radio" name="${mdName}" value.bind="mdValue" id="${controlId}" checked.bind="mdChecked" ref="radio" />\n  <input if.bind="!!mdModel" type="radio" name="${mdName}" model.bind="mdModel" id="${controlId}" checked.bind="mdChecked" ref="radio" />\n  <label for="${controlId}">\n    <slot></slot>\n  </label>\n</template>\n'}),define("text!aurelia-materialize-bridge/range/range.html",["module"],function(e){e.exports='<template>\n  <p class="range-field">\n    <input type="range" min.one-time="mdMin" max.one-time="mdMax" step.one-time="mdStep" value.bind="mdValue" ref="input" />\n  </p>\n</template>\n'}),define("text!aurelia-materialize-bridge/sidenav/sidenav.css",["module"],function(e){e.exports="md-sidenav li[md-waves] {\n  display: block;\n}\nmd-sidenav li a:hover {\n  background-color: transparent;\n  display: inline-block;\n  width: 100%;\n}\n"}),define("text!aurelia-materialize-bridge/sidenav/sidenav.html",["module"],function(e){e.exports='<template>\n  <require from="./sidenav.css"></require>\n  <div id="${ controlId }" class="side-nav" ref="sidenav">\n    <slot></slot>\n  </div>\n</template>\n'}),define("aurelia-materialize-bridge/index",["exports","./autocomplete/autocomplete","./badge/badge","./box/box","./breadcrumbs/breadcrumbs","./breadcrumbs/instructionFilter","./button/button","./card/card","./carousel/carousel-item","./carousel/carousel","./char-counter/char-counter","./checkbox/checkbox","./chip/chip","./chip/chips","./collapsible/collapsible","./collection/collection-header","./collection/collection-item","./collection/collection","./collection/md-collection-selector","./colors/colorValueConverters","./colors/md-colors","./common/attributeManager","./common/attributes","./common/constants","./common/events","./datepicker/datepicker.default-parser","./datepicker/datepicker","./dropdown/dropdown-element","./dropdown/dropdown","./dropdown/dropdown-fix","./fab/fab","./file/file","./footer/footer","./input/input-prefix","./input/input-update-service","./input/input","./modal/modal-trigger","./navbar/navbar","./pagination/pagination","./parallax/parallax","./progress/progress","./pushpin/pushpin","./radio/radio","./range/range","./scrollfire/scrollfire-patch","./scrollfire/scrollfire-target","./scrollfire/scrollfire","./scrollspy/scrollspy","./select/select","./sidenav/sidenav-collapse","./sidenav/sidenav","./slider/slider","./switch/switch","./tabs/tabs","./toast/toastService","./tooltip/tooltip","./transitions/fadein-image","./transitions/staggered-list","./validation/validationRenderer","./waves/waves","./config-builder","./common/polyfills"],function(e,n,t,i,r,o,l,c,a,d,s,u,m,p,f,b,g,v,h,y,k,x,j,O,$,w,P,C,A,E,_,z,q,I,S,T,F,M,R,V,L,H,N,B,D,X,Y,G,J,K,Q,U,W,Z,ee,ne,te,ie,re,oe,le,ce){"use strict";function ae(){(0,ce.polyfillElementClosest)()}function de(e,n){ae();var t=new le.ConfigBuilder;void 0!==n&&"function"==typeof n&&n(t),t.useGlobalResources&&e.globalResources(t.globalResources),t.useScrollfirePatch&&(new D.ScrollfirePatch).patch()}Object.defineProperty(e,"__esModule",{value:!0}),e.configure=de,Object.keys(n).forEach(function(t){"default"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return n[t]}})}),Object.keys(t).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})}),Object.keys(i).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return i[n]}})}),Object.keys(r).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[n]}})}),Object.keys(o).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return o[n]}})}),Object.keys(l).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return l[n]}})}),Object.keys(c).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return c[n]}})}),Object.keys(a).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return a[n]}})}),Object.keys(d).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return d[n]}})}),Object.keys(s).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return s[n]}})}),Object.keys(u).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return u[n]}})}),Object.keys(m).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return m[n]}})}),Object.keys(p).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return p[n]}})}),Object.keys(f).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return f[n]}})}),Object.keys(b).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return b[n]}})}),Object.keys(g).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return g[n]}})}),Object.keys(v).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return v[n]}})}),Object.keys(h).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return h[n]}})}),Object.keys(y).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return y[n]}})}),Object.keys(k).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return k[n]}})}),Object.keys(x).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return x[n]}})}),Object.keys(j).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return j[n]}})}),Object.keys(O).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return O[n]}})}),Object.keys($).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return $[n]}})}),Object.keys(w).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return w[n]}})}),Object.keys(P).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return P[n]}})}),Object.keys(C).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return C[n]}})}),Object.keys(A).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[n]}})}),Object.keys(E).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return E[n]}})}),Object.keys(_).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return _[n]}})}),Object.keys(z).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return z[n]}})}),Object.keys(q).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,
get:function(){return q[n]}})}),Object.keys(I).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return I[n]}})}),Object.keys(S).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return S[n]}})}),Object.keys(T).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return T[n]}})}),Object.keys(F).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return F[n]}})}),Object.keys(M).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return M[n]}})}),Object.keys(R).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return R[n]}})}),Object.keys(V).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return V[n]}})}),Object.keys(L).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return L[n]}})}),Object.keys(H).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return H[n]}})}),Object.keys(N).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return N[n]}})}),Object.keys(B).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return B[n]}})}),Object.keys(D).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return D[n]}})}),Object.keys(X).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return X[n]}})}),Object.keys(Y).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return Y[n]}})}),Object.keys(G).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return G[n]}})}),Object.keys(J).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return J[n]}})}),Object.keys(K).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return K[n]}})}),Object.keys(Q).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return Q[n]}})}),Object.keys(U).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return U[n]}})}),Object.keys(W).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return W[n]}})}),Object.keys(Z).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return Z[n]}})}),Object.keys(ee).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return ee[n]}})}),Object.keys(ne).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return ne[n]}})}),Object.keys(te).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return te[n]}})}),Object.keys(ie).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return ie[n]}})}),Object.keys(re).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return re[n]}})}),Object.keys(oe).forEach(function(n){"default"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return oe[n]}})})}),define("aurelia-materialize-bridge",["aurelia-materialize-bridge/index"],function(e){return e});