import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import Logo from "./background.png";

import './App.css';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
const $ = window.$;
let authkey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjMyYTlkNmRjMTNhODEyZDI0YmZkZjBhNWRmNTAxMWRiZTFhNTllZjU4MDFiNDFjZWY5YzAyYjJjNDAwNDU3NjMzMjQ3ODRkZjA4MmU1OTk1In0.eyJhdWQiOiJ5RGExekU0OEprYkM3QTF5dUxWa3dKUWhRd2N5c3VpUWZzaWJmSmFlaW0xWTl4Z1VsSSIsImp0aSI6IjMyYTlkNmRjMTNhODEyZDI0YmZkZjBhNWRmNTAxMWRiZTFhNTllZjU4MDFiNDFjZWY5YzAyYjJjNDAwNDU3NjMzMjQ3ODRkZjA4MmU1OTk1IiwiaWF0IjoxNTY3ODc4MDU5LCJuYmYiOjE1Njc4NzgwNTksImV4cCI6MTU2Nzg4MTY1OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.LJtjg4cXe9Pj98uydxEun9ya-NudvdRcMZnBoN6AyeDCG3Dd4MSl09es-mehJ08DdCHeb2GxHVax197q_ffArZJkvw95emvOFZRIGRu5lj3FyesEwdXT2urdGFSdOoYoBadbDOj2pcYGRvEVAYF5hz2Jxa_vrke3Fi6rdpQSpzj99kOw872jzweOkFudgS2lg4G7CwzpTdWvi1GDxenRnpGnub8mS8xax2QJINcCm7Lk5ppm_Y5p2qtVtTeqfonMBMJFLCbBuT3QiitcKRjeIEcK-smYftiKI9-zyh6zHRvkYUUy0rtgvWN1nAXZcgMqtbbq-qKZ4ozt47J7bO1b2g";
let breeds = new Set();

function print(elements) {
  elements = elements.toString();
  elements = elements.split(",");
  console.log(elements);
  for (var i = 0; i < elements.length; i++) {
    console.log(elements[i]);
    findDog(elements[i]);
  }
}
var displayRow = document.getElementsByClassName('table')[0];

var container = document.createElement("div");
container.className = "singleRow";



function findDog(element) {
  var doOnce = true;
  var xml = new XMLHttpRequest();
  xml.onreadystatechange = function () {
    //console.log(this.responseText);
    if (this.responseText.length > 1) {
      let foundDogs = JSON.parse(this.responseText);
      let foundDogslist = foundDogs.animals;
      if (foundDogslist != null) {
        //console.log(foundDogslist[1].url);
        if (doOnce) {
          for (var k = 0; k < 3; k++) {
            console.log(k + " for " + element + ": " + foundDogslist[k].url + ", "
              + foundDogslist[k].breeds.primary + " ," + foundDogslist[k].name +
              ", " + foundDogslist[k].description);
            var finallyy = foundDogslist[k].name + " the " + foundDogslist[k].breeds.primary + ". Adopt : " + foundDogslist[k].url
              + " DESCRIPTION: " + foundDogslist[k].description;

            var temp = k * 4;
            var name = document.getElementById("" + (k + temp));
            name.innerHTML = foundDogslist[k].name;
            var breed = document.getElementById("" + (k + 1 + temp));
            breed.innerHTML = foundDogslist[k].breeds.primary;
            var shelter = document.getElementById("" + (k + 2 + temp));
            shelter.innerHTML = foundDogslist[k].url;
            var description = document.getElementById("" + (k + 3 + temp));
            description.innerHTML = foundDogslist[k].description;

          }

          doOnce = false;
        }
      }
    }
  }
  xml.open("GET", "https://api.petfinder.com/v2/animals?type=dog&breed=" + element, true);
  xml.setRequestHeader("Authorization", "Bearer " + authkey);
  xml.send();
}


