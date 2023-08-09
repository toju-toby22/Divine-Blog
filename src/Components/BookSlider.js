import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../Assets/novel 1.jpg"
import image2 from "../Assets/novel2.jpeg"
import image3 from "../Assets/novel 3.jpg"
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "../Styles/slider.css"
const BookSlider = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='container'>
            

            <div className='slides'>
            <Typography variant="h5" gutterBottom>
                BOOK REVIEW
            </Typography>

                <Slider {...settings} >
                    <div>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    className='sliderimage'
                                    component="img"
                                    height="200"
                                    image={image1}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lana's War
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                         Voluptates blanditiis placeat tempora deleniti hic quibusdam enim commodi fugit laboriosam magnam,
                                         mollitia nostrum sint inventore dolore at molestias, excepturi, doloribus velit.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                    <div>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    className='sliderimage'
                                    component="img"
                                    height="140"
                                    image={image3}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lana's War
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                         Voluptates blanditiis placeat tempora deleniti hic quibusdam enim commodi fugit laboriosam magnam,
                                         mollitia nostrum sint inventore dolore at molestias, excepturi, doloribus velit.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>


                    <div>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    className='sliderimage'
                                    component="img"
                                    height="140"
                                    image={image2}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lana's War
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                         Voluptates blanditiis placeat tempora deleniti hic quibusdam enim commodi fugit laboriosam magnam,
                                         mollitia nostrum sint inventore dolore at molestias, excepturi, doloribus velit.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>



                    <div>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    className='sliderimage'
                                    component="img"
                                    height="140"
                                    image={image3}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lana's War
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                         Voluptates blanditiis placeat tempora deleniti hic quibusdam enim commodi fugit laboriosam magnam,
                                         mollitia nostrum sint inventore dolore at molestias, excepturi, doloribus velit.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>



                    <div>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    className='sliderimage'
                                    component="img"
                                    height="140"
                                    image={image2}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lana's War
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                         Voluptates blanditiis placeat tempora deleniti hic quibusdam enim commodi fugit laboriosam magnam,
                                         mollitia nostrum sint inventore dolore at molestias, excepturi, doloribus velit.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>


                    <div>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    className='sliderimage'
                                    component="img"
                                    height="140"
                                    image={image1}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lana's War
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                         Voluptates blanditiis placeat tempora deleniti hic quibusdam enim commodi fugit laboriosam magnam,
                                         mollitia nostrum sint inventore dolore at molestias, excepturi, doloribus velit.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>




                 


                </Slider>
            </div>
        </div>
    )
}

export default BookSlider