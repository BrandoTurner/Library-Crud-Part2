
import { useState, useEffect } from "react";
import { getAllBooks } from "../services/api-calls";
 
export default function Home() {
  const [booksData, setBooksData] = useState([]);
 
  useEffect(() => {
    getAllBooks()
      .then((response) => setBooksData(response.data));
  }, []);
  console.log(booksData);
    return (
    
    <div>
      {booksData.map( (item) => {

        return (
          <div>
         {item.title},
         <img src={item.imageLink}></img>

         </div>
        )
      }
      
      )}
    </div>
)
 
}
