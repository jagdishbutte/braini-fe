import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";

function useContent() {
    const [contents, setContent] = useState([]);
    const token = localStorage.getItem("token");
    
    useEffect(()=>{
        axios
          .get(BACKEND_URL + "/api/v1/content", {
            headers: {
              Authorization: token
            },
          })
          .then((response) => {
            setContent(response.data.content);
          });
    }, []);

  return contents;
}

export default useContent