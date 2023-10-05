fetch("https://jsonplaceholder.typicode.com/todos").then(
  res => {
    res.json().then(
      data => {
        console.log(data);
        if (data.length > 0) {

          var temp = "";
          data.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData.userId + "</td>";
            temp += "<td>" + itemData.id + "</td>";
            temp += "<td>" + itemData.title + "</td>";
          temp += "<td>" + itemData.completed + "</td>";
          });
          document.getElementById('data').innerHTML = temp;
        }
      }
    )
  }
)