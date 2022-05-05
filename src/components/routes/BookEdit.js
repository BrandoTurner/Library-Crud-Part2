import { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router'
import Layout from '../../shared/Layout'
import BookForm from '../../shared/BookForm'
import axios from 'axios'

function BookEdit() {
    const navigate = useNavigate()
    const {id} = useParams() // extracting the id from the object of whatever url page im in
    const [book, setBook] = useState({
        title:"",
        author:"",
        year:"",
        genres:[""],
        ISBN:"",
        imageLink:"",
        link:""
    })
// check if its updated
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios(`http://loalhost:3000/api/items/${id}`)
                console.log('edit', response)
                setItem(response.data)

            }catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [id])

    const handleChange = (event) => {
    // grab the value from the user input
    const updatedField = {[event.target.name] : event.target.value}
    //assign the empty state with the updated field into one object
    const editedItem = Object.assign(item, updatedField)
    //assign the new object to be updated to state
    setItem(editedItem)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        axios({
            url: `http://localhost:3000/api/items/${id}`,
            method: 'PUT',
            data: item
        }).then(() => setUpdated(true)).catch(console.error)
    }

    useEffect(() => {
        if (updated) {
            return navigate(`/books/${id}`)
        }
    })

    return (
        <Layout>
            <BookForm
            book= {book}
            handleChange={(e) => handleChange(e)}
            handleSubmit={(e) => handleSubmit(e)}
            cancelPath={`/books/${id}`}
            
            />
        </Layout>
    )


}

export default BookEdit