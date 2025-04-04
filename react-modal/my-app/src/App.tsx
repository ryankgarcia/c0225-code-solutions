// import { useRef, useState } from 'react';
// import './App.css';
// import { CancelButton } from './Cancel';
// import { DeleteButton } from './DeleteButton';

// type Props = {
//   onCustomClick: () => void;
// };

// function App({ click }: Props) {
//   const modal = useRef<HTMLDialogElement>(null);
//   const [click, setClick] = useState();

//   function handleClick() {
//     setClick();
//   }
//   return (
//     <div>
//       <DeleteButton onCustomClick={handleClick} />
//       <dialog ref={modal} >
//         <p>Do you really want to delete this?</p>
//         <DeleteButton />
//         <CancelButton />
//       </dialog>
//     </div>
//   );
// }

// export default App;
