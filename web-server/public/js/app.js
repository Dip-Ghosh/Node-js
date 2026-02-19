
fetch("http://localhost:3000/weather?address=Dhaka").then((response) =>
    response.json()).then((data) => {
        if (data.error) {
            alert(data.error);
        } else {
            console.log(data)
        }
    }
);