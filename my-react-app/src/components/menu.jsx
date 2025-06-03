import React, { useState, useEffect } from 'react';
import './menu.css';
import tonkotsu from '../assets/images/Classic Tonkotsu Ramen.png';
import veganMiso from '../assets/images/Vegan Miso Ramen.png';
import spicyShoyu from '../assets/images/Рамен3.png';
import { fetchMenu } from './firebase'; 

const imageMap = {
  tonkotsu: tonkotsu,
  miso: veganMiso,
  shoyu: spicyShoyu,
};

const Menu = () => {
  const [dishes, setDishes] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [isAscending, setIsAscending] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMenu = async () => {
      try {
        const data = await fetchMenu();
        const menuWithImages = data.map((dish) => ({
          ...dish,
          image: imageMap[dish.className],
        }));
        setDishes(menuWithImages);
      } catch (error) {
        console.error('Помилка завантаження меню:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMenu();
  }, []);

  const sortDishes = () => {
    const sorted = [...dishes].sort((a, b) =>
      isAscending ? a.price - b.price : b.price - a.price
    );
    setDishes(sorted);
    setIsAscending(!isAscending);
  };

  const visibleDishes = showMore ? dishes : dishes.slice(0, 2);

  return (
    <section className="menu">
      <div className="container">
        <h2 className="center-text">READY TO EAT</h2>

        <button className="sort-button" onClick={sortDishes}>
          SORT BY PRICE ({isAscending ? 'Ascending' : 'Descending'})
        </button>

        {loading ? (
          <p className="loading-text">Завантаження меню...</p>
        ) : (
          <div className="menu-items">
            {visibleDishes.map((dish) => (
              <div
                key={dish.id}
                className={`menu-item ${dish.id === 1 ? 'first-of-type' : dish.id === 2 ? 'second-of-type' : 'third-of-type'}`}
              >
                <div>
                  <h3 className={`menu-item title${dish.id}`}>{dish.name}</h3>
                  <div className={`menu-item receipt${dish.id}`}>
                    <div className={`menu-item ingredients${dish.id}`}>
                      {dish.ingredients.map((ingredient, index) => (
                        <p key={index}>{ingredient}</p>
                      ))}
                    </div>

                    <div className={`menu-item weight${dish.id}`}>
                      {dish.weight.map((w, index) => (
                        <p key={index}>{w}</p>
                      ))}
                      <div className={`menu-item cost${dish.id}`}>{dish.price} UAH</div>
                    </div>
                  </div>
                </div>

                <div className={`menu-item-image ${dish.className}`}>
                  <img src={dish.image} alt={dish.name} />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && (
          <button
            className="view-more-button"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? 'VIEW LESS' : 'VIEW MORE'}
          </button>
        )}
      </div>
    </section>
  );
};

export default Menu;
