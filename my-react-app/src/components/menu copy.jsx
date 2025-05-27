// import React, { useState, useEffect } from 'react';
// import './menu.css';
// import tonkotsu from '../assets/images/Classic Tonkotsu Ramen.png';
// import veganMiso from '../assets/images/Vegan Miso Ramen.png';
// import spicyShoyu from '../assets/images/Рамен3.png';

// const imageMap = {
//   tonkotsu: tonkotsu,
//   miso: veganMiso,
//   shoyu: spicyShoyu,
// };


// const Menu = () => {
//   const [dishes, setDishes] = useState([]);
//   const [showMore, setShowMore] = useState(false);
//   const [isAscending, setIsAscending] = useState(true);
//   const [loading, setLoading] = useState(true);
  
//   const thirdDish = {
//     id: 3,
//     name: 'Spicy Shoyu Ramen',
//     price: 280,
//     weight: ['300 ml', '150 g', '80 g', '1 pc', '2 pc'],
//     ingredients: [
//       'Shoyu broth (soy-based)',
//       'Wheat noodles',
//       'Spicy chili oil',
//       'Chashu (pork belly)',
//       'Boiled egg',
//       'Green onions',
//       'Bamboo shoots',
//     ],
//     image: spicyShoyu,
//     className: 'shoyu',
//   };

//   const sortDishes = () => {
//     const sortedDishes = [...dishes].sort((a, b) =>
//       isAscending ? a.price - b.price : b.price - a.price
//     );

//     if (showMore) {
//       setDishes(sortedDishes); 
//     } else {
//       setDishes(sortedDishes.slice(0, 2)); 
//     }

//     setIsAscending(!isAscending);
//   };

//   // const toggleViewMore = () => {
//   //   setShowMore((prev) => !prev);

//   //   if (!showMore) {
      
//   //     setDishes((prevDishes) => [...prevDishes, thirdDish]);
//   //   }
//   // };

//   return (
//     <section className="menu">
//       <div className="container">
//         <h2 className="center-text">READY TO EAT</h2>

//         <button className="sort-button" onClick={sortDishes}>
//           SORT BY PRICE ({isAscending ? 'Ascending' : 'Descending'})
//         </button>

//         <div className="menu-items">
//           {dishes.map((dish) => (
//           <div
//             key={dish.id}
//             className={menu-item ${dish.id === 1 ? 'first-of-type' : 'second-of-type'}}>

//               <div>
//                 <h3
//                   className={menu-item ${dish.id === 1 ? 'title1' : 'title2'}}
//                 >{dish.name}</h3>
//                 <div className={menu-item ${dish.id === 1 ? 'receipt1' : 'receipt2'}}>
//                   <div className={menu-item ${dish.id === 1 ? 'ingredients1' : 'ingredients2'}}>
//                     {dish.ingredients.map((ingredient, index) => (
//                       <p key={index}>{ingredient}</p>
//                     ))}
//                   </div>

//                   <div className={menu-item ${dish.id === 1 ? 'weight1' : 'weight2'}}>
//                     {dish.weight.map((w, index) => (
//                       <p key={index}>{w}</p>
//                     ))}
//                     <div className={menu-item ${dish.id === 1 ? 'cost1' : 'cost2'}}>{dish.price} UAH</div>
//                   </div>
//                 </div>
//               </div>

//               <div className={menu-item-image ${dish.id === 1 ? 'tonkotsu' : 'miso'}}>
//                 <img src={dish.image} alt={dish.name} />
//               </div>
//             </div>
//           ))}
//           {showMore && (
//             <div className="third-of-type">
//               <div>
//                 <h3 className="title3">{thirdDish.name}</h3>
//                 <div className="receipt3">
//                   <div className="ingredients3">
//                     {thirdDish.ingredients.map((ingredient, index) => (
//                       <p key={index}>{ingredient}</p>
//                     ))}
//                   </div>
//                   <div className="weight3">
//                     {thirdDish.weight.map((w, index) => (
//                       <p key={index}>{w}</p>
//                     ))}
//                     <div className="cost3">{thirdDish.price} UAH</div>
//                   </div>
//                 </div>
//               </div>
//               <div className="shoyu">
//                 <img src={thirdDish.image} alt={thirdDish.name} />
//               </div>
//             </div>
//           )}
//         </div>
        
//         <button
//           className="view-more-button"
//           onClick={() => setShowMore((prev) => !prev)}
//         >
//           {showMore ? 'VIEW LESS' : 'VIEW MORE'}
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Menu;