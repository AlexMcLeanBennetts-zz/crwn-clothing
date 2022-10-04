import Directory from '../../components/directory/directory.component';

const Home = () => {
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
        <Directory categories={categories} />
    );
}

export default Home;
