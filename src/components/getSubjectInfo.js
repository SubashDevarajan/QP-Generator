import * as React from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';

const SubjectInfo = () => {
    return(
        <div className=''>
        <TextField id="outlined-basic" label="Department" variant="outlined" />
        <TextField id="outlined-basic" label="Subject Code" variant="outlined" />
        <TextField id="outlined-basic" label="Subject Name" variant="outlined" />
        <Select id="outlined-basic" label="Semester" variant="outlined" >
        <option value="Sem1">1</option>
        <option value="Sem2">2</option>
        <option value="Sem3">3</option>
        <option value="Sem4">4</option>
        <option value="Sem5">5</option>
        <option value="Sem6">6</option>
        <option value="Sem8">8</option>
        <option value="Sem10">10</option>
       </Select>
        <TextField id="outlined-basic" label="Course" variant="outlined" />
        </div>
    );
};

export default SubjectInfo;