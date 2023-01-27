import React, {useState, useEffect} from 'react';
import AddReview from '../components/AddReview.jsx'
import ReviewDetails from '../components/ReviewDetails.jsx';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import axios from 'axios';

const LandlordPage = () => {
  const landlordID = 1;
  const [reviews, setReviews] = useState([]); 
  const [landlord, setLandlord]= useState(""); 

  useEffect( () => {
    const fetchReviews = async () => {
      const response = await axios.get(`getLandlord/${landlordID}`); 

      console.log("response is: ", response.data); 
      setReviews((response.data).reverse()); 
      setLandlord((response.data[0].name)); 
    }
    fetchReviews();

  }, [])

  if (!reviews) return <>Loading ... </>
  else {
  
    const position = [51.505, -0.09];


    return (
      <>
        <div className='w-[80%] flex flex-col mx-auto mt-40'>
          <h1 className='text-4xl mb-8 font-bold text-dark text-center'>
            Reviews For {landlord}
          </h1>
          {/* brief landlord info */}
          <div className=''></div>
          {/* Section for review card and add review ROW*/}
          <div className='flex flex-row max-h-[588px] w-fit mx-auto'>
            <div className='overflow-auto'>
              {reviews.map(review => <ReviewDetails content={review} key = {review.id}/>)}
            </div>
            {/* Add review */}
            <div className='pt-2'>
              <AddReview />
            </div>
          </div>
          {/* Map and other info section */}
          <div className='leaflet-container'>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://web.archive.org/web/20211121204128/http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </>
    );
  }
};

export default LandlordPage;
