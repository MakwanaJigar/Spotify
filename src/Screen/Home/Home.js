import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';


import Music1 from '../../Assets/HomeIMG/Recommended/Music1.png'
import Music2 from '../../Assets/HomeIMG/Recommended/Music2.png'
import Music3 from '../../Assets/HomeIMG/Recommended/Music3.png'
import Music4 from '../../Assets/HomeIMG/Recommended/Music4.png'
import Music5 from '../../Assets/HomeIMG/Recommended/Music5.png'

import Recently1 from '../../Assets/HomeIMG/Recently/Recently1.png'
import Recently2 from '../../Assets/HomeIMG/Recently/Recently2.png'
import Recently3 from '../../Assets/HomeIMG/Recently/Recently3.png'
import Recently4 from '../../Assets/HomeIMG/Recently/Recently4.png'
import Recently5 from '../../Assets/HomeIMG/Recently/Recently5.png'


import Kinjal from '../../Assets/HomeIMG/Recently/KinjalDave.png'
import Badshah from '../../Assets/HomeIMG/Recently/Badshah.png'
import darshan from '../../Assets/HomeIMG/Recently/darshan.png'
import GeetaRabari from '../../Assets/HomeIMG/Recently/GeetaRabari.png'
import Arijit from '../../Assets/HomeIMG/Recently/Arijit.png'


import Video1 from '../../Assets/Video/Video.mp4'
import Video2 from '../../Assets/Video/Video1.mp4'
import Video3 from '../../Assets/Video/Video2.mp4'
import Video4 from '../../Assets/Video/Video3.mp4'
import Video5 from '../../Assets/Video/Video4.mp4'

import Shiva from '../../Assets/HomeIMG/Podcast/Shiva.jpg'
import History from '../../Assets/HomeIMG/Podcast/History.jpg'
import Horror from '../../Assets/HomeIMG/Podcast/Horror.jpg'
import Motivation from '../../Assets/HomeIMG/Podcast/Motivation.jpg'
import Nature from '../../Assets/HomeIMG/Podcast/Nature.jpg'
import { useNavigation } from '@react-navigation/native'; 

