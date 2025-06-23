const person = {
  firstname: "uthman",
  age: 27,
  profession: "Web Developer"
};

const { firstname, age, profession } = person;

console.log(firstname, age, profession);

const nums = [1,2,3,4,5]

nums.push(6);
console.log(nums);

nums.shift([0]);
console.log(nums);

function evenFilter(array) {
  const evenNumbers = []

  for (i=0; i < array.length; i++) {
    const currentNumber = array[i];
    if (currentNumber % 2 === 0) {
      evenNumbers.push(currentNumber);
    } 
  }

  console.log(evenNumbers);
}

evenFilter([1,2,3,4,5,6]);

function getBoredActivity() {
  fetch("https://www.boredapi.com/api/activity/")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      console.log("Suggested activity:", data.activity);
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

getBoredActivity();
