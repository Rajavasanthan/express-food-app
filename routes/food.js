var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.json([
        {
            "id": "1",
            "res_name": "Saravana Bhavan",
            "image_url": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/havjfrq3liewx4q6eitx",
            "ratting": 4,
            "location": "chennai",
            "dishes": [
                {
                    "dish_name": "Tomato Soup",
                    "category": "Soup",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 85,
                    "ratting": 5
                },
                {
                    "dish_name": "Hot & Sour Soup",
                    "category": "Soup",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 20,
                    "ratting": 5
                },
                {
                    "dish_name": "Sweet Corn Veg.Soup",
                    "category": "Soup",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 85,
                    "ratting": 4
                },
                {
                    "dish_name": "Mushroom Soup",
                    "category": "Soup",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 90,
                    "ratting": 5
                },
                {
                    "dish_name": "Gobi 65",
                    "category": "Starters",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 205,
                    "ratting": 4.5
                },
                {
                    "dish_name": "Paneer 65",
                    "category": "Starters",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 270,
                    "ratting": 5
                },
                {
                    "dish_name": "Paneer Tikka",
                    "category": "Starters",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 275,
                    "ratting": 4
                }
            ]
        },
        {
            "id": "2",
            "res_name": "Arya Bhavan",
            "image_url": "https://pbs.twimg.com/profile_images/1009360907669946368/3LMJLw2E_400x400.jpg",
            "ratting": 4.5,
            "location": "chennai",
            "dishes": [
                {
                    "dish_name": "Meals",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 115,
                    "ratting": 3
                },
                {
                    "dish_name": "Mini Meals",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 90,
                    "ratting": 4
                },
                {
                    "dish_name": "Quick Lunch",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 80,
                    "ratting": 5
                },
                {
                    "dish_name": "Variety Rice",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 245,
                    "ratting": 3.5
                },
                {
                    "dish_name": "Sambar Rice",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 45,
                    "ratting": 3
                },
                {
                    "dish_name": "Curd Rice",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 45,
                    "ratting": 4
                },
                {
                    "dish_name": "Parcel Mini Meals",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 89,
                    "ratting": 5
                }
            ]
        },
        {
            "id": "3",
            "res_name": "Anjappar",
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGXD5zQSq5R5hbpF5H29rtt9zK7Ijm-0AwsexURQru-mTAprJUjC6Gn0kZeHBo9ifL4k&usqp=CAU",
            "ratting": 4.5,
            "location": "chennai",
            "dishes": [
                {
                    "dish_name": "Jeera rice",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 165,
                    "ratting": 4
                },
                {
                    "dish_name": "Kashmiri pulao",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 90,
                    "ratting": 4
                },
                {
                    "dish_name": "Plain basbathi fried rice",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 80,
                    "ratting": 5
                },
                {
                    "dish_name": "Schezwan veg fried rice",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 105,
                    "ratting": 3.5
                },
                {
                    "dish_name": "Schezwan veg noodles",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 105,
                    "ratting": 3
                },
                {
                    "dish_name": "Veg fried rice",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 95,
                    "ratting": 4
                },
                {
                    "dish_name": "Veg.pulao",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 89,
                    "ratting": 5
                }
            ]
        },
        {
            "id": "4",
            "res_name": "V.V.Chettinadu Restaurant",
            "image_url": "https://lh3.googleusercontent.com/4qW_n45lhmCIfsNrBDfM9t_7OqvI4uvJhgn_ok1nsbd3Z7LiJu-dmQPK_SNuD3mkUUr2PQe1lD5WYbNtUSgtQCXSgPst=w128",
            "ratting": 4.5,
            "location": "chennai",
            "dishes": [
                {
                    "dish_name": "Mutton Biriyani",
                    "category": "Biriyani",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 185,
                    "ratting": 3
                },
                {
                    "dish_name": "chicken Biriyani",
                    "category": "Biriyani",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 120,
                    "ratting": 4
                },
                {
                    "dish_name": "plain Biriyani",
                    "category": "Biriyani",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 80,
                    "ratting": 5
                },
                {
                    "dish_name": "Chicken Fried Rice",
                    "category": "Fried Ric",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 125,
                    "ratting": 3.5
                },
                {
                    "dish_name": "Sambar Rice",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 75,
                    "ratting": 3
                },
                {
                    "dish_name": "Veg Fried Rice",
                    "category": "Fried Ric",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 105,
                    "ratting": 4
                },
                {
                    "dish_name": "Full Meals",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 130,
                    "ratting": 5
                }
            ]
        },
        {
            "id": "5",
            "res_name": "Sangeetha Veg. Restaurant",
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfd0ZY2azmXvdXb6H_CxRwerfLwcKJjtYz3eawW2Pl5cN9HzWFKEeK0irJU7M9g8J-EIo&usqp=CAU",
            "ratting": 4,
            "location": "chennai",
            "dishes": [
                {
                    "dish_name": "Rava Kesari",
                    "category": "Break Fast",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 65,
                    "ratting": 3
                },
                {
                    "dish_name": "Sambar Idly",
                    "category": "Break Fast",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 40,
                    "ratting": 4
                },
                {
                    "dish_name": "Vadai (1)",
                    "category": "Break Fast",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 30,
                    "ratting": 5
                },
                {
                    "dish_name": "Pongal",
                    "category": "Break Fast",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 60,
                    "ratting": 3.5
                },
                {
                    "dish_name": "Curd Vadai (2)",
                    "category": "Break Fast",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 70,
                    "ratting": 3
                },
                {
                    "dish_name": "Plain Dosa",
                    "category": "Break Fast",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 65,
                    "ratting": 4
                },
                {
                    "dish_name": "Special Dosai",
                    "category": "Break Fast",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 75,
                    "ratting": 5
                }
            ]
        },
        {
            "id": "6",
            "res_name": "Desire Hotel",
            "image_url": "https://content3.jdmagicbox.com/comp/rudrapur/t6/9999p5946.5946.110113113716.j4t6/catalogue/desire-hotel-rudrapur-hotels-4gkk0.jpg",
            "ratting": 4.5,
            "location": "chennai",
            "dishes": [
                {
                    "dish_name": "Tomato Soup",
                    "category": "Soups (Veg)",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 70,
                    "ratting": 3
                },
                {
                    "dish_name": "Cream of Veg.Soup",
                    "category": "Soups (Veg)",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 70,
                    "ratting": 4
                },
                {
                    "dish_name": "Sweet Corn Veg.Soup",
                    "category": "Soups (Veg)",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 70,
                    "ratting": 5
                },
                {
                    "dish_name": "Hot & Sour Veg Soup",
                    "category": "Soups (Veg)",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 70,
                    "ratting": 3.5
                },
                {
                    "dish_name": "Spicy Mushroom Soup",
                    "category": "Soups (Veg)",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 75,
                    "ratting": 3
                },
                {
                    "dish_name": "Veg.Manchow Soup",
                    "category": "Soups (Veg)",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 75,
                    "ratting": 4
                },
                {
                    "dish_name": "Veg.Clear Soup",
                    "category": "Soups (Veg)",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 70,
                    "ratting": 5
                }
            ]
        },
        {
            "id": "7",
            "res_name": "Mayilai Tandoori",
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7RKzD89AUa8c8Ho9S8YDwX0CcIz3Aq6QhOQIrx2pmOP1I0jvUbqDY-Se0jJ2tVUiKB4&usqp=CAU",
            "ratting": 4.5,
            "location": "chennai",
            "dishes": [
                {
                    "dish_name": "Tandoori Chicken (Full)",
                    "category": "Tandoori",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 300,
                    "ratting": 3
                },
                {
                    "dish_name": "Tandoori Chicken (half)",
                    "category": "Tandoori",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 160,
                    "ratting": 4
                },
                {
                    "dish_name": "Chicken Tikka",
                    "category": "Tandoori",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 120,
                    "ratting": 5
                },
                {
                    "dish_name": "Reshmi Kabab",
                    "category": "Tandoori",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 245,
                    "ratting": 3.5
                },
                {
                    "dish_name": "Chicken Hariyali Kabab",
                    "category": "Tandoori",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 45,
                    "ratting": 3
                },
                {
                    "dish_name": "Tangri Kabab",
                    "category": "Tandoori",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 45,
                    "ratting": 4
                },
                {
                    "dish_name": "Fish Tikka",
                    "category": "Tandoori",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 89,
                    "ratting": 5
                }
            ]
        },
        {
            "id": "8",
            "res_name": "KFC",
            "image_url": "https://www.researchgate.net/publication/276198839/figure/fig4/AS:393428526485508@1470812078355/Three-brand-logos_Q320.jpg",
            "ratting": 4.5,
            "location": "chennai",
            "dishes": [
                {
                    "dish_name": "Mingles Bucket",
                    "category": "Snack",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 245,
                    "ratting": 3
                },
                {
                    "dish_name": "Hot & Saucy 4 pc",
                    "category": "Snack",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 120,
                    "ratting": 4
                },
                {
                    "dish_name": "Hot Wings 4 pc",
                    "category": "Snack",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 130,
                    "ratting": 5
                },
                {
                    "dish_name": "Popcorn Chicken - Reg",
                    "category": "Snack",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 115,
                    "ratting": 3.5
                },
                {
                    "dish_name": "Popcorn Chicken - Med",
                    "category": "Snack",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 100,
                    "ratting": 3
                },
                {
                    "dish_name": "Popcorn Chicken - Lar",
                    "category": "Snack",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 120,
                    "ratting": 4
                },
                {
                    "dish_name": "Veg Stripes (6pcs)",
                    "category": "Snack",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 100,
                    "ratting": 5
                }
            ]
        },
        {
            "id": "9",
            "res_name": "Subway",
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Subway_restaurant.svg/2560px-Subway_restaurant.svg.png",
            "ratting": 4.5,
            "location": "chennai",
            "dishes": [
                {
                    "dish_name": "Veggie Delite",
                    "category": "Subs & Salads",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 215,
                    "ratting": 3
                },
                {
                    "dish_name": "Western Egg & Cheese",
                    "category": "Subs & Salads",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 190,
                    "ratting": 4
                },
                {
                    "dish_name": "Chicken Ham, Egg & Cheese",
                    "category": "Subs & Salads",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 210,
                    "ratting": 5
                },
                {
                    "dish_name": "Egg & Cheese",
                    "category": "Subs & Salads",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 245,
                    "ratting": 3.5
                },
                {
                    "dish_name": "Veg. Shammi",
                    "category": "Subs & Salads",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 145,
                    "ratting": 3
                },
                {
                    "dish_name": "Aloo Patty",
                    "category": "Subs & Salads",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 105,
                    "ratting": 4
                },
                {
                    "dish_name": "Veggie Patty",
                    "category": "Subs & Salads",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 189,
                    "ratting": 5
                }
            ]
        },
        {
            "id": "10",
            "res_name": "MagJ's American Fried Chicken",
            "image_url": "https://s3.amazonaws.com/zaubatrademarks/88386394-92f7-4338-8529-ef81026fa3e3.png",
            "ratting": 4.5,
            "location": "chennai",
            "dishes": [
                {
                    "dish_name": "French Fries Regular",
                    "category": "Subs & Salads",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 45,
                    "ratting": 3
                },
                {
                    "dish_name": "French Fries Large",
                    "category": "Subs & Salads",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 40,
                    "ratting": 4
                },
                {
                    "dish_name": "French Fries (Spicy)",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 50,
                    "ratting": 5
                },
                {
                    "dish_name": "French Fries Large (Spicy)",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 75,
                    "ratting": 3.5
                },
                {
                    "dish_name": "Veg Nuggets",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 85,
                    "ratting": 3
                },
                {
                    "dish_name": "Non-Veg Nuggets",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 95,
                    "ratting": 4
                },
                {
                    "dish_name": "Chicken Strips - 3 pcs",
                    "category": "Lunch",
                    "dish_image_url": "https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg",
                    "price": 110,
                    "ratting": 5
                }
            ]
        }
    ])
});

module.exports = router;
