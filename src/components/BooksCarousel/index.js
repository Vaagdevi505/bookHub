import {Link} from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const BooksCarousel = props => {
  const {books} = props

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      {books.map(book => (
        <Link
          to={`/books/${book.id}`}
          key={book.id}
          className="slick-item-link"
        >
          <div className="slick-item">
            <img className="book-image" src={book.coverPic} alt={book.title} />
            <h1 className="book-title">{book.title}</h1>
            <p className="book-author">{book.authorName}</p>
          </div>
        </Link>
      ))}
    </Slider>
  )
}

export default BooksCarousel
