import React, {useState, useEffect} from 'react';
import ReviewDetails from '../components/ReviewDetails.jsx';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import UserReviewDetails from '../components/UserReviewDetails.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import MyReview from '../components/MyReview.jsx';
import axios from 'axios';



const Dashboard = () => {
  const {userToken, userInfo} = useSelector((state) => state.auth)
  
  const [reviews, setReviews] = useState([]); 

  useEffect( () => {
    const fetchReviews = async () => {
      const response = await axios.get('review'); 
      console.log("response is: ", response.data); 
      setReviews(response.data); 
    }
    if (userToken) {
      console.log("User Logged in!"); 
      fetchReviews(); 
    } ;
  }, [userToken])

  if (!reviews) return <>Loading ... </>
  else {
  
    return (
      <>
        <div className='w-[80%] flex flex-col mx-auto mt-40'>
          <h1 className='text-4xl mb-8 font-bold text-dark text-center'>
            My Reviews 
          </h1>
          {/* brief landlord info */}
          <div className=''></div>
          {/* Section for review card and add review ROW*/}
          <div className='flex flex-row max-h-[588px] w-fit mx-auto'>
            <div className='overflow-auto'>
            {reviews.map(review => <MyReview content = {review} key = {review.id}/>)}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Dashboard;
