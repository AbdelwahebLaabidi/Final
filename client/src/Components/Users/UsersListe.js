import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { getAllUsers } from "../../Redux/Actions/AuthAction"
import UserCard from "./UserCard"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


const UserListe=()=>{


    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{

        dispatch(getAllUsers())
        
    },[])
    
    const AllUser = useSelector(state => state.AuthReducer.AllUser )



    return(
        <div>

                <div className="UserCard">

                        {
                        AllUser.map((el,i)=><UserCard key={i} el = {el} />)
                        }


                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Button onClick={()=>navigate('/')} variant="dark">Home</Button>
        </div>
    )
}

export default UserListe