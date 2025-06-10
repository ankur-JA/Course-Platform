import { Button, Card, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config.js';

function UserCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const init = async () => {
      const res = await axios.get(`${BASE_URL}/user/courses`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      });
      setCourses(res.data.courses);
    };
    init();
  }, []);

  const purchase = async (id) => {
    await axios.post(
      `${BASE_URL}/user/courses/${id}`,
      {},
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      }
    );
    alert('Purchased course');
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {courses.map((course) => (
        <Card key={course._id} style={{ margin: 10, width: 300, padding: 20 }}>
          <Typography variant='h5' textAlign={'center'}>
            {course.title}
          </Typography>
          <Typography variant='subtitle1' textAlign={'center'}>
            {course.description}
          </Typography>
          <img src={course.imageLink} style={{ width: 300 }} />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
            <Button variant='contained' onClick={() => purchase(course._id)}>
              Buy
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default UserCourses;
