# Extra Assignment (Intermediate Bootcamp)

I want you to make a React app that uses both local state and Redux state. 

It's important that you understand as much as you can about the code that you hand in. This means that simply copying something or stopping after something works is not going to be good enough. I **WILL** be asking you to write code and answer detailed questions about the code.

## Setup

Create a React app and add Redux integration. Read about it [here](https://readest.codaisseur.com/courses/intermediate-bootcamp/09-redux/03-react-redux/01-setup) if you forgot how to do it.

Clean up the provided `App` component by removing everything inside the `<div className="App">` element.

## How to submit your results
**Send your homework to teachers@codaisseur.com before Sunday 20:00**

Clean up your code: 
- Fix the formatting/indentation
- Remove unnecessary code.

The app should be runnable simply by cloning the repository and running `yarn start`

## Step 1 - Render some elements

The following references should have enough information to complete this step:
1. [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
1. [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)

Given the following JavaScript data object (containing home computer models), render a `<select>` element which contains all the items in the object as `<option>` elements. The `<option>` elements should have a label with both the name of the model and the year. The elements should also have a `value` attribute consisting of only the name. Add an extra default `<option>` element at the beginning (see the expected output below). This does not have to be in a separate component, it can all be done inside the `App` component.

```js
const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1977,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}
```

When inspecting the resulting HTML with DevTools, it should look like this:

```HTML
<!-- Expected Output -->
<select>
    <option value="">-- pick a model --</option>
    <option value="Ivel Z3">Ivel Z3 (1969)</option>
    <option value="Bally Astrocade">Bally Astrocade (1977)</option>
    <option value="Sord M200 Smart Home Computer">Sord M200 Smart Home Computer (1977)</option>
    <option value="Commodore 64">Commodore 64 (1982)</option>
</select>
```

_Notice the year in parentheses_

## Step 2 - Event handling and local state

Now add an event handler to your `<select>` element, so that whenever the value of the drop-down changes we run a method called `updateSelection`.

Add the `updateSelection` method to the `App` component class. Inside the method save the selected value in the **local state**. Use these references, if necessary:

1. [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
1. [Handling Events](https://reactjs.org/docs/handling-events.html)
1. [Forms](https://reactjs.org/docs/forms.html) <-- especially this one

At the end of this step, changing the selected item of the drop-down should update the `App` components local state so that it contains the value of the selected option.

## Step 3 - Redux Actions

Now that we can select a computer model from the drop-down, you will add a button to which adds the selected item to an array in the Redux state.

Your initial Redux state should be an empty array `[]`. Define a new action type which has as its payload the object containing all the data for the selected computer model. This is what it should look like from your Redux Dev Tools:

![action details](https://cd.sseu.re/React_App_-_Google_Chrome_2018-06-20_11.14.58.png)

Implement the reducer so that it handles the action and adds the selected data to the state. The state will look like this after several items have been added:

![state after 3 additions](https://cd.sseu.re/React_App_-_Google_Chrome_2018-06-20_11.16.40.png)

## Step 4 - Reading from the Redux state

If you haven't already: define a `mapStateToProps` function which returns a props object containing the list of selected items. Use it while connecting your `App` component to Redux.

Now that you have the data as props, create a component in your project. Here is the source code for it:

```jsx
class ModelDetails extends Component {
  render() {
    return <div>
      <ul>
        <li>Name: {this.props.name}</li>
        <li>Manufacturer: {this.props.manufacturer}</li>
        <li>Year: {this.props.year}</li>
        <li>Origin: {this.props.origin}</li>
      </ul>
    </div>
  }
}
```

Use this component to render the items from the Redux state.

_Notice that the name is expected as a prop, but the name property doesn't exist in the source data. Try adding it to the data in the Redux state._


## Final Result

Will look and behave something like this:

![end result](https://cd.sseu.re/extra-assignment2.gif)