import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css";
import "./Card.css"
import { Link } from "react-router-dom"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';






const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} count={3.5} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            {/* <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div> */}
            <div className="cards">

<Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
        className="cards__img"
          component="img"
        //   height="140"
          image={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`}
        />
        <div className="cards__overlay">
        <CardContent>
          <Typography  className="card__title">
          {movie?movie.original_title:""}
          </Typography>
          <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
          <Typography  className="card__description">
          {movie ? movie.overview.slice(0,118)+"..." : ""}
          </Typography>
        </CardContent>
        </div>
      </CardActionArea>
    </Card>
    </div>
        </Link>
         
    
    }
    </>
}

export default Cards