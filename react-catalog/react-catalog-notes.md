# react-catalog-notes

## Notes

Layout
2 components
overall catalog
individual components that have
image
product title
price
small details

State

Events
onClick each product

async function => useEffect, [productId]
useParams

Outlets -

**Notes**
When you click a link it will take you to a separate page of the item in the catalog

details page has a button called add to cart. when you add to cart an alert displays saying the item was added to the cart

catalog page displays the product image, its name, price, and a short description

the details page has a larger image and longer description

What should the app look like? What routes will it have?

Header <Route path='/' element={<Header />} >
Dashboard <Route path='details/:itemId' element={<Details />} />
About <Route path='about' element={<About />} />
Not Found <Route path="\*" element={<Not Found />} />

interface number {
number: number (1)
number: string ('001')
}
