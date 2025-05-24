import React from 'react';
import PriceOption from '../priceOption/priceOption';

const PriceOptions = () => {

  const gymPricing = [
  {
    "id": 1,
    "name": "Basic Plan",
    "price": "$19/month",
    "features": [
      "Access to gym equipment",
      "1 Personal Training Session/month",
      "Locker Facility",
      "Free WiFi"
    ]
  },
  {
    "id": 2,
    "name": "Standard Plan",
    "price": "$39/month",
    "features": [
      "24/7 Gym Access",
      "4 Personal Training Sessions/month",
      "Access to Group Classes",
      "Free Gym T-Shirt",
      "Nutrition Guide"
    ]
  },
  {
    "id": 3,
    "name": "Premium Plan",
    "price": "$59/month",
    "features": [
      "Unlimited Personal Training",
      "Dedicated Fitness Coach",
      "Steam & Sauna Access",
      "Diet & Supplement Plan",
      "Priority Support",
      "All features from Standard Plan"
    ]
  },
  {
    "id": 4,
    "name": "Student Plan",
    "price": "$25/month",
    "features": [
      "Access to gym equipment",
      "2 Group Classes/week",
      "Valid Student ID Required",
      "Flexible Hours",
      "No Signup Fee"
    ]
  },
  {
    "id": 5,
    "name": "Couple Plan",
    "price": "$79/month",
    "features": [
      "2 Members Access",
      "All Premium Features",
      "Free Couple Yoga Classes",
      "Private Locker for Two",
      "Meal Plan for Couples"
    ]
  }
]


    return (
        <div>
            <h2 className='text-2xl'>Best price in the Toun</h2>
            {
              gymPricing.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;