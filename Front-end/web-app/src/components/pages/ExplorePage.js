import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaTimes, FaFilter, FaHeart, FaLandmark, FaLocationArrow, FaSpeakap, FaBirthdayCake, FaGraduationCap, FaFemale, FaRuler, FaMale, FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { userImageBASE_URL } from '../../api';
import { baseURL } from '../../api';
import axiosInstance from '../../api';


import { FormControl, InputLabel, MenuItem, Select, Slider } from '@mui/material';

function ExplorePage() {
    const [showFilter, setShowFilter] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);
    const [exploreItems, setExploreItems] = useState([]);
    const [exploreItemsOriginal, setExploreItemsOriginal] = useState([]);
    const [userData, setUserData] = useState({});
    const [genderFilter, setGenderFilter] = useState("");
    const [openedCardID, setOpenedCardId] = useState(null);

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    function openCard(id) {
        setOpenedCardId(id)
    }

    function closeCard() {
        setOpenedCardId(null)
    }

    function toggleFilter() {
        setShowFilter(!showFilter)
    }
    function toggleFavorites() {
        setShowFavorites(!showFavorites)
    }

    function setGenderFilterFunc(gender) {

        let filteredItems = []

        if (gender === 'male') {


            if (genderFilter === 'male') {
                setGenderFilter('')
                setExploreItems(exploreItemsOriginal)

            } else {


                exploreItemsOriginal.forEach((item) => {
                    if (item.details.gender === 'male') {
                        filteredItems.push(item)
                    }
                })
                setExploreItems(filteredItems)
                setGenderFilter('male')

            }



        } else if (gender === 'female') {

            if (genderFilter === 'female') {
                setGenderFilter('')
                setExploreItems(exploreItemsOriginal)

            } else {



                exploreItemsOriginal.forEach((item) => {
                    if (item.details.gender === 'female') {
                        filteredItems.push(item)
                    }
                })

                setExploreItems(filteredItems)
                setGenderFilter('female')
            }


        }



    }
    function getItemById(id) {
        // Find the item with the matching ID in exploreItemsOriginal
        const item = exploreItemsOriginal.find((item) => item.id === id);
    
        // Return the found item if it exists, or a default object if not found
        return item || { photo: '', name: '', town: '', country: '', spokenLnguage: '', age: '', education: '', occupation: '', height: '', postedOn: '' };
    }
    


    function checkIfLiked(id) {

        if (userData.likedItems.includes(id)) {
            return true
        } else {
            return false
        }
    }

    function updateItemLikeStatus(id) {
        let likedItems = userData.likedItems;
    
        axiosInstance
            .post('/likeUsers/' + id)
            .then((response) => {
                console.log(response);
    
                // Check the response message to determine if the item was liked or unliked
                if (response.data.message === 'Item liked successfully.') {
                    // If the item was liked, add it to likedItems array
                    likedItems.push(id);
                } else if (response.data.message === 'Item unliked successfully.') {
                    // If the item was unliked, remove it from likedItems array
                    const index = likedItems.indexOf(id);
                    if (index !== -1) {
                        likedItems.splice(index, 1);
                    }
                }
    
                // Update the state with the updated likedItems array
                setUserData({ ...userData, likedItems: likedItems });
            })
            .catch((error) => {
                // Handle errors here
            });
    }
    


    useEffect(() => {
        fetch(baseURL+'/allActiveUsers')
        .then((res) => res.json())
        .then((data) => {
            // Set the exploreItemsOriginal state with the API response data
            setExploreItemsOriginal(data.activeUsersWithImagesAndDetails);
            console.log(data.activeUsersWithImagesAndDetails);
        })
        .catch((error) => {
            // Handle any errors here
            console.error('Error fetching data:', error);
        });

        let user = {
            name: 'user',
            likedItems: [],
        };
        
        axiosInstance
            .post('/likeUsers')
            .then((response) => {
                // Assuming the response contains an array of liked item IDs
                const likedItemIds = response.data.liked_item_ids;
        
                // Update the user object's likedItems array with the received data
                user.likedItems = likedItemIds;
    
            })
            .catch((error) => {
                // Handle errors here
            });
           
            setUserData(user);
    }, [])

    useEffect(() => {

        setExploreItems(exploreItemsOriginal);


    }, [exploreItemsOriginal])

    const likedItems = userData?.likedItems || [];

    const [rele, setRele] = React.useState('');

    const handleChangeRel = (event) => {
        setRele(event.target.value);
    };


    return (
        <div>
            <div className='mainExploreContainer'>

                <div className={showFilter ? 'filterOpen filterOptionsContainer' : 'filterClosed filterOptionsContainer'}>
                    <div className='filterOptionsToggleBtn'>
                        {showFilter ? <FaTimes onClick={toggleFilter} /> : <FaFilter onClick={toggleFilter} />}
                    </div>

                    <div className='filterOptions'>
                        <div className='genderFFilter eachOption'>
                            <div>I'm Looking For</div>
                            <div className='smallFilterOptionCards'>
                                <div className={genderFilter === 'female' ? 'smallFilterOptionCardSelected smallFilterOptionCard' : 'smallFilterOptionCard'}>
                                    <FaFemale className='filterOptionIcon' onClick={() => setGenderFilterFunc("female")} />
                                </div>
                                <div className={genderFilter === 'male' ? 'smallFilterOptionCardSelected smallFilterOptionCard' : 'smallFilterOptionCard'}>
                                    <FaMale className='filterOptionIcon' onClick={() => setGenderFilterFunc("male")} />
                                </div>
                            </div>
                            <div>Age</div>
                            <div className='smallFilterOptionCards'>
                                <Slider
                                    getAriaLabel={() => 'Temperature range'}
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                />
                            </div>

                            <div>Relegion</div>
                            <div className='smallFilterOptionCards'>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Relegion</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={rele}
                                        onChange={handleChangeRel}
                                        label="Relegion"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={"hindu"}>hindu</MenuItem>
                                        <MenuItem value={"cristian"}>cristian</MenuItem>
                                        <MenuItem value={"buddist"}>buddist</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Country"

                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Cast"

                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Language"

                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                                />
                            </div>


                        </div>
                    </div>
                </div>
                <div className='exploreItems'>
                    {exploreItems.map((item, index) => (
                        <div className='exploreItemCard' key={index} >
                            <div className='exploreItemImg'>
                                <div className='likeBtn'>
                                    {checkIfLiked(item.user_id) ? <FaHeart onClick={() => updateItemLikeStatus(item.user_id)} /> : <FaRegHeart onClick={() => updateItemLikeStatus(item.user_id)} />}
                                </div>
                                <img src={userImageBASE_URL + item.images[0].image_path} alt={item.name} />
                            </div>
                            <div className='exploreItemDetails'>

                                <div className='nameAndAddressForCard' onClick={() => openCard(item.user_id)}>
                                    <div className='exploreItemName'>{item.name}</div>
                                    <div className='exploreItemAddress'><FaLocationArrow className='addressIcon' /> {item.details.town}, {item.details.livingPlace}</div>
                                </div>

                                <div className='generalDetails'>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaSpeakap className='gdIcon' /> {item.details.spokenLnguage}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaBirthdayCake className='gdIcon' />  {item.details.age}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaGraduationCap className='gdIcon' />  {item.details.education}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaFemale className='gdIcon' /> {item.details.gender}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaRuler className='gdIcon' /> {item.details.height}</div>
                                    </div>

                                </div>
                                <div className='exploreItemPostedOn'>{item.updated_at
}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={showFavorites ? 'favOpen favoritesPane' : 'favClosed favoritesPane'}>
                    <div className={showFavorites ? 'favsToggleBtn' : 'favsToggleBtnClosed'}>
                        {showFavorites ? <FaTimes onClick={toggleFavorites} /> : <FaHeart onClick={toggleFavorites} />}
                    </div>
                    <div className='favorites'>
                        <div>Favorites</div>
                        <div className='favoritesList'>
                            {likedItems.map((item, index) => (
                                <div className='favoriteItem'>
                                    <div className='favImg'>
                                    <img src={userImageBASE_URL + getItemById(item.user_id)?.images[0]?.image_path} alt='fav' />
                                    </div>
                                    <div className='favName'>{getItemById(item.user_id).name} </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>


            {openedCardID && (
                <div className='openedCardOverlay' onClick={closeCard}></div>
            )}
            {openedCardID && (

                <div className='openedCardContainer'>
                    <div className='openedCard'>
                        <div className='openedCardImg'>
                            <img src={userImageBASE_URL +getItemById(openedCardID.user_id).images[0].image_path} alt='openedCard' />
                            
                        </div>
                        <div className='openedCardDetails'>
                            <div className='openedCardName'>{getItemById(openedCardID.user_id).name}</div>
                            <div className='openedCardAddress'><FaLocationArrow className='addressIcon' /> {getItemById(openedCardID.user_id).details.town}, {getItemById(openedCardID.user_id).details.livingPlace}</div>
                            <div className='openedCardGeneralDetails'>
                                <div className='eachGeneralDetail'>
                                    <div className='eachGeneralDetailInner'><FaSpeakap className='gdIcon' /> {getItemById(openedCardID.user_id).details.spokenLnguage}</div>
                                </div>
                                <div className='eachGeneralDetail'>
                                    <div className='eachGeneralDetailInner'><FaBirthdayCake className='gdIcon' />  {getItemById(openedCardID.user_id).details.age}</div>
                                </div>
                                <div className='eachGeneralDetail'>
                                    <div className='eachGeneralDetailInner'><FaGraduationCap className='gdIcon' />  {getItemById(openedCardID.user_id).details.education}</div>
                                </div>
                                <div className='eachGeneralDetail'>
                                    <div className='eachGeneralDetailInner'><FaFemale className='gdIcon' /> {getItemById(openedCardID.user_id).details.gender}</div>
                                </div>
                                <div className='eachGeneralDetail'>
                                    <div className='eachGeneralDetailInner'><FaRuler className='gdIcon' /> {getItemById(openedCardID.user_id).details.height}</div>
                                </div>

                            </div>
                            <div className='openedCardPostedOn'>{getItemById(openedCardID.user_id).updated_at}</div>
                            <div className='viewButtonDiv'>
                                <div className='viewButton'>
                                    <Link to={`/match/${getItemById(openedCardID.user_id).user_id}`} className='viewProfileBtn'>View Profile</Link>
                                </div>
                            </div>
                        </div>
                        <div className='closeCardBtn' onClick={closeCard}><FaTimes /></div>
                    </div>
                </div>
            )}


        </div>
    )
}

export default ExplorePage