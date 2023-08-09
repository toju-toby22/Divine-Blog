import Carousel from 'react-bootstrap/Carousel';
import bannerimage from "../Assets/importance-of-books-in-student-life-1.jpg"
import bannerimage2 from "../Assets/video-podcasts.jpg"
import bannerimage3 from "../Assets/articles-lead-image.jpg"
import "../Styles/Banner.css"
function Banner() {
  return (
    <Carousel fade>
      <Carousel.Item>
        
        <img
          className="d-block w-100 banner__image"
          src={bannerimage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Books Review</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner__image"
          src={bannerimage2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>New Podcasts</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner__image"
          src={bannerimage3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Top Articles/Topic</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;