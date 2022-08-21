import { Container, TextField } from '@mui/material'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useRef, useState } from 'react'
import './App.css';

import Chart from './components/Chart'

function App() {
  const [valueX, setValueX] = useState([])
  const [valueY, setValueY] = useState([])
  const [typeDiagram, setTypeDiagram] = useState('bar')

  const inputValueX = useRef('');
  const inputValueY = useRef('');

  const onChangeTypeDiagram = (e) => {
    setTypeDiagram(e.target.value)
  }

  const onEnterPressX = (e) => {
    const ENTER_CODE = 13
    if (e.charCode === ENTER_CODE) {
      const newValues = inputValueX.current.value.split(',');
      setValueX(newValues)
    }
  }

  const onEnterPressY = (e) => {
    const ENTER_CODE = 13
    if (e.charCode === ENTER_CODE) {
      const newValues = inputValueY.current.value.split(',');
      setValueY(newValues)
    }
  }

  const onBlurValueX = () => {
    const newValues = inputValueX.current.value.split(',');
    setValueX(newValues)
  }

  const onBlurValueY = () => {
    const newValues = inputValueY.current.value.split(',');
    setValueY(newValues)
  }

  return (
    <div className="App">
      <Container maxWidth="sm" sx={{ border: '1px dashed grey' }} >
        <div>
          <TextField
            required
            id="outlined-required"
            label="X axix labels"
            inputRef={ inputValueX }
            onKeyPress={ onEnterPressX }
            onBlur={ onBlurValueX }
            sx={ { mt: 2, mb: 1}}
            fullWidth
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Y axix labels"
            inputRef={ inputValueY }
            onKeyPress={ onEnterPressY }
            onBlur={ onBlurValueY }
            sx={ { mt: 2, mb: 1}}
            fullWidth
          />
        </div>
        <Chart labelsX={ valueX } valuesY={ valueY } typeDiagram={ typeDiagram }/>

        <div className="charts-select">
          <Box sx={{maxWidth:300, m:'auto'}}>
            <FormControl fullWidth>
              <InputLabel id="selectChart">Diagrams</InputLabel>
              <Select
                labelId="selectChart"
                id="selectChart"
                defaultValue="bar"
                label="Diagram"
                onChange={ onChangeTypeDiagram }
              >
                <MenuItem value="bar">Bar Chart</MenuItem>
                <MenuItem value="line">Line Chart</MenuItem>
                <MenuItem value="polarArea">Polar Area Chart</MenuItem>
                <MenuItem value="doughnut">Doughnut Chart</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        {/*<select onChange={onChangeTypeDiagram}>*/ }
        {/*  <option value="bar">Bar</option>*/ }
        {/*  <option value="line">Line</option>*/ }
        {/*  <option value="polarArea">Polar Area</option>*/ }
        {/*  <option value="doughnut">Doughnut</option>*/ }
        {/*</select>*/ }

      </Container>

    </div>
  );
}

export default App;
