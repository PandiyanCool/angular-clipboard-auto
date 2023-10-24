[![Build Status](https://dev.azure.com/pandiyancool/Angular%20Clipboard%20auto/_apis/build/status/Angular%20Clipboard%20auto-CI?branchName=master)](https://dev.azure.com/pandiyancool/Angular%20Clipboard%20auto/_build/latest?definitionId=4&branchName=master) ![npm](https://img.shields.io/npm/dt/angular-clipboard-auto.svg) ![npm](https://img.shields.io/npm/v/angular-clipboard-auto.svg)

# Not maintaining actively - If you wish to maintain please DM on twitter :)

# angular-clipboard-auto


<a href="https://www.producthunt.com/posts/angular-clipboard-auto?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-angular&#0045;clipboard&#0045;auto" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=165286&theme=light" alt="Angular&#0032;Clipboard&#0032;Auto - Create&#0032;a&#0032;copy&#0032;icon&#0032;to&#0032;your&#0032;text&#0032;element&#0032;with&#0032;one&#0032;attribute&#0046; | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>


## Installation

To install this library, run:

```bash
$ npm install angular-clipboard-auto --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install angular-clipboard-auto
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { ClipboardModule } from 'angular-clipboard-auto';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
  
<!-- Add attribute appCopy in your html code -->
  
<input appCopy type="text" #text1 value="hello world">
  
<!-- And refer font awesome in your index.html to view copy symbol -->
  
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous">
```
## Support
If you think, this package helps you in some way. Please feel free to [star the project](https://github.com/PandiyanCool/angular-clipboard-auto) in Github.


## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Pandiyan](mailto:pandiyanit7@gmail.com)
