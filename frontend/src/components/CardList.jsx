import React, { useEffect, useState } from 'react'
import CardImg from '../assets/cardimg.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router"

const CardList = ({ title, category }) => {
    const [data, setData] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjAxNTgyNzM4Yjk3ZDY5YzI0ZjA4YzhlMzFkZTgxZCIsIm5iZiI6MTc1MzMxMDQ3Ny4wMDQsInN1YiI6IjY4ODE2NTBjODk5OTAzMTFlYzUyOWUwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WsRwC3-GZFLoG8wsllo7Kvv2yrlgdJ-tiPdP2cCjonI'
        }
    };
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => setData(res.results))
        .catch(err => console.error(err));
    }, []);


    return (
        <div className='text-white md:px-4'>
            <h2 className='pt-10 pb-5 text-1g font-medium'>{title}</h2>

            <Swiper slidesPerView={'auto'} spaceBetween={10} className='mySwiper'>
                {data.map((item, index) => (
                    <SwiperSlide key={index} className='max-w-72'>
                        <Link to={`/movie/${item.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                                alt=''
                                className='h-44 w-full object-center object-cover' />
                            <p className='text-center pt-2'>{item.original_title}</p>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CardList