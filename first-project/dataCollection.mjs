import fs from "fs";


async function getData() {

    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  
    const parsedData = await data.json();
      
    return parsedData;
  
  }

  function createDataFile () {
    fs.writeFileSync("posts.json",data);
  }

  getData().then((data)=>createDataFile(data));