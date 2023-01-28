import React, {useState, useEffect} from 'react';
import AddReview from '../components/AddReview.jsx'
import ReviewDetails from '../components/ReviewDetails.jsx';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import axios from 'axios';
import {useSearchParams, useParams, useLocation} from 'react-router-dom';
import { ContactSupportOutlined } from '@mui/icons-material';

const LandlordPage = () => {
  //const landlordID = useParam()?
  //This works 
  const [searchParams] = useSearchParams();
  const landlordID = searchParams.get("ID")
  //console.log("Type of ID: ", typeof landlordID)

  //Not sure about this
  // const params = useParams(); 
  // ContactSupportOutlined.log("Params found: ", params.id)
  // const landlordID = params.id;
  
  //This works too
  // const location = useLocation(); 
  // console.log("Location: ", location)
  // const landlordID = location.state.landlordID; 

  const [reviews, setReviews] = useState([]); 
  const [landlord, setLandlord]= useState(""); 
  const [render, setRender] = useState(false)

  const newReview = (e) => {
    //e.preventDefault();
    setRender((prev)=>!prev); 
  }

  const fetchReviews = async () => {
    const response = await axios.get(`getLandlord/${landlordID}`); 

    console.log("fetch reviews fired!! ", response.data); 
    setReviews((response.data).reverse()); 
    setLandlord((response.data[0].name)); 
    setRender(false);
  }

  useEffect( () => {
    
    fetchReviews();

  }, [render])

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
              <AddReview ID = {landlordID} refetch={fetchReviews} newReview={newReview}/>
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
