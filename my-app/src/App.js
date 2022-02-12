import './App.css';
import React, { useEffect, useState } from "react";
import {
    Grid,
    TextField,
    FormControlLabel,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    Select,
    MenuItem,
    Slider,
    Button
} from "@material-ui/core";

const Separator = () => <hr />;

function Form() {
  const [inputList, setInputList] = useState([{ name: ""}]);

  const handleInputChange = (e, i) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[i][name] = value;
    setInputList(list);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputList);
  };

  // handle click event of the Remove button
   const handleRemoveClick = index => {
      const list = [...inputList];
      list.splice(index, 1);
      setInputList(list);
   };

  // handle click event of the Add button
  const handleAddClick = () => {
      setInputList([...inputList, { name: "" }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        {inputList.map((x, i) => {
            return (
              <div className="box">
                <TextField
                    id="name-input"
                    name="name"
                    label="Name"
                    type="text"
                    value={inputList[i]["name"]}
                    onChange={e => handleInputChange(e, i)}
                  />
                <div className="btn-box">
                  {inputList.length !== 1 && <button
                    className="mr10"
                    onClick={() => handleRemoveClick(i)}>Remove</button>}
                </div>
              </div>
            );
        })}
        <Button id="addInputBtn" variant="contained" color="primary" type="add" onClick={handleAddClick}>+</Button>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default function App() {
    return (
        <div className="App">
            {/* <HeroImage /> */}
            <Separator />
            <h1>SPLT</h1>
            <Separator />
            {<Form />}
            {/* <Projects />
            <Separator /> */}
        </div>
    );
}