const Home = () => {

    const navigation = useNavigation()

    const [All, setAll] = useState(true)
    const [music, setMusic] = useState(false)
    const [podcast, setPodcast] = useState(false)


    const handleAll = () => {
        setAll(true)
        setMusic(false)
        setPodcast(false)
    }

    const handleMusic = () => {
        setAll(false)
        setMusic(true)
        setPodcast(false)
    }

    const handlePodcast = () => {
        setAll(false)
        setMusic(false)
        setPodcast(true)
    }


    const RecommendedData = [
        {
            id: 1,
            artwork: Music1,
            title: "Tamasha",
            artist: "A.R. Rahman",
            movie: "Irshad Kamil",
            url: require('../../Assets/Audio/ParadeDeLaBastilleTamasha.mp3')
        },
        {
            id: 2,
            artwork: Music2,
            title: "Dear Zindagi",
            artist: "A.R. Rahman",
            movie: "Irshad Kamil",
            url: require('../../Assets/Audio/AeZindagiGaleLagaLe.mp3')
        },
        {
            id: 3,
            artwork: Music3,
            title: "Singham",
            artist: "A.R. Rahman",
            movie: "Singham",
            url: require('../../Assets/Audio/Singham.mp3')
        },
        {
            id: 4,
            artwork: Music4,
            title: "Titanic",
            artist: "Unknown",
            movie: "Titanic",
            url: require('../../Assets/Audio/Titanic.mp3')
        },
        {
            id: 5,
            artwork: Music5,
            title: "See You Again",
            artist: "Unknown",
            movie: "Album",
            url: require('../../Assets/Audio/WizKhalifa.mp3')
        },
    ]

    const RecentlyPlayed = [
        {
            id: 1,
            artistimage: Recently1,
            artist: "Aditya Gadhvi"
        },
        {
            id: 2,
            artistimage: Recently4,
            artist: "Shaan"
        },
        {
            id: 3,
            artistimage: Recently3,
            artist: "shakira"
        },
        {
            id: 4,
            artistimage: Recently2,
            artist: "Selena Gomez"
        },
        {
            id: 5,
            artistimage: Recently5,
            artist: "Dino James"
        },

    ]

    const PopularArtists = [
        {
            id: 1,
            artistimage: Recently1,
            artist: "Aditya Gadhvi"
        },
        {
            id: 2,
            artistimage: Recently4,
            artist: "Shaan"
        },
        {
            id: 3,
            artistimage: Recently3,
            artist: "shakira"
        },
        {
            id: 4,
            artistimage: Recently2,
            artist: "Selena Gomez"
        },
        {
            id: 5,
            artistimage: Recently5,
            artist: "Dino James"
        },
        {
            id: 6,
            artistimage: Kinjal,
            artist: "Kinjal Dave"
        },
        {
            id: 7,
            artistimage: Arijit,
            artist: "Arijit Singh"
        },
        {
            id: 8,
            artistimage: darshan,
            artist: "Darshan Raval"
        },
        {
            id: 9,
            artistimage: GeetaRabari,
            artist: "Geeta Rabari"
        },
        {
            id: 10,
            artistimage: Badshah,
            artist: "Badshah"
        },

    ]


    // ......MUSIC COMPONENT DATA.......

    const musicComponent = [
        {
            id: 1,
            image: Recently1,
            name: 'Aditya Gadhvi'
        },
        {
            id: 2,
            image: Recently2,
            name: 'Selena Gomez'
        },
        {
            id: 3,
            image: Recently3,
            name: 'Shakira'
        },
        {
            id: 4,
            image: Recently4,
            name: 'Shaan'
        },
        {
            id: 5,
            image: Recently5,
            name: 'Dino James'
        },
        {
            id: 6,
            image: Arijit,
            name: 'Arijit Singh'
        },
        {
            id: 7,
            image: Badshah,
            name: 'Badshah'
        },
        {
            id: 8,
            image: GeetaRabari,
            name: 'Geeta Rabari'
        },
    ]

    const myVideos = [
        {
            id: 1,
            video: Video1,
            song: "MAAN MERI JAAN",
            artist: "King"
        },
        {
            id: 2,
            video: Video2,
            song: "WOH",
            artist: "Dino James"
        },
        {
            id: 3,
            video: Video3,
            song: "WAKA WAKA",
            artist: "Shakira"
        },
        {
            id: 4,
            video: Video4,
            song: "PERFECT",
            artist: "Ed Sheeran"
        },
        {
            id: 5,
            video: Video5,
            song: "KOI MIL GAYA",
            artist: "Arijit Singh"
        },
    ]


    // ........PODCAST COMPONENT DATA............

    const pocastData = [
        {
            id: 1,
            url: Shiva,
            title: "Lord Shiva",
            episode: 'Shiva - Narrated by Jakckie Shroff',
            discription: 'शिव अनादि तथा सृष्टि प्रक्रिया के आदि स्रोत हैं और यह काल महाकाल ही ज्योतिषशास्त्र के आधार हैं। शिव का अर्थ यद्यपि कल्याणकारी माना गया है, लेकिन वे हमेशा लय एवं प्रलय दोनों को अपने अधीन किए हुए हैं। '
        },
        {
            id: 2,
            url: History,
            title: "History of Egyptian pyramids",
            episode: 'Egyptian pyramids',
            discription: 'Since the Egyptians believed their Pharaoh (king) was a god, they built special places for them to be buried. The places they built were the great pyramids along the banks of the Nile River.'
        },
        {
            id: 3,
            url: Nature,
            title: "What is good about Nature",
            episode: 'Impotence of Nature',
            discription: 'Nature is all the animals, plants, and other things in the world that are not made by people, and all the events and processes that are not caused by people.'
        },
        {
            id: 4,
            url: Horror,
            title: "A Haunted House",
            episode: 'Shiva - Narrated by Jakckie Shroff',
            discription: 'High upon a lonely hill surrounded by a great dark forest, stood an ancient, crumbling manor, known as the Haunted House. The windows were all smashed and it looked like the house was used a long time ago and was never used again. '
        },
        {
            id: 5,
            url: Motivation,
            title: "Motivation",
            episode: 'Intrinsic and Extrinsic Motivation ',
            discription: "What is the true meaning of motivation? Motivation is a person's process for achieving goals. This process can use internal factors that make a person want to achieve their goals, or it can be societal or external factors."
        }
    ]

    return (
        <View style={{ width: "100%", height: '104%', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', }}>

            {/*     ALL MUSIC AND PODCAST....SECTION  */}

            <View style={{ width: '100%', flexDirection: 'row', columnGap: 10, alignItems: 'center', height: 20, marginLeft: 20, marginTop: 25 }}>

                <TouchableOpacity style={{ width: 30, backgroundColor: '#ffbb99', height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>
                    <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}>J</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: 45, backgroundColor: All ? 'green' : '#36454F', height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }} onPress={handleAll}>
                    <Text style={{ fontSize: 14, color: '#FFF', fontWeight: 'bold' }}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: 70, backgroundColor: music ? 'green' : '#36454F', height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }} onPress={handleMusic}>
                    <Text style={{ fontSize: 14, color: '#FFF', fontWeight: 'bold' }}>Music</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: 90, backgroundColor: podcast ? 'green' : '#36454F', height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }} onPress={handlePodcast}>
                    <Text style={{ fontSize: 14, color: '#FFF', fontWeight: 'bold' }}>Podcasts</Text>
                </TouchableOpacity>

            </View>

            {/*     ALL BTN COMPONENT    */}
            {
                All ?
                    <ScrollView style={{ width: '100%', height: '100%', marginTop: 35 }}>


                        {/* Recommended for you */}
                        <View style={{ width: '100%' }}>

                            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 24, marginLeft: 10 }}>Recommended for you</Text>

                            <ScrollView style={{ flexDirection: 'row' }} horizontal={true}>

                                {
                                    RecommendedData.map((item) => (
                                        <View style={{ marginLeft: 10, marginTop: 10, rowGap: 10 }} key={item.id}>
                                            <TouchableOpacity onPress={() => navigation.navigate("SongPlay", {
                                                artwork: item.artwork,
                                                title: item.title,
                                                artist: item.artist,
                                                url: item.url,
                                                movie:item.movie 
                                            })}>
                                                <Image source={item.artwork} style={{ width: 170, height: 170, borderWidth: 0.3, borderColor: 'gray', objectFit: 'cover' }} />
                                            </TouchableOpacity>
                                            <View style={{ rowGap: 5 }}>
                                                <Text style={{ color: '#FFF', fontWeight: 'bold' }}>
                                                    {item.title}
                                                </Text>
                                                <Text style={{ color: '#D3D3D3' }}>
                                                    {item.artist}
                                                </Text>
                                                <Text style={{ color: '#D3D3D3' }}>
                                                    {item.movie}
                                                </Text>
                                            </View>
                                        </View>
                                    ))
                                }




                            </ScrollView>

                        </View>


                        {/*  RECENTLY PLAYED  */}

                        <View style={{ width: '100%', marginTop: 50 }}>

                            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 24, marginLeft: 10 }}>RECENTLY PLAYED</Text>

                            <ScrollView style={{ flexDirection: 'row' }} horizontal={true}>

                                {
                                    RecentlyPlayed.map((item) => (
                                        <View style={{ marginLeft: 10, marginTop: 10, rowGap: 10 }} key={item.id}>
                                            <TouchableOpacity>
                                                <Image source={item.artistimage} style={{ width: 100, height: 100, borderWidth: 0.3, borderColor: 'gray', borderRadius: 50, objectFit: 'cover' }} />
                                            </TouchableOpacity>
                                            <View style={{ rowGap: 5 }}>
                                                <Text style={{ color: '#FFF', fontWeight: 'bold', textAlign: 'center' }}>
                                                    {item.artist}
                                                </Text>
                                            </View>
                                        </View>
                                    ))
                                }




                            </ScrollView>

                        </View>


                        {/*  POPULAR ARTIST  */}

                        <View style={{ width: '100%', marginTop: 50 }}>

                            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 24, marginLeft: 10 }}>POPULAR ARTIST</Text>

                            <ScrollView style={{ flexDirection: 'row' }} horizontal={true}>

                                {
                                    PopularArtists.map((item) => (
                                        <View style={{ marginLeft: 10, marginTop: 10, rowGap: 10 }} key={item.id}>
                                            <TouchableOpacity>
                                                <Image source={item.artistimage} style={{ width: 100, height: 100, borderWidth: 0.3, borderColor: 'gray', borderRadius: 50, objectFit: 'cover' }} />
                                            </TouchableOpacity>
                                            <View style={{ rowGap: 5 }}>
                                                <Text style={{ color: '#FFF', fontWeight: 'bold', textAlign: 'center' }}>
                                                    {item.artist}
                                                </Text>
                                            </View>
                                        </View>
                                    ))
                                }




                            </ScrollView>

                        </View>



                        {/* Recommended for you */}
                        <View style={{ width: '100%' }}>

                            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 24, marginLeft: 10 }}>Recommended for you</Text>

                            <ScrollView style={{ flexDirection: 'row' }} horizontal={true}>

                                {
                                    RecommendedData.map((item) => (
                                        <View style={{ marginLeft: 10, marginTop: 10, rowGap: 10 }} key={item.id}>
                                            <TouchableOpacity onPress={() => navigation.navigate("SongPlay", {
                                                artwork: item.artwork,
                                                title: item.title,
                                                artist: item.artist,
                                                url: item.url
                                            })}>
                                                <Image source={item.artwork} style={{ width: 170, height: 170, borderWidth: 0.3, borderColor: 'gray', objectFit: 'cover' }} />
                                            </TouchableOpacity>
                                            <View style={{ rowGap: 5 }}>
                                                <Text style={{ color: '#FFF', fontWeight: 'bold' }}>
                                                    {item.title}
                                                </Text>
                                                <Text style={{ color: '#D3D3D3' }}>
                                                    {item.artist}
                                                </Text>
                                                <Text style={{ color: '#D3D3D3' }}>
                                                    {item.movie}
                                                </Text>
                                            </View>
                                        </View>
                                    ))
                                }




                            </ScrollView>

                        </View>


                    </ScrollView>
                    : <Text>All Component</Text>
            }



            {/*     ALL MUSIC BTN COMPONENT    */}
            {
                music ?
                    <ScrollView style={{ width: '100%', height: '100%', marginBottom: '5%' }}>


                        {/* ARTIST TOP SECTION */}
                        <View style={{ width: '100%' }}>
                            <ScrollView style={{ width: '98%' }}>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around' }}>
                                    {musicComponent.map((item) => (
                                        <View style={{ marginLeft: 10, marginTop: 10, flexDirection: 'row', alignItems: 'center', padding: 5, width: '47%', height: 50, backgroundColor: '#262626' }} key={item.id}>
                                            <TouchableOpacity>
                                                <Image source={item.image} style={{ width: 50, height: 50, borderWidth: 0.3, borderColor: 'gray', objectFit: 'cover' }} />
                                            </TouchableOpacity>
                                            <View style={{ marginLeft: 15 }}>
                                                <Text style={{ color: '#FFF', fontWeight: 'bold' }}>{item.name}</Text>
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            </ScrollView>
                        </View>


                        {/*  RECENTLY PLAYED  */}



                        <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 24, marginLeft: 20, marginTop: 20 }}>TOP MUSIC</Text>
                        {
                            myVideos.map((item) => (
                                <View style={{ width: '100%', marginTop: 20 }} key={item.id}>
                                    <View style={{ width: '90%', height: 400, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                                        <Video
                                            source={item.video}
                                            style={{ width: "100%", height: "100%", borderRadius: 20 }}
                                            controls={false}
                                            repeat={true}
                                        />
                                        <Text style={{ position: 'absolute', zIndex: 1, bottom: 50, left: 10, color: '#FFF', fontWeight: 'bold', fontSize: 18 }}>Song : {item.song}</Text>
                                        <Text style={{ position: 'absolute', zIndex: 1, bottom: 20, left: 10, color: '#FFF', fontWeight: 'bold', fontSize: 18 }}>Singer : {item.artist}</Text>
                                    </View>
                                </View>
                            ))
                        }






                        {/*  POPULAR ARTIST  */}

                        {/* <View style={{ width: '100%', marginTop: 20 }}>

                            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 24, marginLeft: 10 }}>POPULAR ARTIST</Text>

                            <ScrollView style={{ flexDirection: 'row' }} horizontal={true}>

                                {
                                    PopularArtists.map((item) => (
                                        <View style={{ marginLeft: 10, marginTop: 10, rowGap: 10 }} key={item.id}>
                                            <TouchableOpacity>
                                                <Image source={item.artistimage} style={{ width: 100, height: 100, borderWidth: 0.3, borderColor: 'gray', borderRadius: 50, objectFit: 'cover' }} />
                                            </TouchableOpacity>
                                            <View style={{ rowGap: 5 }}>
                                                <Text style={{ color: '#FFF', fontWeight: 'bold', textAlign: 'center' }}>
                                                    {item.artist}
                                                </Text>
                                            </View>
                                        </View>
                                    ))
                                }




                            </ScrollView>

                        </View> */}


                        {/* Recommended for you */}
                        {/* <View style={{ width: '100%' }}>

                            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 24, marginLeft: 10 }}>Recommended for you</Text>

                            <ScrollView style={{ flexDirection: 'row' }} horizontal={true}>

                                {
                                    RecommendedData.map((item) => (
                                        <View style={{ marginLeft: 10, marginTop: 10, rowGap: 10 }} key={item.id}>
                                            <TouchableOpacity>
                                                <Image source={item.image} style={{ width: 170, height: 170, borderWidth: 0.3, borderColor: 'gray', objectFit: 'cover' }} />
                                            </TouchableOpacity>
                                            <View style={{ rowGap: 5 }}>
                                                <Text style={{ color: '#FFF', fontWeight: 'bold' }}>
                                                    {item.song}
                                                </Text>
                                                <Text style={{ color: '#D3D3D3' }}>
                                                    {item.artist}
                                                </Text>
                                                <Text style={{ color: '#D3D3D3' }}>
                                                    {item.movie}
                                                </Text>
                                            </View>
                                        </View>
                                    ))
                                }




                            </ScrollView>

                        </View> */}


                    </ScrollView>
                    : <Text>Music Component</Text>
            }


            {
                podcast ?
                    <ScrollView style={{ width: '100%', height: '100%', marginBottom: '10%' }}>


                        {/* ARTIST TOP SECTION */}
                        <View style={{ width: '100%' }}>
                            <ScrollView style={{ width: '98%' }}>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around' }}>
                                    {pocastData.map((item) => (
                                        <View style={{ marginLeft: 10, marginTop: 10, alignItems: 'center', width: '90%', height: 450, backgroundColor: '#262626', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }} key={item.id}>
                                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                                                <Image source={item.url} style={{ width: 250, height: 250, borderWidth: 0.3, borderColor: 'white', objectFit: 'cover' }} />
                                            </TouchableOpacity>
                                            <View style={{ marginLeft: 15, padding: 10, rowGap: 10 }}>
                                                <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 24 }}>{item.title}</Text>
                                                <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 12 }}>Episode - {item.episode}</Text>
                                                <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 13 }}>{item.discription}</Text>
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            </ScrollView>
                        </View>

                    </ScrollView>
                    : <Text>Music Component</Text>

            }

        </View>
    );
}

export default Home;
