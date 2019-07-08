This project was bootstrapped with [Create React App]

## ComboBox form control usage example

Pass following props 
placeholder 
searchPlaceholder
label (label of the combobox)
selectedOptions (pas array of ids if you want pre selected options)
optionOnchange (onchange event returns current changed options id and all selected options id)
data (an array of objects with id and name keys)
``` eg: [
        { id: '1', name: 'Candy Eat' },
        { id: '2', name: 'Onions Pick' },
        { id: '3', name: 'Fanny Pick' },
        { id: '4', name: 'Click o Wisp' }
    ]
``` 

```
import Combobox from '../common/combobox/Combobox'

<Combobox
        data={options}
        placeholder='placeholder text'
        searchPlaceholder='placeholder while searching'
        label='Label to be shown'
        selectedOptions={selectedOptions}
        optionOnchange={optionOnchange}
        />

```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.<br>


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>


### `npm run test -- --coverage --watchAll=false`

To generate the coverage report for the project 

To view the coverage report check the <%root_dir%>/coverage/Icov-report/index.html or can be view on terminal as well.


## Directory structure 

```
react-combobox/
  README.md
  node_modules/
  package.json
  .gitignore
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    components/
        common/
            combobox/
                Combobox.js
                Combobox.test.js
                ComboboxErrorBoundry.js
                __snapshots__/
                comboInput/
                comboOptions/
                inputSelections/    
        userForm/
           __snapshot__/
           userForm.css
           UserForm.js
           UserForm.test.js
```

## Naming convention

### CamelCase ( upper CamelCase) - for component files and their respective test cases
### Mixed Case (lower CamelCase) - for folders and  resource files like css. 