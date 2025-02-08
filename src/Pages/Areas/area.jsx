import { Button, Spinner } from '@heroui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Areascard from '../../Components/Cards/Areascard';
import { Link } from 'react-router-dom';

export default function area() {
  useEffect(() => {
    GetAreas();
  }, []);
  const [Area, setArea] = useState([]);

  async function GetAreas() {
    try {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      setArea(res.data.meals);
    } catch (error) {
      console.log(error);
    }
  }
  if (Area.length === 0) {
    return (
      <div className="maincontent">
        <div className="loading">
          <Spinner />
        </div>
      </div>
    );
  }
  return (
    <div className='maincontent'>
      <h1 className='hh1'>Explore, Discover, Experience Your Areas







</h1>
      <div className='areas'>
        {Area.map((item, index) => (
         <Link to={`/area/${item.strArea}`} key={index}><div  className="areascard">
            <Areascard data={item} />
          </div></Link> 
        ))}
      </div>
    </div>
  )
}
