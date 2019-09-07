import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import Logo from "./background.png";

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="website logo" />

        <div class="text-center">
          <h1>HAPPY PET</h1>
        </div>
      </header>
      <body>
        <div class="description">
          <p>Did you see a cute dog and you want to have the same one? We've got your back! Take a picture of the pet you like,
            drag it to the window below, and we will tell you where you can adopt a similar pet!
          </p>
        </div>
        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div class="dropzone" {...getRootProps()}>
                <input {...getInputProps()} />
                <p class="text-center">Drag and drop image here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>

        <div class="buttons">
          <ButtonToolbar>
            <Button as="input" type="submit" value="Search" />
          </ButtonToolbar>
        </div>
        <p>Click the button to get your coordinates.</p>
        <button onclick="getLocation()">Try It</button>
        <p id="inner">Hiiiii</p>
      </body>

    </div>
  );
}

export default App;
