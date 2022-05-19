// 1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

// class Movie {

//     constructor(title, studio, rating = "PG"){
//         this.title=title;
//         this.studio = studio;
//         this.rating = rating;
//     }
// }
// movieArray=[];
// newMovArray =[];
// const movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
// const movie2 = new Movie("The Matrix", "Sony Pictures", "PG");
// const movie3 = new Movie("The Batman", "WB Pictures", "PG");
// movieArray.push(movie1);
// movieArray.push(movie2);
// movieArray.push(movie3);
// getPG(movieArray);
// console.log(newMovArray);

// function getPG(movieArray){
// for ( i=0; i<movieArray.length; i++){
//     if (movieArray[i].rating == "PG"){
//         newMovArray.push(movieArray[i]);
//     }
// }
// }


// 2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md


class Circle {
    radius = 1.0;
    color="red";
   
    constructor(radius, color) {
        this.radius=radius;
        this.color=color;
    };
    getRadius(){
        return this.radius;
    };
    setRadius(setRadius){
        this.radius = setRadius;
    };
    getColor(){
        return this.color;
    };
    setColor(setColor){
        this.color=setColor;
    };

    toString(){
        console.log("Circle [ radius = "+this.radius+", color = "+this.color+"]");
    };

    getArea(){
        return (22/7)*this.radius*this.radius;
    };

    getCircumference(){
        return 2*(22/7)*this.radius;
    };
}

const circle1 = new Circle(7, "red");
console.log(circle1.getRadius());
circle1.setColor("blue");
console.log(circle1.getColor());
circle1.toString();


class Person {

    constructor(name, age, email){
        this.name=name;
        this.age=age;
        this.email=email;
    }
}

const person1 = new Person("Alan", "24", "alanb@yteck.com");
console.log(person1.name);
console.log(person1.age);
console.log(person1.email);
