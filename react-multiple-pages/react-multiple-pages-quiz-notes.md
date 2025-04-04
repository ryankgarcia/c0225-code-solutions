# react-routing-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How does the browser URL change when navigating through a Single Page App? How does a user expect the URL to change as they navigate through a browser app?

The URL in the address bar does not change, however, Routing in the React app navigates the user to new 'pages' and is reflected in the URL in the address bar to indicate a new page.

- What NPM package can be used to make navigating a React app behave as users expect?

npm React Router

- Which React Router component(s) can be used to set up your app's navigation?

Route and Routes

- How does React Router match the browser URL to one of your app's React components?

React Router will match the browser URL with the path of the component. It will match the fixed portions that are matched and then return an object by useParams.

- What is the purpose of React Router's `Outlet` component?

the Outlet component renders whatever child component is currently active

- What React component is used to statically navigate to another page? What HTML element does it render to?

Link

- What React Router hook is used to access route path dynamic segments (those that start with `:` in the `path`)?

useParams Hook

- What React Router hook is used to navigate programmatically?

useNavigate Hook

## Notes

**Reading Notes**

**\*\***\*\***\*\***\*\***\*\***\*\***\*\*** ------------------------------ **\*\***\*\*\*\***\*\***\*\*\***\*\***\*\*\*\***\*\***

"Routing" in React means that when the user navigates to new 'pages', the URL in the address bar is changed to indicate the new page.
Routes are the most important part of React Router app. They couple URL segments to components, data loading, and mutations.

Routes are objects passed to the router creation functions.

A majority of React apps use npm React Router to manage the routing of different pages.

Client side routing is enabled by creating a 'Router' and linking/submitting to pages with <Link /> and <Form>

Nested routes - is the idea of coupling segments of the URL to component hierarchy and data.

Dynamic segments - dynamic placeholders that are parsed and provided to various apis.
Segments with ' : ' are dynamic

'Splats' aka 'catchall' and 'star' segments. If a route path pattern ends with /\* then it will match any characters following the /, including other / characters..

You can destructure the _, you just have to assign it a new name. The most common is 'splat'. Here is an example..
let { org , '_': splat } = params;

useParams (React Hook) returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.

Example:
When you see this in a code block, understand that the item in the curly braces is being destructured from the useParams object in React.

function ProfilePage() {

// Getting the userId param from the URL
let { userId } = useParams();

}

index determines if the route is an index route. Index routes render into their parent's Outlet at their parent's URL

path is the pattern to match against the URL to

Pending Navigation UI - When the user navigates around the app, the data for the next page is loaded before the page is rendered. It's important to provide the user with feedback so the webpage doesn't feel like it's unresponsive.

**Video Notes**

Wrap your entire App inside <BrowserRouter> component, then define the routes.

Routes - comes directly from react - router dom

Route - individual paths that define where we are on our website

what ever it is that you have inside of your element (in Route) could be components for that page, when the path lines up with what the user clicks is what will be shown of the components you choose to display

The cool thing of using the Link component is that it will link the user to where they have clicked by the defined path you have set in the code of your application

The proper syntax looks like this for example:

return (
<>

<nav>
<ul>
<li>
<Link to ='/'  >Home</Link>
</li>
<li>
<Link to='/books'>Books</Link>
</li>
</ul>
</nav>
</>
)

React Router - display's the element you hav inside the curly braces when using
<Route path='/' element= {<Home />} />

We use Link component (technically an anchor tag) to

Memory Router is good to use when you want to run tests on your code or your routing code. It is stored in the memory of the webpage. This is helpful when you're not connecting to the browser. Testing is the only use case you would use this type of router

StaticRouter this is specific to only working on the server.

What if we want to know what the id portion?

we can use the React Hook called useParams, which takes no parameters and returns to us all the custom parameters we defined, in an object. Here is an example...

export function Book() {
const { id } = useParams()
return <h1>Book { id }</h1>
}

the route associated with this code block would look like this in your routes page...

<Routes>
  <Route path='/' element={Home />} />
  <Route path='/books' element={BookList />} />
  <Route path='/books/:id' element={Book />} />     // this is a dynamic route
  <Route path='/books/new' element={NewBook />} />     // this is a hard coded route
  <Route path='*' element={NotFound />} />     // this is will display a "Not found" page
</Routes>

\*_Side Note_
using <br> element breaks the content of the links so they are not all on one line next to each other

React router will pick a route that is more specific and choose the route that is hard coded versus the dynamic one. The ' : ' signifies that anything after the / could be anything in the URL

To make a 404 type of page, letting the user known that they have typed in a valid URL utilizes the '\*' symbol. You can define it as a route in your Routes page. This is a 'catchall' case use case.

If you notice a lot of your Routes have a similar path, like in the example above, NESTING them together makes it a lot cleaner. Give it a path, but don't define elements..

<Routes>
  <Route path='/books'>
    <Route index element={BookList />} />   // this is a boolean that matches the parent
    <Route path=':id' element={Book />} />
    <Route path='new' element={NewBook />} />
  </Route>
</Routes>

If you're doing your path's like this, you need to be sure you are also defining an index route so that your initial path '/books' gets accounted for

<Outlet /> renders whatever the current route is, you don't need to pass it anything either BUT if you do you will use the context variable.
This lets us work with nested layouts. What it does is, it pastes in the child components within the parent

The context variable is used inside the Outlet component. Useful to pass down to any component inside the layout route. This must be defined in the parent component if you want all its children to hold the value you are passing into it. This is called 'useOutletContext'. Useful when using a shared layout that requires logic to be shared also

**Big Tip**
If you have a route that is rendering out a bunch of different routes your path should look like this

<Route path='/books/\*' element={<BookRoutes />} />

This is so we match anything that matches /books

Replace (min 31:00)

Reload document (min 32:00)
State (min 32:30)
Navigate (min 37)
Params (min 39)
