/*can use /category_{category_name}*/
/*can use /group_{group_name}; more precise*/
fetch('https://emojihub.herokuapp.com/api/random/group_food_fruit', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
})
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log("breakfast", json.group);
        const emoji = json.htmlCode[0];
        /*breakfast fruit item*/
        const breakfastSpan = document.getElementById('breakfast');
        breakfastSpan.innerHTML = emoji;
    })
    .catch((error) => {
        console.error(error);
    });

fetch('https://emojihub.herokuapp.com/api/random/group_dishware?', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
})
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log("dish", json.group);
        const emoji = json.htmlCode[0];
        /*dishware or utensil item*/
        const dishSpan = document.getElementById('dish');
        dishSpan.innerHTML = emoji;
    })
    .catch((error) => {
        console.error(error);
    });

fetch('https://emojihub.herokuapp.com/api/random/group_drink', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
})
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log("drink", json.group);
        const emoji = json.htmlCode[0];
        /*drink item*/
        const drinkSpan = document.getElementById('drink');
        drinkSpan.innerHTML = emoji;
    })
    .catch((error) => {
        console.error(error);
    });


    /* 
    
    const meowfactsUrlBuilder = new UrlBuilder('https://meowfacts.herokuapp.com/');
    meowfactsUrlBuilder.addParam('count', '4');
    const meowfactsUrl = meowfactsUrlBuilder.build();
    
    fetch(meowfactsUrl, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
      .then(response => response.json())
      .then(json => {
        for (const catfact of json.data) {
          const paragraph = document.createElement('p');
          paragraph.innerText = catfact;
          document.body.appendChild(paragraph);
        }
      })
      .catch(error => {
        console.error(error);
      });

      */