import {Link} from 'react-router-dom'

export default function BookForm({book, handleSubmit, handleChange, cancelPath}) {

    return(
        <form onSubmit = {(e) => handleSubmit(e)}>

            <label>Title</label>
            <input
             placeholder='title' 
             defaultValue={book.value} 
             name='title' 
             onChange={(e) => handleChange(e)} />
            
            <label>Author</label>
            <input
             placeholder="author"
             defaultValue={book.author}
             name="author"
             onChange={(e) => handleChange(e)} />

             <label>Year</label>
             <input
             placeholder="year"
             defaultValue={book.year}
             name="year"
             onChange={(e) => handleChange(e)} />

             <label>Genres</label>
             <input
             placeholder="genres"
             defaultValue={book.genres}
             name="genres"
             onChange={(e) => handleChange(e)} />
             
             <label>ISBN</label>
             <input
             placeholder="ISBN"
             defaultValue={book.ISBN}
             name="ISBN"
             onChange={(e) => handleChange(e)} />

            <label>Image Link</label>
             <input
             placeholder="Image Link"
             defaultValue={book.imageLink}
             name="imageLink"
             onChange={(e) => handleChange(e)} />
        </form>
    )
}