import './categories.styles.scss';

const App = () => {
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "images/hats.jpg"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "images/jackets.jpeg"
    },
    {
      "id": 3,
      "title": "shoes",
      "imageUrl": "images/shoes.jpeg"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "images/womens.jpeg"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "images/mens.jpeg"
    }
  ]



  return (
    <div className="categories-container">

      {categories.map(category => {
        return (

          <div className="category-container" key={category.id}>
            <div className="background-image" style={{
              backgroundImage: `url(${category.imageUrl})`,
              backgroundPosition: '25% 25%'
            }} />
            <div className="category-body-container">
              <h2>{category.title}</h2>
              <p>Shop now</p>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
