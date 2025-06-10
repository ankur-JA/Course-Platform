import { Card, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config.js';

function PurchasedCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const init = async () => {
      const res = await axios.get(`${BASE_URL}/user/purchasedCourses`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      });
      setCourses(res.data.purchasedCourses);
    };
    init();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {courses.map((course) => (
        <Card key={course._id} style={{ margin: 10, width: 300, padding: 20 }}>
          <Typography variant='h5' textAlign={'center'}>
            {course.title}
          </Typography>
          <img src={course.imageLink} style={{ width: 300 }} />
        </Card>
      ))}
    </div>
  );
}

export default PurchasedCourses;
