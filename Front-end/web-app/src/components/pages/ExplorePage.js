import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaTimes, FaFilter, FaHeart, FaLandmark, FaLocationArrow, FaSpeakap, FaBirthdayCake, FaGraduationCap, FaFemale, FaRuler, FaMale, FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function ExplorePage() {
    const [showFilter, setShowFilter] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);
    const [exploreItems, setExploreItems] = useState([]);
    const [exploreItemsOriginal, setExploreItemsOriginal] = useState([]);
    const [userData, setUserData] = useState({});
    const [genderFilter, setGenderFilter] = useState("");
    const [openedCardID, setOpenedCardId] = useState(null);

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
                    if (item.gender === 'male') {
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
                    if (item.gender === 'female') {
                        filteredItems.push(item)
                    }
                })

                setExploreItems(filteredItems)
                setGenderFilter('female')
            }


        }



    }

    function getItemById(id) {
        // Initialize the result as null
        let result = null;

        // Iterate through exploreItemsOriginal to find the matching item
        exploreItemsOriginal.forEach((item) => {
            if (item.id === id) {
                // Set the result to the matching item
                result = item;
            }
        });

        // Return the result (which may be null if no match is found)
        return result;
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

        if (likedItems.includes(id)) {
            likedItems.splice(likedItems.indexOf(id), 1)
        } else {
            likedItems.push(id)
        }

        setUserData({ ...userData, likedItems: likedItems })
    }


    useEffect(() => {
        // fetch('http://localhost:8000/api/explore')
        // .then(res => res.json())
        // .then(data => {
        //     setExploreItems(data)
        // })

        let user = {

            name: 'user',
            likedItems: [
                2,
                3,
            ]
        }

        setUserData(user);

        setExploreItemsOriginal([
            {
                id: 1,
                name: 'Lakshmi Devi',
                gender: 'female',
                spokenLnguage: 'tamil',
                marritalStatus: 'unmarried',
                town: 'jaffna',
                country: 'sri lanka',
                age: '23',
                photo: 'https://picsum.photos/200/300',
                language: ['tamil', 'english', 'sinhala'],
                relegion: 'hindu',
                caste: 'brahmin',
                education: 'bachelor degree',
                occupation: 'doctor',
                height: '5.5ft',
                postedOn: '2021-09-01',
            },
            {
                id: 2,
                name: 'Lakshmi Devi',
                gender: 'female',
                spokenLnguage: 'tamil',
                marritalStatus: 'unmarried',
                town: 'jaffna',
                country: 'sri lanka',
                age: '23',
                photo: 'https://picsum.photos/200/300',
                language: ['tamil', 'english', 'sinhala'],
                relegion: 'hindu',
                caste: 'brahmin',
                education: 'bachelor degree',
                occupation: 'doctor',
                height: '5.5ft',
                postedOn: '2021-09-01',
            },
            {
                id: 3,
                name: 'Lakshmi Devi',
                gender: 'female',
                spokenLnguage: 'tamil',
                marritalStatus: 'unmarried',
                town: 'jaffna',
                country: 'sri lanka',
                age: '23',
                photo: 'https://picsum.photos/200/300',
                language: ['tamil', 'english', 'sinhala'],
                relegion: 'hindu',
                caste: 'brahmin',
                education: 'bachelor degree',
                occupation: 'doctor',
                height: '5.5ft',
                postedOn: '2021-09-01',
            },
            {
                id: 4,
                name: 'john doe',
                gender: 'male',
                spokenLnguage: 'tamil',
                marritalStatus: 'unmarried',
                town: 'jaffna',
                country: 'sri lanka',
                age: '23',
                photo: 'https://picsum.photos/200/300',
                language: ['tamil', 'english', 'sinhala'],
                relegion: 'hindu',
                caste: 'brahmin',
                education: 'bachelor degree',
                occupation: 'doctor',
                height: '5.5ft',
                postedOn: '2021-09-01',
            },
        ])

    }, [])

    useEffect(() => {

        setExploreItems(exploreItemsOriginal);


    }, [exploreItemsOriginal])

    const likedItems = userData?.likedItems || [];


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

                        </div>
                    </div>
                </div>
                <div className='exploreItems'>
                    {exploreItems.map((item, index) => (
                        <div className='exploreItemCard' key={index} >
                            <div className='exploreItemImg'>
                                <div className='likeBtn'>
                                    {checkIfLiked(item.id) ? <FaHeart onClick={() => updateItemLikeStatus(item.id)} /> : <FaRegHeart onClick={() => updateItemLikeStatus(item.id)} />}
                                </div>
                                <img src={item.photo} alt={item.name} />
                            </div>
                            <div className='exploreItemDetails'>

                                <div className='nameAndAddressForCard' onClick={() => openCard(item.id)}>
                                    <div className='exploreItemName'>{item.name}</div>
                                    <div className='exploreItemAddress'><FaLocationArrow className='addressIcon' /> {item.town}, {item.country}</div>
                                </div>

                                <div className='generalDetails'>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaSpeakap className='gdIcon' /> {item.spokenLnguage}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaBirthdayCake className='gdIcon' />  {item.age}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaGraduationCap className='gdIcon' />  {item.education}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaFemale className='gdIcon' /> {item.occupation}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaRuler className='gdIcon' /> {item.height}</div>
                                    </div>

                                </div>
                                <div className='exploreItemPostedOn'>{item.postedOn}</div>
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
                                        <img src={getItemById(item).photo} alt='fav' />
                                    </div>
                                    <div className='favName'>{getItemById(item).name} </div>
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
                            <img src={getItemById(openedCardID).photo} alt='openedCard' />
                        </div>
                        <div className='openedCardDetails'>
                            <div className='openedCardName'>{getItemById(openedCardID).name}</div>
                            <div className='openedCardAddress'><FaLocationArrow className='addressIcon' /> {getItemById(openedCardID).town}, {getItemById(openedCardID).country}</div>
                            <div className='openedCardGeneralDetails'>
                                <div className='eachGeneralDetail'>
                                    <div className='eachGeneralDetailInner'><FaSpeakap className='gdIcon' /> {getItemById(openedCardID).spokenLnguage}</div>
                                </div>
                                <div className='eachGeneralDetail'>
                                    <div className='eachGeneralDetailInner'><FaBirthdayCake className='gdIcon' />  {getItemById(openedCardID).age}</div>
                                </div>
                                <div className='eachGeneralDetail'>
                                    <div className='eachGeneralDetailInner'><FaGraduationCap className='gdIcon' />  {getItemById(openedCardID).education}</div>
                                </div>
                                <div className='eachGeneralDetail'>
                                    <div className='eachGeneralDetailInner'><FaFemale className='gdIcon' /> {getItemById(openedCardID).occupation}</div>
                                </div>
                                <div className='eachGeneralDetail'>
                                    <div className='eachGeneralDetailInner'><FaRuler className='gdIcon' /> {getItemById(openedCardID).height}</div>
                                </div>

                            </div>
                            <div className='openedCardPostedOn'>{getItemById(openedCardID).postedOn}</div>
                            <div className='viewButtonDiv'>
                                <div className='viewButton'>
                                    <Link to={`/match/${getItemById(openedCardID).id}`} className='viewProfileBtn'>View Profile</Link>
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