function UserAction() {

  let breed = ["bulldog", "maltese", "abcdefg", "English Bulldog"];

  let results = ["Affenpinscher", "Afghan Hound", "Airedale Terrier", "Akbash", "Akita", "Alaskan Malamute", "American Bulldog", "American Eskimo Dog", "American Foxhound", "American Hairless Terrier", "American Staffordshire Terrier", "American Water Spaniel", "Anatolian Shepherd", "Appenzell Mountain Dog", "Australian Cattle Dog / Blue Heeler", "Australian Kelpie", "Australian Shepherd", "Australian Terrier", "Basenji", "Basset Hound", "Beagle", "Bearded Collie", "Beauceron", "Bedlington Terrier", "Belgian Shepherd / Laekenois", "Belgian Shepherd / Malinois", "Belgian Shepherd / Sheepdog", "Belgian Shepherd / Tervuren", "Bernese Mountain Dog", "Bichon Frise", "Black and Tan Coonhound", "Black Labrador Retriever", "Black Mouth Cur", "Black Russian Terrier", "Bloodhound", "Blue Lacy", "Bluetick Coonhound", "Boerboel", "Bolognese", "Border Collie", "Border Terrier", "Borzoi", "Boston Terrier", "Bouvier des Flandres", "Boxer", "Boykin Spaniel", "Briard", "Brittany Spaniel", "Brussels Griffon", "Bull Terrier", "Bullmastiff", "Cairn Terrier", "Canaan Dog", "Cane Corso", "Cardigan Welsh Corgi", "Carolina Dog", "Catahoula Leopard Dog", "Cattle Dog", "Caucasian Sheepdog / Caucasian Ovtcharka", "Cavalier King Charles Spaniel", "Chesapeake Bay Retriever", "Chihuahua", "Chinese Crested Dog", "Chinese Foo Dog", "Chinook", "Chocolate Labrador Retriever", "Chow Chow", "Cirneco dell'Etna", "Clumber Spaniel", "Cockapoo", "Cocker Spaniel", "Collie", "Coonhound", "Corgi", "Coton de Tulear", "Curly-Coated Retriever", "Dachshund", "Dalmatian", "Dandie Dinmont Terrier", "Doberman Pinscher", "Dogo Argentino", "Dogue de Bordeaux", "Dutch Shepherd", "English Bulldog", "English Cocker Spaniel", "English Coonhound", "English Foxhound", "English Pointer", "English Setter", "English Shepherd", "English Springer Spaniel", "English Toy Spaniel", "Entlebucher", "Eskimo Dog", "Feist", "Field Spaniel", "Fila Brasileiro", "Finnish Lapphund", "Finnish Spitz", "Flat-Coated Retriever", "Fox Terrier", "Foxhound", "French Bulldog", "Galgo Spanish Greyhound", "German Pinscher", "German Shepherd Dog", "German Shorthaired Pointer", "German Spitz", "German Wirehaired Pointer", "Giant Schnauzer", "Glen of Imaal Terrier", "Golden Retriever", "Gordon Setter", "Great Dane", "Great Pyrenees", "Greater Swiss Mountain Dog", "Greyhound", "Hamiltonstovare", "Harrier", "Havanese", "Hound", "Hovawart", "Husky", "Ibizan Hound", "Icelandic Sheepdog", "Illyrian Sheepdog", "Irish Setter", "Irish Terrier", "Irish Water Spaniel", "Irish Wolfhound", "Italian Greyhound", "Jack Russell Terrier", "Japanese Chin", "Jindo", "Kai Dog", "Karelian Bear Dog", "Keeshond", "Kerry Blue Terrier", "Kishu", "Klee Kai", "Komondor", "Kuvasz", "Kyi Leo", "Labrador Retriever", "Lakeland Terrier", "Lancashire Heeler", "Leonberger", "Lhasa Apso", "Lowchen", "Maltese", "Manchester Terrier", "Maremma Sheepdog", "Mastiff", "McNab", "Miniature Bull Terrier", "Miniature Dachshund", "Miniature Pinscher", "Miniature Poodle", "Miniature Schnauzer", "Mixed Breed", "Mountain Cur", "Mountain Dog", "Munsterlander", "Neapolitan Mastiff", "New Guinea Singing Dog", "Newfoundland Dog", "Norfolk Terrier", "Norwegian Buhund", "Norwegian Elkhound", "Norwegian Lundehund", "Norwich Terrier", "Nova Scotia Duck Tolling Retriever", "Old English Sheepdog", "Otterhound", "Papillon", "Parson Russell Terrier", "Patterdale Terrier / Fell Terrier", "Pekingese", "Pembroke Welsh Corgi", "Peruvian Inca Orchid", "Petit Basset Griffon Vendeen", "Pharaoh Hound", "Pit Bull Terrier", "Plott Hound", "Pointer", "Polish Lowland Sheepdog", "Pomeranian", "Poodle", "Portuguese Podengo", "Portuguese Water Dog", "Presa Canario", "Pug", "Puli", "Pumi", "Pyrenean Shepherd", "Rat Terrier", "Redbone Coonhound", "Retriever", "Rhodesian Ridgeback", "Rottweiler", "Rough Collie", "Saint Bernard", "Saluki", "Samoyed", "Sarplaninac", "Schipperke", "Schnauzer", "Scottish Deerhound", "Scottish Terrier", "Sealyham Terrier", "Setter", "Shar-Pei", "Sheep Dog", "Shepherd", "Shetland Sheepdog / Sheltie", "Shiba Inu", "Shih Tzu", "Siberian Husky", "Silky Terrier", "Skye Terrier", "Sloughi", "Smooth Collie", "Smooth Fox Terrier", "South Russian Ovtcharka", "Spaniel", "Spanish Water Dog", "Spinone Italiano", "Spitz", "Staffordshire Bull Terrier", "Standard Poodle", "Standard Schnauzer", "Sussex Spaniel", "Swedish Vallhund", "Terrier", "Thai Ridgeback", "Tibetan Mastiff", "Tibetan Spaniel", "Tibetan Terrier", "Tosa Inu", "Toy Fox Terrier", "Toy Manchester Terrier", "Treeing Walker Coonhound", "Vizsla", "Weimaraner", "Welsh Springer Spaniel", "Welsh Terrier", "West Highland White Terrier / Westie", "Wheaten Terrier", "Whippet", "White German Shepherd", "Wire Fox Terrier", "Wirehaired Dachshund", "Wirehaired Pointing Griffon", "Wirehaired Terrier", "Xoloitzcuintli / Mexican Hairless", "Yellow Labrador Retriever", "Yorkshire Terrier"];
  for (var i = 0; i < results.length; i++) {
    console.log(results.length);
    for (var l = 0; l < breed.length; l++) {
      var result = results[i].toLowerCase().indexOf(breed[l].toLowerCase()) >= 0;
      if (result) {
        breeds.add(results[i]);
      }
    }
  }
  print(Array.from(breeds));


}
function test() {
  UserAction();
}

function Header() {
  return (
    <header className="App-header">
      <img src={Logo} alt="website logo" />

      <div class="text-center">
        <h1>HAPPY PET</h1>
      </div>
    </header>)
}

function Description() {
  return (
    <div class="description">
      <p>Did you see a cute dog and you want to have the same one? We've got your back! Take a picture of the pet you like,
        drag it to the window below, and we will tell you where you can adopt a similar pet!
      </p>
    </div>)
}

function Drop() {
  return (
    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div class="dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            <p class="text-center">Drag and drop image here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>)
}

function Btn() {
  return (
    <div class="buttons">
      <ButtonToolbar>
        <Button as="input" type="submit" value="Search" onClick={test} />
      </ButtonToolbar>
    </div>)
}

export default Header;
export {
  Description,
  Drop,
  Btn,
}