import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../shared/Layout';
import BookForm from '../../shared/BookForm';

function BookCreate() {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title:"",
        author:"",
        year:"",
        genres:[""],
        ISBN:"",
        imageLink:"",
        link:""
  })
  const [createdBook, setCreatedBook] = useState(null)

  const handleChange = (event) => {
    const updatedField = { [event.target.name] : event.target.value }
    const editedbook = Object.assign(book, updatedField)
    setItem(editedBook)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()

    //if the entry is created in the database, save the response data
    // in the state
    axios({
      url: `http://localhost:3000/api/books`,
      method: 'POST',
      data: book
    }).then(res => setCreatedItem(res.data.book)).catch(console.error)

  }

  useEffect(() => {
    if (createdBook) {
      return navigate(`/books`)
    }
  }, [createdBook, navigate])

  return (
    <Layout>
      <BookForm
        book={book}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath='/'
      />
    </Layout>

  )
}

export default BookCreate