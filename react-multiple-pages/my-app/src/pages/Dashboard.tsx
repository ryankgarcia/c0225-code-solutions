// import { type Item, readItems } from '../lib/read';
// import { Link } from 'react-router-dom';

// export function Dashboard() {
//   return (
//     <div className="container">
//       <h1>Dashboard</h1>
//       <hr className="py-1" />
//       <div className="flex flex-wrap">
//         {items?.map((item) => (
//           <div key={item.itemId} className="w-full md:w-1/2 lg:w-1/3 pr-4 pl-4">
//             <ItemCard />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// type CardProps = {
//   itemId: Item;
// };
// function ItemCard({ itemId }: CardProps) {
//   return <Link to={`/details/${itemId}`}></Link>;
// }
