# angular-clipboard-auto

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
